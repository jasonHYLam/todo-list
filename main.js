(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>d});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([t.id,"#wrapper {\n    display: grid;\n    grid-template-rows: 1fr 8fr;\n}\n\n#below-header {\n    display: grid;\n    grid-template-columns: 2fr 5fr;\n    background-color: aquamarine;\n\n}\n\n#main-display {\n\n}\n\n#task-form-container {\n    display: absolute;\n}\n\n/* #task-container {\n    width: 60vw;\n    height: 30vh;\n    background-color: beige;\n}\n\n.form-for-task-to-be-edited {\n    width: 400px;\n    height: 200px;\n    background-color: aqua;\n}\n\n#project-container {\n    width: 60vw;\n    height: 30vh;\n    background-color: greenyellow;\n\n} */\n\n\n.drop-down {\n    position: relative;\n}\n\n.drop-content {\n   display: none; \n   position: absolute;\n   background-color: blue;\n}\n\n.drop-down:hover .drop-content {\n    display: block;\n    cursor: pointer;\n}",""]);const d=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var u=this[d][0];null!=u&&(i[u]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);r&&i[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),e.push(c))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],d=0;d<t.length;d++){var u=t[d],s=r.base?u[0]+r.base:u[0],c=o[s]||0,l="".concat(s," ").concat(c);o[s]=c+1;var m=n(l),h={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==m)e[m].references++,e[m].updater(h);else{var f=a(h,r);r.byIndex=d,e.splice(d,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var d=n(o[i]);e[d].references--}for(var u=r(t,a),s=0;s<o.length;s++){var c=n(o[s]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}o=u}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(e){return t(1,arguments),e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)}function r(e){t(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function a(n){if(t(1,arguments),!e(n)&&"number"!=typeof n)return!1;var a=r(n);return!isNaN(Number(a))}function o(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function i(e,n){t(2,arguments);var a=r(e).getTime(),i=o(n);return new Date(a+i)}function d(e,n){t(2,arguments);var r=o(n);return i(e,-r)}var u=864e5;function s(e){t(1,arguments);var n=1,a=r(e),o=a.getUTCDay(),i=(o<n?7:0)+o-n;return a.setUTCDate(a.getUTCDate()-i),a.setUTCHours(0,0,0,0),a}function c(e){t(1,arguments);var n=r(e),a=n.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(a+1,0,4),o.setUTCHours(0,0,0,0);var i=s(o),d=new Date(0);d.setUTCFullYear(a,0,4),d.setUTCHours(0,0,0,0);var u=s(d);return n.getTime()>=i.getTime()?a+1:n.getTime()>=u.getTime()?a:a-1}function l(e){t(1,arguments);var n=c(e),r=new Date(0);r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0);var a=s(r);return a}var m=6048e5,h={};function f(){return h}function p(e,n){var a,i,d,u,s,c,l,m;t(1,arguments);var h=f(),p=o(null!==(a=null!==(i=null!==(d=null!==(u=null==n?void 0:n.weekStartsOn)&&void 0!==u?u:null==n||null===(s=n.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==d?d:h.weekStartsOn)&&void 0!==i?i:null===(l=h.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==a?a:0);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=r(e),v=g.getUTCDay(),w=(v<p?7:0)+v-p;return g.setUTCDate(g.getUTCDate()-w),g.setUTCHours(0,0,0,0),g}function g(e,n){var a,i,d,u,s,c,l,m;t(1,arguments);var h=r(e),g=h.getUTCFullYear(),v=f(),w=o(null!==(a=null!==(i=null!==(d=null!==(u=null==n?void 0:n.firstWeekContainsDate)&&void 0!==u?u:null==n||null===(s=n.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==d?d:v.firstWeekContainsDate)&&void 0!==i?i:null===(l=v.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==a?a:1);if(!(w>=1&&w<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(g+1,0,w),b.setUTCHours(0,0,0,0);var y=p(b,n),C=new Date(0);C.setUTCFullYear(g,0,w),C.setUTCHours(0,0,0,0);var k=p(C,n);return h.getTime()>=y.getTime()?g+1:h.getTime()>=k.getTime()?g:g-1}function v(e,n){var r,a,i,d,u,s,c,l;t(1,arguments);var m=f(),h=o(null!==(r=null!==(a=null!==(i=null!==(d=null==n?void 0:n.firstWeekContainsDate)&&void 0!==d?d:null==n||null===(u=n.locale)||void 0===u||null===(s=u.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==i?i:m.firstWeekContainsDate)&&void 0!==a?a:null===(c=m.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==r?r:1),v=g(e,n),w=new Date(0);w.setUTCFullYear(v,0,h),w.setUTCHours(0,0,0,0);var b=p(w,n);return b}var w=6048e5;function b(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const y=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return b("yy"===e?r%100:r,e.length)},C=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):b(n+1,2)},k=function(t,e){return b(t.getUTCDate(),e.length)},T=function(t,e){return b(t.getUTCHours()%12||12,e.length)},E=function(t,e){return b(t.getUTCHours(),e.length)},x=function(t,e){return b(t.getUTCMinutes(),e.length)},M=function(t,e){return b(t.getUTCSeconds(),e.length)},D=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return b(Math.floor(r*Math.pow(10,n-3)),e.length)};var P={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return y(t,e)},Y:function(t,e,n,r){var a=g(t,r),o=a>0?a:1-a;return"YY"===e?b(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):b(o,e.length)},R:function(t,e){return b(c(t),e.length)},u:function(t,e){return b(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return b(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return b(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return C(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return b(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,a,o){var i=function(e,n){t(1,arguments);var a=r(e),o=p(a,n).getTime()-v(a,n).getTime();return Math.round(o/w)+1}(e,o);return"wo"===n?a.ordinalNumber(i,{unit:"week"}):b(i,n.length)},I:function(e,n,a){var o=function(e){t(1,arguments);var n=r(e),a=s(n).getTime()-l(n).getTime();return Math.round(a/m)+1}(e);return"Io"===n?a.ordinalNumber(o,{unit:"week"}):b(o,n.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):k(t,e)},D:function(e,n,a){var o=function(e){t(1,arguments);var n=r(e),a=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var o=n.getTime(),i=a-o;return Math.floor(i/u)+1}(e);return"Do"===n?a.ordinalNumber(o,{unit:"dayOfYear"}):b(o,n.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return b(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return b(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return b(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return T(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):E(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):b(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):b(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):x(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):M(t,e)},S:function(t,e){return D(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return U(a);case"XXXX":case"XX":return j(a);default:return j(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return U(a);case"xxxx":case"xx":return j(a);default:return j(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+S(a,":");default:return"GMT"+j(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+S(a,":");default:return"GMT"+j(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return b(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return b((r._originalDate||t).getTime(),e.length)}};function S(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+b(o,2)}function U(t,e){return t%60==0?(t>0?"-":"+")+b(Math.abs(t)/60,2):j(t,e)}function j(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+b(Math.floor(a/60),2)+n+b(a%60,2)}const N=P;var L=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},W=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}};const O={p:W,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return L(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",L(a,e)).replace("{{time}}",W(o,e))}};function Y(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var q=["D","DD"],A=["YY","YYYY"];function B(t){return-1!==q.indexOf(t)}function I(t){return-1!==A.indexOf(t)}function F(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var H={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function z(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}const Q={date:z({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:z({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:z({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var R={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function _(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,d=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[d]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const G={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:_({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:_({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:_({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:_({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:_({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function X(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,d=o[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(u)?J(u,(function(t){return t.test(d)})):V(u,(function(t){return t.test(d)}));i=t.valueCallback?t.valueCallback(s):s,i=n.valueCallback?n.valueCallback(i):i;var c=e.slice(d.length);return{value:i,rest:c}}}function V(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function J(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var Z,K={ordinalNumber:(Z={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(Z.matchPattern);if(!n)return null;var r=n[0],a=t.match(Z.parsePattern);if(!a)return null;var o=Z.valueCallback?Z.valueCallback(a[0]):a[0];o=e.valueCallback?e.valueCallback(o):o;var i=t.slice(r.length);return{value:o,rest:i}}),era:X({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:X({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:X({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:X({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:X({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const $={code:"en-US",formatDistance:function(t,e,n){var r,a=H[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:Q,formatRelative:function(t,e,n,r){return R[t]},localize:G,match:K,options:{weekStartsOn:0,firstWeekContainsDate:1}};var tt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,et=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,nt=/^'([^]*?)'?$/,rt=/''/g,at=/[a-zA-Z]/;function ot(t){var e=t.match(nt);return e?e[1].replace(rt,"'"):t}const it=()=>({newTitle:document.querySelector("#edit-task-title").value,newDesc:document.querySelector("#edit-task-desc").value,newDueDate:dt(document.querySelector("#edit-task-due-date").value),newPriority:document.querySelector("#edit-task-priority").value}),dt=e=>function(e,n,i){var u,s,c,l,m,h,p,g,v,w,b,y,C,k,T,E,x,M;t(2,arguments);var D=String(n),P=f(),S=null!==(u=null!==(s=null==i?void 0:i.locale)&&void 0!==s?s:P.locale)&&void 0!==u?u:$,U=o(null!==(c=null!==(l=null!==(m=null!==(h=null==i?void 0:i.firstWeekContainsDate)&&void 0!==h?h:null==i||null===(p=i.locale)||void 0===p||null===(g=p.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==m?m:P.firstWeekContainsDate)&&void 0!==l?l:null===(v=P.locale)||void 0===v||null===(w=v.options)||void 0===w?void 0:w.firstWeekContainsDate)&&void 0!==c?c:1);if(!(U>=1&&U<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var j=o(null!==(b=null!==(y=null!==(C=null!==(k=null==i?void 0:i.weekStartsOn)&&void 0!==k?k:null==i||null===(T=i.locale)||void 0===T||null===(E=T.options)||void 0===E?void 0:E.weekStartsOn)&&void 0!==C?C:P.weekStartsOn)&&void 0!==y?y:null===(x=P.locale)||void 0===x||null===(M=x.options)||void 0===M?void 0:M.weekStartsOn)&&void 0!==b?b:0);if(!(j>=0&&j<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!S.localize)throw new RangeError("locale must contain localize property");if(!S.formatLong)throw new RangeError("locale must contain formatLong property");var L=r(e);if(!a(L))throw new RangeError("Invalid time value");var W=Y(L),q=d(L,W),A={firstWeekContainsDate:U,weekStartsOn:j,locale:S,_originalDate:L};return D.match(et).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,O[e])(t,S.formatLong):t})).join("").match(tt).map((function(t){if("''"===t)return"'";var r=t[0];if("'"===r)return ot(t);var a=N[r];if(a)return null!=i&&i.useAdditionalWeekYearTokens||!I(t)||F(t,n,String(e)),null!=i&&i.useAdditionalDayOfYearTokens||!B(t)||F(t,n,String(e)),a(q,t,S.localize,A);if(r.match(at))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return t})).join("")}(new Date(e),"dd/MM/yyyy"),ut=()=>document.getElementById("project-select").value,st=t=>Object.values(t).every((t=>""!=t));class ct{constructor(t){this.title=t,this.tasksList=[]}addTasktoProject=t=>{this.tasksList.push(t)};removeTaskFromProject=t=>{this.tasksList.splice(t,1)}}let lt,mt=[];const ht=()=>lt,ft=()=>lt.tasksList,pt=t=>{lt=t},gt=()=>mt,vt=t=>new ct(t),wt=t=>{mt.push(t)},bt=(t,e)=>{t.tasksList.splice(e,1)},yt=()=>gt().find((t=>t.title==ut()));class Ct{constructor(t,e,n,r,a){this.title=t,this.description=e,this.dueDate=n,this.priority=r,this.taskDone=a,this.projectsList=[]}}let kt=[];const Tt=t=>{kt.push(t)},Et=()=>kt,xt=(t,e)=>{console.log(gt()),e.tasksList.push(t)},Mt=document.getElementById("wrapper"),Dt=document.getElementById("main-display"),Pt=document.getElementById("sidebar"),St=t=>{Ut("tasks"),jt(t)},Ut=t=>{let e;for("tasks"==t?e=document.getElementById("task-container"):"projects"==t&&(e=document.getElementById("project-container"));e.lastChild;)e.removeChild(e.lastElementChild)},jt=t=>{for(const e of t){const t=document.createElement("div");Nt(e,t),Lt(t),Wt(t)}},Nt=(t,e)=>{for(const[n,r]of Object.entries(t))if("title"==n||"description"==n||"dueDate"==n||"priority"==n){const t=document.createElement("div");t.textContent=r,e.appendChild(t)}},Lt=t=>{const e=document.createElement("input");e.classList.add("done-check-box"),e.setAttribute("type","checkbox");const n=document.createElement("button");n.classList.add("task-button"),n.classList.add("edit-button-for-task"),n.textContent="edit";const r=document.createElement("button");r.classList.add("task-button"),r.classList.add("delete-button-for-task"),r.textContent="delete",t.appendChild(e),t.appendChild(n),t.appendChild(r)},Wt=t=>{document.getElementById("task-container").appendChild(t)},Ot=t=>{Ut("projects");const e=document.querySelector("#project-container");for(const n of t){const t=document.createElement("div"),r=document.createElement("div");r.className="project-title",r.textContent=n.title,t.appendChild(r),document.createElement("div"),e.appendChild(t)}};()=>{let t;try{t=window[type];const e="__storage_test__";return t.setItem(e,e),t.removeItem(e),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}}?console.log("what a triumph"):console.log("terrible earth");var Yt=n(379),qt=n.n(Yt),At=n(795),Bt=n.n(At),It=n(569),Ft=n.n(It),Ht=n(565),zt=n.n(Ht),Qt=n(216),Rt=n.n(Qt),_t=n(589),Gt=n.n(_t),Xt=n(426),Vt={};let Jt,Zt;Vt.styleTagTransform=Gt(),Vt.setAttributes=zt(),Vt.insert=Ft().bind(null,"head"),Vt.domAPI=Bt(),Vt.insertStyleElement=Rt(),qt()(Xt.Z,Vt),Xt.Z&&Xt.Z.locals&&Xt.Z.locals,document.getElementById("add-todo-button").addEventListener("click",(t=>{(()=>{document.getElementById("main-display");const t=document.createElement("div");t.id="task-form-container";const e=document.createElement("form"),n=document.createElement("input");n.setAttribute("placeholder","task: "),n.id="task-title";const r=document.createElement("input");r.setAttribute("placeholder","description: "),r.id="task-desc";const a=document.createElement("input");a.setAttribute("type","date"),a.id="due-date";const o=document.createElement("select");o.id="priority-select";const i=document.createElement("option");i.textContent="high";const d=document.createElement("option");d.textContent="med";const u=document.createElement("option");u.textContent="low",o.appendChild(i),o.appendChild(d),o.appendChild(u);const s=document.createElement("select");s.id="project-select";for(const t of gt()){const e=document.createElement("option");e.textContent=t.title,s.appendChild(e)}const c=document.createElement("button");c.setAttribute("type","button"),c.id="submit-todo-button",c.textContent="add";const l=document.createElement("button");l.textContent="x",e.appendChild(n),e.appendChild(r),e.appendChild(a),e.appendChild(o),e.appendChild(s),e.appendChild(c),e.appendChild(l),t.appendChild(e),Mt.appendChild(t)})()})),document.addEventListener("click",(t=>{if("submit-todo-button"==t.target.id){let t=(()=>{const t=document.getElementById("task-title").value,e=document.getElementById("task-desc").value,n=document.getElementById("priority-select").value;return{titleValue:t,descValue:e,dateValue:dt(document.getElementById("due-date").value),priorityValue:n,taskDoneValue:"no"}})();if(st(t)){const n=new Ct((e=t).titleValue,e.descValue,e.dateValue,e.priorityValue,e.taskDoneValue);Tt(n),xt(n,yt()),St(ft()),localStorage.setItem("projectArray",gt()),console.log(localStorage)}}var e})),document.addEventListener("click",(function(t){if(t.target.classList.contains("delete-button-for-task")){let n=t.target.parentNode,r=Array.from(n.parentNode.children).indexOf(n);e=r,kt.splice(e,1),bt(ht(),r),St(ft())}var e})),document.addEventListener("click",(function(t){if(t.target.classList.contains("edit-button-for-task")){let e=t.target.parentNode;Jt=Array.from(e.parentNode.children).indexOf(e);let n=ft();Zt=n[Jt],((t,e)=>{const n=document.createElement("div");n.classList.add("form-for-task-to-be-edited"),t.appendChild(n);const r=document.createElement("input");r.setAttribute("placeholder","task: "),r.id="edit-task-title",r.value=e.title;const a=document.createElement("input");a.setAttribute("placeholder","description: "),a.id="edit-task-desc",a.value=e.description;const o=document.createElement("input");o.setAttribute("type","date"),o.id="edit-task-due-date",o.value=e.dueDate;const i=document.createElement("select");i.id="edit-task-priority";const d=document.createElement("option");d.textContent="high";const u=document.createElement("option");u.textContent="med";const s=document.createElement("option");s.textContent="low",i.appendChild(d),i.appendChild(u),i.appendChild(s);const c=document.createElement("select");c.id="project-select";for(const t of gt()){const e=document.createElement("option");e.textContent=t.title,c.appendChild(e)}const l=document.createElement("button");l.setAttribute("type","button"),l.id="submit-edit-todo-button",l.textContent="change";const m=document.createElement("button");m.textContent="x",n.appendChild(r),n.appendChild(a),n.appendChild(o),n.appendChild(i),n.appendChild(c),n.appendChild(l),n.appendChild(m)})(e,Zt)}})),document.addEventListener("click",(function(t){if("submit-edit-todo-button"==t.target.id){let e=t.target.parentNode.parentNode;Jt=Array.from(e.parentNode.children).indexOf(e),((t,e)=>{const n=(t=>Et()[t])(t);n.title=e.newTitle,n.description=e.newDesc,n.dueDate=e.newDueDate,n.priority=e.newPriority})(Jt,it()),((t,e,n,r,a,o,i)=>{const d=t.tasksList.find((t=>t==e));d.title=n.newTitle,d.description=n.newDesc,d.dueDate=n.newDueDate,d.priority=n.newPriority})(ht(),Zt,it()),lt.title==ut()||(bt(ht(),Jt),pt(yt()),xt(Zt,ht())),St(ft())}})),document.addEventListener("click",(function(t){"add-project-in-sidebar"==t.target.id&&(()=>{const t=document.createElement("div"),e=document.createElement("input");e.setAttribute("placeholder","project: "),e.id="project-title";const n=document.createElement("button"),r=document.createElement("button");n.id="submit-new-project-button",r.id="cancel-button",n.textContent="add",r.textContent="x",t.appendChild(e),t.appendChild(n),t.appendChild(r),Pt.appendChild(t)})()})),document.addEventListener("click",(function(t){if("submit-new-project-button"==t.target.id){let t=document.getElementById("project-title").value;if(st(t)){const e=vt(t);wt(e),Ot(gt())}}})),document.addEventListener("click",(function(t){if(t.target.classList.contains("project-title")){let e=t.target.parentNode,n=Array.from(e.parentNode.children).indexOf(e);(t=>{(()=>{const t=document.getElementById("task-container");for(;t.lastChild;)t.removeChild(t.lastChild)})();let e=gt()[t];jt(e.tasksList)})(n),pt(gt()[n])}})),document.addEventListener("click",(function(t){if("done-check-box"==t.target.className){let e=t.target.parentNode,n=Array.from(e.parentNode.children).indexOf(e);(t=>{t.taskDone="yes",console.log(t)})(ht().tasksList[n])}})),document.addEventListener("click",(function(t){"inbox"==t.target.id&&St(Et())})),(()=>{const t=document.createElement("div");t.id="task-container",Dt.appendChild(t)})();const Kt=vt("inbox");wt(Kt),pt(Kt);const $t=vt("the great reckoning");wt($t);const te=new Ct("walk","til me feet hurt","tomorrow","high"),ee=new Ct("fish","catch 50","tomorrow","low"),ne=new Ct("sing","for the queen","tomorrow","chicalo"),re=new Ct("play","the donkey game","tomorrow","mcdonalds");Tt(te),Tt(ee),Tt(ne),Tt(re),$t.addTasktoProject(Et()[0]),$t.addTasktoProject(Et()[1]),$t.addTasktoProject(Et()[2]),Kt.addTasktoProject(Et()[0]),Kt.addTasktoProject(Et()[1]),Kt.addTasktoProject(Et()[2]),Kt.addTasktoProject(Et()[3]),St(ht().tasksList),(()=>{const t=document.createElement("div");t.id="project-container",Pt.appendChild(t)})(),Ot(gt())})()})();