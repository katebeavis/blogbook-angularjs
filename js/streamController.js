var streamController = function($scope) {
  $scope.helloWorld = function() {
    console.log("hi");
  };
};

angular
  .module("BlogBook")
  .controller("streamController", streamController)