

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
