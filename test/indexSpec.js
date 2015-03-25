describe('blogbook homepage', function() {

  it('should have a title', function() {
    browser.get('http://localhost:3000/');

    expect(browser.getTitle()).toEqual('BlogBook');

  });

  // have to update the second test

  it('should show a blog post', function() {
    browser.get('http://localhost:3000/');
    expect(element(by.css('h1')).getText()).toBe("This April in Blogging U.: The Return of Writing 101!")
  });

});
