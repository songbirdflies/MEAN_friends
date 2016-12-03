app.controller('newController', function(FriendsFactory, $scope, $location){
	$scope.friends = [];

	FriendsFactory.index(function(friends){
		$scope.friends = friends;
	});

	$scope.create = function(){
		//does this need a callback in PlayerFactory.create?
		FriendsFactory.create($scope.newFriend, function(friends){
			$scope.friends= friends;
		})
			$scope.newFriend= {};
			$location.path('/');
	}

	$scope.destroy = function(friendId){
		FriendsFactory.destroy(friendId, function(friends){
			$scope.friends = friends;
		})
	}


})
