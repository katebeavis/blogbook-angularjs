var streamController = function($scope, $http) {
  // setting the card variable as part of the DOM/scope of our AngularJS application
  $scope.card = card;

  $scope.callAPI = function() {
    $http.get("https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts/?number=2&pretty=1")
      .then( function(response) {
        // getting JSON data from the API URL and storing it in a "sample" variable
        $scope.sample = response.data;
        // setting the card's properties to the actual JSON data properties
        $scope.card.title = $scope.sample.posts[0].title;
        $scope.card.author = $scope.sample.posts[0].author.name;
        $scope.card.avatar = $scope.sample.posts[0].author.avatar_URL;
        $scope.card.date = $scope.sample.posts[0].date;
        $scope.card.text = $scope.sample.posts[0].content;
        $scope.card.postURL = $scope.sample.posts[0].URL;
        console.log($scope.card);
      });
    };
    $scope.callAPI();
};

angular
  .module("BlogBook")
  .controller("streamController", streamController)
