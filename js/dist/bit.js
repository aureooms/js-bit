(function(exports, undefined){

	'use strict';


/* js/src/array */
/* js/src/array/bfi.js */


/**
 * Returns the block that a bit is in.
 */

var __bfi__ = function ( r ) {

	return function ( i ) {

		return i / r | 0 ;

	} ;
	
} ;

exports.__bfi__ = __bfi__ ;

/* js/src/array/flip.js */


/**
 * Flips a bit of an array of words.
 */

var __flip__ = function ( wflip , bfi , iib ) {

	return function ( a , i ) {

		var j , k ;

		j = bfi( i ) ;
		k = iib( i ) ;

		a[j] = wflip( a[j] , k ) ;

	} ;

} ;

exports.__flip__ = __flip__ ;

/* js/src/array/get.js */


/**
 * Gets a bit of an array of words.
 */

var __get__ = function ( wget , bfi , iib ) {

	return function ( a , i ) {

		var j , k ;

		j = bfi( i ) ;
		k = iib( i ) ;

		return wget( a[j] , k ) ;

	} ;

} ;

exports.__get__ = __get__ ;

/* js/src/array/iib.js */


/**
 * Return the index of a bit in its block.
 */

var __iib__ = function ( r ) {

	return function ( i ) {

		return i % r ;

	} ;

} ;

exports.__iib__ = __iib__ ;

/* js/src/array/set.js */


/**
 * Sets a bit of an array of words.
 */

var __set__ = function ( wset , bfi , iib ) {

	return function ( a , i ) {

		var j , k ;

		j = bfi( i ) ;
		k = iib( i ) ;

		a[j] = wset( a[j] , k ) ;

	} ;

} ;

exports.__set__ = __set__ ;

/* js/src/array/unset.js */


/**
 * Unsets a bit of an array of words.
 */

var __unset__ = function ( wunset , bfi , iib ) {

	return function ( a , i ) {

		var j , k ;

		j = bfi( i ) ;
		k = iib( i ) ;

		a[j] = wunset( a[j] , k ) ;

	} ;
	
} ;

exports.__unset__ = __unset__ ;

/* js/src/hack */
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

var next = function ( v ) {

	var t ;

	t = ( v | ( v - 1 ) ) + 1 ;

	return t | ( ( ( ( t & -t ) / ( v & -v ) ) >>> 1 ) - 1 ) ;

} ;

exports.next = next ;

/* js/src/word */
/* js/src/word/wflip.js */

var wflip = function ( b , i ) {
	return b ^ ( 1 << i ) ;
} ;

exports.wflip = wflip ;

/* js/src/word/wget.js */

var wget = function ( b , i ) {
	return b & ( 1 << i ) ;
} ;

exports.wget = wget ;

/* js/src/word/wset.js */

var wset = function ( b , i ) {
	return b | ( 1 << i ) ;
} ;

exports.wset = wset ;

/* js/src/word/wunset.js */

var wunset = function ( b , i ) {
	return b & ~( 1 << i ) ;
} ;

exports.wunset = wunset ;

})(typeof exports === 'undefined' ? this['bit'] = {} : exports);
