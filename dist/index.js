"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var a=n(function(l,u){
var i=require('@stdlib/math-base-assert-is-nan/dist');function q(e,r){return i(e)||i(r)||r<0||r>1?NaN:e===0?1-r:e===1?r:0}u.exports=q
});var c=n(function(F,s){
var v=require('@stdlib/utils-constant-function/dist'),f=require('@stdlib/math-base-assert-is-nan/dist');function N(e){if(f(e)||e<0||e>1)return v(NaN);return r;function r(t){return f(t)?NaN:t===0?1-e:t===1?e:0}}s.exports=N
});var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=a(),m=c();y(o,"factory",m);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
