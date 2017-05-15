var express 	= require('express');
var app     	= express();
var bodyParser 	= require('body-parser');
var port    	= process.env.PORT || 8082;

app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.send('Witaj, świecie!');
});

app.post('/webhook', function(req, res) {
	console.log(req.body);
	res.send('');
});

app.listen(port);

console.log('Serwer Express nasłuchuje na porcie ' + port);



