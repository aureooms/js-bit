

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
