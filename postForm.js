"use strict";

{
  const postForm = {
    bindings: {
      onSubmit: "&"
    },

    template: `
    <button ng-click="$ctrl.showForm();">New Thought</button>
    <form ng-submit="$ctrl.onSubmit($ctrl.newPost);" ng-show="$ctrl.show">
      <h4>New Post</h4>
      <label>Title</label>
      <input type="text" placeholder="Title" ng-model="$ctrl.newPost.title" expand>
      <label>Thought</label>
      <textarea type="text" placeholder="Content" ng-model="$ctrl.newPost.content" expand></textarea>
      <button ng-click="$ctrl.onSubmit({newPost: $ctrl.newPost}); $ctrl.closeForm();">Add</button>
    </form>
    `,
    controller: function() {
      const vm = this;
      vm.showForm = () => {
        vm.show = true;
      };
      vm.closeForm = () => {
        vm.show = false;
        vm.newPost = {};

      }
    }
  }
  

  angular
    .module("app")
    .component("postForm", postForm)
  }