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

  describe('.length', function() {
    it('should equal length of backing array', function() {
      var tarr = [0, 1, 2, 3, 4];
      assert.equal(houdini(tarr).length, tarr.length);
    })
  });

  describe('.offset()', function() {

    describe('.getIndex()', function() {
      it('should return the index', function() {
        var tarr = [0, 1, 2, 3, 4];

        for (var i=0; i < houdini(tarr).length; i++) {
          assert.equal(houdini(tarr).offset(i).getIndex(), i);
        }

      });
    });


    describe('.get()', function() {
      it('should return the value of the backing array element at those offsets', function() {
        var tarr = [0, 1, 2, 3, 4];

        for (var i=0; i < houdini(tarr).length; i++) {
          assert.equal(houdini(tarr).offset(i).get(), tarr[i]);
        }

      });
    });

    describe('.set()', function() {
      it('should return the value of the backing array element at those offsets', function() {
        var tarr = [0, 1, 2, 3, 4];
        var sarr = [4, 3, 2, 1, 0];

        for (var i=0; i < houdini(tarr).length; i++) {
          houdini(tarr).offset(i).set(sarr[i]);
          assert.equal(houdini(tarr).offset(i).get(), sarr[i]);
        }

      });
    });

    describe('.push()', function() {
      it('should push the element onto the backing array', function() {
        var tarr = [0, 1, 2, 3, 4];

        houdini(tarr).push(5);
        assert.equal(tarr[5], 5);
      });
    });

    describe('.pop()', function() {
      it('should pop the element from the backing array', function() {
        var tarr = [0, 1, 2, 3, 4];

        assert.equal(houdini(tarr).pop(), 4);
      });
    });

    describe('.shift()', function() {
      it('should shift the element from the backing array', function() {
        var tarr = [0, 1, 2, 3, 4];

        assert.equal(houdini(tarr).shift(), 0);
      });
    });

    describe('.unshift()', function() {
      it('should unshift the element onto the backing array', function() {
        var tarr = [0, 1, 2, 3, 4];

        houdini(tarr).unshift(-1);
        assert.equal(tarr[0], -1);

      });
    });
  });

  describe('.reverse()', function() {
    describe('.length', function() {
      it('should equal length of backing array', function() {
        var tarr = [0, 1, 2, 3, 4];
        assert.equal(houdini(tarr).reverse().length, tarr.length);
      })

    });

    describe('.offset()', function() {

      describe('.getIndex()', function() {
        it('should return the index reversed', function() {
          var tarr = [0, 1, 2, 3, 4];

          for (var i=0; i < houdini(tarr).length; i++) {
            assert.equal(houdini(tarr).offset(i).getIndex(), i);
          }

        });
      });

      describe('.get()', function() {
        it('should return the value of the backing array reversed at those offsets', function() {
          var tarr = [0, 1, 2, 3, 4];
          var rarr = houdini(tarr).reverse();
          var sarr = [4, 3, 2, 1, 0];

          for (var i=0; i < rarr.length; i++) {
            assert.equal(rarr.offset(i).get(), sarr[i]);
          }

        });
      });

      describe('.set()', function() {
        it('should return the value of the backing array reversed at those offsets', function() {
          var tarr = [0, 1, 2, 3, 4];
          var rarr = houdini(tarr).reverse();
          var sarr = [4, 3, 2, 1, 0];

          for (var i=0; i < rarr.length; i++) {
            rarr.offset(i).set(i);
          }

          for (var i=0; i < tarr.length; i++) {
            assert.equal(tarr[i], sarr[i]);
          }
        });
      });

      describe('.push()', function() {
        it('should shift the element onto the backing array', function() {
          var tarr = [0, 1, 2, 3, 4];

          houdini(tarr).reverse().push(5);
          assert.equal(tarr[0], 5);
        });
      });

      describe('.pop()', function() {
        it('should shift the element from the backing array', function() {
          var tarr = [0, 1, 2, 3, 4];

          assert.equal(houdini(tarr).reverse().pop(), 0);
        });
      });

      describe('.shift()', function() {
        it('should pop the element from the backing array', function() {
          var tarr = [0, 1, 2, 3, 4];

          assert.equal(houdini(tarr).reverse().shift(), 4);
        });
      });

      describe('.unshift()', function() {
        it('should push the element onto the backing array', function() {
          var tarr = [0, 1, 2, 3, 4];

          houdini(tarr).reverse().unshift(-1);
          assert.equal(tarr[5], -1);

        });
      });
    });
  });
});
