// describe("The WpCard Factory", function(){
//   beforeEach(module('BlogBook'));
//   beforeEach(function(){
//     inject(function($injector){
//       wpFactory = $injector.get('wpCard')
//     });
//   });

//   it("A card has a title", function(){
//     var newCard;
//     var url = "https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts/?number=2&pretty=1"
//     newCard = new wpFactory(url);
//     console.log(newCard.title);
//     expect(newCard.title).toEqual("This April in Blogging U.: The Return of Writing 101!");
//   });



// });