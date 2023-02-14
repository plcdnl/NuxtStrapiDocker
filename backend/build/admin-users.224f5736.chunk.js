"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[5199],{94699:(h,n,e)=>{e.d(n,{Z:()=>C});var t=e(67294),a=e(45697),s=e.n(a),g=e(97132),m=e(29728),y=e(41580),o=e(89597),p=e(68547),D=e.n(p);const f=({displayedFilters:A})=>{const[v,Q]=(0,t.useState)(!1),{formatMessage:l}=(0,g.useIntl)(),x=(0,t.useRef)(),c=()=>{Q(z=>!z)};return t.createElement(t.Fragment,null,t.createElement(y.x,{paddingTop:1,paddingBottom:1},t.createElement(m.z,{variant:"tertiary",ref:x,startIcon:t.createElement(o.Z,null),onClick:c,size:"S"},l({id:"app.utils.filters",defaultMessage:"Filters"})),v&&t.createElement(p.FilterPopoverURLQuery,{displayedFilters:A,isVisible:v,onToggle:c,source:x})),t.createElement(p.FilterListURLQuery,{filtersSchema:A}))};f.propTypes={displayedFilters:s().arrayOf(s().shape({name:s().string.isRequired,metadatas:s().shape({label:s().string}),fieldSchema:s().shape({type:s().string})})).isRequired};const C=f},57338:(h,n,e)=>{e.d(n,{Z:()=>a});const a={firstname:"",lastname:"",email:"",roles:[]}},55867:(h,n,e)=>{e.d(n,{Z:()=>a});const a=[]},35097:(h,n,e)=>{e.r(n),e.d(n,{default:()=>Xe});var t=e(67294),a=e(68547),s=e(87751),g=e(67838),m=e(36989),y=e(49066),o=e(29728),p=e(185),D=e(14087),f=e(23293),C=e(49656),A=e(97132),v=e(23724),Q=e(45697),l=e.n(Q),x=e(41451),c=e(41580),z=e(12028),B=e(11047),T=e(75515),re=e(550),oe=e(47144),w=e(18374),ie=e(4585),X=e(20022),k=e(38683);const q=({canDelete:d,headers:u,entriesToDelete:S,onClickDelete:P,onSelectRow:I,withMainAction:Y,withBulkActions:R,rows:_})=>{const{push:H,location:{pathname:G}}=(0,C.useHistory)(),{formatMessage:O}=(0,A.useIntl)();return t.createElement(re.p,null,_.map(r=>{const $=S.findIndex(W=>W===r.id)!==-1;return t.createElement(oe.Tr,{key:r.id,...(0,a.onRowClick)({fn:()=>H(`${G}/${r.id}`),condition:R})},Y&&t.createElement(w.Td,{...a.stopPropagation},t.createElement(x.C,{"aria-label":O({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,k.Pp)(r.firstname,r.lastname)}),checked:$,onChange:()=>{I({name:r.id,value:!$})}})),u.map(({key:W,cellFormatter:K,name:N,...te})=>t.createElement(w.Td,{key:W},typeof K=="function"?K(r,{key:W,name:N,formatMessage:O,...te}):t.createElement(T.Z,{textColor:"neutral800"},r[N]||"-"))),R&&t.createElement(w.Td,null,t.createElement(B.k,{justifyContent:"end"},t.createElement(z.h,{onClick:()=>H(`${G}/${r.id}`),label:O({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,k.Pp)(r.firstname,r.lastname)}),noBorder:!0,icon:t.createElement(ie.Z,null)}),d&&t.createElement(c.x,{paddingLeft:1,...a.stopPropagation},t.createElement(z.h,{onClick:()=>P(r.id),label:O({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,k.Pp)(r.firstname,r.lastname)}),noBorder:!0,icon:t.createElement(X.default,null)})))))}))};q.defaultProps={canDelete:!1,entriesToDelete:[],onClickDelete(){},onSelectRow(){},rows:[],withBulkActions:!1,withMainAction:!1},q.propTypes={canDelete:l().bool,entriesToDelete:l().array,headers:l().array.isRequired,onClickDelete:l().func,onSelectRow:l().func,rows:l().array,withBulkActions:l().bool,withMainAction:l().bool};const de=q;var ce=e(94699),J=e(87462),U=e(15861),me=e(70885),Oe=e(64687),ae=e.n(Oe),Le=e(42866),Ae=e(24969),Se=e(59946),Re=e(36856),Me=e(11276),ue=e(74571),ve=e(2407),Pe=e(7681),_e=e(80831),Be=e(81288);const Ue=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]];var ee=e(53209);const Ie=ee.Ry().shape({firstname:ee.Z_().trim().required(a.translatedErrors.required),lastname:ee.Z_(),email:ee.Z_().email(a.translatedErrors.email).required(a.translatedErrors.required),roles:ee.IX().min(1,a.translatedErrors.required).required(a.translatedErrors.required)}),We={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}};var Ke=function(){return window&&window.strapi&&window.strapi.isEE?e(97083).Z:e(57338).Z}(),Ze=function(){return window&&window.strapi&&window.strapi.isEE?e(810).Z:e(55867).Z}(),Fe=function(){return window&&window.strapi&&window.strapi.isEE?e(12201).Z:e(31605).Z}(),he=function(u){var S=u.queryName,P=u.onToggle,I=(0,t.useState)("create"),Y=(0,me.Z)(I,2),R=Y[0],_=Y[1],H=(0,t.useState)(!1),G=(0,me.Z)(H,2),O=G[0],r=G[1],$=(0,t.useState)(null),W=(0,me.Z)($,2),K=W[0],N=W[1],te=(0,v.useQueryClient)(),se=(0,A.useIntl)(),Z=se.formatMessage,ne=(0,a.useNotification)(),le=(0,a.useOverlayBlocker)(),E=le.lockApp,ye=le.unlockApp,He=(0,a.useFetchClient)(),Ge=He.post,Ve=(0,v.useMutation)(function(L){return Ge("/admin/users",L)},{onSuccess:function(F){return(0,U.Z)(ae().mark(function j(){var b;return ae().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return b=F.data,N(b.data.registrationToken),i.next=4,te.invalidateQueries(S);case 4:Ye(),r(!1);case 6:case"end":return i.stop()}},j)}))()},onError:function(F){throw r(!1),ne({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),F},onSettled:function(){ye()}}),De=Z({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),Je=function(){var L=(0,U.Z)(ae().mark(function F(j,b){var V,i,fe;return ae().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return V=b.setErrors,E(),r(!0),M.prev=3,M.next=6,Ve.mutateAsync(j);case 6:M.next=12;break;case 8:M.prev=8,M.t0=M.catch(3),ye(),(M.t0===null||M.t0===void 0||(i=M.t0.response)===null||i===void 0||(fe=i.data)===null||fe===void 0?void 0:fe.error.message)==="Email already taken"&&V({email:M.t0.response.data.error.message});case 12:case"end":return M.stop()}},F,null,[[3,8]])}));return function(j,b){return L.apply(this,arguments)}}(),Ye=function(){Te?_(Te):P()},ge=We[R],Ce=ge.buttonSubmitLabel,pe=ge.isDisabled,Te=ge.next,we=R==="create"?t.createElement(o.z,{type:"submit",loading:O},Z(Ce)):t.createElement(o.z,{type:"button",loading:O,onClick:P},Z(Ce));return t.createElement(Le.P,{onClose:P,labelledBy:"title"},t.createElement(Ae.x,null,t.createElement(ve.O,{label:De},t.createElement(ve.$,null,De))),t.createElement(_e.Formik,{initialValues:Ke,onSubmit:Je,validationSchema:Ie,validateOnChange:!1},function(L){var F=L.errors,j=L.handleChange,b=L.values;return t.createElement(a.Form,null,t.createElement(Se.f,null,t.createElement(Pe.K,{spacing:6},R!=="create"&&t.createElement(Fe,{registrationToken:K}),t.createElement(c.x,null,t.createElement(T.Z,{variant:"beta",as:"h2"},Z({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})),t.createElement(c.x,{paddingTop:4},t.createElement(Pe.K,{spacing:1},t.createElement(Me.r,{gap:5},Ue.map(function(V){return V.map(function(i){return t.createElement(ue.P,(0,J.Z)({key:i.name},i.size),t.createElement(a.GenericInput,(0,J.Z)({},i,{disabled:pe,error:F[i.name],onChange:j,value:b[i.name]})))})}))))),t.createElement(c.x,null,t.createElement(T.Z,{variant:"beta",as:"h2"},Z({id:"global.roles",defaultMessage:"User's role"})),t.createElement(c.x,{paddingTop:4},t.createElement(Me.r,{gap:5},t.createElement(ue.P,{col:6,xs:12},t.createElement(Be.Z,{disabled:pe,error:F.roles,onChange:j,value:b.roles})),Ze.map(function(V){return V.map(function(i){return t.createElement(ue.P,(0,J.Z)({key:i.name},i.size),t.createElement(a.GenericInput,(0,J.Z)({},i,{disabled:pe,onChange:j,value:b[i.name]})))})})))))),t.createElement(Re.m,{startActions:t.createElement(o.z,{variant:"tertiary",onClick:P,type:"button"},Z({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:we}))}))};he.propTypes={onToggle:l().func.isRequired,queryName:l().array.isRequired};const be=he,Ee=({pagination:d})=>t.createElement(c.x,{paddingTop:4},t.createElement(B.k,{alignItems:"flex-end",justifyContent:"space-between"},t.createElement(a.PageSizeURLQuery,null),t.createElement(a.PaginationURLQuery,{pagination:d})));Ee.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},Ee.propTypes={pagination:l().shape({page:l().number,pageCount:l().number,pageSize:l().number,total:l().number})};const xe=Ee,ze=async(d,u)=>{const{get:S}=(0,a.getFetchClient)(),{data:{data:P}}=await S(`/admin/users${d}`);return u(),P},$e=async d=>{const{post:u}=(0,a.getFetchClient)();await u("/admin/users/batch-delete",{ids:d})},Ne=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],je=[{name:"firstname",key:"firstname",metadatas:{label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0}},{key:"email",name:"email",metadatas:{label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0}},{key:"roles",name:"roles",metadatas:{label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1},cellFormatter({roles:d},{formatMessage:u}){return t.createElement(T.Z,{textColor:"neutral800"},d.map(S=>u({id:`Settings.permissions.users.${S.code}`,defaultMessage:S.name})).join(`,
`))}},{key:"username",name:"username",metadatas:{label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1},cellFormatter({isActive:d},{formatMessage:u}){return t.createElement(B.k,null,t.createElement(a.Status,{isActive:d,variant:d?"success":"danger"}),t.createElement(T.Z,{textColor:"neutral800"},u({id:d?"Settings.permissions.users.active":"Settings.permissions.users.inactive",defaultMessage:d?"Active":"Inactive"})))}}],Qe=()=>{const[d,u]=(0,t.useState)(!1),{allowedActions:{canCreate:S,canDelete:P,canRead:I}}=(0,a.useRBAC)(s.Z.settings.users),Y=(0,v.useQueryClient)(),R=(0,a.useNotification)(),{formatMessage:_}=(0,A.useIntl)(),{search:H}=(0,C.useLocation)();(0,a.useFocusWhenNavigate)();const{notifyStatus:G}=(0,D.G)(),O=["users",H],r=je.map(E=>({...E,metadatas:{...E.metadatas,label:_(E.metadatas.label)}})),$=_({id:"global.users",defaultMessage:"Users"}),W=()=>{G(_({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:$}))},{status:K,data:N,isFetching:te}=(0,v.useQuery)(O,()=>ze(H,W),{enabled:I,keepPreviousData:!0,retry:!1,staleTime:1e3*20,onError(){R({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),se=()=>{u(E=>!E)},Z=(0,v.useMutation)(E=>$e(E),{async onSuccess(){await Y.invalidateQueries(O)},onError(E){E?.response?.data?.data?R({type:"warning",message:E.response.data.data}):R({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),ne=K!=="success"&&K!=="error"||K==="success"&&te,le=S?t.createElement(o.z,{"data-testid":"create-user-button",onClick:se,startIcon:t.createElement(f.Z,null),size:"S"},_({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})):void 0;return t.createElement(p.o,{"aria-busy":ne},t.createElement(a.SettingsPageTitle,{name:"Users"}),t.createElement(g.T,{primaryAction:le,title:$,subtitle:_({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),I&&t.createElement(m.Z,{startActions:t.createElement(t.Fragment,null,t.createElement(a.SearchURLQuery,{label:_({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:$})}),t.createElement(ce.Z,{displayedFilters:Ne}))}),t.createElement(y.D,{canRead:I},!I&&t.createElement(a.NoPermissions,null),K==="error"&&t.createElement("div",null,"TODO: An error occurred"),I&&t.createElement(t.Fragment,null,t.createElement(a.DynamicTable,{contentType:"Users",isLoading:ne,onConfirmDeleteAll:Z.mutateAsync,onConfirmDelete:E=>Z.mutateAsync([E]),headers:r,rows:N?.results,withBulkActions:!0,withMainAction:P},t.createElement(de,{canDelete:P,headers:r,rows:N?.results||[],withBulkActions:!0,withMainAction:P})),t.createElement(xe,{pagination:N?.pagination}))),d&&t.createElement(be,{onToggle:se,queryName:O}))},Xe=()=>t.createElement(a.CheckPagePermissions,{permissions:s.Z.settings.users.main},t.createElement(Qe,null))},82464:(h,n,e)=>{e.d(n,{Z:()=>v});var t=e(67294),a=e(45697),s=e.n(a),g=e(12028),m=e(68547),y=e.n(m),o=e(65186),p=e(74855),D=e.n(p),f=e(97132);const C=()=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg"},t.createElement("text",{transform:"translate(-23 -9)",fill:"#4B515A",fillRule:"evenodd",fontSize:"32",fontFamily:"AppleColorEmoji, Apple Color Emoji"},t.createElement("tspan",{x:"23",y:"36"},"\u2709\uFE0F"))),A=({children:Q,target:l})=>{const x=(0,m.useNotification)(),{formatMessage:c}=(0,f.useIntl)(),z=()=>{x({type:"info",message:{id:"notification.link-copied"}})},B=c({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"});return t.createElement(m.ContentBox,{endAction:t.createElement(p.CopyToClipboard,{onCopy:z,text:l},t.createElement(g.h,{label:B,noBorder:!0,icon:t.createElement(o.Z,null)})),title:l,titleEllipsis:!0,subtitle:Q,icon:t.createElement(C,null),iconBackground:"neutral100"})};A.propTypes={children:s().oneOfType([s().element,s().string]).isRequired,target:s().string.isRequired};const v=A},31605:(h,n,e)=>{e.d(n,{Z:()=>p});var t=e(67294),a=e(97132),s=e(45697),g=e.n(s),m=e(63871),y=e(82464);const o=({registrationToken:D})=>{const{formatMessage:f}=(0,a.useIntl)(),C=`${window.location.origin}${m.Z}auth/register?registrationToken=${D}`;return t.createElement(y.Z,{target:C},f({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};o.defaultProps={registrationToken:""},o.propTypes={registrationToken:g().string};const p=o},81288:(h,n,e)=>{e.d(n,{Z:()=>z});var t=e(67294),a=e(45697),s=e.n(a),g=e(97132),m=e(91216),y=e(82562),o=e(23724),p=e.n(o),D=e(27821),f=e(86647),C=e(68547),A=e.n(C);const v=D.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,Q=D.default.div`
  animation: ${v} 2s infinite linear;
`,l=()=>t.createElement(Q,null,t.createElement(f.Z,null)),x=async()=>{const{get:B}=(0,C.getFetchClient)(),{data:T}=await B("/admin/roles");return T.data},c=({disabled:B,error:T,onChange:re,value:oe})=>{const{status:w,data:ie}=(0,o.useQuery)(["roles"],x,{staleTime:5e4}),{formatMessage:X}=(0,g.useIntl)(),k=T?X({id:T,defaultMessage:T}):"",q=X({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),de=X({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),ce=X({id:"app.components.Select.placeholder",defaultMessage:"Select"}),J=w==="loading"?t.createElement(l,null):void 0;return t.createElement(m.P,{id:"roles",disabled:B,error:k,hint:de,label:q,name:"roles",onChange:U=>{re({target:{name:"roles",value:U}})},placeholder:ce,multi:!0,startIcon:J,value:oe,withTags:!0,required:!0},(ie||[]).map(U=>t.createElement(y.W,{key:U.id,value:U.id},X({id:`global.${U.code}`,defaultMessage:U.name}))))};c.defaultProps={disabled:!1,error:void 0},c.propTypes={disabled:s().bool,error:s().string,onChange:s().func.isRequired,value:s().array.isRequired};const z=c},97083:(h,n,e)=>{e.d(n,{Z:()=>g});var t=e(57338);const a=strapi.features.isEnabled(strapi.features.SSO)?{useSSORegistration:!0}:{},g={...t.Z,...a}},810:(h,n,e)=>{e.d(n,{Z:()=>a});const a=strapi.features.isEnabled(strapi.features.SSO)?[[{intlLabel:{id:"Settings.permissions.users.form.sso",defaultMessage:"Connect with SSO"},hint:{id:"Settings.permissions.users.form.sso.description",defaultMessage:"When enabled (ON), users can login via SSO"},name:"useSSORegistration",type:"bool",size:{col:6,xs:12}}]]:[]},12201:(h,n,e)=>{e.d(n,{Z:()=>p});var t=e(67294),a=e(97132),s=e(45697),g=e.n(s),m=e(63871),y=e(82464);const o=({registrationToken:D})=>{const{formatMessage:f}=(0,a.useIntl)();return D?t.createElement(y.Z,{target:`${window.location.origin}${m.Z}auth/register?registrationToken=${D}`},f({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):t.createElement(y.Z,{target:`${window.location.origin}${m.Z}auth/login`},f({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};o.defaultProps={registrationToken:""},o.propTypes={registrationToken:g().string};const p=o},23293:(h,n,e)=>{e.d(n,{Z:()=>a});var t=e(85893);function a(s){return(0,t.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:[(0,t.jsx)("path",{d:"M0 2.8A.8.8 0 01.8 2h22.4a.8.8 0 01.8.8v2.71a1 1 0 01-1 1H1a1 1 0 01-1-1V2.8z",fill:"#32324D"}),(0,t.jsx)("path",{d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873zM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053z",fill:"#32324D"}),(0,t.jsx)("path",{d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555z",fill:"#32324D"})]})}},86647:(h,n,e)=>{e.d(n,{Z:()=>a});var t=e(85893);function a(s){return(0,t.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.057 18c.552 0 1 .451 1 .997v4.006a1 1 0 01-.941.995l-.059.002c-.552 0-1-.451-1-.997v-4.006a1 1 0 01.941-.995l.06-.002zm-3.06-.736l.055.03c.478.276.64.89.367 1.364l-2.002 3.468a1 1 0 01-1.31.394l-.055-.03a1.002 1.002 0 01-.368-1.363l2.003-3.469a1 1 0 011.31-.394zm7.42.394l2.002 3.468a1 1 0 01-.314 1.331l-.053.033a1.002 1.002 0 01-1.365-.363l-2.003-3.469a1 1 0 01.314-1.33l.054-.034a1.002 1.002 0 011.364.364zm-9.548-2.66l.033.054c.276.478.11 1.091-.364 1.364L3.07 18.42a1 1 0 01-1.331-.314l-.033-.053a1.001 1.001 0 01.364-1.365l3.468-2.003a1 1 0 011.33.314zm11.79-.313l3.468 2.002a1 1 0 01.393 1.31l-.03.055c-.276.478-.89.64-1.363.367l-3.469-2.003a1 1 0 01-.394-1.309l.03-.055c.276-.479.89-.64 1.364-.367zm4.344-3.628a1 1 0 01.995.941l.002.06c0 .551-.451 1-.997 1h-4.006a1 1 0 01-.995-.942L18 12.057c0-.552.451-1 .997-1h4.006zm-18 0a1 1 0 01.995.941l.002.06c0 .551-.451 1-.998 1H.998a1 1 0 01-.996-.942L0 12.057c0-.552.451-1 .998-1h4.004zm17.454-5.059l.033.054c.277.478.11 1.091-.363 1.365l-3.469 2.002a1 1 0 01-1.33-.314l-.034-.053a1.002 1.002 0 01.364-1.365l3.468-2.003a1 1 0 011.331.314zM3.07 5.684l3.468 2.003a1 1 0 01.394 1.31l-.03.055c-.276.478-.89.64-1.364.367L2.07 7.417a1 1 0 01-.394-1.31l.03-.055c.276-.479.89-.64 1.364-.368zm14.926-4.008l.056.03c.478.276.64.89.367 1.364l-2.003 3.468a1 1 0 01-1.309.394l-.055-.03a1.002 1.002 0 01-.367-1.364l2.002-3.468a1 1 0 011.31-.394zm-10.58.394L9.42 5.538a1 1 0 01-.314 1.33l-.053.034a1.002 1.002 0 01-1.365-.364L5.684 3.07a1 1 0 01.314-1.331l.054-.033a1.002 1.002 0 011.365.364zM12.058 0c.552 0 1 .451 1 .998v4.004a1 1 0 01-.941.996L12.057 6c-.552 0-1-.451-1-.998V.998a1 1 0 01.941-.996l.06-.002z",fill:"#212134"})})}}}]);
