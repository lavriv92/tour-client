angular.module('tour')
  .factory('planService', ['$http', function ($http) {
    return {
      all: function () {
        return $http.get('http://192.168.99.100:8000/account/plans/');
      }
    }
  }]);
