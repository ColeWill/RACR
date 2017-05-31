module.exports = function(sequelize,Sequelize){
	var Checkpoints = sequelize.define('checkpoint',{

	
	latitude: Sequelize.STRING,
	longitude: Sequelize.STRING,
	racrID: Sequelize.STRING,
	raceID: Sequelize.STRING
	
});
	return Checkpoints;
};

// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var CheckpointSchema = new Schema({
// 	latitude: Number,
// 	longitude: Number,
// 	isStart: Boolean,
// 	isFinish: Boolean
// });

// var Checkpoint = mongoose.model('Checkpoint', CheckpointSchema);

// module.exports = Checkpoint;