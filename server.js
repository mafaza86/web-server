var express = require('express');
var app = express();
const port = process.env.PORT || 3000;

var midleware = require('./midleware.js');

app.use(midleware.logger);

app.get('/',function(req,res){
	res.send('bismillah! ');
});

app.get('/about',midleware.requireAuthentication,function(req,res){
	res.send('about us');
	console.log('bismillah about user');
});

// about
app.use(express.static(__dirname+'/public'));
//console.log(__dirname);
app.listen(port,function(){
	console.log('express started port ' + port);
});