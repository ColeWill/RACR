

var DB = require('../models').models;

console.log('seed twerking');

var samplePointsArray = [
	{
		latitude: 44,
		longitude: -33,
		
		racrID: null,
		raceID: null
	},
	{
		latitude: "39.738467",
		longitude: "-104.99026",
		racrID: null,
		raceID: null
		
	},
	{
		latitude: "39.697186",
		longitude: "-105.035615",
		racrID: null,
		raceID: null
	},
	{
		latitude: "39.762261",
		longitude: "-105.006422",
		racrID: null,
		raceID: null
	},
	{
		latitude: "39.751634",
		longitude: "-105.003005",
		racrID: null,
		raceID: null
	}
	
];

function pointsCreate(){
	return DB.Checkpoints.bulkCreate(samplePointsArray);
}

pointsCreate()
	.then(function(){
		process.exit();
	});