webpackJsonp([20],{10:function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=v[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(u(r.parts[o],e))}else{for(var a=[],o=0;o<r.parts.length;o++)a.push(u(r.parts[o],e));v[r.id]={id:r.id,refs:1,parts:a}}}}function i(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=e.base?o[0]+e.base:o[0],s=o[1],l=o[2],c=o[3],u={css:s,media:l,sourceMap:c};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}function o(t,e){var n=m(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=x[x.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),x.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=x.indexOf(t);e>=0&&x.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",c(e,t.attrs),o(t,e),e}function l(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",c(e,t.attrs),o(t,e),e}function c(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var c=g++;n=b||(b=s(e)),r=f.bind(null,n,c,!1),i=f.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(e),r=d.bind(null,n,e),i=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),r=p.bind(null,n),i=function(){a(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}function f(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function p(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function d(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=y(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var v={},h=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),m=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),b=null,g=0,x=[],y=n(47);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=h()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=i(t,e);return r(n,e),function(t){for(var o=[],a=0;a<n.length;a++){var s=n[a],l=v[s.id];l.refs--,o.push(l)}if(t){r(i(t,e),e)}for(var a=0;a<o.length;a++){var l=o[a];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete v[l.id]}}}};var w=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},153:function(t,e,n){var r=n(154);"string"==typeof r&&(r=[[t.i,r,""]]);var i={};i.transform=void 0;n(10)(r,i);r.locals&&(t.exports=r.locals)},154:function(t,e,n){e=t.exports=n(9)(void 0),e.push([t.i,"\n.panel-item-content {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 100%;\n}\n.panel-item-content--image {\n    background-position: 50%;\n    background-size: cover;\n    border-radius: 50%;\n    height: 40px;\n    margin-right: 16px;\n    width: 40px;\n}\n.panel-item-content--titles {\n    display: flex;\n    flex: 1;\n    flex-wrap: wrap;\n    min-width: 0;\n    width: 100%;\n}\n.panel-item-content--title {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    flex: 1 0 10%;\n    font-size: 13px;\n}\n.panel-item-content--extra-title {\n    font-size: 11px;\n    padding-left: 8px;\n}\n.panel-item-content--subtitle-url {\n    color: rgba(0, 0, 0, 0.54);\n    text-decoration: none;\n}\n.panel-item-content--subtitle-url:hover {\n      text-decoration: underline;\n}\n.panel-item-content--subtitle {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    color: rgba(0, 0, 0, 0.54);\n    flex-basis: 100%;\n}\n.panel-item-content--icon {\n    background-image: url("+n(155)+");\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n    margin-left: 8px;\n    right: 0;\n    transition: background-image 300ms ease;\n    width: 12px;\n}\n",""])},155:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjOWU5ZTllIiBkPSJNMTYuNTkgOC41OUwxMiAxMy4xNyA3LjQxIDguNTkgNiAxMGw2IDYgNi02eiIvPjwvc3ZnPg=="},156:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:String,subtitle:String,subtitleUrl:String,extraTitle:String,hasCollapse:Boolean,image:[String,Object]}}},157:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel-item-content"},[t.image?n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.image,expression:"image",arg:"background-image"}],staticClass:"panel-item-content--image"}):t._e(),t._v(" "),n("div",{staticClass:"panel-item-content--titles"},[n("div",{staticClass:"panel-item-content--title",attrs:{title:t.title.length>60?t.title:""}},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),t.extraTitle?n("div",{staticClass:"panel-item-content--extra-title"},[t._v("\n      "+t._s(t.extraTitle)+"\n    ")]):t.hasCollapse?n("div",{staticClass:"panel-item-content--icon"}):t._e(),t._v(" "),t.subtitle?[n("div",{staticClass:"panel-item-content--subtitle",attrs:{title:t.subtitle.length>70?t.subtitle:""}},[t.subtitleUrl?n("a",{staticClass:"panel-item-content--subtitle-url",attrs:{href:t.subtitleUrl}},[t._v("\n          "+t._s(t.subtitle)+"\n        ")]):[t._v("\n          "+t._s(t.subtitle)+"\n        ")]],2)]:t._e()],2)])},i=[],o={render:r,staticRenderFns:i};e.a=o},19:function(t,e,n){"use strict";function r(t){n(153)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(156),o=n.n(i),a=n(157),s=n(8),l=r,c=s(o.a,a.a,l,null,null);e.default=c.exports},47:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))return t;var o;return o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")"})}},8:function(t,e){t.exports=function(t,e,n,r,i){var o,a=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(o=t,a=t.default);var l="function"==typeof a?a.options:a;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),r&&(l._scopeId=r);var c;if(i?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=c):n&&(c=n),c){var u=l.functional,f=u?l.render:l.beforeCreate;u?l.render=function(t,e){return c.call(e),f(t,e)}:l.beforeCreate=f?[].concat(f,c):[c]}return{esModule:o,exports:a,options:l}}},9:function(t,e){function n(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=r(i);return[n].concat(i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}}});