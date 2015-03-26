var streamController = function($scope, WPCard) {
  $scope.newBlog = null;
  $scope.cards = [];
  $scope.blogs = ['katebeavis.wordpress.com', 'joejknowles.wordpress.com', 'detachedhead.wordpress.com', 'thegeekleapforward.wordpress.com', 'en.blog.wordpress.com'];

  $scope.addWPCard = function(blog){
    $scope.cards.push(new WPCard(blog));
    $scope.newBlog = null;
  };
};

angular
  .module("BlogBook")
  .controller("streamController", streamController)
