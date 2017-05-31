console.log('/js/controllers/checksController.js');
angular.module('RCR',[])
.controller('ChecksController',ChecksController);
// .controller('MapOnPageController', MapOnPageController);


// MapOnPageController.$inject = ['$http','$scope'];
// function MapOnPageController($http,$scope){
// 	var self = this;
// 	$scope.checkpoints= [];
// 	$scope.markers = [];
// }
///// get all the checkpoints
ChecksController.$inject = ['$http'];
function ChecksController($http){

	console.log('inside the controller...');
	// var self = this;
	// self.all = [];
	// self.newCard = {};
	// self.getAllChecks = getAllChecks;
	// // self.removeCard = removeCard;
	// // self.addNew = addNew;
	
	


	// function getAllChecks(){
	// 	$http
	// 	.get('/checkpoints')
	// 	.then(function(res){
	// 		// $scope.checkpoints = res.data;
	// 		self.all = res.data;
	// 		console.log("got the checkpoints: ");
	// 		console.log(self.checkpoints);
	// 	});
	// }
	// getAllChecks();


	// function addNew (){
	// 	console.log('making a new card: '+self.newCard);
	// 	$http
	// 	.post('/checkpoints', self.newCard)
	// 	.then(function(res){
	// 		console.log(res.data);
	// 		getCards();
	// 	});	
	// 	self.newC = {};
	// }

}
