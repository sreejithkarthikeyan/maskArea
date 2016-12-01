
/*
sreejithks
sreeksleo@gmail.com
2016

*maskArea jQuery Plugin under Angular.js Directive 
*/      
var App = angular.module('maskArea', []);

App.directive('maskArea', function() {
    return {
        restrict: 'A',
        scope: {
            
                    bgImage  :'=',
                    maskerImage  :'=',
                    width:'=',
                    height:'=',
                    maskerWidth  :'=',
                    maskerHeight :'='
               
             },
        link: function(scope, element, attrs) {
                    
          $(element).maskArea(scope.$eval(attrs.maskArea));
       
        }
    };
});

