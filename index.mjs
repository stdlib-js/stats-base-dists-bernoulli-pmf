// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";function r(t,e){return n(t)||n(e)||e<0||e>1?NaN:0===t?1-e:1===t?e:0}function s(t){return n(t)||t<0||t>1?e(NaN):function(e){if(n(e))return NaN;if(0===e)return 1-t;if(1===e)return t;return 0}}t(r,"factory",s);export{r as default,s as factory};
//# sourceMappingURL=index.mjs.map
