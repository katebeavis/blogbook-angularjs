var wpCard = function($http){
  wpFactory = function(url){
    this.initialize = function(){
      //Fetch the Api content
      var wpData = $http.get(url);
      var self = this;

      wpData.then(function(response){
        sample = response.data; 
        self.title = sample.posts[0].title;
        console.log(sample)
      });
    };

    this.initialize();

  };
  return wpFactory; 
};

angular
  .module('BlogBook')
  .factory('wpCard', wpCard)
