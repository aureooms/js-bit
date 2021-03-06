"use strict";

(function () {

  'use strict';

  var definition = function definition(exports, undefined) {

    /* js/src/array */
    /* js/src/array/bfi.js */

    /**
     * Returns the block that a bit is in.
     */

    var __bfi__ = function __bfi__(r) {

      return function (i) {

        return i / r | 0;
      };
    };

    exports.__bfi__ = __bfi__;

    /* js/src/array/flip.js */

    /**
     * Flips a bit of an array of words.
     */

    var __flip__ = function __flip__(wflip, bfi, iib) {

      return function (a, i) {

        var j, k;

        j = bfi(i);
        k = iib(i);

        a[j] = wflip(a[j], k);
      };
    };

    exports.__flip__ = __flip__;

    /* js/src/array/get.js */

    /**
     * Gets a bit of an array of words.
     */

    var __get__ = function __get__(wget, bfi, iib) {

      return function (a, i) {

        var j, k;

        j = bfi(i);
        k = iib(i);

        return wget(a[j], k);
      };
    };

    exports.__get__ = __get__;

    /* js/src/array/iib.js */

    /**
     * Return the index of a bit in its block.
     */

    var __iib__ = function __iib__(r) {

      return function (i) {

        return i % r;
      };
    };

    exports.__iib__ = __iib__;

    /* js/src/array/set.js */

    /**
     * Sets a bit of an array of words.
     */

    var __set__ = function __set__(wset, bfi, iib) {

      return function (a, i) {

        var j, k;

        j = bfi(i);
        k = iib(i);

        a[j] = wset(a[j], k);
      };
    };

    exports.__set__ = __set__;

    /* js/src/array/unset.js */

    /**
     * Unsets a bit of an array of words.
     */

    var __unset__ = function __unset__(wunset, bfi, iib) {

      return function (a, i) {

        var j, k;

        j = bfi(i);
        k = iib(i);

        a[j] = wunset(a[j], k);
      };
    };

    exports.__unset__ = __unset__;

    /* js/src/hack */
    /* js/src/hack/between.js */
    /**
     * Determine if a word has a byte between m and n
     * When m < n, this technique
     * tests if a word x contains an unsigned byte value, such that m < value < n. It
     * uses 7 arithmetic/logical operations when n and m are constant.
     *
     * Note: Bytes that equal n can be reported by likelyhasbetween as false
     * positives, so this should be checked by character if a certain result is
     * needed.
     *
     * Requirements: x>=0; 0<=m<=127; 0<=n<=128
     *
     * #define likelyhasbetween(x,m,n) \
     * ((((x)-~0UL/255*(n))&~(x)&((x)&~0UL/255*127)+~0UL/255*(127-(m)))&~0UL/255*128)
     *
     * This technique would be suitable for a fast pretest. A variation that takes
     * one more operation (8 total for constant m and n) but provides the exact
     * answer is:
     *
     * #define hasbetween(x,m,n) \
     * ((~0UL/255*(127+(n))-((x)&~0UL/255*127)&~(x)&((x)&~0UL/255*127)+~0UL/255*(127-(m)))&~0UL/255*128)
     *
     * To count the number of bytes in x that are between m and n (exclusive) in 10
     * operations, use:
     *
     * #define countbetween(x,m,n) (hasbetween(x,m,n)/128%255)
     *
     * Juha Järvi suggested likelyhasbetween on April 6, 2005. From there, Sean
     * Anderson created hasbetween and countbetween on April 10, 2005.
     */

    var likelyhasbetween = function likelyhasbetween(x, m, n) {
      return x - (~0 >>> 0) / 255 * n & ~x & (x & (~0 >>> 0) / 255 * 127) + (~0 >>> 0) / 255 * (127 - m) & (~0 >>> 0) / 255 * 128;
    };

    var hasbetween = function hasbetween(x, m, n) {
      return (~0 >>> 0) / 255 * (127 + n) - (x & (~0 >>> 0) / 255 * 127) & ~x & (x & (~0 >>> 0) / 255 * 127) + (~0 >>> 0) / 255 * (127 - m) & (~0 >>> 0) / 255 * 128;
    };

    var countbetween = function countbetween(x, m, n) {
      return (hasbetween(x, m, n) >>> 7) % 255;
    };

    exports.likelyhasbetween = likelyhasbetween;
    exports.hasbetween = hasbetween;
    exports.countbetween = countbetween;

    /* js/src/hack/next.js */

    /**
     *
     * https://graphics.stanford.edu/~seander/bithacks.html#NextBitPermutation
     *
     * Compute the lexicographically next bit permutation
     *
     * Suppose we have a pattern of N bits set to 1 in an integer and we want the
     * next permutation of N 1 bits in a lexicographical sense. For example, if N
     * is 3 and the bit pattern is 00010011, the next patterns would be 00010101,
     * 00010110, 00011001,00011010, 00011100, 00100011, and so forth. The following
     * is a fast way to compute the next permutation.
     *
     *   unsigned int v; // current permutation of bits
     *   unsigned int w; // next permutation of bits
     *
     *   unsigned int t = v | (v - 1);
     *   // t gets v's least significant 0 bits set to 1
     *   // Next set to 1 the most significant bit to change, set to 0 the least
     *   // significant ones, and add the necessary 1 bits.
     *   w = (t + 1) | (((~t & -~t) - 1) >> (__builtin_ctz(v) + 1));
     *
     * The __builtin_ctz(v) GNU C compiler intrinsic for x86 CPUs returns the
     * number of trailing zeros. If you are using Microsoft compilers for x86, the
     * intrinsic is _BitScanForward. These both emit a bsf instruction, but
     * equivalents may be available for other architectures. If not, then consider
     * using one of the methods for counting the consecutive zero bits mentioned
     * earlier.
     *
     * Here is another version that tends to be slower because of its division
     * operator, but it does not require counting the trailing zeros.
     *
     *   unsigned int t = (v | (v - 1)) + 1;
     *   w = t | ((((t & -t) / (v & -v)) >> 1) - 1);
     *
     * Thanks to Dario Sneidermanis of Argentina, who provided this on November 28,
     * 2009.
     *
     * A Belorussian translation (provided by Webhostingrating) is available.
     */

    var next = function next(v) {

      var t;

      t = (v | v - 1) + 1;

      return t | ((t & -t) / (v & -v) >>> 1) - 1;
    };

    exports.next = next;

    /* js/src/hack/sign.js */

    /**
     *
     * https://graphics.stanford.edu/~seander/bithacks.html#CopyIntegerSign
     *
     * Compute the sign of an integer
     *
     *   int v;      // we want to find the sign of v
     *   int sign;   // the result goes here
     *
     *   // CHAR_BIT is the number of bits per byte (normally 8).
     *   sign = -(v < 0);  // if v < 0 then -1, else 0.
     *   // or, to avoid branching on CPUs with flag registers (IA32):
     *   sign = -(int)((unsigned int)((int)v) >> (sizeof(int) * CHAR_BIT - 1));
     *   // or, for one less instruction (but not portable):
     *   sign = v >> (sizeof(int) * CHAR_BIT - 1);
     *
     * The last expression above evaluates to sign = v >> 31 for 32-bit integers. This
     * is one operation faster than the obvious way, sign = -(v < 0). This trick works
     * because when signed integers are shifted right, the value of the far left bit
     * is copied to the other bits. The far left bit is 1 when the value is negative
     * and 0 otherwise; all 1 bits gives -1. Unfortunately, this behavior is
     * architecture-specific.
     *
     * Alternatively, if you prefer the result be either -1 or +1, then use:
     *
     *   sign = +1 | (v >> (sizeof(int) * CHAR_BIT - 1));  // if v < 0 then -1, else +1
     *
     * On the other hand, if you prefer the result be either -1, 0, or +1, then use:
     *
     *   sign = (v != 0) | -(int)((unsigned int)((int)v) >> (sizeof(int) * CHAR_BIT - 1));
     *   // Or, for more speed but less portability:
     *   sign = (v != 0) | (v >> (sizeof(int) * CHAR_BIT - 1));  // -1, 0, or +1
     *   // Or, for portability, brevity, and (perhaps) speed:
     *   sign = (v > 0) - (v < 0); // -1, 0, or +1
     *
     * If instead you want to know if something is non-negative, resulting in +1 or
     * else 0, then use:
     *
     *   sign = 1 ^ ((unsigned int)v >> (sizeof(int) * CHAR_BIT - 1)); // if v < 0 then 0, else 1
     *
     * Caveat: On March 7, 2003, Angus Duggan pointed out that the 1989 ANSI C
     * specification leaves the result of signed right-shift implementation-defined,
     * so on some systems this hack might not work. For greater portability, Toby
     * Speight suggested on September 28, 2005 that CHAR_BIT be used here and
     * throughout rather than assuming bytes were 8 bits long. Angus recommended the
     * more portable versions above, involving casting on March 4, 2006. Rohit Garg
     * suggested the version for non-negative integers on September 12, 2009.
    */

    var sign = function sign(v) {

      return (v > 0) - (v < 0);
    };

    exports.sign = sign;

    /* js/src/word */
    /* js/src/word/wflip.js */

    var wflip = function wflip(b, i) {
      return b ^ 1 << i;
    };

    exports.wflip = wflip;

    /* js/src/word/wget.js */

    var wget = function wget(b, i) {
      return b & 1 << i;
    };

    exports.wget = wget;

    /* js/src/word/wset.js */

    var wset = function wset(b, i) {
      return b | 1 << i;
    };

    exports.wset = wset;

    /* js/src/word/wunset.js */

    var wunset = function wunset(b, i) {
      return b & ~(1 << i);
    };

    exports.wunset = wunset;

    return exports;
  };
  if (typeof exports === "object") {
    definition(exports);
  } else if (typeof define === "function" && define.amd) {
    define("@aureooms/js-bit", [], function () {
      return definition({});
    });
  } else if (typeof window === "object" && typeof window.document === "object") {
    definition(window["bit"] = {});
  } else console.error("unable to detect type of module to define for @aureooms/js-bit");
})();