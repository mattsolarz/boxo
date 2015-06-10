var app = angular.module('boxoffice', []);

app.controller('mainController', [
	'$scope',
	'posts',
	function($scope, posts) {
		$scope.posts = posts.posts;
	}]
);

app.factory('posts', [function() {
	var o = {
		posts: []
	};
	return o;
}]);
