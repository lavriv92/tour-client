angular.module('tour')
	.controller('loginController', ['$scope', '$rootScope', function($scope, $rootScope) {

		$scope.login = function(username, password) {
			$scope.user = {
				firstName: 'First',
				lastName: 'Last'
			};

			$rootScope.$broadcast('tour:userChanged', $scope.user);

		};
	}]);