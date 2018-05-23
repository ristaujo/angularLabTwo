"use strict";

{
  const post = {
    bindings: {
      post: "<"
    },

    template: `
      <section>
        <p> {{$ctrl.post.title}}</p>
        <p>{{$ctrl.post.content}}</p>

      </section>
    
    `
  }

  angular
    .module("app")
    .component("post", post)
}