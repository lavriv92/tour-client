angular.module('tour')
  .controller('homeController', ['$scope', function ($scope) {
    $scope.plans = [{
      id: 1,
      name: 'Free',
      price: 0
    }, {
      id: 2,
      name: 'Premium',
      price: 5
    }, {
      id: 3,
      name: 'Business',
      price: 20
    }];
  }]);
