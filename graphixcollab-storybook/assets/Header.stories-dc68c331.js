import{a as S}from"./chance-a31e5df2.js";import{j as t,a as v}from"./emotion-element-6a883da9.browser.esm-e55838e6.js";import{r as i}from"./index-f1f749bf.js";import{r as x,D as h}from"./index-b8d9ef59.js";import{A as k}from"./ActionStack-8dd88bdd.js";import{s as H}from"./emotion-styled.browser.esm-6ab8df2f.js";import{N as I,a as B}from"./NavItemDropdown-15391b93.js";import{s as _}from"./styled-b6ce4f35.js";import{c as y}from"./emotion-react.browser.esm-5506366e.js";import{_ as w}from"./excludePropsFromForwarding-6c5743cd.js";import{C as $}from"./Container-df171808.js";import{L as C}from"./Logo-5c6962fc.js";import"./_commonjsHelpers-042e6b4d.js";import"./Heading-3dd7d259.js";import"./IconButtonBase-a01c0035.js";import"./ButtonBase-f0dd9438.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-c604b0e9.js";import"./defaultTheme-8dc337cc.js";import"./clsx.m-1229b3e0.js";import"./useThemeProps-1ff09982.js";import"./getThemeProps-f2e6066a.js";import"./generateUtilityClasses-bdae82bf.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-44f71b61.js";import"./useEventCallback-f57d74d7.js";import"./useEnhancedEffect-a150ab51.js";import"./useControlled-5fb3b1c0.js";import"./Menu-70c875b3.js";import"./createSvgIcon-91651465.js";import"./useTheme-da848437.js";import"./Modal-42a51df8.js";import"./utils-3d8ceabf.js";import"./index-96c5f47c.js";import"./ownerWindow-2150232e.js";import"./Paper-952e3300.js";import"./Button-6766e6f8.js";import"./ButtonBase-13334f8c.js";import"./Stack-2393552a.js";import"./Typography-b9fed576.js";import"./ArrowDownward-0104ae4c.js";import"./index-1aacdabe.js";import"./dividerClasses-3a51a39a.js";import"./BrandDots-833eab64.js";const E=()=>{const e=x.useRouter(),r={Home:"/",Services:"/services","About Us":"/about",Estimate:"/estimate"};return Object.keys(r).map(o=>({label:o,href:`${e.basePath}${r[o]}`,selected:e.pathname===r[o]}))},q=()=>{const[e,r]=i.useState(0);return i.useEffect(()=>{const o=()=>{r(window.pageYOffset)};return window.addEventListener("scroll",o),o(),()=>{window.removeEventListener("scroll",o)}},[]),e},A=H.div`
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
	`);try{m.displayName="HeaderContent",m.__docgenInfo={description:"",displayName:"HeaderContent",props:{}}}catch{}const u=({actions:e,className:r})=>{const o=E(),a=q(),n=i.useMemo(()=>a>100,[a]);return t(c,{className:r,isScrolled:n,children:v(m,{children:[t(C,{}),t(d,{items:o}),t(p,{}),t(k,{actions:e}),t(h,{items:o,actions:e})]})})};try{u.displayName="Header",u.__docgenInfo={description:"",displayName:"Header",props:{actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action[]"}}}}}catch{}const ke={component:u},s={args:S()};var g,b,N;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: generateHeader()
}`,...(N=(b=s.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};const He=["Default"];export{s as Default,He as __namedExportsOrder,ke as default};
//# sourceMappingURL=Header.stories-dc68c331.js.map
