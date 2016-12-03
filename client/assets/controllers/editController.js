app.controller('editController', function($scope, FriendsFactory, $routeParams, $location){

	var id = $routeParams.id;
	$scope.friend = {};

	FriendsFactory.show(id)
		.then(function(serverResponse){
			$scope.friend = serverResponse.data;
		});


	$scope.update = function (){
		FriendsFactory.update(id, $scope.friend)
		.then( function(){
			$location.path('/');
		})
	}

/*		$scope.edit = function(friendId){
		FriendsFactory.edit(friendId, function(friends){
			$scope.friends = friends;
		})
	}
*/


	console.log($scope);
/*
	
	$scope.show = function(friendId){
		FriendsFactory.show(friendId, function(friends){
			$scope.friends = friends;
		})
	}*/
})