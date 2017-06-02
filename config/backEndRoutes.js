var express = require('express');
var router = express.Router();


var db = require('../models');
var Races = db.models.Races;
var Checkpoints = db.models.Checkpoints;


///////// RACE ROUTES //////////////

router.get('/race', function INDEX(req,res){
	Races.findAll().then(function(rce){
		res.json(rce);
	});
});

router.get('/race/:id', function findONE(req,res){
	Races.findById(req.params.id).then(function(rce){
		res.json(rce);
	});
});

router.post('/race', function CREATE(req,res){
	Races.create(req.body).then(function(rce){
		console.log(rce);
		res.json(rce);
	});
});

router.put('/race/:id', function UPDATE(req,res){
	Races.findById(req.params.id).then(function(rce){
		console.log(rce);
		return rce.updateAttributes(req.body);
	})
	.then(function(rce){
		res.json(rce);
	});
});

router.delete('/race/:id', function DESTROY(req,res){
	Races.findById(req.params.id).then(function(rce){
		res.json(rce);
		return rce.destroy();
	});
});

///////// CHECKPOINTS ROUTES //////////////

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