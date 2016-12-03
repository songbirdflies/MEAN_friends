var friends = require('../controllers/friends.js');

module.exports = function (app) {
	
	app.get('/friends', friends.index);
	app.get('/:id', friends.show);
	app.post('/friends', friends.create);
	app.post('/:id/update', friends.update);
	app.put('/:id/edit', friends.edit);
	app.post('/friends/:id/destroy', friends.destroy);

}