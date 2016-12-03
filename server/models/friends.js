var FriendSchema = new mongoose.Schema({
  first_name: {type: String, required: true, minlength: 2},
  last_name: {type: String, required: true, minlength: 2},
  dob: {type: Date, required: true},   
}, {timestemps: true}); //does created_at & updated_at for us

mongoose.model('Friend', FriendSchema);