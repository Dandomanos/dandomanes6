'use strict';

/**
 * @ngdoc function
 * @name yoomanApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the yoomanApp
 */
angular.module('yoomanApp')
  .controller('ContactCtrl',['$scope', 'data', '$rootScope', '$timeout', function ($scope, data, $rootScope, $timeout) {

  	$scope.message = "Loading...";
    $scope.rating = {};
    $scope.rating.rate = 5;
    $scope.rating.max = 5;
    $scope.newPost = new data.getComments();
    $scope.mediaRating = 0;
    $scope.formVisible = false;
    $scope.commentsVisible = false;

    $scope.toggleForm = () => $scope.formVisible = !$scope.formVisible;

    $scope.toggleComments = () => $scope.commentsVisible = !$scope.commentsVisible;

  	$scope.data = { name: "", phone: "", email:"", comment:"", rating:$scope.rating.rate };

    $scope.loadTexts = () => {
      $scope.dataForm = data.getContact().get(
      function(success) {
        $scope.dataForm = success;
        console.log("dataForm", success);
      },
      function(error) {
        $scope.message = `Error: ${error.text} ${error.statusText}`;
        console.log("Error", $scope.message);
      });
    }

    $scope.loadTexts();
  	

  	$scope.sendComment = () => {

      $scope.data.rating=$scope.rating.rate;
      console.log("Sending Data", $scope.data);
      $scope.newPost.comment = $scope.data;
      data.getComments().save($scope.newPost.comment, data => {
          console.log(data, `comment posted with id ${data.id}`);
          $scope.comments.push(data);
          $scope.data = { name: "", phone: "", email:"", comment:"", rating:$scope.rating.rate };
          $scope.formVisible = false;
          $scope.calculateMedia();
      });
  	};

    
    var loadComments = () => {
    $scope.comments = data.getComments().query(
      success => {
        console.log("comments", success);
        $scope.comments = success;
        $scope.calculateMedia();
      },
      error => {
        $scope.message = `Error: ${error.status} - ${error.text} - ${error.statusText}`;
        console.log("Error", $scope.message);
      });
  };

  loadComments();


    $scope.$watch($scope.comments, newVal => {
            console.log("comment update from watcher");
            loadComments();
        });

    $scope.delete = (ID, index) => {
      console.log("Delete", ID);
      data.getComments().delete(
        {id:ID},
        success => {
          console.log("comment deleted", success);
          $scope.comments.splice(index, 1);
          $scope.calculateMedia();
        },
        error => { console.log(error, `Error: ${error.status} - ${error.text} - ${error.statusText}`);}
        );
    };


    $scope.calculateMedia = () =>
    {
      if($scope.comments.length<1) {
        $scope.mediaRating = 0;
        $scope.mediaPercent = 0;
        return;
      }
      var count = 0;
       for(let i=0; i<$scope.comments.length; i++)
       {
          count += $scope.comments[i].rating;
       }
       $scope.mediaRating = count/$scope.comments.length;
       $scope.mediaPercent = $scope.mediaRating/$scope.rating.max*100;
       console.log("Media Rating", $scope.mediaRating);
       console.log("Percent Rating", $scope.mediaPercent);
    };

    $rootScope.$watch('language', newValue  => {
            console.log(`language updated to ${newValue} reloading contact Texts`);
            $scope.loadTexts();
          });
    
  }]);
