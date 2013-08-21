'use strict';

angular.module('navigationApp')
.controller('DashboardCtrl', function ($scope, $routeParams, $location, $timeout) {
        $scope.selection = $routeParams["selection"];
        $scope.subSelection = 'sub1' + $scope.selection;

        $scope.spinner1=false;
        $scope.spinner2=false;

        $scope.clicked = function(path){
            $location.path(path);
        };

        $scope.compute = function(title){
            if(title.substr(0,4) == 'tab1'){
                $scope.spinner1=true;
            }else{
                $scope.spinner2=true;
            }
            $timeout(function(){
                    if(title.substr(0,4) == 'tab1'){
                        $scope.spinner1 = false;
                    }else{
                        $scope.spinner2 = false;
                    }
                    $scope.selection=title;
                },2000);
        }
        
    });

/* angular.module('navigationApp') */
/* .directive('spinner', function($timeout){ */
/*   return { */
/*     restrict: 'E', */
/*     replace: true, */
/*     scope: { */
/*         ngModel: '=' */
/*     }, */
/*     template: '<div class="spinn"><img src="images/wait.gif" alt="Be patient..." /></div>', */
/*     link: function(scope, element, attrs) { */
/*       $timeout(function(){ */
/*         element.remove(); */
/*       }, 6000); */
/*     } */
/*   } */
/* }); */
