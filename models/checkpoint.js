module.exports = function(sequelize,Sequelize){
	var model = sequelize.define("checkpoints",{

	
	lat: Sequelize.STRING,
	lng: Sequelize.STRING
	
});
	return model;
};

