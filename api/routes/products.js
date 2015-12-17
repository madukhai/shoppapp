var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	//code for retrieving products
	console.log('get');
	models.Products.findAll().then(function(products){
		// console.log(products);
		res.json(products);
	});
});

router.put('/',function(req,res){
	//code for add products
	product_obj = req;
	console.log(product_obj);
	models.Products.create({
		name: product_obj.name,
		description: product_obj.description,
		price: product_obj.price,
		categroy: product_obj.categroy,
		quantity: product_obj.quantity,
		status: product_obj.status
	})
	.then(function(products){
		res.json({
			products:products
		});
	});
});

router.post('/:productid',function(req,res){
	//code for edit products
	console.log('post');
	models.Products.update(                  ).then(function(products){
		res.json({
			products:products
		});
	});
});

router.delete('/:productid',function(req,res){
	//code for delete products
	console.log('delete');
	models.Products.destroy(                 ).then(function(products){
		res.json({
			products:products
		});
	});
});

module.exports = router;