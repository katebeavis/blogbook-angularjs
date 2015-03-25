var card = { title: undefined}

var streamController = function($scope, $http) {
  $scope.card = card;


  $scope.callAPI = function() {
    $http.get("https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts/?number=2&pretty=1")
      .then( function(response) {
        $scope.sample = response.data;
        $scope.card.title = $scope.sample.posts[0].title
      });
      console.log(card);
    };

};



// {
// title: "sample.posts[0].title",
// author: "sample.posts[0].author.name",
// Photo: "http://katebeavis.files.wordpress.com/2015/02/fullsizerender-2.jpg",
// Text: "This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing. This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing. This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing. This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing. This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing.",
// Date: "2015-02-16T22:41:02+00:00",
// Link: "https://katebeavis.wordpress.com/2015/02/16/day-eleven-weekend-review/", Author: "Kate" }


// mock test card for the index.html file
// var card2 = { Title: "Hello World 2", Author: "kaprianofox", Photo: "http://katebeavis.files.wordpress.com/2015/02/fullsizerender-2.jpg", Text: "This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing. This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing. This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing. This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing. This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing, This is my Maker's Blog, it's so amazing.", Date: "2015-02-16T22:41:02+00:00",
//          Link: "https://katebeavis.wordpress.com/2015/02/16/day-eleven-weekend-review/", Author: "Kate" }

angular
  .module("BlogBook")
  .controller("streamController", streamController)
