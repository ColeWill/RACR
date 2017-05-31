angular.module('appRACR',[])
.controller('ChecksIndexController',ChecksIndexController);
// .controller('MapOnPageController', MapOnPageController);


// MapOnPageController.$inject = ['$http','$scope'];
// function MapOnPageController($http,$scope){
// 	var self = this;
// 	$scope.checkpoints= [];
// 	$scope.markers = [];
// }
///// get all the checkpoints
ChecksIndexController.$inject = ['$http','$location','$scope'];
function ChecksIndexController($http,$location,$scope){
	function getAllChecks(){
		$http
		.get('/checkpoints')
		.then(function(res){
			$scope.checkpoints = res.data;
			console.log("got the checkpoints: ");
			console.log($scope.checkpoints);
		});
	}
	getAllChecks();

// 	 var map;
// function initMap() {
// 	var uluru = {lat:-25.363, lng:131.044}; 
//   	map = new google.maps.Map(document.getElementById('map'), {
//     center: uluru,
//     zoom: 4
//   });
//   	var marker = new google.maps.Marker({
//   		position:uluru,
//   		map:map
//   	});	
// }

}
