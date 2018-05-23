"use strict";

{
  const postForm = {
    bindings: {
      onSubmit: "&",
      formOpen: "&"
    },

    template: `
    <form class="ng-hide">
      <input type="text" placeholder="Title" ng-model="$ctrl.newPost.title" expand>
      <input type="text" placeholder="Content" ng-model="$ctrl.newPost.content" expand>
      <button ng-click="$ctrl.onSubmit({ newPost: $ctrl.newPost});">Add</button>
    </form>
    `
  }

  angular
    .module("app")
    .component("postForm", postForm)
}