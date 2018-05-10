require('dotenv').config();

var config = {};

config.NODE_ENV = process.env.NODE_ENV;
config.PORT = process.env.PORT;

module.exports = config;