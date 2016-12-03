app.controller('showController', function($scope, FriendsFactory, $routeParams, $location){

	$scope.show = function (id){
		FriendsFactory.show(id)
		.then (function(serverResponse){
			$scope.friend = serverResponse.data;
		})
	}

	$scope.show($routeParams.id);
	console.log($routeParams.id);


/*
	
	$scope.show = function(friendId){
		FriendsFactory.show(friendId, function(friends){
			$scope.friends = friends;
		})
	}*/
})
