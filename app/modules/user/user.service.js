angular.module('tour')
	.factory('userService', ['$http', function() {
		return {
			done: true,

			login: function (credentials) {
				$http.post('/login').then(function () {

				}, function (errors) {

				});
			}
		};
	}])
