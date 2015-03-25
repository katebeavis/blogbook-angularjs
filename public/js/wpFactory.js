var wpFactory = function($http) {
  var wpCard = function() {
    this.card = card;
    
    this.callAPI = function() {
    $http.get("https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts/?number=2&pretty=1")
      .then( function(response) {
        // getting JSON data from the API URL and storing it in a "sample" variable
        this.sample = response.data;
        // setting the card's properties to the actual JSON data properties
        this.card.title = this.sample.posts[0].title;
        this.card.author = this.sample.posts[0].author.name;
        this.card.avatar = this.sample.posts[0].author.avatar_URL;
        this.card.date = this.sample.posts[0].date;
        this.card.text = this.sample.posts[0].content;
        this.card.postURL = this.sample.posts[0].URL;
        console.log(this.card);
      });
    };
  };
  wp = new wpCard();
  wp.callAPI();
  console.log(wp.card);
};

angular
  .module('BlogBook')
  .factory('wpFactory', wpFactory)