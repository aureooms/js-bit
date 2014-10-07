
var unset = function (b, i) {
	return b & ~(1 << i);
};

exports.unset = unset;
