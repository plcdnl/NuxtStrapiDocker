"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[3677],{14928:(T,d,t)=>{t.r(d),t.d(d,{default:()=>x});var e=t(67294),l=t(68547),r=t(15482),i=t(97132),c=t(87751),m=t(14087),s=t(17034),o=t(67838),E=t(49066),v=t(185),u=t(75515),y=t(11057),C=t(63985),f=t(47144),g=t(18374),L=t(550),I=t(23724);const N=async()=>{const{get:n}=(0,l.getFetchClient)(),{data:a}=await n("/admin/plugins");return a},A=n=>{const a=(0,l.useNotification)();return(0,I.useQuery)("list-enabled-plugins",()=>N(),{onSuccess(){n&&n()},onError(){a({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},D=()=>{const{formatMessage:n}=(0,i.useIntl)(),{notifyStatus:a}=(0,m.G)();(0,l.useFocusWhenNavigate)();const h=n({id:"global.plugins",defaultMessage:"Plugins"}),B=()=>{a(n({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:h}))},{status:p,data:M}=A(B);return p!=="success"&&p!=="error"?e.createElement(s.A,null,e.createElement(v.o,{"aria-busy":!0},e.createElement(l.LoadingIndicatorPage,null))):e.createElement(s.A,null,e.createElement(v.o,null,e.createElement(o.T,{title:h,subtitle:n({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),e.createElement(E.D,null,e.createElement(y.i,{colCount:2,rowCount:M?.plugins?.length??0+1},e.createElement(C.h,null,e.createElement(f.Tr,null,e.createElement(g.Th,null,e.createElement(u.Z,{variant:"sigma",textColor:"neutral600"},n({id:"global.name",defaultMessage:"Name"}))),e.createElement(g.Th,null,e.createElement(u.Z,{variant:"sigma",textColor:"neutral600"},n({id:"global.description",defaultMessage:"description"}))))),e.createElement(L.p,null,M.plugins.map(({name:P,displayName:O,description:W})=>e.createElement(f.Tr,{key:P},e.createElement(g.Td,null,e.createElement(u.Z,{textColor:"neutral800",variant:"omega",fontWeight:"bold"},n({id:`global.plugins.${P}`,defaultMessage:O}))),e.createElement(g.Td,null,e.createElement(u.Z,{textColor:"neutral800"},n({id:`global.plugins.${P}.description`,defaultMessage:W}))))))))))},x=()=>{const{formatMessage:n}=(0,i.useIntl)(),a=n({id:"global.plugins",defaultMessage:"Plugins"});return e.createElement(l.CheckPagePermissions,{permissions:c.Z.marketplace.main},e.createElement(r.Helmet,{title:a}),e.createElement(D,null))}},17034:(T,d,t)=>{t.d(d,{A:()=>s});var e=t(67294),l=t(45697),r=t(27821),i=t(41580);const c=(0,r.default)(i.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:o})=>o?"auto 1fr":"1fr"};
`,m=(0,r.default)(i.x)`
  overflow-x: hidden;
`,s=({sideNav:o,children:E})=>e.createElement(c,{hasSideNav:Boolean(o)},o,e.createElement(m,{paddingBottom:10},E));s.defaultProps={sideNav:void 0},s.propTypes={children:l.node.isRequired,sideNav:l.node}}}]);