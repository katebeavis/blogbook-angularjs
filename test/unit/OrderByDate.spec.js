// describe('order posts by date', function() {
//   var scope, ctrl;

//   beforeEach(module('BlogBook'));
//   beforeEach(inject(function($rootScope, $controller) {
//     scope = $rootScope.$new();
//     ctrl = $controller('streamController', {
//       $scope: scope
//     });
//   }));

//   it('should be able to check for a date', function() {
//     var card = { date: undefined };
//     scope.cards[0] = card; 
//     scope.cards[0].date = '2015-03-26';
//     expect(scope.cards[0].date).toEqual('2015-03-26');
//   });

//   it('should be able to sort cards by date', function() {
//     var card = { date: undefined };
//     scope.cards[0] = card; 
//     scope.cards[0].date = '2013-03-26';
//     scope.cards[1] = card;
//     scope.cards[1].date = '2016-02-23';
//     scope.cards[2] = card;
//     scope.cards[2].date = '2014-05-24';
//     scope.sortByDate();
//     expect(scope.cards[0].date).toEqual('2016-02-23');
//     expect(scope.cards[1].date).toEqual('2014-05-24');
//     expect(scope.cards[2].date).toEqual('2013-03-26');
//   });
// });