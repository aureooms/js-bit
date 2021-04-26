[js-bit](http://make-github-pseudonymous-again.github.io/js-bit)
==

Bit twiddling hacks code bricks for JavaScript.

[![License](https://img.shields.io/github/license/make-github-pseudonymous-again/js-bit.svg?style=flat)](https://raw.githubusercontent.com/make-github-pseudonymous-again/js-bit/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-bit.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-bit)
[![Bower version](https://img.shields.io/bower/v/@aureooms/js-bit.svg?style=flat)](http://bower.io/search/?q=@aureooms/js-bit)
[![Build Status](https://img.shields.io/travis/make-github-pseudonymous-again/js-bit.svg?style=flat)](https://travis-ci.org/make-github-pseudonymous-again/js-bit)
[![Coverage Status](https://img.shields.io/coveralls/make-github-pseudonymous-again/js-bit.svg?style=flat)](https://coveralls.io/r/make-github-pseudonymous-again/js-bit)
[![Dependencies Status](https://img.shields.io/david/make-github-pseudonymous-again/js-bit.svg?style=flat)](https://david-dm.org/make-github-pseudonymous-again/js-bit#info=dependencies)
[![devDependencies Status](https://img.shields.io/david/dev/make-github-pseudonymous-again/js-bit.svg?style=flat)](https://david-dm.org/make-github-pseudonymous-again/js-bit#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/make-github-pseudonymous-again/js-bit.svg?style=flat)](https://codeclimate.com/github/make-github-pseudonymous-again/js-bit)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-bit.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-bit)
[![GitHub issues](https://img.shields.io/github/issues/make-github-pseudonymous-again/js-bit.svg?style=flat)](https://github.com/make-github-pseudonymous-again/js-bit/issues)
[![Inline docs](http://inch-ci.org/github/make-github-pseudonymous-again/js-bit.svg?branch=master&style=shields)](http://inch-ci.org/github/make-github-pseudonymous-again/js-bit)

Can be managed through [duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower), or
[npm](https://github.com/npm/npm).

```js
let bit = require( "@aureooms/js-bit" ) ;
```

Example usage:

```js
/* Compute the sign of an integer */
bit.sign(  0  ) ; // 0
bit.sign( -67 ) ; // -1
bit.sign( 432 ) ; // +1

/* Compute the lexicographically next bit permutation */
bit.next( 0b00101001 ) ; // 0b00101010
```

References:

 - https://graphics.stanford.edu/~seander/bithacks.html
 - https://github.com/boothj5/bit-twiddling/blob/master/basic.c
