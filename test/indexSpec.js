describe('blogbook homepage', function() {

  it('should have a title', function() {
    browser.get('http://localhost:3000/');

    expect(browser.getTitle()).toEqual('BlogBook');

  });

  // have to update the second test

  it('should show a blog post', function() {
    browser.get('http://localhost:3000/');
    // var list = element.all(by.css('.items li'));
    // expect(list.get(1).getText()).toBe("blog");
    expect(element(by.css('li')).getText()).toBe("kaprianofox")
  });

});
