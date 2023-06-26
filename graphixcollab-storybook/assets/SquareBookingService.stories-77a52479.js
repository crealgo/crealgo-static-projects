import{j as n,a as m,F as M}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{r as a}from"./index-570b25c1.js";import{B as f}from"./Button-a6114443.js";import{s as u}from"./styled-c5161996.js";import{_ as v}from"./createTheme-0dc7dae6.js";import{_ as i}from"./extends-98964cd2.js";import{c as D}from"./clsx.m-1229b3e0.js";import{a as x,g as S,u as k,c as y}from"./useThemeProps-4b422382.js";import{P as w}from"./Paper-6b67602d.js";import{T as $}from"./Typography-3433e336.js";import{M as B,C as R,a as N}from"./MailTwoTone-cc76dd20.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-react.browser.esm-c7009067.js";import"./emotion-styled.browser.esm-7daedd15.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-38ea7bbc.js";import"./ButtonBase-3726785b.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-a61f402b.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-81b8ef00.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./getThemeProps-6c786bf3.js";import"./useTheme-a01d1f5e.js";import"./createSvgIcon-0cd10119.js";const A=a.createContext({}),U=A;function O(o){return x("MuiDialogActions",o)}S("MuiDialogActions",["root","spacing"]);const I=["className","disableSpacing"],q=o=>{const{classes:e,disableSpacing:t}=o;return y({root:["root",!t&&"spacing"]},O,e)},j=u("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,!t.disableSpacing&&e.spacing]}})(({ownerState:o})=>i({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),P=a.forwardRef(function(e,t){const s=k({props:e,name:"MuiDialogActions"}),{className:l,disableSpacing:c=!1}=s,d=v(s,I),r=i({},s,{disableSpacing:c}),p=q(r);return n(j,i({className:D(p.root,l),ownerState:r,ref:t},d))}),E=P;function F(o){return x("MuiDialogContent",o)}S("MuiDialogContent",["root","dividers"]);function L(o){return x("MuiDialogTitle",o)}const W=S("MuiDialogTitle",["root"]),z=W,V=["className","dividers"],Y=o=>{const{classes:e,dividers:t}=o;return y({root:["root",t&&"dividers"]},F,e)},G=u("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.dividers&&e.dividers]}})(({theme:o,ownerState:e})=>i({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},e.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${z.root} + &`]:{paddingTop:0}})),H=a.forwardRef(function(e,t){const s=k({props:e,name:"MuiDialogContent"}),{className:l,dividers:c=!1}=s,d=v(s,V),r=i({},s,{dividers:c}),p=Y(r);return n(G,i({className:D(p.root,l),ownerState:r,ref:t},d))}),J=H,K=["className","id"],Q=o=>{const{classes:e}=o;return y({root:["root"]},L,e)},X=u($,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(o,e)=>e.root})({padding:"16px 24px",flex:"0 0 auto"}),Z=a.forwardRef(function(e,t){const s=k({props:e,name:"MuiDialogTitle"}),{className:l,id:c}=s,d=v(s,K),r=s,p=Q(r),{titleId:b=c}=a.useContext(U);return n(X,i({component:"h2",className:D(p.root,l),ownerState:r,ref:t,variant:"h6",id:b},d))}),oo=Z,eo=u(J)`
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
`,to=u(w)`
	position: absolute;
	z-index: 99999;
`,C=o=>m(to,{children:[m(oo,{children:[n("span",{children:"Contact Us"}),n(B,{color:"primary"})]}),n(eo,{}),m(E,{children:[n(f,{color:"text",endIcon:n(R,{color:"error"}),onClick:o.onCloseClick,children:"Cancel"}),n(f,{color:"tertiary",endIcon:n(N,{color:"success"}),children:"Submit"})]})]});try{C.displayName="SquareBookingService",C.__docgenInfo={description:"",displayName:"SquareBookingService",props:{onCloseClick:{defaultValue:null,description:"",name:"onCloseClick",required:!1,type:{name:"((event: MouseEvent<unknown, MouseEvent>) => void)"}}}}}catch{}const $o={component:C},g={render:()=>{const[o,e]=a.useState(!1);return m(M,{children:[n(f,{color:"primary",onClick:()=>{e(!0)},children:"Open Booking Service"}),`It is ${o?"open":"closed"}`,n(C,{onCloseClick:()=>{e(!1)}})]})}};var h,T,_;g.parameters={...g.parameters,docs:{...(h=g.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
                {\`It is \${open ? 'open' : 'closed'}\`}
                <SquareBookingService onCloseClick={handleClose} />
            </>;
  }
}`,...(_=(T=g.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const Bo=["Default"];export{g as Default,Bo as __namedExportsOrder,$o as default};
//# sourceMappingURL=SquareBookingService.stories-77a52479.js.map
