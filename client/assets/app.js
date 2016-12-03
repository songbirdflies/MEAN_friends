var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!
	$routeProvider
	.when('/', {
		templateUrl: '/partials/friends.html'
	})
	.when('/new', {
		templateUrl: '/partials/new.html'
	})
	.when('/:id/update', {
		templateUrl: '/partials/edit.html'
	})
	.when('/:id/edit', {
		templateUrl: '/partials/edit.html'
	})
	.when('/:id', {
		templateUrl: '/partials/show.html'
	})
	.otherwise({
		redirectTo: '/friends'
	})


});