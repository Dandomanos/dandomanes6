'use strict';

/**
 * @ngdoc directive
 * @name yoomanApp.directive:dandoRating
 * @description
 * # dandoRating
 */
angular.module('yoomanApp')
  .directive('dandoRating', () => {
    return {
      restrict: 'A',
      template:
      '<ul class="rating">' + '<li data-ng-repeat="star in stars" ng-class = "{\'active\' : star.filled, \'hovered\' : star.hovered}" data-ng-click="toggle($index)" >'+  '<i class="fa fa-star" aria-hidden="true"></i>' + '</li>'+ '</ul>',
      scope: {
      	ratingValue: '=',
      	max: '=',
        readonly : '@'
      },
      link: scope => {
      	var updateStars = () => {
          // console.log("updating values");
        	scope.stars = [];
	        for(let i =  0; i < scope.max; i++) {
	        	scope.stars.push({filled: i < scope.ratingValue});
	        }
      	};

      	scope.toggle = index =>
      	{
          if(scope.readonly && scope.readonly === 'true')
          {
            return;
          }
      		scope.ratingValue = index + 1;
      		// console.log("new value", scope.ratingValue);
      	};


      	scope.$watch('ratingValue', (oldVal, newVal) => {
      		if(newVal) updateStars();
      	});
      }
    };
  });
