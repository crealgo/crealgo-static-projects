import{j as n,a as g,F as M}from"./emotion-element-6a883da9.browser.esm-e55838e6.js";import{r as a}from"./index-f1f749bf.js";import{B as f}from"./Button-6766e6f8.js";import{s as u}from"./styled-b6ce4f35.js";import{_ as v}from"./defaultTheme-8dc337cc.js";import{_ as i}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-c604b0e9.js";import{c as D}from"./clsx.m-1229b3e0.js";import{u as x}from"./useThemeProps-1ff09982.js";import{g as S,a as h,c as k}from"./generateUtilityClasses-bdae82bf.js";import{c as w}from"./emotion-react.browser.esm-5506366e.js";import{P as B}from"./Paper-952e3300.js";import{T as R}from"./Typography-b9fed576.js";import{M as $,C as N,a as A}from"./MailTwoTone-695baef0.js";import"./_commonjsHelpers-042e6b4d.js";import"./ButtonBase-13334f8c.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-f0dd9438.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-44f71b61.js";import"./useEventCallback-f57d74d7.js";import"./useEnhancedEffect-a150ab51.js";import"./emotion-styled.browser.esm-6ab8df2f.js";import"./getThemeProps-f2e6066a.js";import"./createSvgIcon-91651465.js";const U=a.createContext({}),O=U;function q(o){return S("MuiDialogActions",o)}h("MuiDialogActions",["root","spacing"]);const j=["className","disableSpacing"],I=o=>{const{classes:e,disableSpacing:t}=o;return k({root:["root",!t&&"spacing"]},q,e)},P=u("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,!t.disableSpacing&&e.spacing]}})(({ownerState:o})=>i({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),E=a.forwardRef(function(e,t){const s=x({props:e,name:"MuiDialogActions"}),{className:l,disableSpacing:c=!1}=s,d=v(s,j),r=i({},s,{disableSpacing:c}),p=I(r);return n(P,i({className:D(p.root,l),ownerState:r,ref:t},d))}),F=E;function L(o){return S("MuiDialogContent",o)}h("MuiDialogContent",["root","dividers"]);function W(o){return S("MuiDialogTitle",o)}const z=h("MuiDialogTitle",["root"]),V=z,Y=["className","dividers"],G=o=>{const{classes:e,dividers:t}=o;return k({root:["root",t&&"dividers"]},L,e)},H=u("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.dividers&&e.dividers]}})(({theme:o,ownerState:e})=>i({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},e.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${V.root} + &`]:{paddingTop:0}})),J=a.forwardRef(function(e,t){const s=x({props:e,name:"MuiDialogContent"}),{className:l,dividers:c=!1}=s,d=v(s,Y),r=i({},s,{dividers:c}),p=G(r);return n(H,i({className:D(p.root,l),ownerState:r,ref:t},d))}),K=J,Q=["className","id"],X=o=>{const{classes:e}=o;return k({root:["root"]},W,e)},Z=u(R,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(o,e)=>e.root})({padding:"16px 24px",flex:"0 0 auto"}),oo=a.forwardRef(function(e,t){const s=x({props:e,name:"MuiDialogTitle"}),{className:l,id:c}=s,d=v(s,Q),r=s,p=X(r),{titleId:b=c}=a.useContext(O);return n(Z,i({component:"h2",className:D(p.root,l),ownerState:r,ref:t,variant:"h6",id:b},d))}),eo=oo,to=u(K)(({theme:o})=>w`
		background-color: var(--color-gray-100);
		border-top: solid 1px var(--color-gray-300);
		border-bottom: solid 1px var(--color-gray-300);

		.stepper {
			padding-block: 1rem;
		}

		.step-content {
			padding-inline: 0.5rem;
			padding-block: 2rem;
		}
	`),so=u(B)`
	position: absolute;
	z-index: 99999;
`,C=o=>g(so,{children:[g(eo,{children:[n("span",{children:"Contact Us"}),n($,{color:"primary"})]}),n(to,{}),g(F,{children:[n(f,{color:"text",endIcon:n(N,{color:"error"}),onClick:o.onCloseClick,children:"Cancel"}),n(f,{color:"tertiary",endIcon:n(A,{color:"success"}),children:"Submit"})]})]});try{C.displayName="SquareBookingService",C.__docgenInfo={description:"",displayName:"SquareBookingService",props:{onCloseClick:{defaultValue:null,description:"",name:"onCloseClick",required:!1,type:{name:"((event: MouseEvent<unknown, MouseEvent>) => void)"}}}}}catch{}const Bo={component:C},m={render:()=>{const[o,e]=a.useState(!1);return g(M,{children:[n(f,{color:"primary",onClick:()=>{e(!0)},children:"Open Booking Service"}),n(C,{onCloseClick:()=>{e(!1)}})]})}};var y,T,_;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const handleClick = (): void => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return <>
                <Button color="primary" onClick={handleClick}>
                    Open Booking Service
                </Button>
                <SquareBookingService onCloseClick={handleClose} />
            </>;
  }
}`,...(_=(T=m.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const Ro=["Default"];export{m as Default,Ro as __namedExportsOrder,Bo as default};
//# sourceMappingURL=SquareBookingService.stories-ce83b999.js.map
