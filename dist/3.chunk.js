webpackJsonp([3,27,29,30],{10:function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=h[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(u(o.parts[r],t))}else{for(var a=[],r=0;r<o.parts.length;r++)a.push(u(o.parts[r],t));h[o.id]={id:o.id,refs:1,parts:a}}}}function i(e,t){for(var n=[],o={},i=0;i<e.length;i++){var r=e[i],a=t.base?r[0]+t.base:r[0],s=r[1],l=r[2],c=r[3],u={css:s,media:l,sourceMap:c};o[a]?o[a].parts.push(u):n.push(o[a]={id:a,parts:[u]})}return n}function r(e,t){var n=b(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=x[x.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),r(e,t),t}function l(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),r(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function u(e,t){var n,o,i,r;if(t.transform&&e.css){if(!(r=t.transform(e.css)))return function(){};e.css=r}if(t.singleton){var c=g++;n=m||(m=s(t)),o=p.bind(null,n,c,!1),i=p.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),o=f.bind(null,n,t),i=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),o=d.bind(null,n),i=function(){a(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}function p(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function d(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t,n){var o=n.css,i=n.sourceMap,r=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||r)&&(o=_(o)),i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([o],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var h={},v=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),b=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),m=null,g=0,x=[],_=n(47);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=v()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=i(e,t);return o(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var s=n[a],l=h[s.id];l.refs--,r.push(l)}if(e){o(i(e,t),t)}for(var a=0;a<r.length;a++){var l=r[a];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete h[l.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},112:function(e,t,n){var o=n(113);"string"==typeof o&&(o=[[e.i,o,""]]);var i={};i.transform=void 0;n(10)(o,i);o.locals&&(e.exports=o.locals)},113:function(e,t,n){t=e.exports=n(9)(void 0),t.push([e.i,"\n.input {\n  margin: 30px 0 5px;\n  position: relative;\n}\n.input--field {\n    border: 0;\n    border-bottom: 1px solid #757575;\n    display: block;\n    font-size: 14px;\n    padding-bottom: 8px;\n    width: 300px;\n}\n.input--field::-webkit-input-placeholder {\n      opacity: 0;\n}\n.input--field:focus {\n      outline: none;\n}\n.input--field:focus ~ .input--bottom-bar::before,\n      .input--field:focus ~ .input--bottom-bar::after {\n        width: 50%;\n}\n.input--field:focus ~ .input--label {\n        color: #4059a9;\n        font-size: 12px;\n        top: -22px;\n}\n.input--field:focus ~ .input--label,\n    .input--field:not(:placeholder-shown) ~ .input--label {\n      font-size: 12px;\n      top: -22px;\n}\n.input--field:invalid {\n      color: #F44336;\n}\n.input--field:invalid .input--bottom-bar::before,\n      .input--field:invalid .input--bottom-bar::after {\n        background: #F44336;\n        width: 50%;\n}\n.input--field:invalid .input--label {\n        color: #F44336;\n        font-size: 12px;\n        top: -22px;\n}\n.input--label {\n    color: #aaaaaa;\n    font-size: 13px;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    transition: .2s ease all;\n}\n.input--bottom-bar {\n    display: block;\n    position: relative;\n    width: 300px;\n}\n.input--bottom-bar::before, .input--bottom-bar::after {\n      background: #4059a9;\n      bottom: 0;\n      content: '';\n      height: 2px;\n      position: absolute;\n      transition: .2s ease all;\n      width: 0;\n}\n.input--bottom-bar::before {\n      left: 50%;\n}\n.input--bottom-bar::after {\n      right: 50%;\n}\n.input--description {\n    color: #4059a9;\n    font-size: 12px;\n}\n.input--description a {\n      color: inherit;\n}\n",""])},114:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{name:String,type:String,label:String,value:[String,Number]},data:function(){return{changeValue:this.value}},methods:{onInput:function(){this.$emit("input",this.name,this.changeValue)},onChange:function(){this.$emit("change",this.name,this.changeValue)}}}},115:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"input"},["text"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.changeValue,expression:"changeValue"}],staticClass:"input--field",attrs:{placeholder:".",type:"text",name:e.name,id:e.name},domProps:{value:e.changeValue,value:e.changeValue},on:{input:[function(t){t.target.composing||(e.changeValue=t.target.value)},e.onInput],change:e.onChange}}):"number"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.changeValue,expression:"changeValue"}],staticClass:"input--field",attrs:{placeholder:".",type:"number",name:e.name,id:e.name},domProps:{value:e.changeValue,value:e.changeValue},on:{input:[function(t){t.target.composing||(e.changeValue=t.target.value)},e.onInput],change:e.onChange}}):"password"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.changeValue,expression:"changeValue"}],staticClass:"input--field",attrs:{placeholder:".",type:"password",name:e.name,id:e.name},domProps:{value:e.changeValue,value:e.changeValue},on:{input:[function(t){t.target.composing||(e.changeValue=t.target.value)},e.onInput],change:e.onChange}}):e._e(),e._v(" "),n("span",{staticClass:"input--bottom-bar"}),e._v(" "),n("label",{staticClass:"input--label"},[e._v(e._s(e.label))])])},i=[],r={render:o,staticRenderFns:i};t.a=r},116:function(e,t,n){var o=n(117);"string"==typeof o&&(o=[[e.i,o,""]]);var i={};i.transform=void 0;n(10)(o,i);o.locals&&(e.exports=o.locals)},117:function(e,t,n){t=e.exports=n(9)(void 0),t.push([e.i,"\n.checkbox--actual {\n  display: block;\n  height: 0;\n  margin: 0;\n  opacity: 0;\n  width: 0;\n}\n.checkbox--actual:checked + .checkbox--label .checkbox--styled {\n    background-color: #009688;\n    border-color: #009688;\n}\n.checkbox--actual:checked + .checkbox--label .checkbox--styled .checkbox--mark {\n      animation: checkmark-expand 140ms ease-out forwards;\n}\n.checkbox--label {\n  cursor: pointer;\n}\n.checkbox--styled {\n  border: solid 2px #5a5a5a;\n  border-radius: 2px;\n  display: inline-block;\n  height: 18px;\n  margin: 5px;\n  position: relative;\n  transition: background-color 140ms, border-color 140ms;\n  vertical-align: middle;\n  width: 18px;\n}\n.checkbox--mark {\n  border-top: 0;\n  border-left: 0;\n  border-right: solid 2px #fff;\n  border-bottom: solid 2px #fff;\n  box-sizing: initial;\n  height: 0;\n  left: 6px;\n  position: absolute;\n  top: 9px;\n  transform: rotate(45deg);\n  width: 0;\n}\n@keyframes checkmark-expand {\n0% {\n    height: 0;\n    left: 6px;\n    top: 9px;\n    width: 0;\n}\n100% {\n    height: 10px;\n    left: 4px;\n    top: -1px;\n    width: 5px;\n}\n}\n",""])},118:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{name:String,value:[String,Boolean],label:String,checked:Boolean},methods:{onChange:function(){this.$emit("change",this.name,this.value)}}}},119:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"checkbox"},[n("input",{staticClass:"checkbox--actual",attrs:{type:"checkbox",id:e.name},domProps:{value:e.value,checked:e.checked},on:{change:e.onChange}}),e._v(" "),n("label",{staticClass:"checkbox--label",attrs:{for:e.name}},[e._m(0),e._v("\n    "+e._s(e.label)+"\n  ")])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"checkbox--styled"},[n("div",{staticClass:"checkbox--mark"})])}],r={render:o,staticRenderFns:i};t.a=r},12:function(e,t,n){"use strict";function o(e){n(112)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(114),r=n.n(i),a=n(115),s=n(8),l=o,c=s(r.a,a.a,l,null,null);t.default=c.exports},13:function(e,t,n){"use strict";function o(e){n(116)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(118),r=n.n(i),a=n(119),s=n(8),l=o,c=s(r.a,a.a,l,null,null);t.default=c.exports},144:function(e,t,n){var o=n(145);"string"==typeof o&&(o=[[e.i,o,""]]);var i={};i.transform=void 0;n(10)(o,i);o.locals&&(e.exports=o.locals)},145:function(e,t,n){t=e.exports=n(9)(void 0),t.push([e.i,"\n.select {\n  margin: 10px 0 0;\n  width: 300px;\n}\n.select__label {\n    color: #aaaaaa;\n    display: block;\n    font-size: 12px;\n}\n.select__bar {\n    display: block;\n    height: 30px;\n    line-height: 30px;\n    position: relative;\n    border-bottom: 1px solid #757575;\n}\n.select__bar:after {\n      border-left: 0.4em solid transparent;\n      border-right: 0.4em solid transparent;\n      border-top: 0.5em solid #737373;\n      content: '';\n      display: block;\n      height: 0px;\n      margin-top: -0.2em;\n      position: absolute;\n      right: 0.5em;\n      top: 50%;\n      width: 0px;\n}\n.select__list {\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n    background-color: #fff;\n    list-style: none;\n    max-height: 500px;\n    overflow-y: scroll;\n    padding: 8px 0;\n    position: absolute;\n    top: -21px;\n    width: 300px;\n    z-index: 100;\n}\n.select__list-item {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    height: 48px;\n    line-height: 48px;\n    padding: 0 16px;\n}\n.select__list-item:hover, .select__list-item.selected {\n      background-color: rgba(153, 153, 153, 0.2);\n}\n",""])},146:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{name:String,value:String,label:String,options:Array},data:function(){return{changeValue:this.value,active:!1}},watch:{changeValue:function(){this.$emit("change",this.name,this.changeValue)}},methods:{showList:function(){var e=this;this.active=!0,this.$nextTick(function(){e.repositionList(),setTimeout(function(){document.querySelector("body").addEventListener("click",e.hideList)},100)})},repositionList:function(){var e=this.$el.querySelector(".select__bar"),t=this.$el.querySelector(".select__list"),n=this.$el.querySelector(".select__list-item.selected"),o=n.offsetHeight;t.style.top=e.offsetTop-o/2+10+"px",t.scrollHeight>t.offsetHeight&&(t.scrollTop=n.offsetTop-10)},hideList:function(){var e=this;document.querySelector("body").removeEventListener("click",this.hideList),setTimeout(function(){e.active=!1},100)},setValue:function(e){this.changeValue=e,this.active=!1}}}},147:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"select"},[n("label",{staticClass:"select__label",on:{click:e.showList}},[e._v(e._s(e.label))]),e._v(" "),n("span",{staticClass:"select__bar",on:{click:e.showList}},[e._v("\n    "+e._s(e.changeValue)+"\n  ")]),e._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.active,expression:"active"}],staticClass:"select__list"},e._l(e.options,function(t){return n("li",{class:["select__list-item ripple",{selected:t===e.changeValue}],on:{click:function(n){e.setValue(t)}}},[e._v(e._s(t))])}))])},i=[],r={render:o,staticRenderFns:i};t.a=r},17:function(e,t,n){"use strict";function o(e){n(144)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(146),r=n.n(i),a=n(147),s=n(8),l=o,c=s(r.a,a.a,l,null,null);t.default=c.exports},177:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=n(12),s=o(a),l=n(13),c=o(l),u=n(17),p=o(u);t.default={components:{vInput:s.default,vSelect:p.default,vCheckbox:c.default},data:function(){return{sortingOptions:["Hot","New","Rising","Top - Hour","Top - Day","Top - Week","Top - Month","Top - Year","Top - All Time","Controversial - Hour","Controversial - Day","Controversial - Week","Controversial - Months","Controversial - Year","Controversial - All Time"]}},computed:i({},(0,r.mapState)({services:"services",service:function(e){return e.services.find(function(e){return 11===e.id})}})),methods:{onChange:function(e,t){this.saveData(this.service.id,e,t)},onCheckboxChange:function(e,t){this.saveData(this.service.id,e,!this.service.nsfw)}}}},178:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.service?n("div",{staticClass:"options-reddit"},[n("v-input",{attrs:{type:"text",value:e.service.subreddit,name:"redditSubreddit",label:"Subreddit"},on:{change:e.onChange}}),e._v(" "),n("v-checkbox",{attrs:{checked:e.service.nsfw,name:"redditNsfw",label:"Show NSFW"},on:{change:e.onCheckboxChange}}),e._v(" "),n("v-select",{attrs:{options:e.sortingOptions,value:e.service.sorting,name:"redditSorting",label:"Sorting"},on:{change:e.onChange}}),e._v(" "),n("v-input",{attrs:{type:"number",value:e.service.panelWidth,name:"redditWidth",label:"Panel width in px"},on:{change:e.onChange}}),e._v(" "),n("v-input",{attrs:{type:"number",value:e.service.refresh,name:"redditRefresh",label:"Refresh rate (in minutes)"},on:{change:e.onChange}})],1):e._e()},i=[],r={render:o,staticRenderFns:i};t.a=r},29:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(177),i=n.n(o),r=n(178),a=n(8),s=a(i.a,r.a,null,null,null);t.default=s.exports},47:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))return e;var r;return r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")"})}},8:function(e,t){e.exports=function(e,t,n,o,i){var r,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(r=e,a=e.default);var l="function"==typeof a?a.options:a;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),o&&(l._scopeId=o);var c;if(i?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=c):n&&(c=n),c){var u=l.functional,p=u?l.render:l.beforeCreate;u?l.render=function(e,t){return c.call(t),p(e,t)}:l.beforeCreate=p?[].concat(p,c):[c]}return{esModule:r,exports:a,options:l}}},9:function(e,t){function n(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=o(i);return[n].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([r]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}}});