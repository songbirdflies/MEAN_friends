//console.log('friends controller');
var Friend = mongoose.model('Friend');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below


module.exports = (function() {
  return {
    index: function(req, res){
      console.log("Showing Index!");
      Friend.find({}, function (err, friends){
      if(err){
        console.log(err);
      }
      else{
        console.log(friends);
        res.json(friends);
        }
      })
    },

    create: function(req, res){
      console.log("Friend Created!");
      var friend = new Friend(req.body);
      friend.save(function(err){
        if (err){
          console.log(err)
        }
        else {
          res.redirect('/friends');
        }
      })
    },

    show: function(req, res){
      console.log("Showing Individual Friend");
      Friend.findById({_id: req.params.id}, function(err, friend){
        if(err){
          console.log(err);
        }
        else{
          res.json(friend);
          console.log(friend)
        }
      })
    },

   edit: function(req, res){
      console.log("Edited Friend!");
      Friend.update({_id:req.params.id}, 
      {first_name: req.body.first_name, last_name: req.body.last_name, dob: req.body.dob}, 
      function(err, friend){
        if (err){
          console.log(err);
        }
        else {
          res.json(friend);
        }
      })
    },

    update: function(req, res){
      console.log("Updated Friend!");
      Friend.update({_id:req.params.id}, 
      {first_name: req.body.first_name, last_name: req.body.last_name, dob: req.body.dob}, 
      function(err, friend){
        if (err){
          console.log(err);
        }
        else {
          res.json(friend);
        }
      })
    },

    /*      Friend.findByIdAndUpdate(req.params.id, 
        {$set: {first_name: req.body.first_name}, 
          {last_name: req.body.last_name},
          {dob: req.body.dob}},
          function(err, friend){
            if(err){
              console.log(err);
            }
            else {
              res.redirect('/friends')
            }
          })*/

    destroy: function(req, res){
      console.log("Destroyed Friend :(");
      Friend.findByIdAndRemove(req.params.id, function(err){
        if(err){
          console.log(err);
        }
        else {
          res.redirect('/friends');
        }
      })
    }

  } //close return
})();