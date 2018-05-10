const express = require('express');
const bodyParser = require('body-parser');
var FbHubVerify = require('./controllers/verification');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', FbHubVerify);
app.listen(3000,() => console.log('Webhook server is listening on port 3000'));



//EAAfhEc7c1ZCwBAINyv9c54XxVl6mzi1W5M08MKD3HvLQpFt06f9WvEpR8lUFaJJHxKsZBaEb0BssweKZA6zkdnX5iarg8pzvimRIMxAmZC4IucPupCll1l7uaGqrxQDLYZB3sCqVrlIFPplbvYYslNonrOtMPpQUNhGLYZBYq1nAZDZD