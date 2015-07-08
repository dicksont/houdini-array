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

(function() {

  function Houdini(arr) {
    this.reversed = false;
    this.arr = arr;
  }

  Houdini.prototype.reverse = function() {
    this.reversed = !this.reversed;
    return this;
  }

  Houdini.prototype.pop = function() {
    return this.reversed? this.arr.shift() : this.arr.pop();
  }

  Houdini.prototype.shift = function() {
    return this.reversed? this.arr.pop() : this.arr.shift();
  }

  Houdini.prototype.push = function() {
    var args = Array.prototype.slice.call(arguments, 1);

    if (this.reversed) {
      return Array.prototype.unshift.apply(this.arr, args);
    } else {
      return Array.prototype.push.apply(this.arr, args);
    }
  }

  Houdini.prototype.unshift = function() {
    var args = Array.prototype.slice.call(arguments, 1);

    if (this.reversed) {
      return Array.prototype.push.apply(this.arr, args);
    } else {
      return Array.prototype.shift.apply(this.arr, args);
    }
  }


  Houdini.prototype.offset = function(index) {

    var getRealIndex = (function()  {
      return (this.reversed)? (this.arr.length - 1 - index) : index;
    }).bind(this);

    var get = (function() {
      try {
        return this.arr[getRealIndex()];
      } catch(err) {
        throw new Error('houdini-array: get element at houdini(array)[' + index + '] => array[' + index + '] failed. ' + err);
      }
    }).bind(this);

    var set = (function(value) {
      try {
        this.arr[getRealIndex()] = value;
      } catch(err) {
        throw new Error('houdini-array: set element at houdini index' + index + ' / real index ' + index + ' failed. ' + err);
      }
    }).bind(this);

    var obj = {
      get: get,
      set: set,
      getIndex: getRealIndex
    };

    Object.defineProperty(obj, 'value', {
      get: get,
      set: set,
      enumerable: true
    });

    return obj;



  }

  Object.defineProperty(Houdini.prototype, 'length', { get: function () {
      return this.arr.length;
    },
    enumerable: true
  });

  function houdini(arr) {
    return new Houdini(arr);
  }

  if (typeof module !== 'undefined' && module && module.exports) { // Node.js & CommonJS
    module.exports = houdini;
  } else if (typeof define === 'function' && define.amd) {
    define('houdini-array', [], function() {
      return houdini;
    });
  } else { // Browser
    window.houdini = houdini;
  }

})();
