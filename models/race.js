module.exports = function(sequelize,Sequelize){
	var model = sequelize.define("races",{
		
		name: Sequelize.STRING
	});
	return model;
};