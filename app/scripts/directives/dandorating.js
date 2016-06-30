'use strict';

/**
 * @ngdoc directive
 * @name yoomanApp.directive:dandoRating
 * @description
 * # dandoRating
 */
angular.module('yoomanApp')
  .directive('dandoRating', function () {
    return {
      restrict: 'A',
      template:
      '<ul class="rating">' + '<li data-ng-repeat="star in stars" ng-class = "{\'active\' : star.filled, \'hovered\' : star.hovered}" data-ng-click="toggle($index)" >'+  '<i class="fa fa-star" aria-hidden="true"></i>' + '</li>'+ '</ul>',
      scope: {
      	ratingValue: '=',
      	max: '=',
        readonly : '@'
      },
      link: function (scope, element, attrs) {
      	var updateStars = function() {
        	scope.stars = [];
	        for(var i =  0; i < scope.max; i++) {
	        	scope.stars.push({filled: i < scope.ratingValue});
	        }
      		// console.log("stars updated");
      	};

      	scope.toggle = function(index)
      	{
          if(scope.readonly && scope.readonly === 'true')
          {
            return;
          }
      		scope.ratingValue = index + 1;
      		console.log("new value", scope.ratingValue);
      	};


      	scope.$watch('ratingValue', function(oldVal, newVal) {
      		if(newVal) {
      			updateStars();
      		}
      	});
      }
    };
  });
