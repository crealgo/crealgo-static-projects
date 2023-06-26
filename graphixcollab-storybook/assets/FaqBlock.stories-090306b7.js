import{s as J}from"./chance-cee71ec0.js";import{a as f,j as a,F as X}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{B as K}from"./Block-10605452.js";import{C as M}from"./Container-167fc6f5.js";import{C as Q}from"./ContentGrid-b98dd1a1.js";import{r as Y,i as Z,a as oo}from"./jsx-runtime_commonjs-proxy-526ce555.js";import{A as eo}from"./ActionStack-93ca746e.js";import{_ as w}from"./createTheme-0dc7dae6.js";import{_ as i}from"./extends-98964cd2.js";import{r as l}from"./index-570b25c1.js";import"./react-is.production.min-a192e302.js";import{c as _}from"./clsx.m-1229b3e0.js";import{s as p}from"./styled-c5161996.js";import{g as B,a as I,u as D,c as P}from"./useThemeProps-4b422382.js";import{P as ro}from"./Paper-6b67602d.js";import{u as to}from"./useControlled-9b1271e0.js";import{C as ao}from"./Collapse-0e8a6e52.js";import{M as no}from"./ButtonBase-a61f402b.js";import{H as so}from"./Heading-908cb5d8.js";import"./_commonjsHelpers-042e6b4d.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./Box-fba3005b.js";import"./useTheme-a01d1f5e.js";import"./Typography-3433e336.js";import"./createSvgIcon-0cd10119.js";import"./ownerWindow-2150232e.js";import"./useIsFocusVisible-81b8ef00.js";import"./useEnhancedEffect-460150e6.js";import"./useId-19251564.js";import"./useEventCallback-e1b9edb9.js";import"./Button-a6114443.js";import"./emotion-react.browser.esm-c7009067.js";import"./emotion-styled.browser.esm-7daedd15.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-38ea7bbc.js";import"./ButtonBase-3726785b.js";import"./Stack-b74bc2fe.js";import"./getThemeProps-6c786bf3.js";import"./utils-ecc8b08b.js";import"./assertThisInitialized-e784747a.js";import"./index-8a077077.js";import"./useTheme-cd93cc18.js";const io=l.createContext({}),j=io;function co(o){return I("MuiAccordion",o)}const lo=B("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),C=lo,po=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],uo=o=>{const{classes:e,square:r,expanded:t,disabled:s,disableGutters:c}=o;return P({root:["root",!r&&"rounded",t&&"expanded",s&&"disabled",!c&&"gutters"],region:["region"]},co,e)},mo=p(ro,{name:"MuiAccordion",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:r}=o;return[{[`& .${C.region}`]:e.region},e.root,!r.square&&e.rounded,!r.disableGutters&&e.gutters]}})(({theme:o})=>{const e={duration:o.transitions.duration.shortest};return{position:"relative",transition:o.transitions.create(["margin"],e),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(o.vars||o).palette.divider,transition:o.transitions.create(["opacity","background-color"],e)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${C.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${C.disabled}`]:{backgroundColor:(o.vars||o).palette.action.disabledBackground}}},({theme:o,ownerState:e})=>i({},!e.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(o.vars||o).shape.borderRadius,borderTopRightRadius:(o.vars||o).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(o.vars||o).shape.borderRadius,borderBottomRightRadius:(o.vars||o).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!e.disableGutters&&{[`&.${C.expanded}`]:{margin:"16px 0"}})),fo=l.forwardRef(function(e,r){const t=D({props:e,name:"MuiAccordion"}),{children:s,className:c,defaultExpanded:d=!1,disabled:u=!1,disableGutters:g=!1,expanded:q,onChange:b,square:h=!1,TransitionComponent:v=ao,TransitionProps:A}=t,$=w(t,po),[n,m]=to({controlled:q,default:d,name:"Accordion",state:"expanded"}),x=l.useCallback(O=>{m(!n),b&&b(O,!n)},[n,b,m]),[k,...U]=l.Children.toArray(s),L=l.useMemo(()=>({expanded:n,disabled:u,disableGutters:g,toggle:x}),[n,u,g,x]),G=i({},t,{square:h,disabled:u,disableGutters:g,expanded:n}),E=uo(G);return f(mo,i({className:_(E.root,c),ref:r,ownerState:G,square:h},$,{children:[a(j.Provider,{value:L,children:k}),a(v,i({in:n,timeout:"auto"},A,{children:a("div",{"aria-labelledby":k.props.id,id:k.props["aria-controls"],role:"region",className:E.region,children:U})}))]}))}),go=fo;function bo(o){return I("MuiAccordionDetails",o)}B("MuiAccordionDetails",["root"]);const yo=["className"],xo=o=>{const{classes:e}=o;return P({root:["root"]},bo,e)},ho=p("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(o,e)=>e.root})(({theme:o})=>({padding:o.spacing(1,2,2)})),vo=l.forwardRef(function(e,r){const t=D({props:e,name:"MuiAccordionDetails"}),{className:s}=t,c=w(t,yo),d=t,u=xo(d);return a(ho,i({className:_(u.root,s),ref:r,ownerState:d},c))}),Ao=vo;function Co(o){return I("MuiAccordionSummary",o)}const Ro=B("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),y=Ro,So=["children","className","expandIcon","focusVisibleClassName","onClick"],_o=o=>{const{classes:e,expanded:r,disabled:t,disableGutters:s}=o;return P({root:["root",r&&"expanded",t&&"disabled",!s&&"gutters"],focusVisible:["focusVisible"],content:["content",r&&"expanded",!s&&"contentGutters"],expandIconWrapper:["expandIconWrapper",r&&"expanded"]},Co,e)},qo=p(no,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(o,e)=>e.root})(({theme:o,ownerState:e})=>{const r={duration:o.transitions.duration.shortest};return i({display:"flex",minHeight:48,padding:o.spacing(0,2),transition:o.transitions.create(["min-height","background-color"],r),[`&.${y.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${y.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},[`&:hover:not(.${y.disabled})`]:{cursor:"pointer"}},!e.disableGutters&&{[`&.${y.expanded}`]:{minHeight:64}})}),$o=p("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(o,e)=>e.content})(({theme:o,ownerState:e})=>i({display:"flex",flexGrow:1,margin:"12px 0"},!e.disableGutters&&{transition:o.transitions.create(["margin"],{duration:o.transitions.duration.shortest}),[`&.${y.expanded}`]:{margin:"20px 0"}})),ko=p("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(o,e)=>e.expandIconWrapper})(({theme:o})=>({display:"flex",color:(o.vars||o).palette.action.active,transform:"rotate(0deg)",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),[`&.${y.expanded}`]:{transform:"rotate(180deg)"}})),Mo=l.forwardRef(function(e,r){const t=D({props:e,name:"MuiAccordionSummary"}),{children:s,className:c,expandIcon:d,focusVisibleClassName:u,onClick:g}=t,q=w(t,So),{disabled:b=!1,disableGutters:h,expanded:v,toggle:A}=l.useContext(j),$=x=>{A&&A(x),g&&g(x)},n=i({},t,{expanded:v,disabled:b,disableGutters:h}),m=_o(n);return f(qo,i({focusRipple:!1,disableRipple:!0,disabled:b,component:"div","aria-expanded":v,className:_(m.root,c),focusVisibleClassName:_(m.focusVisible,u),onClick:$,ref:r,ownerState:n},q,{children:[a($o,{className:m.content,ownerState:n,children:s}),d&&a(ko,{className:m.expandIconWrapper,ownerState:n,children:d})]}))}),No=Mo;var F={},Vo=Z;Object.defineProperty(F,"__esModule",{value:!0});var z=F.default=void 0,wo=Vo(Y()),Bo=oo,Io=(0,wo.default)((0,Bo.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutline");z=F.default=Io;const Do="18px",R="28px",Po=p(go)`
	padding: 1rem 1rem;
	border-left: none;
	border-right: none;
	border-bottom: none;
	background-color: transparent;

	&:nth-of-type(1) {
		border-top: none;
	}

	.MuiSvgIcon-root {
		padding: 4px;
		height: ${R};
		width: ${R};

		display: block;
		margin-right: 0.25rem;
		opacity: 0.5;

		transition: all 300ms;
		transform: rotate(0deg);
	}

	.MuiAccordionSummary-root {
		display: flex;
		gap: 2rem;
		padding: 0;
		font-size: ${Do};
		line-height: ${R};

		font-weight: normal;
	}

	&.Mui-expanded {
		.MuiSvgIcon-root {
			transform: rotate(45deg);
			opacity: 1;
			color: var(--color-brand-primary-main);
		}
	}

	.MuiAccordionDetails-root {
		padding-left: calc(0.25rem + ${R});
	}
`,Fo=p(No)(({theme:o})=>({...o.typography.body2})),N=({question:o,answer:e,actions:r})=>f(Po,{variant:"outlined",children:[f(Fo,{children:[a(z,{}),o]}),f(Ao,{children:[e,r&&f(X,{children:[a("br",{}),a("br",{}),a(eo,{size:"small",actions:r})]})]})]});try{N.displayName="FaqAccordion",N.__docgenInfo={description:"",displayName:"FaqAccordion",props:{question:{defaultValue:null,description:"",name:"question",required:!0,type:{name:"string"}},answer:{defaultValue:null,description:"",name:"answer",required:!0,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action[]"}},resources:{defaultValue:null,description:"",name:"resources",required:!1,type:{name:"SimpleLink"}}}}}catch{}const Go=p("div")`
	margin-bottom: 2rem;
	justify-content: center;
	text-align: center;
`,V=({title:o,faqs:e})=>a(M,{children:a(K,{isRounded:!0,color:"grey",children:f(Q,{children:[a(M,{size:"small",children:a(Go,{children:a(so,{level:2,children:o})})}),a(M,{size:"small",children:e==null?void 0:e.map((r,t)=>a(N,{...r},t))})]})})});try{V.displayName="FaqBlock",V.__docgenInfo={description:"",displayName:"FaqBlock",props:{faqs:{defaultValue:null,description:"",name:"faqs",required:!0,type:{name:"FaqOptions[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | (ReactElement<any, string | JSXElementConstructor<any>> & string) | (ReactFragment & string) | (ReactPortal & string)"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action<HTMLElement>[]"}},ActionStackProps:{defaultValue:null,description:"",name:"ActionStackProps",required:!1,type:{name:"ActionStackProps"}}}}}catch{}const qe={component:V},S={args:J()};var W,H,T;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: generateFaqBlock()
}`,...(T=(H=S.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};const $e=["Default"];export{S as Default,$e as __namedExportsOrder,qe as default};
//# sourceMappingURL=FaqBlock.stories-090306b7.js.map
