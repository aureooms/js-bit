(function(exports, undefined){

	'use strict';


/* js/src/array */
/* js/src/array/aflip.js */


/**
 * Flips a bit of an array of words.
 */

var __aflip__ = function (flip, bfi, iib) {

	var aflip = function (a, i) {
		var j, k;

		j = bfi(i);
		k = iib(j);

		a[j] = flip(a[j], k);
	};

	return aflip;
};

exports.__aflip__ = __aflip__;

/* js/src/array/aset.js */


/**
 * Sets a bit of an array of words.
 */

var __aset__ = function (set, bfi, iib) {

	var aset = function (a, i) {
		var j, k;

		j = bfi(i);
		k = iib(j);

		a[j] = set(a[j], k);
	};

	return aset;
};

exports.__aset__ = __aset__;

/* js/src/array/aunset.js */


/**
 * Unsets a bit of an array of words.
 */

var __aunset__ = function (unset, bfi, iib) {

	var aunset = function (a, i) {
		var j, k;

		j = bfi(i);
		k = iib(j);

		a[j] = unset(a[j], k);
	};

	return aunset;
};

exports.__aunset__ = __aunset__;

/* js/src/array/bfi.js */


/**
 * Returns the block that a bit is in.
 */

var __bfi__ = function (r) {

	var bfi = function (i) {
		return i / r | 0;
	};

	return bfi;
};

exports.__bfi__ = __bfi__;

/* js/src/array/iib.js */


/**
 * Return the index of a bit in its block.
 */

var __iib__ = function (r) {

	var iib = function (i) {
		return i % r;
	};

	return iib;
};

exports.__iib__ = __iib__;

/* js/src/word */
/* js/src/word/flip.js */

var flip = function (b, i) {
	return b ^ (1 << i);
};

exports.flip = flip;

/* js/src/word/get.js */

var get = function (b, i) {
	return b & (1 << i);
};

exports.get = get;

/* js/src/word/mask.js */

var mask = function (i) {
	return 1 << i;
};

exports.mask = mask;

/* js/src/word/set.js */

var set = function (b, i) {
	return b | (1 << i);
};

exports.set = set;

/* js/src/word/unset.js */

var unset = function (b, i) {
	return b & ~(1 << i);
};

exports.unset = unset;

})(typeof exports === 'undefined' ? this['bit'] = {} : exports);
