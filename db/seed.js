

var DB = require('../models').models;

console.log('seed twerking');

var samplePointsArray = [
	{
		latitude: 44,
		longitude: -33,
		isStart: true,
		isFinish: false,
		img_url: null,
		racrID: null,
		raceID: null
	},
	{
		latitude: "39.738467",
		longitude: "-104.99026",
		isStart: false,
		isFinish: false,
		img_url: "https://s3-media3.fl.yelpcdn.com/bphoto/rI8JslEM0NhUb9R3o6zlXw/o.jpg",
		racrID: null,
		raceID: null
		
	},
	{
		latitude: "39.697186",
		longitude: "-105.035615",
		isStart: false,
		isFinish: false,
		img_url: "https://roaminghunger.com/img/trucks/original/6288/58090c25-1c38-4c2f-8a30-462a46204482.JPG",
		racrID: null,
		raceID: null
	},
	{
		latitude: "39.762261",
		longitude: "-105.006422",
		isStart: false,
		isFinish: false,
		img_url: "https://roaminghunger.com/img/trucks/original/4dc62333-60ec-4946-b8a9-6c2c46204482.jpg",
		racrID: null,
		raceID: null
	},
	{
		latitude: "39.751634",
		longitude: "-105.003005",
		isStart: false,
		isFinish: true,
		img_url: "https://roaminghunger.com/img/trucks/original/4e383a7a-f3a4-42c6-8ea7-595646204482.jpg",
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