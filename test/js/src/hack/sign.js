
var t = function ( input , expected ) {

	deepEqual( bit.sign( input ) , expected , input ) ;

} ;

test( "sign" , function ( ) {

	var i ;

	for ( i = 1 ; i < Math.pow( 2 , 10 ) ; ++i ) t( i , +1 ) ;
	for ( i = -1 ; i >= -Math.pow( 2 , 10 ) ; --i ) t( i , -1 ) ;

	t( 0 , 0 ) ;
	t( -Math.pow( 2 , 31 ) , -1 ) ;
	t( Math.pow( 2 , 31 ) - 1 , +1 ) ;

} ) ;
