var express = require('express');
var app= express();
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

function handleMessage(sender_psid,recieved_message){}
function handlePostback(sender_psid,recieved_postback){}
function callSendAPI(sender_psid,response){}
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


	}else{
		res.status(404);
	}
});