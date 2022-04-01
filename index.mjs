// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";var e=n;var s=r,i=n;var a=function(t,n){return e(t)||e(n)||n<0||n>1?NaN:0===t?1-n:1===t?n:0},o=function(t){return i(t)||t<0||t>1?s(NaN):function(n){if(i(n))return NaN;if(0===n)return 1-t;if(1===n)return t;return 0}};t(a,"factory",o);var d=a;export{d as default,o as factory};
//# sourceMappingURL=index.mjs.map
