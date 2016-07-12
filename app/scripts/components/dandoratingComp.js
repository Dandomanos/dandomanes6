'use strict';

/**
 * @ngdoc function
 * @name yoomanApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the yoomanApp
 */

angular.module('yoomanApp')
  .component("dandoratingComp",{
      template: '<h2>{{about.title}}!</h2>',
      bindings: {
      	ratingValue: '=',
      	max: '=',
        readonly : '@'
      },
      controller: () => {
      	var scope = this;
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


      	// scope.$watch('ratingValue', (oldVal, newVal) => {
      	// 	if(newVal) {updateStars();}
      	// });
      }
  });
