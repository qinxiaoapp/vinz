'use strict';

describe('Filter: fromNow', function () {

  // load the filter's module
  beforeEach(module('vinzApp'));

  // initialize a new instance of the filter before each test
  var fromNow;
  beforeEach(inject(function ($filter) {
    fromNow = $filter('fromNow');
  }));

  it('should return the input prefixed with "fromNow filter:"', function () {
    // var text = new Date();
    // expect(fromNow(text)).toBe('a few seconds ago');
  });

});