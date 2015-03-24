var streamController = function($scope, $resource) {
  $scope.cards = [card, card2]
};

var card = { Title: "Hello World", Photo: "https://katebeavis.files.wordpress.com/2015/02/fullsizerender-2.jpg", Text: "lorem ipsum", Date: "2015-02-16T22:41:02+00:00",
         Link: "https://katebeavis.wordpress.com/2015/02/16/day-eleven-weekend-review/", Author: "Kate" }

var card2 = { Title: "Hello World 2", Photo: "https://katebeavis.files.wordpress.com/2015/02/fullsizerender-2.jpg", Text: "lorem ipsum", Date: "2015-02-16T22:41:02+00:00",
         Link: "https://katebeavis.wordpress.com/2015/02/16/day-eleven-weekend-review/", Author: "Kate" }

angular
  .module("BlogBook")
  .controller("streamController", streamController)