describe("The add Link Controller", function(){
  var scope, ctrl;
  
  beforeEach(module('BlogBook'));
  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    ctrl = $controller('addLinkCtrl', {
      $scope: scope
    });
  }));
});