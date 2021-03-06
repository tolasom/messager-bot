var express = require('express');
const request= require('request');
var app= express();
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

function handleMessage(sender_psid,recieved_message){
	let response;
	//check if the message contain text
	if(recieved_message.text){
		//create payload for basic text message
		response= {
			"text" : ` You sent the message: "${recieved_message.text}". Now send me an image!`
		}
	}
	//send the response message
	callSendAPI(sender_psid,response);
}
function handlePostback(sender_psid,recieved_postback){}
function callSendAPI(sender_psid,response){
	let request_body = {
		"recipient":{
			"id": sender_psid
		},
		"message": response
	}
	//send HTTP request to Messager Platform
	request({
		"uri":"https://graph.facebook.com/v2.6/me/messages",
		"qs":{"access_token": PAGE_ACCESS_TOKEN},
		"method" : "POST",
		"json" : request_body
	}, (err,res,body)=>{
		if(!err){
			console.log('message send!')
		}else{
			console.log('unnable to send message:'+ err);
		}
	});


app.post('/webhook',(req,res,next)=>{
	let body = req.body;
	if(body.object==='page'){
		body.entry.forEach(function(entry){
			let webhook_event= entry.messaging[0];
			console.log(webhook_event);
			res.status(200).send(`EVENT_RECIEVED`);
			let sender_psid= webhook_event.sender.id;
			console.log('Sender PSID'+sender_psid);

			if(webhook_event.message){
			handleMessage(sender_psid,webhook_event.message);
			}else if(webhook_event.postback){
			handlePostback(sender_psid,webhook_event.postback);
			}
		});
	}
	else{
		res.status(404);
	}
});