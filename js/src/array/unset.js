

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
