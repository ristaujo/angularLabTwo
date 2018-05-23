"use strict";

{
  const post = {
    bindings: {
      post: "<"
    },

    template: `
      <section>
        <h5> {{$ctrl.post.title}}</h5>
        <p>{{$ctrl.post.content}}</p>
      </section>
    
    `
  }

  angular
    .module("app")
    .component("post", post)
}