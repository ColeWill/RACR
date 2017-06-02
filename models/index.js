var Sequelize = require('sequelize');

if (process.env.DATABSE_URL) {
	sequelize = new Sequelize(process.env.DATABSE_URL, {
		dialect: 'postgres',
		protocol: 'postgres',
		logging: true 
	}) 
} else {
	var sequelize = new Sequelize('postgres://AllieG@localhost:5432/rcr');
} 

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

var Checkpoints = sequelize.import('./checkpoint.js');
var Races = sequelize.import('./race.js');


Checkpoints.belongsTo(Races);
Races.hasMany(Checkpoints, { foreignKey: 'raceId' , foreignKeyConstraint:true });

module.exports.models = {
	Checkpoints: Checkpoints,
	Races: Races
};


