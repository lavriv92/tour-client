angular.module('tour')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'modules/home/home.template.html',
      controller: 'homeController'
    });
  }]);
