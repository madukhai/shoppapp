var models = require('./models');
var bodyParser = require('body-parser');
var express = require('express');

//initilze requirements
var routes = require('./routes');
var user_routes = require('./routes/users');
var product_routes = require('./routes/products');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + './../app/'));

app.use('/api/users',user_routes);
app.use('/api/products',product_routes);

models.sequelize.sync().then(function(){
	app.listen(8082,function(){
		console.log('Listening on http://127.0.0.1:8082');
		console.log('Stop Server With CTRL + C');
	});
})