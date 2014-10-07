

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
