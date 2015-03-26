var wrapper = function($http){
  var WPCard = function(blog, index){
    this.initialize = function(){
      var url = "https://public-api.wordpress.com/rest/v1.1/sites/" + blog + "/posts/";
      var blogData = $http.get(url);
      var self = this;

      blogData.then(function(response){
        self.title = response.data.posts[index].title
        self.date = response.data.posts[index].date
        self.text = response.data.posts[index].excerpt
        self.link = response.data.posts[index].URL
        self.author = response.data.posts[index].author.nice_name
        self.photo = response.data.posts[index].featured_image || response.data.posts[index].attachments[Object.keys(response.data.posts[index].attachments)[index]].URL || ""
      });
    };
    this.initialize();
  };
  return (WPCard);
};

angular
  .module('BlogBook')
  .factory('WPCard', wrapper)