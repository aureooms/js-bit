

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
