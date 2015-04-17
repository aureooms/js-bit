

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
