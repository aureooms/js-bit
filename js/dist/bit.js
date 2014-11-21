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
