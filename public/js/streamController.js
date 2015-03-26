var streamController = function($scope, WPCard) {
  $scope.newBlog = null;
  $scope.cards = [];
  $scope.filters = {}
  $scope.blogs = ['katebeavis.wordpress.com', 'joejknowles.wordpress.com', 'detachedhead.wordpress.com', 'thegeekleapforward.wordpress.com', 'en.blog.wordpress.com'];

  $scope.addWPCard = function(blog){
    $scope.cards.push(new WPCard(blog));
    $scope.newBlog = null;
  };

  $scope.fillPage = function(){
    for(i=0; i< $scope.blogs.length; i++){
      $scope.addWPCard($scope.blogs[i]);
    }
  };

  $scope.fillPage();


  $scope.setFilter = function(index){
    $scope.filters = {author: $scope.cards[index].author}
  };
};

angular
  .module("BlogBook")
  .controller("streamController", streamController)
