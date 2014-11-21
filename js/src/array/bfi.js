

/**
 * Returns the block that a bit is in.
 */

var __bfi__ = function ( r ) {

	return function ( i ) {

		return i / r | 0 ;

	} ;
	
} ;

exports.__bfi__ = __bfi__ ;
