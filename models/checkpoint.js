module.exports = function(sequelize,Sequelize){
	var Checkpoints = sequelize.define('chekpoint',{

	latitude: Sequelize.STRING,
	longitude: Sequelize.STRING,
	isStart: Sequelize.boolean,
	isFinish: Sequelize.boolean,
});
	return Checkpoints;
};
