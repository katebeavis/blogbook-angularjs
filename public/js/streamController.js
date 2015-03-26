var streamController = function($scope, WPCard) {
  $scope.newBlog = null;
  $scope.cards = [];
  $scope.blogs = ['katebeavis.wordpress.com', 'joejknowles.wordpress.com', 'detachedhead.wordpress.com', 'thegeekleapforward.wordpress.com'];
// issue: we have to send the "blogs" array in a "database" file, a separate file to store our data

  $scope.addWPCard = function(blog){
    $scope.cards.push(new WPCard(blog));
    $scope.newBlog = null;
  };
  
  $scope.loadCards = function() {
    for(i = 0; i < $scope.blogs.length; i++) {
      $scope.addWPCard($scope.blogs[i]);
    };
  };
  $scope.loadCards();
};

angular
  .module("BlogBook")
  .controller("streamController", streamController)
