!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e=e||self).strplace={})}(this,function(e){"use strict";function n(e,n,l,r,t){r=r||"g";for(var i=new RegExp(e,r),a=0;null!==i.exec(n.slice(a));)e=e.replace(new RegExp("\\\\","g"),""),n=n.replace(e,"function"==typeof l?l("",t):l),++a;return n}e.replaceComplex=function e(l,r,t){var i=!0,a=!1,c=void 0;try{for(var o,f=function(){var i=o.value;if(void 0===i.keys[1])r=!0!==i.called?n(i.keys[0],r,function(e,n){return i.replacer("",n)},i.flags,t):r;else{var a=-1,c=!0,f=!1,u=void 0;try{for(var s,p=l[Symbol.iterator]();!(c=(s=p.next()).done);c=!0){var x=s.value,y=new RegExp(x.keys[0],x.flags).exec(r);null!==y&&(a=a<y.index?y.index:a)}}catch(e){f=!0,u=e}finally{try{c||null==p.return||p.return()}finally{if(f)throw u}}a>0&&(r=r.slice(0,a)+e(l,r.slice(a)));var d=new RegExp(i.keys[0],i.flags),g=d.exec(r);if(null!==g){var v=(d=new RegExp(i.keys[1],i.flags)).exec(r),w=[i.keys[0].replace(new RegExp("\\\\","g"),""),i.keys[1].replace(new RegExp("\\\\","g"),"")];null!==v&&(r=r.slice(0,g.index)+i.replacer(r.slice(g.index+w[0].length,v.index),t)+r.slice(v.index+w[1].length))}}},u=l[Symbol.iterator]();!(i=(o=u.next()).done);i=!0)f()}catch(e){a=!0,c=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw c}}return r},e.replaceSingle=n,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=strplace.umd.js.map
