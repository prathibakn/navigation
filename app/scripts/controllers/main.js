'use strict';

angular.module('navigationApp')
.controller('DashboardCtrl', function ($scope, $routeParams) {
        $scope.selection = $routeParams["selection"];
        $scope.subSelection = 'sub1' + $scope.selection;
    });
