!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["React"],t);else{var r="object"==typeof exports?t(require("react")):t(e.React);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(t,r){t.exports=e},function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=function(e,t){switch(t.type){case"FieldChange":return u({},e,{fields:t.fields});case"FormSubmit":return u({},e,{fields:t.fields,isValid:t.isValid,isSubmitting:!1});case"IsSubmitting":return u({},e,{isSubmitting:t.isSubmitting?t.isSubmitting:!e.isSubmitting});default:throw new Error("Unexpected action")}};function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){return!!e}function b(e){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)}function d(e,t){return e.length>=t.min}function y(e){return/^[A-Za-z ]+$/.test(e)}function O(e){return!!/^[a-zA-Z0-9_][a-zA-Z]+[0-9]+$/.test(e)}function g(e){return!!new RegExp("^[0-9]+$").test(e)}function m(e){try{return new URL(e),!0}catch(e){return!1}}var j=function(e,t){var r={required:p,email:b,minLength:d,url:m,numbers:g,letters:y,username:O};return r[t.type]?r[t.type](e,null==t?void 0:t.data):t.validateFunction?t.validateFunction[t.type](e,t):void 0};function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var u,c=e[Symbol.iterator]();!(n=(u=c.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(i)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var S=function(e){var t=e.formFields,r=e.afterSubmit,n=P(i.a.useReducer(a,{fields:w({},t),isValid:!0,isSubmitting:!1}),2),o=n[0],u=n[1];return{handleChange:function(e){var t=e.target,r=t.name,n=t.value;o.fields[r].value=n;var i,c,a,s,l=(i=o.fields[r],c={},a=[],s=!0,i.constraints.map((function(e){j(i.value,e)&&s?(a.push(!0),c=f({},i,{isValid:!0,errorMessage:""})):s&&(a.push(!1),s=!1,c=f({},i,{isValid:!1,errorMessage:e.message}))})),i.constraints.length<=0&&(c=f({},i)),c);u({type:"FieldChange",fields:w({},o.fields,h({},r,l))})},handleSubmit:function(e){e.preventDefault(),u({type:"IsSubmitting",isSubmitting:!0});var t=function(e){var t={},r=[];return Object.keys(e).map((function(n){var i=!0;e[n].constraints.map((function(o){j(e[n].value,o)&&i?(r.push(!0),t[n]=f({},e[n],{isValid:!0,errorMessage:""})):i&&(r.push(!1),t[n]=f({},e[n],{isValid:!1,errorMessage:o.message}),i=!1)})),e[n].constraints.length<=0&&(t[n]=f({},e[n]))})),{isValid:!r.includes(!1),fields:t}}(o.fields),n=t.isValid,i=t.fields;u({type:"FormSubmit",fields:i,isValid:n}),n&&r(n)},fields:o.fields,isValidForm:o.isValid,isSubmitting:o.isSubmitting}};t.default=S}])}));