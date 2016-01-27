angular.module('tour')
  .controller('homeController', ['$scope', 'planService', function ($scope, planService) {
    planService.all().then(function (resp) {
      $scope.plans = resp.plans;
    });
  }]);
