"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[3219],{76539:(K,M,e)=>{e.d(M,{Z:()=>E});var t=e(67294),m=e(97132),n=e(45697),s=e.n(n),d=e(68547),r=e(67109),f=e(85018),i=e(29728),u=e(67838),v=e(7681),p=e(30815),o=e(48474);const c=({onRegenerate:P,idToRegenerate:a,backUrl:I})=>{const{formatMessage:S}=(0,m.useIntl)(),[U,D]=(0,t.useState)(!1),{regenerateData:W,isLoadingConfirmation:O}=(0,o.rW)(I,a,P),B=async()=>{W(),D(!1)};return t.createElement(t.Fragment,null,t.createElement(i.z,{startIcon:t.createElement(p.Z,null),type:"button",size:"S",variant:"tertiary",onClick:()=>D(!0),name:"regenerate"},S({id:"Settings.apiTokens.regenerate",defaultMessage:"Regenerate"})),t.createElement(d.ConfirmDialog,{bodyText:{id:"Settings.apiTokens.popUpWarning.message",defaultMessage:"Are you sure you want to regenerate this token?"},iconRightButton:t.createElement(p.Z,null),isConfirmButtonLoading:O,isOpen:U,onToggleDialog:()=>D(!1),onConfirm:B,leftButtonText:{id:"Settings.apiTokens.Button.cancel",defaultMessage:"Cancel"},rightButtonText:{id:"Settings.apiTokens.Button.regenerate",defaultMessage:"Regenerate"},title:{id:"Settings.apiTokens.RegenerateDialog.title",defaultMessage:"Regenerate token"}}))};c.defaultProps={onRegenerate(){}},c.propTypes={onRegenerate:s().func,idToRegenerate:s().oneOfType([s().number,s().string]).isRequired,backUrl:s().string.isRequired};const l=c,g=({title:P,token:a,setToken:I,canEditInputs:S,canRegenerate:U,isSubmitting:D,backUrl:W,regenerateUrl:O})=>{const{formatMessage:B}=(0,m.useIntl)(),N=V=>{I({...a,accessKey:V})};return t.createElement(u.T,{title:a?.name||B(P),primaryAction:S?t.createElement(v.K,{horizontal:!0,spacing:2},U&&a?.id&&t.createElement(l,{backUrl:O,onRegenerate:N,idToRegenerate:a?.id}),t.createElement(i.z,{disabled:D,loading:D,startIcon:t.createElement(f.Z,null),type:"submit",size:"S"},B({id:"global.save",defaultMessage:"Save"}))):U&&a?.id&&t.createElement(l,{onRegenerate:N,idToRegenerate:a?.id,backUrl:O}),navigationAction:t.createElement(d.Link,{startIcon:t.createElement(r.Z,null),to:W},B({id:"global.back",defaultMessage:"Back"}))})};g.propTypes={token:s().shape({id:s().oneOfType([s().number,s().string]),type:s().string,lifespan:s().oneOfType([s().number,s().string]),name:s().string,accessKey:s().string,permissions:s().array,description:s().string,createdAt:s().string}),canEditInputs:s().bool.isRequired,canRegenerate:s().bool.isRequired,setToken:s().func.isRequired,isSubmitting:s().bool.isRequired,backUrl:s().string.isRequired,title:s().shape({id:s().string,label:s().string}).isRequired,regenerateUrl:s().string.isRequired},g.defaultProps={token:void 0};const E=g},60401:(K,M,e)=>{e.d(M,{Z:()=>v});var t=e(67294),m=e(45697),n=e.n(m),s=e(97132),d=e(91216),r=e(82562),f=e(75515),i=e(75056);const u=({token:p,errors:o,values:c,onChange:l,isCreating:g})=>{const{formatMessage:E}=(0,s.useIntl)();return t.createElement(t.Fragment,null,t.createElement(d.P,{name:"lifespan",label:E({id:"Settings.apiTokens.form.duration",defaultMessage:"Token duration"}),value:c.lifespan!==null?c.lifespan:"0",error:o.lifespan?E(o.lifespan?.id?o.lifespan:{id:o.lifespan,defaultMessage:o.lifespan}):null,onChange:P=>{l({target:{name:"lifespan",value:P}})},required:!0,disabled:!g,placeholder:"Select"},t.createElement(r.W,{value:"604800000"},E({id:"Settings.tokens.duration.7-days",defaultMessage:"7 days"})),t.createElement(r.W,{value:"2592000000"},E({id:"Settings.tokens.duration.30-days",defaultMessage:"30 days"})),t.createElement(r.W,{value:"7776000000"},E({id:"Settings.tokens.duration.90-days",defaultMessage:"90 days"})),t.createElement(r.W,{value:"0"},E({id:"Settings.tokens.duration.unlimited",defaultMessage:"Unlimited"}))),t.createElement(f.Z,{variant:"pi",textColor:"neutral600"},!g&&`${E({id:"Settings.tokens.duration.expiration-date",defaultMessage:"Expiration date"})}: ${(0,i.IX)(p?.createdAt,parseInt(c.lifespan,10))}`))};u.propTypes={errors:n().shape({lifespan:n().string}),onChange:n().func.isRequired,values:n().shape({lifespan:n().oneOfType([n().number,n().string])}).isRequired,isCreating:n().bool.isRequired,token:n().shape({id:n().oneOfType([n().number,n().string]),type:n().string,lifespan:n().string,name:n().string,accessKey:n().string,permissions:n().array,description:n().string,createdAt:n().string})},u.defaultProps={errors:{},token:{}};const v=u},24122:(K,M,e)=>{e.d(M,{Z:()=>c});var t=e(67294),m=e(97132),n=e(45697),s=e.n(n),d=e(74855),r=e.n(d),f=e(68547),i=e.n(f),u=e(12028),v=e(65186),p=e(69427);const o=({token:l})=>{const{formatMessage:g}=(0,m.useIntl)(),E=(0,f.useNotification)(),{trackUsage:P}=(0,f.useTracking)(),a=(0,t.useRef)(P);return t.createElement(f.ContentBox,{endAction:l&&t.createElement("span",{style:{alignSelf:"start"}},t.createElement(d.CopyToClipboard,{onCopy:()=>{a.current("didCopyTokenKey"),E({type:"success",message:{id:"Settings.tokens.notification.copied"}})},text:l},t.createElement(u.h,{label:g({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),noBorder:!0,icon:t.createElement(v.Z,null),style:{padding:0,height:"1rem"}}))),title:l||g({id:"Settings.tokens.copy.editTitle",defaultMessage:"This token isn\u2019t accessible anymore."}),subtitle:g(l?{id:"Settings.tokens.copy.lastWarning",defaultMessage:"Make sure to copy this token, you won\u2019t be able to see it again!"}:{id:"Settings.tokens.copy.editMessage",defaultMessage:"For security reasons, you can only see your token once."}),icon:t.createElement(p.Z,null),iconBackground:"neutral100"})};o.defaultProps={token:null},o.propTypes={token:s().string};const c=o},40695:(K,M,e)=>{e.d(M,{Z:()=>f});var t=e(67294),m=e(45697),n=e.n(m),s=e(97132),d=e(64256);const r=({errors:i,values:u,onChange:v,canEditInputs:p})=>{const{formatMessage:o}=(0,s.useIntl)();return t.createElement(d.g,{label:o({id:"Settings.tokens.form.description",defaultMessage:"Description"}),name:"description",error:i.description?o(i.description?.id?i.description:{id:i.description,defaultMessage:i.description}):null,onChange:v,disabled:!p},u.description)};r.propTypes={errors:n().shape({description:n().string}),onChange:n().func.isRequired,canEditInputs:n().bool.isRequired,values:n().shape({description:n().string}).isRequired},r.defaultProps={errors:{}};const f=r},61053:(K,M,e)=>{e.d(M,{Z:()=>f});var t=e(67294),m=e(45697),n=e.n(m),s=e(97132),d=e(16364);const r=({errors:i,values:u,onChange:v,canEditInputs:p})=>{const{formatMessage:o}=(0,s.useIntl)();return t.createElement(d.o,{name:"name",error:i.name?o(i.name?.id?i.name:{id:i.name,defaultMessage:i.name}):null,label:o({id:"Settings.tokens.form.name",defaultMessage:"Name"}),onChange:v,value:u.name,disabled:!p,required:!0})};r.propTypes={errors:n().shape({name:n().string}),onChange:n().func.isRequired,canEditInputs:n().bool.isRequired,values:n().shape({name:n().string}).isRequired},r.defaultProps={errors:{}};const f=r},75056:(K,M,e)=>{e.d(M,{IX:()=>s,fK:()=>i,mk:()=>p});var t=e(47292),m=e(73825);const s=(o,c,l="en")=>{if(c&&typeof c=="number"){const g=c/24/60/60/1e3;return(0,t.format)((0,t.addDays)(new Date(o),g),"PPP",{locale:m[l]})}return"Unlimited"};var d=e(53209),r=e(68547);const i=d.Ry().shape({name:d.Z_(r.translatedErrors.string).required(r.translatedErrors.required),type:d.Z_(r.translatedErrors.string).oneOf(["read-only","full-access","custom"]).required(r.translatedErrors.required),description:d.Z_().nullable(),lifespan:d.Rx().integer().min(0).nullable().defined(r.translatedErrors.required)});var u=e(96486);const p=o=>{const c={allActionsIds:[],permissions:[]};return c.permissions=Object.keys(o).map(l=>({apiId:l,label:l.split("::")[1],controllers:(0,u.flatten)(Object.keys(o[l].controllers).map(g=>({controller:g,actions:(0,u.flatten)(o[l].controllers[g].map(E=>{const P=`${l}.${g}.${E}`;return l.includes("api::")&&c.allActionsIds.push(P),{action:E,actionId:P}}))})))})),c}},53219:(K,M,e)=>{e.d(M,{Z:()=>Y});var t=e(67294),m=e(97132),n=e(80831),s=e(49656),d=e(23724),r=e(68547),f=e(185),i=e(7681),u=e(49066),v=e(38683),p=e(53209);const c=p.Ry().shape({name:p.Z_(r.translatedErrors.string).required(r.translatedErrors.required),description:p.Z_().nullable(),lifespan:p.Rx().integer().min(0).nullable().defined(r.translatedErrors.required)});var l=e(67838),g=e(29728),E=e(85018),P=e(45697),a=e.n(P);const I=({transferTokenName:C})=>{const{formatMessage:h}=(0,m.useIntl)();return(0,r.useFocusWhenNavigate)(),t.createElement(f.o,{"aria-busy":"true"},t.createElement(r.SettingsPageTitle,{name:"Transfer Tokens"}),t.createElement(l.T,{primaryAction:t.createElement(g.z,{disabled:!0,startIcon:t.createElement(E.Z,null),type:"button",size:"L"},h({id:"global.save",defaultMessage:"Save"})),title:C||h({id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"})}),t.createElement(u.D,null,t.createElement(r.LoadingIndicatorPage,null)))};I.defaultProps={transferTokenName:null},I.propTypes={transferTokenName:a().string};const S=I;var U=e(87751),D=e(41580),W=e(11276),O=e(74571),B=e(75515),N=e(60401),V=e(61053),G=e(40695);const $=({errors:C,onChange:h,canEditInputs:Z,isCreating:k,values:L,transferToken:y})=>{const{formatMessage:x}=(0,m.useIntl)();return t.createElement(D.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(i.K,{spacing:4},t.createElement(B.Z,{variant:"delta",as:"h2"},x({id:"global.details",defaultMessage:"Details"})),t.createElement(W.r,{gap:5},t.createElement(O.P,{key:"name",col:6,xs:12},t.createElement(V.Z,{errors:C,values:L,canEditInputs:Z,onChange:h})),t.createElement(O.P,{key:"description",col:6,xs:12},t.createElement(G.Z,{errors:C,values:L,canEditInputs:Z,onChange:h})),t.createElement(O.P,{key:"lifespan",col:6,xs:12},t.createElement(N.Z,{isCreating:k,errors:C,values:L,onChange:h,token:y})))))};$.propTypes={errors:a().shape({name:a().string,description:a().string,lifespan:a().string,type:a().string}),onChange:a().func.isRequired,canEditInputs:a().bool.isRequired,values:a().shape({name:a().string,description:a().string,lifespan:a().oneOfType([a().number,a().string]),type:a().string}).isRequired,isCreating:a().bool.isRequired,transferToken:a().shape({id:a().oneOfType([a().number,a().string]),type:a().string,lifespan:a().string,name:a().string,accessKey:a().string,permissions:a().array,description:a().string,createdAt:a().string})},$.defaultProps={errors:{},transferToken:{}};const j=$;var b=e(24122),Q=e(76539);const J="Name already taken",Y=()=>{(0,r.useFocusWhenNavigate)();const{formatMessage:C}=(0,m.useIntl)(),{lockApp:h,unlockApp:Z}=(0,r.useOverlayBlocker)(),k=(0,r.useNotification)(),L=(0,s.useHistory)(),[y,x]=(0,t.useState)(L.location.state?.transferToken.accessKey?{...L.location.state.transferToken}:null),{setCurrentStep:_}=(0,r.useGuidedTour)(),{allowedActions:{canCreate:q,canUpdate:w,canRegenerate:ee}}=(0,r.useRBAC)(U.Z.settings["transfer-tokens"]),{params:{id:z}}=(0,s.useRouteMatch)("/settings/transfer-tokens/:id"),{get:te,post:ne,put:se}=(0,r.useFetchClient)(),A=z==="create",{status:ae}=(0,d.useQuery)(["transfer-token",z],async()=>{const{data:{data:T}}=await te(`/admin/transfer/tokens/${z}`);return x({...T}),T},{enabled:!A&&!y,onError(){k({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),re=async(T,F)=>{h();const H=T.lifespan&&parseInt(T.lifespan,10)&&T.lifespan!=="0"?parseInt(T.lifespan,10):null;try{const{data:{data:R}}=A?await ne("/admin/transfer/tokens",{...T,lifespan:H,permissions:["push"]}):await se(`/admin/transfer/tokens/${z}`,{name:T.name,description:T.description,type:T.type,permissions:["push"]});Z(),A&&(L.replace(`/settings/transfer-tokens/${R.id}`,{transferToken:R}),_("transferTokens.success")),x({...R}),k({type:"success",message:C(A?{id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"}:{id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})})}catch(R){const oe=(0,v.Iz)(R.response.data);F.setErrors(oe),R?.response?.data?.error?.message===J?k({type:"warning",message:R.response.data.message||"notification.error.tokennamenotunique"}):k({type:"warning",message:R?.response?.data?.message||"notification.error"}),Z()}},X=w&&!A||q&&A;return!A&&!y&&ae!=="success"?t.createElement(S,{transferTokenName:y?.name}):t.createElement(f.o,null,t.createElement(r.SettingsPageTitle,{name:"Transfer Tokens"}),t.createElement(n.Formik,{validationSchema:c,validateOnChange:!1,initialValues:{name:y?.name||"",description:y?.description||"",lifespan:y?.lifespan?y.lifespan.toString():y?.lifespan},enableReinitialize:!0,onSubmit:(T,F)=>re(T,F)},({errors:T,handleChange:F,isSubmitting:H,values:R})=>t.createElement(r.Form,null,t.createElement(Q.Z,{backUrl:"/settings/transfer-tokens",title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"},token:y,setToken:x,canEditInputs:X,canRegenerate:ee,isSubmitting:H,regenerateUrl:"/admin/transfer/tokens/"}),t.createElement(u.D,null,t.createElement(i.K,{spacing:6},Boolean(y?.name)&&t.createElement(b.Z,{token:y?.accessKey}),t.createElement(j,{errors:T,onChange:F,canEditInputs:X,isCreating:A,values:R,transferToken:y}))))))}}}]);