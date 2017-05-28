var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://AllieG@localhost:5432/racr');


if (process.env.DATABSE_URL) {
	sequelize = new Sequelize(process.env.DATABSE_URL, {
		dialect: 'postgres',
		protocol: 'postgres',
		logging: true 
	}) 
} else {
	var sequelize = new Sequelize('postgres://AllieG@localhost:5432/racr');
} 

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;


// a RACR has one or many races
// race has one or many checkpoints
// checkpoints have 

Checkpoints.belongsTo(races);
