angular.module('appRACR',[])
.controller('ChecksIndexController',ChecksIndexController);


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
}
