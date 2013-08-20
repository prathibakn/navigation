'use strict';

angular.module('navigationApp')
.controller('DashboardCtrl', function ($scope, $routeParams) {
        $scope.selection = $routeParams["selection"];
        $scope.sub_selection = 'tab1';
    });
