(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[63],{47443:(i,a,t)=>{var e=t(42118);function n(r,f){var h=r==null?0:r.length;return!!h&&e(r,f,0)>-1}i.exports=n},1196:i=>{function a(t,e,n){for(var r=-1,f=t==null?0:t.length;++r<f;)if(n(e,t[r]))return!0;return!1}i.exports=a},48983:(i,a,t)=>{var e=t(40371),n=e("length");i.exports=n},41848:i=>{function a(t,e,n,r){for(var f=t.length,h=n+(r?1:-1);r?h--:++h<f;)if(e(t[h],h,t))return h;return-1}i.exports=a},42118:(i,a,t)=>{var e=t(41848),n=t(62722),r=t(42351);function f(h,E,_){return E===E?r(h,E,_):e(h,n,_)}i.exports=f},62722:i=>{function a(t){return t!==t}i.exports=a},45652:(i,a,t)=>{var e=t(88668),n=t(47443),r=t(1196),f=t(74757),h=t(23593),E=t(21814),_=200;function x(w,M,m){var s=-1,l=n,o=w.length,g=!0,c=[],v=c;if(m)g=!1,l=r;else if(o>=_){var d=M?null:h(w);if(d)return E(d);g=!1,l=f,v=new e}else v=M?[]:c;e:for(;++s<o;){var u=w[s],p=M?M(u):u;if(u=m||u!==0?u:0,g&&p===p){for(var C=v.length;C--;)if(v[C]===p)continue e;M&&v.push(p),c.push(u)}else l(v,p,m)||(v!==c&&v.push(p),c.push(u))}return c}i.exports=x},23593:(i,a,t)=>{var e=t(58525),n=t(50308),r=t(21814),f=1/0,h=e&&1/r(new e([,-0]))[1]==f?function(E){return new e(E)}:n;i.exports=h},42351:i=>{function a(t,e,n){for(var r=n-1,f=t.length;++r<f;)if(t[r]===e)return r;return-1}i.exports=a},88016:(i,a,t)=>{var e=t(48983),n=t(62689),r=t(21903);function f(h){return n(h)?r(h):e(h)}i.exports=f},21903:i=>{var a="\\ud800-\\udfff",t="\\u0300-\\u036f",e="\\ufe20-\\ufe2f",n="\\u20d0-\\u20ff",r=t+e+n,f="\\ufe0e\\ufe0f",h="["+a+"]",E="["+r+"]",_="\\ud83c[\\udffb-\\udfff]",x="(?:"+E+"|"+_+")",w="[^"+a+"]",M="(?:\\ud83c[\\udde6-\\uddff]){2}",m="[\\ud800-\\udbff][\\udc00-\\udfff]",s="\\u200d",l=x+"?",o="["+f+"]?",g="(?:"+s+"(?:"+[w,M,m].join("|")+")"+o+l+")*",c=o+l+g,v="(?:"+[w+E+"?",E,M,m,h].join("|")+")",d=RegExp(_+"(?="+_+")|"+v+c,"g");function u(p){for(var C=d.lastIndex=0;d.test(p);)++C;return C}i.exports=u},50308:i=>{function a(){}i.exports=a},20573:(i,a,t)=>{"use strict";t.d(a,{P1:()=>w});var e="NOT_FOUND";function n(m){var s;return{get:function(o){return s&&m(s.key,o)?s.value:e},put:function(o,g){s={key:o,value:g}},getEntries:function(){return s?[s]:[]},clear:function(){s=void 0}}}function r(m,s){var l=[];function o(d){var u=l.findIndex(function(C){return s(d,C.key)});if(u>-1){var p=l[u];return u>0&&(l.splice(u,1),l.unshift(p)),p.value}return e}function g(d,u){o(d)===e&&(l.unshift({key:d,value:u}),l.length>m&&l.pop())}function c(){return l}function v(){l=[]}return{get:o,put:g,getEntries:c,clear:v}}var f=function(s,l){return s===l};function h(m){return function(l,o){if(l===null||o===null||l.length!==o.length)return!1;for(var g=l.length,c=0;c<g;c++)if(!m(l[c],o[c]))return!1;return!0}}function E(m,s){var l=typeof s=="object"?s:{equalityCheck:s},o=l.equalityCheck,g=o===void 0?f:o,c=l.maxSize,v=c===void 0?1:c,d=l.resultEqualityCheck,u=h(g),p=v===1?n(u):r(v,u);function C(){var b=p.get(arguments);if(b===e){if(b=m.apply(null,arguments),d){var z=p.getEntries(),R=z.find(function(D){return d(D.value,b)});R&&(b=R.value)}p.put(arguments,b)}return b}return C.clearCache=function(){return p.clear()},C}function _(m){var s=Array.isArray(m[0])?m[0]:m;if(!s.every(function(o){return typeof o=="function"})){var l=s.map(function(o){return typeof o=="function"?"function "+(o.name||"unnamed")+"()":typeof o}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+l+"]")}return s}function x(m){for(var s=arguments.length,l=new Array(s>1?s-1:0),o=1;o<s;o++)l[o-1]=arguments[o];var g=function(){for(var v=arguments.length,d=new Array(v),u=0;u<v;u++)d[u]=arguments[u];var p=0,C,b={memoizeOptions:void 0},z=d.pop();if(typeof z=="object"&&(b=z,z=d.pop()),typeof z!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof z+"]");var R=b,D=R.memoizeOptions,y=D===void 0?l:D,A=Array.isArray(y)?y:[y],P=_(d),S=m.apply(void 0,[function(){return p++,z.apply(null,arguments)}].concat(A)),j=m(function(){for(var T=[],L=P.length,F=0;F<L;F++)T.push(P[F].apply(null,arguments));return C=S.apply(null,T),C});return Object.assign(j,{resultFunc:z,memoizedResultFunc:S,dependencies:P,lastResult:function(){return C},recomputations:function(){return p},resetRecomputations:function(){return p=0}}),j};return g}var w=x(E),M=function(s,l){if(l===void 0&&(l=w),typeof s!="object")throw new Error("createStructuredSelector expects first argument to be an object "+("where each property is a selector, instead received a "+typeof s));var o=Object.keys(s),g=l(o.map(function(c){return s[c]}),function(){for(var c=arguments.length,v=new Array(c),d=0;d<c;d++)v[d]=arguments[d];return v.reduce(function(u,p,C){return u[o[C]]=p,u},{})});return g}},53192:(i,a,t)=>{"use strict";t.d(a,{m:()=>_});var e=t(67294),n=t(27821),r=t(45697),f=t(11276);const h=`${232/16}rem`,E=(0,n.default)(f.r)`
  width: ${h};
  background: ${({theme:x})=>x.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:x})=>x.colors.neutral200};
  z-index: 1;
`,_=({ariaLabel:x,...w})=>e.createElement(E,{"aria-label":x,as:"nav",...w});_.propTypes={ariaLabel:r.string.isRequired}},38702:(i,a,t)=>{"use strict";t.d(a,{p:()=>c});var e=t(67294),n=t(45697),r=t(27821),f=t(41363),h=t(11047),E=t(75515),_=t(12028),x=t(41580),w=t(70004),M=t(49123),m=t(8509),s=t(14085);const l=v=>{const d=(0,e.useRef)();return(0,e.useEffect)(()=>{d.current=v}),d.current};var o=t(7801);const g=(0,r.default)(w.i)`
  width: ${24/16}rem;
  background-color: ${({theme:v})=>v.colors.neutral200};
`,c=({as:v,label:d,searchLabel:u,searchable:p,onChange:C,value:b,onClear:z,onSubmit:R,id:D})=>{const[y,A]=(0,e.useState)(!1),P=l(y),S=(0,s.M)(D),j=(0,e.useRef)(),O=(0,e.useRef)();(0,e.useEffect)(()=>{y&&j.current&&j.current.focus(),P&&!y&&O.current&&O.current.focus()},[y,P]);const T=()=>{A(B=>!B)},L=B=>{z(B),j.current.focus()},F=B=>{B.relatedTarget?.id!==S&&A(!1)},I=B=>{B.key===o.y.ESCAPE&&A(!1)};return y?e.createElement(x.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4},e.createElement(m.U,null,e.createElement(M.w,{name:"searchbar",value:b,onChange:C,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:I,ref:j,onBlur:F,onClear:L,onSubmit:R,clearLabel:"Clear",size:"S"},u)),e.createElement(x.x,{paddingLeft:2,paddingTop:4},e.createElement(g,null))):e.createElement(x.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4},e.createElement(h.k,{justifyContent:"space-between",alignItems:"flex-start"},e.createElement(E.Z,{variant:"beta",as:v},d),p&&e.createElement(_.h,{ref:O,onClick:T,label:u,icon:e.createElement(f.Search,null)})),e.createElement(x.x,{paddingTop:4},e.createElement(g,null)))};c.defaultProps={as:"h2",searchable:!1,onChange(){},onClear(){},onSubmit(){},value:"",searchLabel:"",id:void 0},c.propTypes={as:n.string,id:n.string,label:n.string.isRequired,onChange:n.func,onClear:n.func,onSubmit:n.func,searchLabel:n.string,searchable:n.bool,value:n.string}},73400:(i,a,t)=>{"use strict";t.d(a,{E:()=>s});var e=t(67294),n=t(45697),r=t(27821),f=t(41363),h=t(41580),E=t(75515),_=t(11047),x=t(63507);const w=(0,r.default)(h.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:l})=>l.colors.neutral800};
  svg > * {
    fill: ${({theme:l})=>l.colors.neutral600};
  }

  &.active {
    ${({theme:l})=>`
      background-color: ${l.colors.primary100};
      border-right: 2px solid ${l.colors.primary600};
      svg > * {
        fill: ${l.colors.primary700};
      }
      ${E.Z} {
        color: ${l.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,M=(0,r.default)(f.Dot)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:l,$active:o})=>o?l.colors.primary600:l.colors.neutral600};
  }
`,m=r.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,s=e.forwardRef(({children:l,icon:o,withBullet:g,as:c,isSubSectionChild:v,...d},u)=>e.createElement(w,{as:c,icon:o,background:"neutral100",paddingLeft:v?9:7,paddingBottom:2,paddingTop:2,ref:u,...d},e.createElement(_.k,null,o?e.createElement(m,null,o):e.createElement(M,null),e.createElement(h.x,{paddingLeft:2},e.createElement(E.Z,{as:"span"},l))),g&&e.createElement(h.x,{as:_.k,paddingRight:4},e.createElement(M,{$active:!0}))));s.displayName="SubNavLink",s.defaultProps={as:x.f,icon:null,isSubSectionChild:!1,withBullet:!1},s.propTypes={as:n.elementType,children:n.node.isRequired,icon:n.element,isSubSectionChild:n.bool,withBullet:n.bool}},29489:(i,a,t)=>{"use strict";t.d(a,{D:()=>g});var e=t(67294),n=t(45697),r=t(27821),f=t(41580),h=t(30190),E=t(7681),_=t(41363),x=t(75515),w=t(11047);const M=(0,r.default)(w.k)`
  border: none;
  padding: 0;
  background: transparent;
`,m=r.default.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:c})=>c?"0deg":"180deg"});
`,s=({collapsable:c,label:v,onClick:d,ariaExpanded:u,ariaControls:p})=>c?e.createElement(M,{as:"button",onClick:d,"aria-expanded":u,"aria-controls":p,textAlign:"left"},e.createElement(f.x,{paddingRight:1},e.createElement(x.Z,{variant:"sigma",textColor:"neutral600"},v)),c&&e.createElement(m,{rotated:u},e.createElement(_.CarretDown,{"aria-hidden":!0}))):e.createElement(M,null,e.createElement(f.x,{paddingRight:1},e.createElement(x.Z,{variant:"sigma",textColor:"neutral600"},v)));s.defaultProps={ariaControls:null,ariaExpanded:null,collapsable:!1,onClick(){}},s.propTypes={ariaControls:n.string,ariaExpanded:n.bool,collapsable:n.bool,label:n.string.isRequired,onClick:n.func};var l=t(14085);const o=(0,r.default)(f.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:c})=>c.colors.neutral500};
    }
  }
`,g=({collapsable:c,label:v,badgeLabel:d,children:u,id:p})=>{const[C,b]=(0,e.useState)(!0),z=(0,l.M)(p),R=()=>{b(D=>!D)};return e.createElement(E.K,{spacing:1},e.createElement(o,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4},e.createElement(f.x,{position:"relative",paddingRight:d?6:0},e.createElement(s,{onClick:R,ariaExpanded:C,ariaControls:z,collapsable:c,label:v}),d&&e.createElement(h.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)"},d))),(!c||C)&&e.createElement("ol",{id:z},e.Children.map(u,(D,y)=>e.createElement("li",{key:y},D))))};g.defaultProps={badgeLabel:null,collapsable:!1,id:void 0},g.propTypes={badgeLabel:n.string,children:n.node.isRequired,collapsable:n.bool,id:n.string,label:n.string.isRequired}},34446:(i,a,t)=>{"use strict";t.d(a,{Z:()=>h});var e=t(67294),n=t(45697),r=t(7681),f=t(41580);const h=({children:E,..._})=>e.createElement(f.x,{paddingTop:2,paddingBottom:4},e.createElement(r.K,{as:"ol",spacing:2,..._},e.Children.map(E,(x,w)=>e.createElement("li",{key:w},x))));h.propTypes={children:n.node.isRequired}},14484:(i,a,t)=>{"use strict";t.d(a,{Z:()=>n});var e=t(85893);function n(r){return(0,e.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[(0,e.jsx)("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#EAFBE7",stroke:"#C6F0C2"}),(0,e.jsx)("path",{d:"M19.5 7h-7A4.505 4.505 0 008 11.5c0 2.481 2.019 4.5 4.5 4.5h7c2.481 0 4.5-2.019 4.5-4.5S21.981 7 19.5 7zm0 8a3.5 3.5 0 110-7 3.5 3.5 0 010 7z",fill:"#328048"})]})}},85038:(i,a,t)=>{"use strict";t.d(a,{Z:()=>n});var e=t(85893);function n(r){return(0,e.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[(0,e.jsx)("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#F6F6F9",stroke:"#DCDCE4"}),(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.535 8.768c0 .116-.011.229-.032.339l3.013 1.776 2.985-1.76a1.768 1.768 0 11.519.93l-2.982 1.757v2.477a1.768 1.768 0 11-1.048-.044v-2.435l-2.997-1.767a1.768 1.768 0 11.542-1.274z",fill:"#666687"}),(0,e.jsx)("path",{d:"M13.503 9.107l-.05-.01-.006.035.03.018.026-.043zm3.013 1.776l-.025.043.025.014.025-.014-.025-.043zm2.985-1.76l.025.044.031-.018-.007-.035-.05.01zm.518.93l.035-.036-.027-.026-.033.02.026.042zm-2.98 1.757l-.026-.043-.025.014v.029h.05zm0 2.477h-.05v.035l.032.012.017-.047zm-1.049-.044l.013.048.037-.01v-.038h-.05zm0-2.435h.05v-.029l-.024-.014-.026.043zm-2.997-1.767l.025-.043-.033-.019-.027.027.035.035zm.559-.925c.022-.113.033-.23.033-.348h-.1c0 .112-.01.223-.031.33l.098.018zm2.99 1.723l-3.014-1.775-.05.086 3.013 1.775.05-.086zm2.933-1.758l-2.984 1.758.05.086 2.985-1.758-.05-.086zm-.06-.313c0 .125.013.247.037.366l.098-.02a1.723 1.723 0 01-.035-.346h-.1zm1.818-1.818a1.818 1.818 0 00-1.818 1.818h.1c0-.949.769-1.718 1.718-1.718v-.1zm1.817 1.818a1.818 1.818 0 00-1.817-1.818v.1c.948 0 1.717.769 1.717 1.718h.1zm-1.817 1.817a1.818 1.818 0 001.817-1.817h-.1c0 .948-.769 1.717-1.717 1.717v.1zm-1.248-.495c.326.307.765.495 1.248.495v-.1c-.457 0-.872-.178-1.18-.468l-.068.073zm-2.921 1.763l2.98-1.757-.05-.086-2.981 1.757.05.086zm.024 2.434V11.81h-.1v2.477h.1zm-.067.047a1.718 1.718 0 011.14 1.618h.1c0-.79-.503-1.46-1.206-1.712l-.034.094zm1.14 1.618c0 .948-.77 1.717-1.718 1.717v.1a1.817 1.817 0 001.817-1.817h-.1zm-1.718 1.717a1.718 1.718 0 01-1.718-1.717h-.1c0 1.004.814 1.817 1.818 1.817v-.1zm-1.718-1.717c0-.797.543-1.467 1.278-1.66l-.026-.098a1.818 1.818 0 00-1.352 1.758h.1zm1.215-4.144v2.435h.1v-2.435h-.1zm-2.973-1.723l2.998 1.766.05-.086-2.997-1.767-.05.087zm-1.2.5c.49 0 .934-.193 1.26-.507l-.069-.072c-.309.296-.728.48-1.19.48v.1zM9.95 8.768c0 1.003.814 1.817 1.818 1.817v-.1a1.718 1.718 0 01-1.718-1.717h-.1zm1.818-1.818A1.818 1.818 0 009.95 8.768h.1c0-.949.769-1.718 1.717-1.718v-.1zm1.817 1.818a1.818 1.818 0 00-1.818-1.818v.1c.95 0 1.718.769 1.718 1.718h.1z",fill:"#666687"})]})}},34668:(i,a,t)=>{"use strict";t.d(a,{Z:()=>n});var e=t(85893);function n(r){return(0,e.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[(0,e.jsx)("path",{d:"M.5 3A2.5 2.5 0 013 .5h26A2.5 2.5 0 0131.5 3v18a2.5 2.5 0 01-2.5 2.5H3A2.5 2.5 0 01.5 21V3z",fill:"#FDF4DC",stroke:"#FAE7B9"}),(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.934 7.495V6h1.45v1.495h5.232V6h1.45v1.495h.314c1.385 0 1.602.249 1.62 1.463V16.5c0 1.062-.096 1.5-1.4 1.5h-9.19c-1.306 0-1.41-.318-1.41-1.607V9.105c.018-1.025.117-1.61 1.5-1.61h.434zm-.774 8.687c0 .406.123.433.388.433h8.953c.265 0 .34-.007.34-.413v-6.087c-.008-.314-.11-.369-.316-.369h-9.072c-.206 0-.296.045-.293.287v6.15z",fill:"#D9822F"})]})}},65531:(i,a,t)=>{"use strict";t.d(a,{Z:()=>n});var e=t(85893);function n(r){return(0,e.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[(0,e.jsx)("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#F6F6F9",stroke:"#DCDCE4"}),(0,e.jsx)("path",{d:"M20.573 8c-1.484 0-2.666.745-3.397 1.37l-.026.023-.416.452.919 1.51.68-.682c.711-.6 1.506-.93 2.24-.93 1.48 0 2.685 1.171 2.685 2.612 0 1.44-1.205 2.613-2.685 2.613-2.25 0-3.78-2.974-3.795-3.004C16.69 11.784 14.75 8 11.428 8 8.985 8 7 9.954 7 12.355c0 2.401 1.986 4.355 4.427 4.355 1.196 0 2.373-.476 3.404-1.376l.022-.02.413-.45-.919-1.51-.683.686c-.712.616-1.465.928-2.237.928-1.48 0-2.685-1.172-2.685-2.613 0-1.44 1.205-2.613 2.685-2.613 2.25 0 3.78 2.974 3.795 3.004.088.18 2.028 3.964 5.35 3.964 2.442 0 4.428-1.954 4.428-4.355C25 9.954 23.014 8 20.573 8z",fill:"#666687"})]})}},73145:(i,a,t)=>{"use strict";t.d(a,{Z:()=>n});var e=t(85893);function n(r){return(0,e.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[(0,e.jsx)("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#FCECEA",stroke:"#F5C0B8"}),(0,e.jsx)("path",{d:"M16.767 17.49c.724 0 1.428-.089 1.962-.253v-1.093c-.383.143-1.128.239-1.86.239-2.905 0-4.744-1.764-4.744-4.546v-.014c0-2.734 1.839-4.641 4.484-4.641 2.598 0 4.307 1.62 4.307 4.088v.013c0 1.402-.444 2.304-1.135 2.304-.417 0-.656-.287-.656-.772V9.157h-1.38v.82h-.124c-.273-.608-.868-.97-1.6-.97-1.367 0-2.296 1.135-2.296 2.789v.014c0 1.73.943 2.884 2.365 2.884.793 0 1.353-.362 1.64-1.052h.123l.007.04c.158.636.78 1.033 1.62 1.033 1.655 0 2.687-1.367 2.687-3.534v-.014c0-3.008-2.242-5.072-5.517-5.072-3.418 0-5.776 2.324-5.776 5.694v.014c0 3.431 2.331 5.687 5.893 5.687zm-.342-4.053c-.718 0-1.149-.602-1.149-1.586v-.014c0-.991.431-1.586 1.156-1.586.724 0 1.182.608 1.182 1.586v.014c0 .977-.458 1.585-1.19 1.585z",fill:"#D02B20"})]})}},82574:(i,a,t)=>{"use strict";t.d(a,{Z:()=>n});var e=t(85893);function n(r){return(0,e.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[(0,e.jsx)("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#F6ECFC",stroke:"#E0C1F4"}),(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.167 7a1.167 1.167 0 100 2.333 1.167 1.167 0 000-2.333zm0 4.03a1.167 1.167 0 100 2.334 1.167 1.167 0 000-2.334zM9 16.23a1.167 1.167 0 112.333 0 1.167 1.167 0 01-2.333 0zm4.005-9.02a.4.4 0 00-.4.4v1.11c0 .22.18.4.4.4H22.6a.4.4 0 00.4-.4V7.61a.4.4 0 00-.4-.4h-9.594zm-.399 4.432a.4.4 0 01.4-.4H22.6c.22 0 .4.18.4.4v1.11a.4.4 0 01-.4.4h-9.594a.4.4 0 01-.4-.4v-1.11zm.4 3.63a.4.4 0 00-.4.4v1.11c0 .22.18.4.4.4H22.6a.4.4 0 00.4-.4v-1.11a.4.4 0 00-.4-.4h-9.594z",fill:"#9736E8"})]})}},60133:(i,a,t)=>{"use strict";t.d(a,{Z:()=>n});var e=t(85893);function n(r){return(0,e.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[(0,e.jsx)("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#EAF5FF",stroke:"#B8E1FF"}),(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.243 11.907v.157c.835.093 1.287.516 1.287 1.223V14.5c0 .693.236.959.855.959h.216V16.5h-.364c-1.459 0-2.078-.56-2.078-1.857v-.973c0-.722-.314-.992-1.159-1.002v-1.366c.84-.005 1.16-.275 1.16-1.002v-.968c0-1.282.618-1.832 2.077-1.832h.364v1.041h-.216c-.624 0-.855.266-.855.958v1.184c0 .713-.452 1.135-1.287 1.224zm15.804.181v-.157c-.835-.088-1.287-.51-1.287-1.223V9.495c0-.693-.236-.954-.855-.954h-.216V7.5h.363c1.454 0 2.073.56 2.073 1.852v.973c0 .722.32.997 1.165 1.002v1.366c-.845.005-1.165.28-1.165 1.002v.973c0 1.282-.613 1.832-2.073 1.832h-.363v-1.046h.216c.619 0 .855-.26.855-.954v-1.188c0-.708.452-1.13 1.287-1.224zM13.15 13a1 1 0 100-2 1 1 0 000 2zm4-1a1 1 0 11-2 0 1 1 0 012 0zm2 1a1 1 0 100-2 1 1 0 000 2z",fill:"#0C75AF"})]})}},74525:(i,a,t)=>{"use strict";t.d(a,{Z:()=>n});var e=t(85893);function n(r){return(0,e.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[(0,e.jsx)("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#F6ECFC",stroke:"#E0C1F4"}),(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22 8.759a2 2 0 00-2-2h-8c-1.105 0-2 .902-2 2.006v6.068a2 2 0 00.985 1.724l3.66-3.74 3.31 3.381 1.471-1.502 1.731 1.769c.51-.363.843-.958.843-1.632V8.76zM18.5 9c-.84 0-1.5.66-1.5 1.5s.66 1.5 1.5 1.5 1.5-.66 1.5-1.5S19.34 9 18.5 9z",fill:"#9736E8"})]})}},31666:(i,a,t)=>{"use strict";t.d(a,{Z:()=>n});var e=t(85893);function n(r){return(0,e.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[(0,e.jsx)("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#FCECEA",stroke:"#F5C0B8"}),(0,e.jsx)("path",{d:"M9.815 16h1.475V8.954H9.82L8 10.22v1.328l1.729-1.201h.087V16zm3.394 0h5.083v-1.187h-3.106v-.112l1.304-1.216c1.284-1.186 1.7-1.85 1.7-2.651v-.015c0-1.215-1.016-2.046-2.466-2.046-1.543 0-2.598.928-2.598 2.28l.005.02h1.362v-.024c0-.67.474-1.128 1.162-1.128.674 0 1.084.42 1.084 1.02v.015c0 .493-.268.85-1.26 1.812l-2.27 2.24V16zm9.067.156c1.646 0 2.744-.864 2.744-2.143v-.01c0-.957-.683-1.563-1.733-1.66v-.03c.825-.17 1.47-.742 1.47-1.62v-.01c0-1.123-.977-1.885-2.49-1.885-1.48 0-2.471.82-2.574 2.08l-.005.059h1.358l.005-.044c.058-.586.522-.962 1.216-.962.693 0 1.098.361 1.098.947v.01c0 .571-.478.962-1.22.962h-.787v1.05h.806c.855 0 1.357.37 1.357 1.044v.01c0 .596-.493 1.016-1.245 1.016-.761 0-1.264-.39-1.328-.938l-.005-.053h-1.41l.004.063c.098 1.26 1.148 2.114 2.74 2.114z",fill:"#D02B20"})]})}},48394:(i,a,t)=>{"use strict";t.d(a,{Z:()=>n});var e=t(85893);function n(r){return(0,e.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[(0,e.jsx)("path",{d:"M.5 3A2.5 2.5 0 013 .5h26A2.5 2.5 0 0131.5 3v18a2.5 2.5 0 01-2.5 2.5H3A2.5 2.5 0 01.5 21V3z",fill:"#F0F0FF",stroke:"#D9D8FF"}),(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.375 16.316c.417-.407.625-.904.625-1.492 0-.589-.206-1.089-.618-1.5l-1.53-1.53a2.042 2.042 0 00-1.5-.617 2.06 2.06 0 00-1.529.646l-.646-.646c.43-.422.646-.934.646-1.537a2.03 2.03 0 00-.61-1.493l-1.515-1.522a2.014 2.014 0 00-1.5-.625 2.03 2.03 0 00-1.492.61l-1.081 1.074A2.006 2.006 0 0010 9.176c0 .589.206 1.089.618 1.5l1.53 1.53c.41.412.91.617 1.5.617a2.06 2.06 0 001.529-.646l.646.646a2.069 2.069 0 00-.646 1.537c0 .588.203 1.086.61 1.493l1.514 1.522c.407.417.907.625 1.5.625a2.03 2.03 0 001.493-.61l1.081-1.074zm-5.956-6.678a.68.68 0 00-.205-.5l-1.515-1.522a.68.68 0 00-.5-.206.71.71 0 00-.5.199l-1.081 1.073a.672.672 0 00-.206.493.68.68 0 00.206.5l1.53 1.53a.678.678 0 00.5.198.71.71 0 00.529-.228l-.14-.136a4.46 4.46 0 01-.158-.158 1.756 1.756 0 01-.11-.14.593.593 0 01-.122-.39.68.68 0 01.206-.5.68.68 0 01.5-.206.59.59 0 01.39.121c.064.047.11.084.14.111.03.027.082.08.158.158l.136.14a.713.713 0 00.242-.537zm5.168 5.187a.68.68 0 00-.206-.5l-1.529-1.53a.68.68 0 00-.5-.205.7.7 0 00-.53.235l.14.136c.079.076.132.129.159.158.027.03.063.076.11.14a.591.591 0 01.121.39.681.681 0 01-.206.5.681.681 0 01-.5.206.591.591 0 01-.39-.121 1.746 1.746 0 01-.14-.111 4.395 4.395 0 01-.157-.158 20.642 20.642 0 00-.136-.14.714.714 0 00-.037 1.037l1.515 1.522a.678.678 0 00.5.198.708.708 0 00.5-.19l1.08-1.074a.672.672 0 00.206-.493z",fill:"#4945FF"})]})}},21210:(i,a,t)=>{"use strict";t.d(a,{Z:()=>n});var e=t(85893);function n(r){return(0,e.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[(0,e.jsx)("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#EAFBE7",stroke:"#C6F0C2"}),(0,e.jsx)("path",{d:"M8.62 16h1.857l.627-2.05h2.982l.627 2.05h1.863l-2.941-8.455h-2.08L8.619 16zm3.925-6.768h.105l1.032 3.393h-2.174l1.037-3.393zM21.65 16.1c1.612 0 2.62-1.26 2.62-3.323v-.011c0-2.075-.985-3.323-2.62-3.323-.884 0-1.605.434-1.933 1.137h-.106V7.082h-1.71V16h1.71v-1.002h.106c.334.697 1.02 1.102 1.933 1.102zm-.585-1.418c-.903 0-1.471-.715-1.471-1.899v-.011c0-1.184.574-1.91 1.47-1.91.903 0 1.465.726 1.465 1.904v.011c0 1.19-.556 1.905-1.465 1.905z",fill:"#328048"})]})}},3963:(i,a,t)=>{"use strict";t.d(a,{Z:()=>n});var e=t(85893);function n(r){return(0,e.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[(0,e.jsx)("path",{d:"M.5 3A2.5 2.5 0 013 .5h26A2.5 2.5 0 0131.5 3v18a2.5 2.5 0 01-2.5 2.5H3A2.5 2.5 0 01.5 21V3z",fill:"#F0F0FF",stroke:"#D9D8FF"}),(0,e.jsx)("path",{d:"M14.907 9.438c0 .375 0 .738.118 1.078-1.243 1.46-4.526 5.317-4.832 5.611a.582.582 0 00-.193.433c0 .245.15.481.277.614.19.2 1.004.952 1.154.808.444-.433.533-.548.715-.727.274-.268-.029-.816.066-1.039.096-.222.197-.265.361-.3.165-.034.456.084.684.087.24.003.369-.098.548-.265.144-.133.248-.257.25-.45.007-.26-.368-.603-.089-.877.28-.274.684.178.981.144.297-.035.658-.447.695-.623.038-.176-.337-.629-.28-.886.02-.086.197-.288.33-.317.132-.029.72.199.853.17.162-.034.35-.205.502-.3.447.193.854.271 1.376.271C20.4 12.87 22 11.33 22 9.432 22 7.534 20.399 6 18.423 6s-3.516 1.54-3.516 3.438zm5.247-.669a.923.923 0 11-1.847 0 .923.923 0 011.847 0z",fill:"#4945FF"})]})}}}]);
