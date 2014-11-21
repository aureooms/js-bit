
var array ;

array = require( "aureooms-js-array" ) ;

test( "array", function ( ) {

	var a , i , m , n , r , set , unset , flip , get , bfi , iib ;

	m = 243 ;

	r = 8 ;

	bfi = bit.__bfi__( r ) ;
	iib = bit.__iib__( r ) ;

	set = bit.__set__( bit.wset , bfi , iib ) ;
	unset = bit.__unset__( bit.wunset , bfi , iib ) ;
	flip = bit.__flip__( bit.wflip , bfi , iib ) ;
	get = bit.__get__( bit.wget , bfi , iib ) ;

	n = Math.ceil( m / r ) ;

	a = array.alloc( n ) ;


	array.fill( a , 0 , n , 0 ) ;

	for ( i = 0 ; i < m ; ++i ) {
		deepEqual( !!get( a , i ) , false , i + " is false ( fill )" ) ;
	}


	array.fill( a , 0 , n , 0xFF ) ;

	for ( i = 0 ; i < m ; ++i ) {
		deepEqual( !!get( a , i ) , true , i + " is true ( fill )" ) ;
	}


	for ( i = 100 ; i < 200 ; ++i ) {
		unset( a , i ) ;
	}

	for ( i = 0 ; i < 100 ; ++i ) {
		deepEqual( !!get( a , i ) , true , i + " is true ( unset )" ) ;
	}

	for ( i = 100 ; i < 200 ; ++i ) {
		deepEqual( !!get( a , i ) , false , i + " is false ( unset )" ) ;
	}

	for ( i = 200 ; i < m ; ++i ) {
		deepEqual( !!get( a , i ) , true , i + " is true ( unset )" ) ;
	}


	for ( i = 50 ; i < 150 ; ++i ) {
		set( a , i ) ;
	}

	for ( i = 150 ; i < m ; ++i ) {
		unset( a , i ) ;
	}

	for ( i = 0 ; i < 150 ; ++i ) {
		deepEqual( !!get( a , i ) , true , i + " is true ( set )" ) ;
	}

	for ( i = 150 ; i < m ; ++i ) {
		deepEqual( !!get( a , i ) , false , i + " is false ( set )" ) ;
	}


	for ( i = 0 ; i < m ; ++i ) {
		flip( a , i) ;
	}

	for ( i = 0 ; i < 150 ; ++i ) {
		deepEqual( !!get( a , i ) , false , i + " is false ( flip )" ) ;
	}

	for ( i = 150 ; i < m ; ++i ) {
		deepEqual( !!get( a , i ) , true , i + " is true ( flip )" ) ;
	}


} ) ;
