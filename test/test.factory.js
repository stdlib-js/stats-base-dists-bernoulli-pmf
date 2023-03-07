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

var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var abs = require( '@stdlib/math-base-special-abs' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var EPS = require( '@stdlib/constants-float64-eps' );
var factory = require( './../lib/factory.js' );


// FIXTURES //

var smallP = require( './fixtures/julia/small_p.json' );
var largeP = require( './fixtures/julia/large_p.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	var pmf = factory( 0.5 );
	t.equal( typeof pmf, 'function', 'returns a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the created function returns `NaN`', function test( t ) {
	var pmf;
	var y;

	pmf = factory( 0.5 );
	y = pmf( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	pmf = factory( NaN );
	y = pmf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a finite `p`, the function returns a function which returns `0` when provided `+infinity` for `x`', function test( t ) {
	var pmf;
	var y;

	pmf = factory( 1.0 );
	y = pmf( PINF );
	t.equal( y, 0.0, 'returns 0' );

	t.end();
});

tape( 'if provided a finite `p`, the function returns a function which returns `0` when provided a negative integer for `x`', function test( t ) {
	var pmf;
	var y;

	pmf = factory( 0.4 );
	y = pmf( -4.0 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( -1.0 );
	t.equal( y, 0.0, 'returns 0' );

	t.end();
});

tape( 'if provided a finite `p`, the function returns a function which returns `0` when provided a non-integer for `x`', function test( t ) {
	var pmf;
	var y;

	pmf = factory( 0.4 );
	y = pmf( 1.3 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( 1.4 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( 3.2 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( 4.8 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( -1.2 );
	t.equal( y, 0.0, 'returns 0' );

	t.end();
});

tape( 'if provided a `p` outside of `[0,1]`, the created function always returns `NaN`', function test( t ) {
	var pmf;
	var y;

	pmf = factory( -1.5 );

	y = pmf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = pmf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	pmf = factory( 1.2 );

	y = pmf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = pmf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the created function evaluates the pmf for `x` given small `p`', function test( t ) {
	var expected;
	var delta;
	var pmf;
	var tol;
	var i;
	var p;
	var x;
	var y;

	expected = smallP.expected;
	x = smallP.x;
	p = smallP.p;
	for ( i = 0; i < x.length; i++ ) {
		pmf = factory( p[i] );
		y = pmf( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+'. p: '+p[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 2.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. p: '+p[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the pmf for `x` given large `p`', function test( t ) {
	var expected;
	var delta;
	var pmf;
	var tol;
	var p;
	var x;
	var y;
	var i;

	expected = largeP.expected;
	x = largeP.x;
	p = largeP.p;
	for ( i = 0; i < x.length; i++ ) {
		pmf = factory( p[i] );
		y = pmf( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+'. p: '+p[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.5 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. p: '+p[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
