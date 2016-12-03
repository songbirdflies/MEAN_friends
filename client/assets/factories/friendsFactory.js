app.factory('FriendsFactory', function ($http){
     var factory = {};

     factory.index = function(callback){
      $http.get('/friends').success(function(friends){
        callback(friends);
      })
     }

/*    factory.show = function(friendId, callback){
      $http.get(friendId).success(function(friend){
        callback(friend);
      })
     }

    //does update use friendId or friend_info?
    factory.update = function(friendId, callback){
      $http.post(friendId+'/edit').success(function(friends){
        callback(friends);
      })
     }
*/

     factory.show = function(id){
      return $http.get(id);
     }
      
      factory.update = function(id, friend){
       return $http.post(id +'/update', friend);
      }

      factory.edit = function(friend_id, callback){
       $http.put(friend_id +'/edit').success(function(friend){
        callback(friend);
       })
      }


      factory.create = function(friend_info, callback){
       $http.post('/friends', friend_info).success(function(friends){
        callback(friends);
       })
      }

      factory.destroy = function(friendId, callback){
        $http.post('/friends/'+friendId+'/destroy').success(function(friends){
        callback(friends);
      })
    }

      return factory;
})