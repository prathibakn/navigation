'use strict';

var app = angular.module('navigationApp', []);
app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
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
