!function(e){var l={};function r(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=l,r.d=function(e,l,t){r.o(e,l)||Object.defineProperty(e,l,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,l){if(1&l&&(e=r(e)),8&l)return e;if(4&l&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&l&&"string"!=typeof e)for(var n in e)r.d(t,n,function(l){return e[l]}.bind(null,n));return t},r.n=function(e){var l=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(l,"a",l),l},r.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},r.p="",r(r.s=1)}([function(e,l,r){"use strict";function t(e,l,r,t){t=t||"g";let n,i=new RegExp(e,t),c=0;for(;null!==(n=i.exec(l.slice(c)));)l=l.replace(e,"function"==typeof r?r():r),++c;return l}Object.defineProperty(l,"__esModule",{value:!0}),l.replaceSingle=t,l.replaceComplex=function e(l,r){for(let n of l)if(void 0===n.keys[1])r=!0!==n.called?t(n.keys[0],r,n.replacer,n.flags):r,n.called=!0;else{let t=-1;for(let e of l){let l=new RegExp(e.keys[0],e.flags).exec(r);null!==l&&(t=t<l.index?l.index:t)}t>0&&(r=r.slice(0,t)+e(l,r.slice(t)));let i=new RegExp(n.keys[0],n.flags),c=i.exec(r);if(null!==c){let e=(i=new RegExp(n.keys[1],n.flags)).exec(r),l=[n.keys[0].replace("\\",""),n.keys[1].replace("\\","")];null!==e&&(r=r.slice(0,c.index)+n.replacer(r.slice(c.index+l[0].length,e.index))+r.slice(e.index+l[1].length))}}return r}},function(e,l,r){"use strict";Object.defineProperty(l,"__esModule",{value:!0});const t=r(0);describe("replaceSingle",()=>{it("simple",()=>{let e="{{repl}} is replaced";expect(t.replaceSingle("{{repl}}",e,"This")).toEqual("This is replaced"),expect(t.replaceSingle("{{repl} }",e,"This")).toEqual("{{repl}} is replaced")})}),describe("replace Complex",()=>{it("complex",()=>{let e="<str><hello/> <a>this is a referrer<a>this is a referrer</a></a></str>",l=[{flags:"g",keys:["<hello/>"],replacer:e=>"hello"},{flags:"g",keys:["<a>","</a>"],replacer:e=>`<l>${e}</l>`}];expect(t.replaceComplex(l,e)).toEqual("<str>hello <l>this is a referrer<l>this is a referrer</l></l></str>"),e="{{str(this is a text)}}",l=[{flags:"g",keys:["\\{\\{str\\(","\\)\\}\\}"],replacer:e=>e}],expect(t.replaceComplex(l,e)).toEqual("this is a text")})})}]);