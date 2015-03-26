var wrapper = function($http){
  var WPCard = function(blog){
    this.initialize = function(){
      var url = "https://public-api.wordpress.com/rest/v1.1/sites/" + blog + "/posts/?number=1";
      var blogData = $http.get(url);
      var self = this;

      blogData.then(function(response){
        self.title = response.data.posts[0].title
        self.date = response.data.posts[0].date
        self.text = response.data.posts[0].excerpt
        self.link = response.data.posts[0].URL
        self.author = response.data.posts[0].author.nice_name
        self.photo = response.data.posts[0].featured_image || response.data.posts[0].attachments[Object.keys(response.data.posts[0].attachments)[0]].URL || ""
      });
    };
    this.initialize();
  };
  return (WPCard);
};

angular
  .module('BlogBook')
  .factory('WPCard', wrapper)