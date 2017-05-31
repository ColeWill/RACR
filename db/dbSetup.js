var DB = require('../models');

console.log('Prepping the database...');
DB.sequelize.sync({force:true}).then(function(){
	process.exit();
});