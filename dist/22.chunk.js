webpackJsonp([22],{10:function(e,n,t){function r(e,n){for(var t=0;t<e.length;t++){var r=e[t],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],n))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(u(r.parts[i],n));h[r.id]={id:r.id,refs:1,parts:a}}}}function o(e,n){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],a=n.base?i[0]+n.base:i[0],s=i[1],c=i[2],l=i[3],u={css:s,media:c,sourceMap:l};r[a]?r[a].parts.push(u):t.push(r[a]={id:a,parts:[u]})}return t}function i(e,n){var t=v(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=m[m.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),m.push(n);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(n)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=m.indexOf(e);n>=0&&m.splice(n,1)}function s(e){var n=document.createElement("style");return e.attrs.type="text/css",l(n,e.attrs),i(e,n),n}function c(e){var n=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",l(n,e.attrs),i(e,n),n}function l(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function u(e,n){var t,r,o,i;if(n.transform&&e.css){if(!(i=n.transform(e.css)))return function(){};e.css=i}if(n.singleton){var l=y++;t=b||(b=s(n)),r=d.bind(null,t,l,!1),o=d.bind(null,t,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=c(n),r=f.bind(null,t,n),o=function(){a(t),t.href&&URL.revokeObjectURL(t.href)}):(t=s(n),r=p.bind(null,t),o=function(){a(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}function d(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=S(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function p(e,n){var t=n.css,r=n.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}function f(e,n,t){var r=t.css,o=t.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=x(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var h={},g=function(e){var n;return function(){return void 0===n&&(n=e.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),v=function(e){var n={};return function(t){return void 0===n[t]&&(n[t]=e.call(this,t)),n[t]}}(function(e){return document.querySelector(e)}),b=null,y=0,m=[],x=t(47);e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");n=n||{},n.attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||(n.singleton=g()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=o(e,n);return r(t,n),function(e){for(var i=[],a=0;a<t.length;a++){var s=t[a],c=h[s.id];c.refs--,i.push(c)}if(e){r(o(e,n),n)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete h[c.id]}}}};var S=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},3:function(e,n,t){"use strict";function r(e){t(49)}Object.defineProperty(n,"__esModule",{value:!0});var o=t(51),i=t.n(o),a=t(52),s=t(8),c=r,l=s(i.a,a.a,c,null,null);n.default=l.exports},47:function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var o=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},49:function(e,n,t){var r=t(50);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;t(10)(r,o);r.locals&&(e.exports=r.locals)},50:function(e,n,t){n=e.exports=t(9)(void 0),n.push([e.i,"\n.refresh-button {\n  border-radius: 100%;\n  height: 45px;\n  margin: 12px 2px;\n  padding: 8px;\n  width: 45px;\n}\n.panel-header {\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n  height: 128px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 1;\n}\n.panel-header .panel-header--background {\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n}\n.panel-header .panel-header--background1, .panel-header .panel-header--background2 {\n      background-repeat: no-repeat;\n      height: 100%;\n      position: absolute;\n      width: 100%;\n}\n.panel-header .panel-header--background2 {\n      background-position: right -20px center;\n      background-size: auto 60px;\n}\n.panel-header .panel-header--foreground {\n    color: #fff;\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 1;\n}\n.panel-header .panel-header--foreground-top,\n  .panel-header .panel-header--foreground-bottom {\n    float: left;\n    height: 64px;\n    width: 100%;\n}\n.panel-header .panel-header--foreground-bottom {\n    padding: 0 16px;\n}\n.panel-header .panel-header--url {\n    color: #fff;\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 64px;\n    text-decoration: none;\n}\n",""])},51:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(2),o=function(e){return e&&e.__esModule?e:{default:e}}(r);n.default={components:{vSpinner:(0,o.default)("v-spinner")},props:{scrollTop:Number,service:Object,loading:Boolean},data:function(){return{panelHeaderStyling:{height:"128px"},background2ScrollStyling:{opacity:1,display:"block"},foregroundTopStyling:{height:"64px",opacity:1,display:"block"}}},watch:{scrollTop:function(e){var n=1-e*(1/64);e<64?(this.panelHeaderStyling.height=128-e+"px",this.foregroundTopStyling.height=64-e+"px",this.foregroundTopStyling.opacity=n,this.background2ScrollStyling.opacity=n,this.foregroundTopStyling.display="block",this.background2ScrollStyling.display="block"):(this.panelHeaderStyling.height="64px",this.foregroundTopStyling.height="0px",this.foregroundTopStyling.display="none",this.background2ScrollStyling.display="none")}},computed:{background1Styling:function(){return{"background-color":this.service.color}},background2Styling:function(){return Object.assign({"background-color":this.service.color,"background-image":"url("+this.service.logo+")"},this.background2ScrollStyling)}},methods:{triggerRefresh:function(){this.$emit("refresh")}}}},52:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"panel-header",style:e.panelHeaderStyling},[r("div",{staticClass:"panel-header--background"},[r("div",{staticClass:"panel-header--background1",style:e.background1Styling}),e._v(" "),r("div",{staticClass:"panel-header--background2",style:e.background2Styling})]),e._v(" "),r("div",{staticClass:"panel-header--foreground"},[r("div",{staticClass:"panel-header--foreground-top",style:e.foregroundTopStyling},[r("div",{staticClass:"refresh-button ripple",on:{click:e.triggerRefresh}},[r("transition",{attrs:{name:"loader",mode:"out-in"}},[e.loading?r("v-spinner",{attrs:{border:5,width:25}}):r("img",{attrs:{src:t(53),alt:"Refresh "+e.service.name}})],1)],1)]),e._v(" "),r("div",{staticClass:"panel-header--foreground-bottom"},[r("a",{staticClass:"panel-header--url",attrs:{href:e.service.url}},[e._v(e._s(e.service.name))])])])])},o=[],i={render:r,staticRenderFns:o};n.a=i},53:function(e,n){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9Ii0yOTMgMzg1IDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IC0yOTMgMzg1IDI0IDI0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZGRkZGO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTI3NS40LDM5MS40Yy0xLjQtMS41LTMuNC0yLjQtNS42LTIuNGMtNC40LDAtOCwzLjYtOCw4czMuNiw4LDgsOGMzLjcsMCw2LjgtMi41LDcuNy02aC0yLjENCgljLTAuOCwyLjMtMyw0LTUuNiw0Yy0zLjMsMC02LTIuNy02LTZzMi43LTYsNi02YzEuNywwLDMuMSwwLjcsNC4yLDEuOGwtMy4yLDMuMmg3di03TC0yNzUuNCwzOTEuNHoiLz4NCjwvc3ZnPg0K"},8:function(e,n){e.exports=function(e,n,t,r,o){var i,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,a=e.default);var c="function"==typeof a?a.options:a;n&&(c.render=n.render,c.staticRenderFns=n.staticRenderFns),r&&(c._scopeId=r);var l;if(o?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=l):t&&(l=t),l){var u=c.functional,d=u?c.render:c.beforeCreate;u?c.render=function(e,n){return l.call(n),d(e,n)}:c.beforeCreate=d?[].concat(d,l):[l]}return{esModule:i,exports:a,options:c}}},9:function(e,n){function t(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var i=r(o);return[t].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[t].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var r=t(n,e);return n[2]?"@media "+n[2]+"{"+r+"}":r}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}}});