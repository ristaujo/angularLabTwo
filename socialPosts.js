"use strict";
{
  const social = {
    template: `
      <button ng-click="" type="button">New Thought</button>
      <post ng-repeat="post in $ctrl.posts" post="post"></post>
      <post-form on-submit="$ctrl.onSubmit(newPost);"></post-form>
    `,
    controller: function() {
      const vm = this;
      vm.posts = [
        {
          title: "Apollo",
          content: "Apollo is a gray cat. He is the best."
        },
        {
          title: "Baby Cat",
          content: "Baby Cat is a tuxedo cat. She has been a happy cat."
        },
        {
          title: "Bella",
          content: "Bella is a striped cat. She is a very fat cat but I love her."
        }
      ];
      vm.onSubmit = (newPost) => {
        vm.posts.push({
          title: newPost.title,
          content: newPost.content
        });
      };

      vm.formOpen = () => {

      }
      console.log(vm.posts);
    }
  };
  
  angular
    .module("app")
    .component("social", social);
}