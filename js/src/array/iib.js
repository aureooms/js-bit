

/**
 * Return the index of a bit in its block.
 */

var __iib__ = function ( r ) {

	return function ( i ) {

		return i % r ;

	} ;

} ;

exports.__iib__ = __iib__ ;
