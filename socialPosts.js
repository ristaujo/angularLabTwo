"use strict";
{
  const social = {
    template: `
    <post-form on-submit="$ctrl.onSubmit(newPost);"></post-form> 
    <section>
      <post ng-repeat="post in $ctrl.posts" post="post" id="main-content"></post>
    </section>
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
    }
  }
  
  angular
    .module("app")
    .component("social", social);
 }

       // Line 7: post="post" just means that you want to repeat individual objects. 
