'use strict';

/**
 * @ngdoc function
 * @name yoomanApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the yoomanApp
 */

class ContactCtrl {
  constructor(data, $rootScope, $scope)
  {
    this.DATA = data;
    this.root = $rootScope;
    this.scope = $scope;

    this.message = "Loading...";
    this.rating = {rate : 5, max:5};
    this.newPost = new this.DATA.getComments();
    this.mediaRating = 0;
    this.formVisible = false;
    this.commentsVisible = false;

    this.data = { name: "", phone: "", email:"", comment:"", rating:this.rating.rate };


    //watchers
    this.scope.$watch(this.comments, () => {
            console.log("comment update from watcher");
            this.loadComments();
        });

    this.root.$watch('language', newValue  => {
            console.log(`language updated to ${newValue} reloading contact Texts`);
            this.loadTexts();
          });
  }

  toggleForm() { this.formVisible = !this.formVisible;}

  toggleComments() { this.commentsVisible = !this.commentsVisible; }

  loadTexts() {
    this.dataForm = this.DATA.getContact().get(
      success => {
        this.dataForm = success;
        console.log("DATA Form", this.dataForm);
      },
      error => {
        this.message = `Error: ${error.text} ${error.statusText}`;
        console.log("Error", this.message);
      });
  }

  sendComment() {
    this.data.rating = this.rating.rate;
    console.log("Sending Data", this.data);
    this.newPost.comment = this.data;
    this.DATA.getComments().save(this.newPost.comment, data => {
      console.log(data, `comment posted with id ${data.id}`);
      this.comments.push(data);
      this.data = { name: "", phone: "", email:"", comment:"", rating:this.rating.rate };
      this.formVisible = false;
      this.calculateMedia();
    });
  }

  loadComments() {
    this.comments = this.DATA.getComments().query(
      success => {
        console.log("comments", success);
        this.comments = success;
        this.calculateMedia();
      },
      error => {
        this.message = `Error: ${error.status} - ${error.text} - ${error.statusText}`;
        console.log(this.message);
      });
  }

  delete(ID, index) {
    this.DATA.getComments().delete(
      {id:ID},
      success => {
        console.log("comment deleted", success);
        this.comments.splice(index, 1);
        this.calculateMedia();
      },
      error => {
        this.message = `Error: ${error.status} - ${error.text} - ${error.statusText}`;
        console.log(this.message);
      });
  }

  calculateMedia() {
    if(this.comments.length<1)
    {
      this.mediaRating = 0;
      this.mediaPercent = 0;
      return;
    }
    var count = 0;
    for(let i=0; i<this.comments.length; i++)
    {
      count += this.comments[i].rating;
    }
    this.mediaRating = count/this.comments.length;
    this.mediaPercent = this.mediaRating/this.rating.max*100;
    console.log("Media Rating", this.mediaRating);
    console.log("Percent Rating", this.mediaPercent);
  }

}

ContactCtrl.$inject = ['data', '$rootScope', '$scope'];

angular.module('yoomanApp')
      .controller('ContactCtrl', ContactCtrl);