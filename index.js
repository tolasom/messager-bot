var express = require('express');
var bodyParser = require('body-parser');
var Config = require('./config');
var FbHubVerify = require('./controllers/verification');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/',FbHubVerify);
app.get('/privacy', (req, res, next)=> {
	res.status(200).send(`
		My privacy is so simple :D
	`);
});

app.listen(Config.PORT,() => console.log('Webhook server is listening on port '+Config.PORT));



//EAAfhEc7c1ZCwBAINyv9c54XxVl6mzi1W5M08MKD3HvLQpFt06f9WvEpR8lUFaJJHxKsZBaEb0BssweKZA6zkdnX5iarg8pzvimRIMxAmZC4IucPupCll1l7uaGqrxQDLYZB3sCqVrlIFPplbvYYslNonrOtMPpQUNhGLYZBYq1nAZDZD