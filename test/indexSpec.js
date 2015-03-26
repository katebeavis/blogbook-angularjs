describe('blogbook homepage', function() {

  it('should have a title', function() {
    browser.get('http://localhost:3000/');

    expect(browser.getTitle()).toEqual('BlogBook');
  });

  it('should show the most recent post', function() {
    browser.get('http://localhost:3000/');

    expect(element(by.id('date')).getText()).toEqual('on 2015-03-25T10:19:31+00:00');
  });

});
