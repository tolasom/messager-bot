
const express = require('express');
const bodyParser = require('body-parser');
var Config = require('./config');
var FbHubVerify = require('./controllers/verification');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/',FbHubVerify);
app.get('/privacy', (req, res, next)=> {
	res.status(200).send(`
		My privacy is so simple :D
	`);
});
app.post('/webhook',(req,res)=>{

	let body = req.body;
	if(body.object === 'page'){

		body.entry.forEach((entry)=>{
			let webhook_event= entry.message[0];
			console.log(webhook_event);
			
			//get sender page-scope id
			let sender_psid=webhook_event.sender_psid;
			console.log('Page-Scope ID'+ sender_psid);
		});
		res.status(200).send(`Event_Recieved`);
	}else
	{
		res.status(404);
	}
});

app.listen(Config.PORT,() => console.log('Webhook server is listening on port '+Config.PORT));



//EAAfhEc7c1ZCwBAINyv9c54XxVl6mzi1W5M08MKD3HvLQpFt06f9WvEpR8lUFaJJHxKsZBaEb0BssweKZA6zkdnX5iarg8pzvimRIMxAmZC4IucPupCll1l7uaGqrxQDLYZB3sCqVrlIFPplbvYYslNonrOtMPpQUNhGLYZBYq1nAZDZD