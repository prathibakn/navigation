'use strict';

angular.module('navigationApp', [])
.config(function ($routeProvider) {
        $routeProvider
            .when('/:selection', {
                templateUrl: 'views/dashboard.html',
                        controller: 'DashboardCtrl'
                        })
            .when('/report/:selection', {
                templateUrl: 'views/report.html',
                        controller: 'DashboardCtrl'
                        })
            .otherwise({
                redirectTo: '/'
                        });
    });
