var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	models.Users.findAll().then(function(users){
		res.json({
			users:users
		});
	});
});

router.post('/',function(req,res){
	var obj = JSON.parse(req.body.data);
	
	models.Users.findAll({
		where: {
		    email: obj.username,
		    password: obj.password
		  }
     }).then(function(user){
     	console.log(user);
     	if(user.length == 0){
     		res.json({ authToken: 'Invalid Credentials'});
     	}else{
     		res.json({
     			authToken:'get auth'
     		});
     	} 	
     });
});



module.exports = router;