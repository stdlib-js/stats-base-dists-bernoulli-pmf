/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var pkg = require( './../package.json' ).name;
var pmf = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var p;
	var x;
	var y;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = round( randu()*3.0 );
		p = randu();
		y = pmf( x, p );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':factory', function benchmark( b ) {
	var mypmf;
	var p;
	var x;
	var y;
	var i;

	p = 0.3;
	mypmf = pmf.factory( p );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = randu() * 3.0;
		y = mypmf( x );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
