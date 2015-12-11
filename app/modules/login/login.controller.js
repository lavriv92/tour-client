angular.module('tour')
	.controller('loginController', ['$scope', '$rootScope', function($scope, $rootScope) {

		$scope.login = function() {
			$scope.user = {
				first_name: 'First',
				last_name: 'Last'
			};

			$rootScope.$broadcast('tour:userChanged', function() {});

		};
	}]);