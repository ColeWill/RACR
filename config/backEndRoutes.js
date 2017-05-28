var express = require('express');
var router = express.Router();


var db = require('../models');
var Checkpoints = db.models.Checkpoints;




router.get('/checkpoints', function INDEX(req,res){
	console.log('/checkpoints');
	Checkpoints.findAll().then(function(ckp){
		res.json(ckp);
	});
});

router.get('/checkpoints/:id', function findONE(req,res){
	Checkpoints.findById(req.params.id).then(function(ckp){
		res.json(ckp);
	});
});

router.post('/checkpoints', function CREATE(req,res){
	Checkpoints.create(req.body).then(function(ckp){
		console.log(ckp);
		res.json(ckp);
	});
});

router.put('/checkpoints/:id', function UPDATE(req,res){
	Checkpoints.findById(req.params.id).then(function(ckp){
		console.log(ckp);
		return ckp.updateAttributes(req.body);
	})
	.then(function(ckp){
		res.json(ckp);
	});
});

router.delete('/checkpoints/:id', function DESTROY(req,res){
	Checkpoints.findById(req.params.id).then(function(ckp){
		res.json(ckp);
		return ckp.destroy();
	});
});



module.exports = router;