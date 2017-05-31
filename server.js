require('dotenv').config();
var express = require('express');
var app = express();
var router = express.Router();
var racrRouter = require('./config/backEndRoutes.js');
var bodyParser = require('body-parser');


console.log(process.env.MAPBOX);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(racrRouter);

app.use(express.static('public'));

app.get('/', function(req,res){
	res.sendFile(__dirname + 'public/index.html');
	// res.sendFile(__dirname + '/src/index.html');
});



app.listen(process.env.PORT || 3000, function(){
	console.log('RCR serving on localhost:3000');
});

