var express = require('express');
var router = express.Router();


var db = require('../models');
var Checkpoints = db.models.Checkpoints;

router.get('api/checkpoints', function getCheckpoints(){
	Checkpoints.findAll().then(function(ckp){
		res.json(ckp);
	});
});

module.exports = router;