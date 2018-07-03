/*!
 * hasEmptyProperty <https://github.com/HopperGithub/has-empty-property>
 *
 * Copyright (c) 2018-present, Hopper Sun.
 * Released under the MIT License.
 */

'use strict';

require('mocha');
var assert = require('assert');
var hasEmptyProperty = require('./');

describe('has a empty property', function () {
  var fixtures = [
    '',
    null,
    undefined,
  ];

  fixtures.forEach(function (item, index) {
    var obj = { [index]: item, 'compare': 'true' };
    it(JSON.stringify(obj) + ' should has a empty property', function () {
      assert(hasEmptyProperty(obj), 'expected "' + String(obj) + '" has a empty property');
    });
  });
});

describe('has not a empty property', function () {
  var fixtures = [
    '   ', // issue#3
    '\r\n\t', // issue#3
    '3a',
    'abc',
    'false',
    'null',
    'true',
    'undefined',
    +'abc',
    +/foo/,
    +[1, 2, 4],
    +Infinity,
    +Math.sin,
    +NaN,
    +undefined,
    +{ a: 1 },
    +{},
    /foo/,
    [1, 2, 3],
    [1],
    [],
    true,
    false,
    +function () { },
    function () { },
    Infinity,
    -Infinity,
    Math.sin,
    NaN,
    true,
    false,
    new Date(),
    {}
  ];

  fixtures.forEach(function (item, index) {
    var obj = { [index]: item, 'compare': 'true' };
    it(JSON.stringify(obj) + ' should not have a empty propert', function () {
      assert(!hasEmptyProperty(obj), 'expected "' + String(obj) + '" not has a empty propert');
    });
  });
});

describe('has not a property', function () {
  var obj = {};
  it(JSON.stringify(obj) + ' should not a property', function () {
    assert(hasEmptyProperty(obj), 'expected "' + String(obj) + '" not a property');
  });
});
