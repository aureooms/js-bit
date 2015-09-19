
var t = function ( x , m , n , expected ) {
	ok( !bit.hasbetween( x , m , n ) === !expected , [ x , m , n ] ) ;
} ;

var u = function ( x , m , n , expected ) {
	equal( bit.countbetween( x , m , n ) , expected , [ x , m , n ] ) ;
} ;

var v = function ( x , m , n , expected ) {
	ok( !bit.likelyhasbetween( x , m , n ) === !expected , [ x , m , n ] ) ;
} ;

test( "hasbetween" , function ( ) {

	t( 0x7f7f7f7f , 0x7f , 0x7f , false ) ;
	t( 0x7f7f7f7f , 0x7e , 0x80 , true ) ;

} ) ;

test( "countbetween" , function ( ) {

	u( 0x7f7f7f7f , 0x7f , 0x7f , 0 ) ;
	u( 0x7f7f7f7f , 0x7e , 0x80 , 4 ) ;
	u( 0x7e7e7e7e , 0x7e , 0x80 , 0 ) ;
	u( 0x7f7e7e7e , 0x7e , 0x80 , 1 ) ;
	u( 0x7e7f7e7e , 0x7e , 0x80 , 1 ) ;
	u( 0x7e7e7f7e , 0x7e , 0x80 , 1 ) ;
	u( 0x7e7e7e7f , 0x7e , 0x80 , 1 ) ;
	u( 0x7f7f7e7e , 0x7e , 0x80 , 2 ) ;
	u( 0x7f7e7f7e , 0x7e , 0x80 , 2 ) ;
	u( 0x7f7e7e7f , 0x7e , 0x80 , 2 ) ;
	u( 0x7e7f7f7e , 0x7e , 0x80 , 2 ) ;
	u( 0x7e7f7e7f , 0x7e , 0x80 , 2 ) ;
	u( 0x7e7e7f7f , 0x7e , 0x80 , 2 ) ;
	u( 0x7e7f7f7f , 0x7e , 0x80 , 3 ) ;
	u( 0x7f7e7f7f , 0x7e , 0x80 , 3 ) ;
	u( 0x7f7f7e7f , 0x7e , 0x80 , 3 ) ;
	u( 0x7f7f7f7e , 0x7e , 0x80 , 3 ) ;

} ) ;

test( "likelyhasbetween" , function ( ) {

	v( 0x7f7f7f7f , 0x7f , 0x7f , false ) ;
	v( 0x7f7f7f7f , 0x7e , 0x80 , true ) ;

} ) ;
