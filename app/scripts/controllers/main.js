'use strict';

// Nav Properties service
angular.module('navigationApp')
.service('navProp', function(){
        var selection='tab1';
        var comp = {tab1: false, tab2: false};
        return{
                getComputed: function(key){
                return comp[key];
            },
                setComputed: function(key,val){
                comp[key] = val;
            },
                set: function(val){
                comp=val;
            },
                setSelect: function(title){
                selection=title;
            },
                getSelect: function(){
                return selection;  
            }
        }
    });

angular.module('navigationApp')
.controller('DashboardCtrl', function ($scope, $routeParams, $location, $timeout, navProp) {
        if($routeParams['selection'] !== undefined){
            $scope.selection = $routeParams['selection'];
            $scope.subSelection = 'sub1' + $scope.selection.substr(0,4);
        }
        $scope.spinner1=false;
        $scope.spinner2=false;

        $scope.tabValue = function(title){
            return (navProp.getComputed(title)==true) ? title+'Computed' : title;
        }
        $scope.select = function(title){
            navProp.setSelect(title);
        }
        $scope.selected = function(){
            return navProp.getSelect();
        }
        $scope.clicked = function(path){
            $location.path(path);
        };
        $scope.reset = function(){
            navProp.set({tab1: false, tab2: false});
            $scope.select('tab1');
        };
        $scope.compute = function(title){
            if(title.substr(0,4) == 'tab1'){
                navProp.setComputed('tab1',true);
                $scope.spinner1=true;
            }else{
                navProp.setComputed('tab2',true);
                $scope.spinner2=true;
            }
            $timeout(function(){
                    if(title.substr(0,4) == 'tab1'){
                        $scope.spinner1 = false;
                    }else{
                        $scope.spinner2 = false;
                    }
                    $scope.select(title);
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
