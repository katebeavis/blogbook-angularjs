describe('blogbook homepage', function() {

  beforeEach( function() {
    browser.get('http://localhost:3000/')
  })

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('BlogBook');
  });

  it('should show the most recent post', function() {
    expect(element(by.css('.date')).getText()).toEqual('on 2015-03-25T10:19:31+00:00');
  });

  it('should show the title of the post', function() {
    expect(element(by.css('.title')).getText()).toEqual('Reflections: Context Switching');
  });

});
