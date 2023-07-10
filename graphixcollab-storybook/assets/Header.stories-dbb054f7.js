import{p as S}from"./chance-6db3c92c.js";import{j as t,a as v}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{r as i}from"./index-570b25c1.js";import{r as x}from"./router-593b1e68.js";import{A as h}from"./ActionStack-98d87dc1.js";import{D as k}from"./index-699bef49.js";import{s as H}from"./emotion-styled.browser.esm-7daedd15.js";import{N as I,a as B}from"./NavItemDropdown-66eb67cd.js";import{s as _}from"./styled-943e38cb.js";import{c as y}from"./emotion-react.browser.esm-c7009067.js";import{_ as w}from"./excludePropsFromForwarding-6c5743cd.js";import{C as $}from"./Container-511ded03.js";import{L as C}from"./Logo-e72c55d1.js";import"./chance-599dc973.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8a077077.js";import"./Button-fff501ba.js";import"./clsx.m-1229b3e0.js";import"./ButtonBase-5e380d71.js";import"./ButtonBase-fa5d426c.js";import"./extends-98964cd2.js";import"./createTheme-952d4be4.js";import"./useThemeProps-87902fe6.js";import"./getThemeProps-6c786bf3.js";import"./useTheme-82186cd9.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-81b8ef00.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./Stack-4f5470dc.js";import"./Typography-3f7315c7.js";import"./Heading-dbad4f1a.js";import"./IconButtonBase-3c500e6d.js";import"./useControlled-9b1271e0.js";import"./Menu-2b29dd03.js";import"./createSvgIcon-91b9a7de.js";import"./useTheme-4269b4b1.js";import"./Modal-35f27160.js";import"./utils-7add8905.js";import"./ownerWindow-2150232e.js";import"./Paper-d182d160.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-38ea7bbc.js";import"./ArrowDownward-2af1f529.js";import"./react-is.production.min-a192e302.js";import"./dividerClasses-f31bc062.js";import"./BrandDots-1a30b756.js";const E=()=>{const e=x.useRouter(),r={Home:"/",Services:"/services","About Us":"/about",Estimate:"/estimate"};return Object.keys(r).map(o=>({label:o,href:`${e.basePath}${r[o]}`,selected:e.pathname===r[o]}))},q=()=>{const[e,r]=i.useState(0);return i.useEffect(()=>{const o=()=>{r(window.pageYOffset)};return window.addEventListener("scroll",o),o(),()=>{window.removeEventListener("scroll",o)}},[]),e},A=H.div`
	flex-grow: 1;
`,p=()=>t(A,{});try{p.displayName="FlexSpacer",p.__docgenInfo={description:"",displayName:"FlexSpacer",props:{}}}catch{}const D=_("nav")(({theme:e})=>y`
		gap: 0;
		display: none;

		${e.breakpoints.up("md")} {
			display: flex;
		}
	`),d=({items:e,children:r})=>v(D,{className:"NavItems-root",children:[e==null?void 0:e.map(({label:o,subItems:a,...n},f)=>a?i.createElement(I,{...n,key:f,items:a},o):i.createElement(B,{...n,key:f},o)),r]});try{d.displayName="NavItems",d.__docgenInfo={description:"",displayName:"NavItems",props:{items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"NavItemOptions[]"}}}}}catch{}const l=_("header",w("isBranded","isScrolled"))(({theme:e,isScrolled:r})=>y`
		position: sticky;
		top: 0;
		transition: all 100ms;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		background-color: ${r?"white":"transparent"};
		border-bottom-color: ${r?"var(--color-gray-200)":"transparent"};
		z-index: 999;

		display: flex;
		align-items: center;
		padding-block: 0.5rem;
		padding-inline: var(--section-mobile-padding-inline) 0.5rem;

		${e.breakpoints.up("md")} {
			padding-inline: var(--section-tablet-padding-inline);
			height: 5rem;
		}

		${e.breakpoints.up("xl")} {
			padding-inline: var(--section-widescreen-padding-inline);
		}
	`),c=({children:e,...r})=>t(l,{...r,children:t($,{children:e})});try{l.displayName="StyledHeaderBar",l.__docgenInfo={description:"",displayName:"StyledHeaderBar",props:{isScrolled:{defaultValue:null,description:"",name:"isScrolled",required:!1,type:{name:"boolean"}},isBranded:{defaultValue:null,description:"",name:"isBranded",required:!1,type:{name:"boolean"}}}}}catch{}try{c.displayName="HeaderBar",c.__docgenInfo={description:"",displayName:"HeaderBar",props:{isScrolled:{defaultValue:null,description:"",name:"isScrolled",required:!1,type:{name:"boolean"}},isBranded:{defaultValue:null,description:"",name:"isBranded",required:!1,type:{name:"boolean"}}}}}catch{}const m=_("div")(({theme:e})=>y`
		display: flex;
		align-items: center;
		gap: 1rem;

		font-size: 1rem;

		.NavItems-root {
			display: none;
		}

		.ActionStack-root {
			display: none;
		}

		.MenuTrigger-root {
			display: inline-flex;
		}

		${e.breakpoints.up("sm")} {
			border-bottom-color: transparent;

			.ActionStack-root {
				display: flex;
			}
		}

		${e.breakpoints.up("md")} {
			.NavItems-root {
				display: flex;
			}

			.MenuTrigger-root {
				display: none;
			}
		}

		font-size: 1.25rem;
	`);try{m.displayName="HeaderContent",m.__docgenInfo={description:"",displayName:"HeaderContent",props:{}}}catch{}const u=({actions:e,className:r})=>{const o=E(),a=q(),n=i.useMemo(()=>a>100,[a]);return t(c,{className:r,isScrolled:n,children:v(m,{children:[t(C,{}),t(d,{items:o}),t(p,{}),t(h,{actions:e}),t(k,{items:o,actions:e})]})})};try{u.displayName="Header",u.__docgenInfo={description:"",displayName:"Header",props:{actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action[]"}}}}}catch{}const Be={component:u},s={args:S()};var g,b,N;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: generateHeader()
}`,...(N=(b=s.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};const we=["Default"];export{s as Default,we as __namedExportsOrder,Be as default};
//# sourceMappingURL=Header.stories-dbb054f7.js.map
