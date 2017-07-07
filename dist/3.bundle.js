webpackJsonp([3],{12:function(t,n,o){"use strict";function e(t){o(19)}Object.defineProperty(n,"__esModule",{value:!0});var i=o(21),M=o.n(i),a=o(22),u=o(0),A=e,s=u(M.a,a.a,A,null,null);n.default=s.exports},176:function(t,n,o){"use strict";function e(t){o(214)}Object.defineProperty(n,"__esModule",{value:!0});var i=o(216),M=o.n(i),a=o(218),u=o(0),A=e,s=u(M.a,a.a,A,null,null);n.default=s.exports},19:function(t,n,o){var e=o(20);"string"==typeof e&&(e=[[t.i,e,""]]);var i={};i.transform=void 0;o(2)(e,i);e.locals&&(t.exports=e.locals)},20:function(t,n,o){n=t.exports=o(1)(void 0),n.push([t.i,"\n.flat-button,\n.raised-button {\n  border: 0;\n  color: #000;\n  font-size: 14px;\n  font-weight: medium;\n  height: 36px;\n  line-height: 36px;\n  margin: 6px 4px;\n  min-width: 72px;\n  outline: none;\n  padding: 0 8px;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n.flat-button:hover,\n  .raised-button:hover {\n    background-color: rgba(153, 153, 153, 0.2);\n    text-decoration: none;\n}\n.raised-button {\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n  transition: box-shadow 200ms;\n}\n.raised-button:active {\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.3);\n}\n.flat-button {\n  float: right;\n}\n.icon-button:hover {\n  background-color: rgba(153, 153, 153, 0.2);\n  cursor: pointer;\n  transition: background-color 150ms;\n}\n",""])},21:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{type:{type:String,default:"flat"},text:String},computed:{typeClass:function(){return this.type+"-button"}}}},214:function(t,n,o){var e=o(215);"string"==typeof e&&(e=[[t.i,e,""]]);var i={};i.transform=void 0;o(2)(e,i);e.locals&&(t.exports=e.locals)},215:function(t,n,o){n=t.exports=o(1)(void 0),n.push([t.i,"\n.options-support {\n  padding-top: 10px;\n}\n.options-support__button.raised-button {\n    background-color: #fff;\n    margin-left: 0;\n    vertical-align: middle;\n}\n.options-support__button.raised-button img {\n      height: 75%;\n      vertical-align: middle;\n}\n.options-support h2 {\n    color: rgba(0, 0, 0, 0.54);\n    font-family: 'Roboto', 'Helvetica';\n    font-size: 13px;\n    font-weight: 500;\n    margin: 0 0 5px;\n}\n.options-support p {\n    font-size: 14px;\n    margin: 0 0 20px;\n}\n",""])},216:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=o(12),i=function(t){return t&&t.__esModule?t:{default:t}}(e);n.default={components:{vButton:i.default},data:function(){return{paypalImage:o(217)}}}},217:function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMTE5IiBoZWlnaHQ9IjI1MDAiIHZpZXdCb3g9IjAgMCAyNTYgMzAyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+PHBhdGggZmlsbD0iIzI3MzQ2QSIgZD0iTTIxNy4yIDIzLjVDMjAzLjIgNy41IDE3OCAuOCAxNDUuOC44SDUyLjNBMTMuNCAxMy40IDAgMCAwIDM5IDEyTDAgMjU5Yy0uNiA1IDMgOS40IDggOS40SDY2bDE0LjUtOTItLjQgM2MxLTYuNiA2LjQtMTEuNCAxMy0xMS40aDI3LjVjNTQgMCA5Ni0yMiAxMDguNC04NS4zbDEtNS40Yy0xLjctMS0xLjctMSAwIDAgMy41LTIzLjQtLjItMzkuNC0xMi44LTUzLjgiLz48cGF0aCBmaWxsPSIjMjczNDZBIiBkPSJNMTAyLjQgNjguOGExMS43IDExLjcgMCAwIDEgNS0xSDE4MWM4LjYgMCAxNi43LjUgMjQgMS43YTEwMS42IDEwMS42IDAgMCAxIDYuMyAxIDkwIDkwIDAgMCAxIDguNyAyLjVjMy43IDEuMiA3IDIuNiAxMC4yIDQuMyAzLjUtMjMuNC0uMi0zOS40LTEyLjgtNTMuOEMyMDMuMiA3LjUgMTc4IC44IDE0NS44LjhINTIuM0M0NS43LjggNDAgNS42IDM5IDEyTDAgMjU5Yy0uNiA1IDMgOS4zIDggOS4zSDY2bDMwLTE5MC43YTExLjcgMTEuNyAwIDAgMSA2LjYtOC44eiIvPjxwYXRoIGZpbGw9IiMyNzkwQzMiIGQ9Ik0yMjkgODIuN0MyMTYuNSAxNDYgMTc0LjMgMTY4IDEyMC40IDE2OEg5M2MtNi42IDAtMTIgNC44LTEzIDExLjNMNjEuNyAyOTMuNmMtLjcgNC4zIDIuNiA4IDcgOGg0OC42QTExLjcgMTEuNyAwIDAgMCAxMjkgMjkybC41LTIuNiA5LTU4LjIuNy0zLjJhMTEuNyAxMS43IDAgMCAxIDExLjYtOS44aDcuM2M0Ny4yIDAgODQtMTkuMiA5NS03NC42IDQuNC0yMyAyLTQyLjUtOS44LTU2LTMuNi00LjItOC03LjYtMTMuMy0xMC4zbC0xIDUuNHoiLz48cGF0aCBmaWxsPSIjMUYyNjRGIiBkPSJNMjE3IDcyYTkwIDkwIDAgMCAwLTYtMS40IDExMCAxMTAgMCAwIDAtNi0xYy03LjUtMS4zLTE1LjUtMi0yNC4yLTJoLTczLjNhMTEuNiAxMS42IDAgMCAwLTUgMS4yIDExLjcgMTEuNyAwIDAgMC02LjYgOC44bC0xNS43IDk4LjgtLjQgM2MxLTYuNiA2LjQtMTEuNCAxMy0xMS40aDI3LjVjNTQgMCA5Ni0yMiAxMDguNC04NS4zbDEtNS40Yy0zLjMtMS43LTYuNi0zLTEwLjMtNC4zYTgzLjMgODMuMyAwIDAgMC0yLjctMSIvPjwvc3ZnPgo="},218:function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"options-support"},[t._m(0),t._v(" "),o("h2",[t._v("Changelog")]),t._v(" "),t._m(1),t._v(" "),o("h2",[t._v("Questions")]),t._v(" "),o("p",[t._v("\n    If you have any questions or ideas, shoot me a message:"),o("br"),t._v(" "),o("v-button",{staticClass:"options-support__button",attrs:{type:"raised",text:"Send me an e-mail",href:"mailto:johveck@gmail.com"}})],1),t._v(" "),o("h2",[t._v("Donation")]),t._v(" "),o("p",[t._v("\n    If you like JusTab, consider buying me a beer!\n  ")]),t._v(" "),o("form",{attrs:{action:"https://www.paypal.com/cgi-bin/webscr",method:"post",target:"_top"}},[o("input",{attrs:{type:"hidden",name:"cmd",value:"_s-xclick"}}),t._v(" "),o("input",{attrs:{type:"hidden",name:"encrypted",value:"-----BEGIN PKCS7-----MIIHRwYJKoZIhvcNAQcEoIIHODCCBzQCAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYBDjuxTD4jn901fjGIq4yjzxI7o+MF/V3zQAe/h1rwWkOPyG+QsKb3J9MOocDkXUQ4IKDEgB54sG6Qo3M7pwuBj7DEwOknyUVkZhfJD77gwm6Oer5XsxD62vYu6/ZFL2LkDMpMXG5/GKGRBqPRTy+wRzjXOYm58o0NYcNDRL1q3YDELMAkGBSsOAwIaBQAwgcQGCSqGSIb3DQEHATAUBggqhkiG9w0DBwQImjCp2pkuNxCAgaBReyUqMbuaF3AwfbFSFwHGLAJADkrPSypYnmY3GDy/cXHBAoqmueekOsLGzntWoNdE87TgjhjU/SWAIF5rvjtXXGLuiplUAU86auVAGhhlpp/ikYwJHokjSdJq3fBtZYHL9U+gw5YrqJ3Th3IFYpXq1bf9R47qUhN6KmJvkMpph03jqcDyoY2dNz7NbW9/MMiu+O2QZ4pcT6OluOWnqBM2oIIDhzCCA4MwggLsoAMCAQICAQAwDQYJKoZIhvcNAQEFBQAwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tMB4XDTA0MDIxMzEwMTMxNVoXDTM1MDIxMzEwMTMxNVowgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBR07d/ETMS1ycjtkpkvjXZe9k+6CieLuLsPumsJ7QC1odNz3sJiCbs2wC0nLE0uLGaEtXynIgRqIddYCHx88pb5HTXv4SZeuv0Rqq4+axW9PLAAATU8w04qqjaSXgbGLP3NmohqM6bV9kZZwZLR/klDaQGo1u9uDb9lr4Yn+rBQIDAQABo4HuMIHrMB0GA1UdDgQWBBSWn3y7xm8XvVk/UtcKG+wQ1mSUazCBuwYDVR0jBIGzMIGwgBSWn3y7xm8XvVk/UtcKG+wQ1mSUa6GBlKSBkTCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb22CAQAwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOBgQCBXzpWmoBa5e9fo6ujionW1hUhPkOBakTr3YCDjbYfvJEiv/2P+IobhOGJr85+XHhN0v4gUkEDI8r2/rNk1m0GA8HKddvTjyGw/XqXa+LSTlDYkqI8OwR8GEYj4efEtcRpRYBxV8KxAW93YDWzFGvruKnnLbDAF6VR5w/cCMn5hzGCAZowggGWAgEBMIGUMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMTUwMzE0MjIzOTU2WjAjBgkqhkiG9w0BCQQxFgQUDw0VHkD5N5KqpGcFQnvYI20w8ZgwDQYJKoZIhvcNAQEBBQAEgYAixk0Um0L6AtJXxVjMGhWmVyZEn22YbQG/BYnkSUJFlYduTjHykHoRFykTxbyZFwtn3b2UcXQ+JCYVwiuCRwzrRvTQ5EIgrfWN2x85gRLxw91lhvVgbwD7N9NsMzeCZ2qPuFYkxkSWl/3j8ddf1+mwHmfdQ4FTIeDtqAujF8ht4g==-----END PKCS7-----\n    "}}),t._v(" "),o("v-button",{staticClass:"options-support__button",attrs:{type:"raised",alt:"Donate"}},[o("img",{staticClass:"options-support__button-image--paypal",attrs:{src:t.paypalImage}}),t._v("\n      Donate\n    ")])],1)])},i=[function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("p",[t._v("This application is made by "),o("a",{attrs:{href:"http://portfolio.pxdesign.nl"}},[t._v("Johan van Eck")]),t._v(".")])},function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("p",[t._v("\n    The last update contains:\n    "),o("ul",[o("li",[t._v("Huge rewrite to use a framework (Vue) instead of no framework at all")]),t._v(" "),o("li",[t._v("Dropped support for Facebook - Facebook removed it's RSS feed so this broke down")]),t._v(" "),o("li",[t._v("Dropped support for Sickbeard and Sabnzbd - I switched to Sonarr and NZBGet which made it very hard to support these services")]),t._v(" "),o("li",[t._v("Refreshing of service data on multiple tabs at the same time")]),t._v(" "),o("li",[t._v("Refreshing of service data when changing a setting")]),t._v(" "),o("li",[t._v("Bug fixes and code improvements (Duh.)")])])])}];n.a={render:e,staticRenderFns:i}},22:function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement;return(t._self._c||n)("button",{class:["ripple",t.typeClass],on:{click:function(n){t.$emit("click")},mousedown:t._showRipple}},[t.text?[t._v("\n    "+t._s(t.text)+"\n  ")]:t._t("default")],2)},i=[];n.a={render:e,staticRenderFns:i}}});