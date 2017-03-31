//variables
var express = require('express');
var app = express();
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var helmet = require('helmet');
//middleware
app.use(morgan('combined'));
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
//routes
app.get('/', function(req, res){
	res.json({message: 'Hello World'});
})
//turn on server
app.listen(3000);
module.exports = app;