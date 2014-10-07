

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
