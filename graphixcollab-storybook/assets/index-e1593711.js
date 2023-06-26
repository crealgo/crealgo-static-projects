import{j as i,a as A,F as de}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{H as pe}from"./Heading-908cb5d8.js";import{I as ee}from"./IconButtonBase-580359f7.js";import{s as w,r as ue}from"./styled-c5161996.js";import{u as me}from"./useControlled-9b1271e0.js";import{C as re,M as fe}from"./Menu-4564c580.js";import{_ as L,e as V}from"./createTheme-0dc7dae6.js";import{_ as p}from"./extends-98964cd2.js";import{r as x}from"./index-570b25c1.js";import{c as I}from"./clsx.m-1229b3e0.js";import{u as te}from"./useTheme-cd93cc18.js";import{a as he,g as ge,u as ye,c as xe}from"./useThemeProps-4b422382.js";import{M as ve}from"./Modal-c90c8588.js";import{P as _e}from"./Paper-6b67602d.js";import{T as we,r as ke,g as U}from"./utils-ecc8b08b.js";import{u as Ee}from"./useIsFocusVisible-81b8ef00.js";import{d as be,o as oe}from"./ownerWindow-2150232e.js";import{s as Y}from"./emotion-styled.browser.esm-7daedd15.js";import{r as De}from"./router-593b1e68.js";const Ce=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Te(e,r,a){const t=r.getBoundingClientRect(),n=a&&a.getBoundingClientRect(),c=oe(r);let s;if(r.fakeTransform)s=r.fakeTransform;else{const l=c.getComputedStyle(r);s=l.getPropertyValue("-webkit-transform")||l.getPropertyValue("transform")}let g=0,f=0;if(s&&s!=="none"&&typeof s=="string"){const l=s.split("(")[1].split(")")[0].split(",");g=parseInt(l[4],10),f=parseInt(l[5],10)}return e==="left"?n?`translateX(${n.right+g-t.left}px)`:`translateX(${c.innerWidth+g-t.left}px)`:e==="right"?n?`translateX(-${t.right-n.left-g}px)`:`translateX(-${t.left+t.width-g}px)`:e==="up"?n?`translateY(${n.bottom+f-t.top}px)`:`translateY(${c.innerHeight+f-t.top}px)`:n?`translateY(-${t.top-n.top+t.height-f}px)`:`translateY(-${t.top+t.height-f}px)`}function Pe(e){return typeof e=="function"?e():e}function z(e,r,a){const t=Pe(a),n=Te(e,r,t);n&&(r.style.webkitTransform=n,r.style.transform=n)}const Be=x.forwardRef(function(r,a){const t=te(),n={enter:t.transitions.easing.easeOut,exit:t.transitions.easing.sharp},c={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},{addEndListener:s,appear:g=!0,children:f,container:l,direction:h="down",easing:C=n,in:v,onEnter:T,onEntered:E,onEntering:b,onExit:P,onExited:B,onExiting:M,style:_,timeout:D=c,TransitionComponent:k=we}=r,$=L(r,Ce),u=x.useRef(null),F=Ee(f.ref,u,a),m=o=>d=>{o&&(d===void 0?o(u.current):o(u.current,d))},y=m((o,d)=>{z(h,o,l),ke(o),T&&T(o,d)}),N=m((o,d)=>{const j=U({timeout:D,style:_,easing:C},{mode:"enter"});o.style.webkitTransition=t.transitions.create("-webkit-transform",p({},j)),o.style.transition=t.transitions.create("transform",p({},j)),o.style.webkitTransform="none",o.style.transform="none",b&&b(o,d)}),R=m(E),ie=m(M),se=m(o=>{const d=U({timeout:D,style:_,easing:C},{mode:"exit"});o.style.webkitTransition=t.transitions.create("-webkit-transform",d),o.style.transition=t.transitions.create("transform",d),z(h,o,l),P&&P(o)}),le=m(o=>{o.style.webkitTransition="",o.style.transition="",B&&B(o)}),ce=o=>{s&&s(u.current,o)},X=x.useCallback(()=>{u.current&&z(h,u.current,l)},[h,l]);return x.useEffect(()=>{if(v||h==="down"||h==="right")return;const o=be(()=>{u.current&&z(h,u.current,l)}),d=oe(u.current);return d.addEventListener("resize",o),()=>{o.clear(),d.removeEventListener("resize",o)}},[h,v,l]),x.useEffect(()=>{v||X()},[v,X]),i(k,p({nodeRef:u,onEnter:y,onEntered:R,onEntering:N,onExit:se,onExited:le,onExiting:ie,addEndListener:ce,appear:g,in:v,timeout:D},$,{children:(o,d)=>x.cloneElement(f,p({ref:F,style:p({visibility:o==="exited"&&!v?"hidden":void 0},_,f.props.style)},d))}))}),Me=Be;function $e(e){return he("MuiDrawer",e)}ge("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const Ne=["BackdropProps"],Re=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],ne=(e,r)=>{const{ownerState:a}=e;return[r.root,(a.variant==="permanent"||a.variant==="persistent")&&r.docked,r.modal]},Ie=e=>{const{classes:r,anchor:a,variant:t}=e,n={root:["root"],docked:[(t==="permanent"||t==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${V(a)}`,t!=="temporary"&&`paperAnchorDocked${V(a)}`]};return xe(n,$e,r)},ze=w(ve,{name:"MuiDrawer",slot:"Root",overridesResolver:ne})(({theme:e})=>({zIndex:(e.vars||e).zIndex.drawer})),G=w("div",{shouldForwardProp:ue,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:ne})({flex:"0 0 auto"}),Ve=w(_e,{name:"MuiDrawer",slot:"Paper",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.paper,r[`paperAnchor${V(a.anchor)}`],a.variant!=="temporary"&&r[`paperAnchorDocked${V(a.anchor)}`]]}})(({theme:e,ownerState:r})=>p({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(e.vars||e).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},r.anchor==="left"&&{left:0},r.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},r.anchor==="right"&&{right:0},r.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},r.anchor==="left"&&r.variant!=="temporary"&&{borderRight:`1px solid ${(e.vars||e).palette.divider}`},r.anchor==="top"&&r.variant!=="temporary"&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`},r.anchor==="right"&&r.variant!=="temporary"&&{borderLeft:`1px solid ${(e.vars||e).palette.divider}`},r.anchor==="bottom"&&r.variant!=="temporary"&&{borderTop:`1px solid ${(e.vars||e).palette.divider}`})),ae={left:"right",right:"left",top:"down",bottom:"up"};function Ae(e){return["left","right"].indexOf(e)!==-1}function Le(e,r){return e.direction==="rtl"&&Ae(r)?ae[r]:r}const Se=x.forwardRef(function(r,a){const t=ye({props:r,name:"MuiDrawer"}),n=te(),c={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{anchor:s="left",BackdropProps:g,children:f,className:l,elevation:h=16,hideBackdrop:C=!1,ModalProps:{BackdropProps:v}={},onClose:T,open:E=!1,PaperProps:b={},SlideProps:P,TransitionComponent:B=Me,transitionDuration:M=c,variant:_="temporary"}=t,D=L(t.ModalProps,Ne),k=L(t,Re),$=x.useRef(!1);x.useEffect(()=>{$.current=!0},[]);const u=Le(n,s),m=p({},t,{anchor:s,elevation:h,open:E,variant:_},k),y=Ie(m),N=i(Ve,p({elevation:_==="temporary"?h:0,square:!0},b,{className:I(y.paper,b.className),ownerState:m,children:f}));if(_==="permanent")return i(G,p({className:I(y.root,y.docked,l),ownerState:m,ref:a},k,{children:N}));const R=i(B,p({in:E,direction:ae[u],timeout:M,appear:$.current},P,{children:N}));return _==="persistent"?i(G,p({className:I(y.root,y.docked,l),ownerState:m,ref:a},k,{children:R})):i(ze,p({BackdropProps:p({},g,v,{transitionDuration:M}),className:I(y.root,y.modal,l),open:E,ownerState:m,onClose:T,hideBackdrop:C,ref:a},k,D,{children:R}))}),qe=Se,S=w(ee)`
	border-radius: 9999px;
	background-color: var(--color-gray-100);
	height: 2rem;

	&:hover {
		background-color: var(--color-gray-300);
	}
`;try{S.displayName="DrawerBoxClose",S.__docgenInfo={description:"",displayName:"DrawerBoxClose",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},Icon:{defaultValue:null,description:"",name:"Icon",required:!1,type:{name:"ElementType"}}}}}catch{}const q=w("div")(({hasBorder:e})=>`
	padding: ${We};

	display: grid;
	grid-template-columns: 1fr auto;
	gap: 1rem;
	align-items: center;
	flex: none;

	${e?"border-bottom: solid 1px var(--color-gray-300);":""}
`);try{q.displayName="TitleBox",q.__docgenInfo={description:"",displayName:"TitleBox",props:{hasBorder:{defaultValue:null,description:"",name:"hasBorder",required:!1,type:{name:"boolean"}}}}}catch{}const W=w("div")(({theme:e})=>`
	width: 100vw;
	height: 100%;
	display: flex;
	flex-direction: column;

	${e.breakpoints.up("sm")} {
		max-width: 25rem;
	}
`);try{W.displayName="Wrapper",W.__docgenInfo={description:"",displayName:"Wrapper",props:{}}}catch{}const J=Y.ul`
	font-size: 2.5rem;

	list-style: none;
	display: grid;
	grid-template-columns: 1fr;
	place-items: start;
	place-content: start;
	gap: 1.25rem;

	margin: unset;
	padding: 2rem 1rem;
	flex: 1;
	border-top: solid 1px var(--color-gray-400);

	background-color: var(--color-gray-200);

	&:nth-last-of-type(1) {
		background-color: var(--color-white);
		flex: none;
		font-size: 2rem;
	}
`,K=Y.li`
	display: block;
`,Q=Y.a`
	display: flex;
	font-size: inherit;
	font-weight: 700;
	line-height: 1;

	opacity: 0.5;
	text-decoration: unset;
	color: var(--color-brand-key-main);

	&[aria-current='page'] {
		opacity: 1;
		text-decoration: underline;
		text-underline-offset: 0.125em;

		&:nth-of-type(1) {
			text-decoration-color: var(--color-brand-cyan-main);
		}
		&:nth-of-type(2) {
			text-decoration-color: var(--color-brand-magenta-main);
		}
		&:nth-of-type(3) {
			text-decoration-color: var(--color-brand-yellow-main);
		}
	}
`,H=({navigationItems:e,actions:r,onCloseButtonClick:a})=>{const t=De.useRouter();return console.log({actions:r}),A(W,{children:[A(q,{children:[i(pe,{level:4,children:"Menu"}),i(S,{onClick:a,children:i(re,{fontSize:"small"})})]}),i(J,{children:e==null?void 0:e.map(({label:n,href:c},s)=>i(K,{children:i(Q,{href:c,"aria-current":t.pathname===c?"page":"false",children:n})},s))}),i(J,{children:r==null?void 0:r.map((n,c)=>i(K,{children:i(Q,{href:n.href,children:n.label})},c))})]})};try{H.displayName="DrawerContent",H.__docgenInfo={description:"",displayName:"DrawerContent",props:{actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action[]"}},onCloseButtonClick:{defaultValue:null,description:"",name:"onCloseButtonClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},navigationItems:{defaultValue:null,description:"",name:"navigationItems",required:!1,type:{name:"NavItemOptions[]"}}}}}catch{}const O=w(ee)`
	grid-area: mobile-menu;

	&:hover {
		background-color: var(--color-gray-300);
	}
`;try{O.displayName="MenuTrigger",O.__docgenInfo={description:"",displayName:"MenuTrigger",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},Icon:{defaultValue:null,description:"",name:"Icon",required:!1,type:{name:"ElementType"}}}}}catch{}const We="1rem",Z=({items:e,actions:r,open:a})=>{const[t,n]=me({controlled:a,default:!1,name:"DrawerMenu Open State"}),c=()=>{n(!0)},s=()=>{n(!1)};return A(de,{children:[i(O,{size:"small",className:"MenuTrigger-root",onClick:c,children:t?i(re,{}):i(fe,{})}),i(qe,{anchor:"left",open:t,onClose:s,children:i(H,{navigationItems:e,actions:r,onCloseButtonClick:s})})]})};try{Z.displayName="DrawerMenu",Z.__docgenInfo={description:"",displayName:"DrawerMenu",props:{items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"NavItemOptions[]"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action[]"}}}}}catch{}export{Z as D};
//# sourceMappingURL=index-e1593711.js.map
