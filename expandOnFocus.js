"use strict";

function expand() {
  return {
    restrict: "A",
    link: function($scope, $element, $attrs) {
      $element.on("focus", () => {
        $element.css("height", "500px");
      });
      $element.on("blur", () => {
        $element.css("height", "200px");
      });
    }
  }
}

angular
  .module("app")
  .directive("expand", expand);