angular.module('tour')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'modules/home/home.template.html',
      controller: 'homeController'
    })
    .when('/contacts', {
      templateUrl: 'modules/contacts/contacts.template.html',
      controller: 'contactsController'
    })
    .when('/rules', {
      templateUrl: 'modules/rules/rules.template.html',
      controller: 'rulesController'
    })
    .when('/about', {
      templateUrl: 'modules/about/about.template.html',
      controller: 'aboutController'
    })
    .when('/login', {
      templateUrl: 'modules/login/login.template.html',
      controller: 'loginController'
    })
    .when('/register', {
      templateUrl: 'modules/register/register.template.html',
      controller: 'registerController'
    });
  }]);
