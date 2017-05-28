var Sequelize = require('sequelize');

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

var Checkpoints = sequelize.import('./checkpoint.js');

module.exports.models = {
	Checkpoints: Checkpoints
};


