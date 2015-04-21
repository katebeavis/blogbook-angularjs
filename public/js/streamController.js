var streamController = function($scope, WPCard) {
  $scope.cards = [];
  $scope.filters = {}
  $scope.blogs = ['katebeavis.wordpress.com', 'joejknowles.wordpress.com', 'detachedhead.wordpress.com', 'thegeekleapforward.wordpress.com', 'en.blog.wordpress.com', 'em01blog.wordpress.com', 'sevenhoursbehind.wordpress.com', 'meganfolsom.wordpress.com', 'niccipell.wordpress.com'];

  $scope.addWPCard = function(blog){
    $scope.cards.push(new WPCard(blog, 0));
  };

 $scope.allPosts = function(blog){
    for(i=0; i<20; i++){
      $scope.cards.push(new WPCard(blog, i));
    }
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

  $scope.resetFilter = function(){
    $scope.filters = {};
  };

};

angular
  .module("BlogBook")
  .controller("streamController", streamController)
