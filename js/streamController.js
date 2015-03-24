var streamController = function() {
  document.write("Hello World!");
};

angular
  .module("BlogBook")
  .controller("streamController", streamController)