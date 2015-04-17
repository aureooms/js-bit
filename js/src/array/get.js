

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
