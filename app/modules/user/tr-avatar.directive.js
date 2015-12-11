angular.module('tour')
	.directive('trAvatar', ['$rootScope', function($rootScope) {
		return {
			restrict: 'E',
			templateUrl: 'modules/user/tr-avatar.template.html',
			link: function(scope) {

				function restoreLoggedIn (user) {
					scope.user =  user || $rootScope.user || null;	
					scope.$applyAsync();
				}

				restoreLoggedIn();

				$rootScope.$on('tour:userChanged', function(e, user) {
					restoreLoggedIn(user);
					scope.$applyAsync();
				});

				scope.logOut = function() {
					$rootScope.user = null;
					$rootScope.$broadcast('tour:userChanged', null);
				};
			}
		}
	}]);