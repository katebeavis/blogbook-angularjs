describe("The WPCard Factory", function(){
  beforeEach(module('BlogBook'));
  beforeEach(function(){
    inject(function($injector){
      WPCard = $injector.get('WPCard')
    });
  });

  it("A card has a title", function(){
    
    var url = "en.blog.wordpress.com"
    var newCard = new WPCard(url);
    
    expect(newCard.title).toEqual("This April in Blogging U.: The Return of Writing 101!");
  });



});