

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
