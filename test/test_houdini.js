/*
 * Copyright (c) 2015 Dickson Tam
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 */

var houdini = require('../houdini.js');
var assert = require('assert');

describe('houdini', function() {
  describe('offset', function() {

    describe('length', function() {
      it('should equal length of wrapped array', function() {
        var tarr = [0, 1, 2, 3, 4];
        assert.equal(houdini(tarr).length, tarr.length);
      })

    });

    describe('get', function() {
      it('should return the value of the element of the wrapped array at those offsets', function() {
        var tarr = [0, 1, 2, 3, 4];

        for (var i=0; i < houdini(tarr).length; i++) {
          assert.equal(houdini(tarr).offset(i).get(), tarr[i]);
        }

      });
    });

    describe('set', function() {
      it('should return the value of the element of the wrapped array at those offsets', function() {
        var tarr = [0, 1, 2, 3, 4];
        var sarr = tarr.reverse();

        for (var i=0; i < houdini(tarr).length; i++) {
          houdini(tarr).offset(i).set(sarr[i]);
          assert.equal(houdini(tarr).offset(i).get(), sarr[i]);
        }

      });
    });
  });

  describe('reverse', function() {

  });
});
