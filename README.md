<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Probability Mass Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Bernoulli][bernoulli-distribution] distribution [probability mass function][pmf] (PMF).

<section class="intro">

The [probability mass function][pmf] (PMF) for a [Bernoulli][bernoulli-distribution] random variable is defined as

<!-- <equation class="equation" label="eq:bernoulli_pmf" align="center" raw="\Pr(X = x) = \begin{cases} 1-p & \text{ for } x = 0 \\ p & \text{ for } x = 1 \\ 0 & \text{ otherwise } \end{cases}" alt="Probability mass function (PMF) for a Bernoulli distribution."> -->

<div class="equation" align="center" data-raw-text="\Pr(X = x) = \begin{cases} 1-p &amp; \text{ for } x = 0 \\ p &amp; \text{ for } x = 1 \\ 0 &amp; \text{ otherwise } \end{cases}" data-equation="eq:bernoulli_pmf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/bernoulli/pmf/docs/img/equation_bernoulli_pmf.svg" alt="Probability mass function (PMF) for a Bernoulli distribution.">
    <br>
</div>

<!-- </equation> -->

where `0 <= p <= 1` is the success probability.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import pmf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-pmf@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-pmf@esm/index.mjs';
```

#### pmf( x, p )

Evaluates the [probability mass function][pmf] (PMF) of a [Bernoulli][bernoulli-distribution] distribution with success probability `0 <= p <= 1`.

```javascript
var y = pmf( 1.0, 0.3 );
// returns 0.3

y = pmf( 0.0, 0.3 );
// returns 0.7

y = pmf( -1.0, 0.5 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pmf( NaN, 0.0 );
// returns NaN

y = pmf( 0.0, NaN );
// returns NaN
```

If provided a success probability `p` outside of the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = pmf( 0.0, -1.0 );
// returns NaN

y = pmf( 0.0, 1.5 );
// returns NaN
```

#### pmf.factory( p )

Returns a function for evaluating the [probability mass function][pmf] (PMF) of a [Bernoulli][bernoulli-distribution] distribution with success probability `0 <= p <= 1`.

```javascript
var mypmf = pmf.factory( 0.8 );
var y = mypmf( 0.0 );
// returns 0.2

y = mypmf( 0.5 );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs';
import pmf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-pmf@esm/index.mjs';

var p;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = round( randu() * 2.0 );
    p = randu();
    y = pmf( x, p );
    console.log( 'x: %d, p: %d, P( X = x; p ): %d', x, p.toFixed( 4 ), y.toFixed( 4 ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-bernoulli-pmf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-bernoulli-pmf

[test-image]: https://github.com/stdlib-js/stats-base-dists-bernoulli-pmf/actions/workflows/test.yml/badge.svg?branch=v0.0.8
[test-url]: https://github.com/stdlib-js/stats-base-dists-bernoulli-pmf/actions/workflows/test.yml?query=branch:v0.0.8

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-bernoulli-pmf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-bernoulli-pmf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-bernoulli-pmf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-bernoulli-pmf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-bernoulli-pmf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-bernoulli-pmf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-bernoulli-pmf/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-bernoulli-pmf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-bernoulli-pmf/main/LICENSE

[bernoulli-distribution]: https://en.wikipedia.org/wiki/Bernoulli_distribution

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

</section>

<!-- /.links -->
