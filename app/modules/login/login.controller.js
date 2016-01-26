angular.module('tour')
	.controller('loginController', ['$scope', '$rootScope', function($scope, $rootScope) {

		$scope.login = function(username, password) {

			var name = username.split(' ');

			$scope.user = {
				firstName: name[0],
				lastName: name[1] || 'Last'
			};

			$rootScope.$broadcast('tour:userChanged', $scope.user);
		};
	}]);