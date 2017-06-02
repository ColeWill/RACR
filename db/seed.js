
console.log('seed twerking');
var DB = require("../models").models;
// pulls in Races + Checkpoints models...

var checkPointsArray = [
	{lat:'39.6169795',lng:'-105.01706759999999'},
	{lat:'39.61686088457503',lng:'-105.01788139343262'},
	{lat:'39.6168939433567',lng:'-105.0161862373352'}
];


// var raceCreate = function() {
// 	return DB.Races.create({
//     name: 'Ricky Bobby'
// 	}).then(function(race) {
// 		artistCreate(manager.id);
// 		adCreate(manager.id);
// 	});
// };

var raceCreate = function() {
	return DB.Races.create({
    
    name: 'Trail of Tears'
    
  	}).then(function(race) {
  		console.log('race: '+race);
  		checkPointsArray.forEach(function(ckp, i) {
  		console.log(checkPointsArray[i]);
  		ckp.raceId = race.id;
  	})
  	DB.Checkpoints.bulkCreate(checkPointsArray);
  	console.log('ckps added');
  });
};



// var pointsCreate = function() {
// 	return DB.Checkpoints.create({
// 	    lat:'39.6169795',lng:'-105.01706759999999',
// 	});
// };

raceCreate()
.then(function() {
	process.exit();
});