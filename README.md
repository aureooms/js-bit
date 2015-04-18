[js-bit](http://aureooms.github.io/js-bit)
==

Bit twiddling hacks code bricks for JavaScript.

[![NPM license](http://img.shields.io/npm/l/aureooms-js-bit.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-bit/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-bit.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-bit)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-bit.svg?style=flat)](http://bower.io/search/?q=aureooms-js-bit)
[![Build Status](http://img.shields.io/travis/aureooms/js-bit.svg?style=flat)](https://travis-ci.org/aureooms/js-bit)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-bit.svg?style=flat)](https://coveralls.io/r/aureooms/js-bit)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-bit.svg?style=flat)](https://david-dm.org/aureooms/js-bit#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-bit.svg?style=flat)](https://david-dm.org/aureooms/js-bit#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-bit.svg?style=flat)](https://codeclimate.com/github/aureooms/js-bit)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-bit.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-bit)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-bit.svg?style=flat)](https://github.com/aureooms/js-bit/issues)

Can be managed through [duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower), or
[npm](https://github.com/npm/npm).

```js
let bit = require( "aureooms-js-bit" ) ;
```

Example usage:

```js
/* Compute the next bit permutation of a 32-bit input number. */
bit.next( 0b00101001 ) ; // 0b00101010
```

References:

 - https://graphics.stanford.edu/~seander/bithacks.html
 - https://github.com/boothj5/bit-twiddling/blob/master/basic.c
