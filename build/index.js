!function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=0)}([function(t,r,e){"use strict";e.r(r);var n=(t,r)=>{let e;return t.some((function(t,n){return e=n,r(t)}))?e:-1};var o=(t,r,e)=>t.concat(r.filter(r=>-1===n(t,t=>e(t,r))));var u=function(t){switch(t){case"":case 0:case"0":case null:case!1:case void 0===t:return!0;default:return!1}},i=function(t){return"string"==typeof t?t:Array.isArray(t)?t.join("/"):""};function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function s(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var f=function(t){return Array.isArray(t)?t.reduce((function(t,r){return function(t){if(u(t))throw new Error("UserInfo must be not null or undefined.");if(!Object.defineProperty(t,"name"))throw new Error("Query name must be non-undefined.");if(!Object.defineProperty(t,"value"))throw new Error("Query value must be non-undefined.")}(r),t.push(function(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?a(Object(e),!0).forEach((function(r){s(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}({},r)),t}),[]):"object"===c(t)?t:void 0};function p(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?p(Object(e),!0).forEach((function(r){y(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function y(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function b(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var h=function(){function t(r,e){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.withoutHost=!e||e.withoutHost,this.parts={host:"",path:"",params:[]},r&&this.host(r)}var r,e,n;return r=t,(e=[{key:"host",value:function(t){return this.withoutHost||function(t){if(!t)throw new Error("Host must be not null or undefined.")}(t),this.parts=l({},this.parts,{host:t}),this}},{key:"path",value:function(t){return function(t){if("string"!=typeof t&&!Array.isArray(t))throw new Error("Path must be a string or an array of strings.")}(t),this.parts=l({},this.parts,{path:i(t)}),this}},{key:"query",value:function(t){var r=f(t),e=Array.isArray(r)?o(this.parts.params,r,(function(t,r){return t.name===r.name})):o(this.parts.params,[r],(function(t,r){return t.name===r.name}));return this.parts=l({},this.parts,{params:e}),this}},{key:"param",value:function(t,r){return this.query({name:r}),this}},{key:"build",value:function(){var t=function(t){return u(t)?"":"".concat(t)}(this.parts.host),r=function(t){return u(t)?"":"".concat(t)}(this.parts.path),e=this.parts.params.map((function(t){var r=Object.keys(t)[0],e=t[r];return"".concat([r],"=").concat(e,"&")})).reduce((function(t,r){return t+r}),"").replace(/&+$/,"");return"".concat(t,"/").concat(r).concat(e.trim().length>0?"?":"").concat(e)}},{key:"toString",value:function(){return this.build()}}])&&b(r.prototype,e),n&&b(r,n),t}();e.d(r,"UrlBuilder",(function(){return h}))}]);