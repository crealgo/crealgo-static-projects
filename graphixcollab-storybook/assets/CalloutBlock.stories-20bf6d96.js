import{h as u}from"./chance-6db3c92c.js";import{j as t,a as i}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{A as g}from"./ActionStack-98d87dc1.js";import{B as f}from"./Block-c3675cc7.js";import{C as h}from"./Container-511ded03.js";import{T as o}from"./Typography-3f7315c7.js";import{s as m}from"./styled-943e38cb.js";import{c as y}from"./emotion-react.browser.esm-c7009067.js";import"./chance-599dc973.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-570b25c1.js";import"./Button-fff501ba.js";import"./emotion-styled.browser.esm-7daedd15.js";import"./extends-98964cd2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-38ea7bbc.js";import"./clsx.m-1229b3e0.js";import"./ButtonBase-5e380d71.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-fa5d426c.js";import"./createTheme-952d4be4.js";import"./useThemeProps-87902fe6.js";import"./getThemeProps-6c786bf3.js";import"./useTheme-82186cd9.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-81b8ef00.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./Stack-4f5470dc.js";const k=m(f)`
	overflow: hidden;
`,C=m("div")(({theme:e})=>y`
		.content {
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.image {
			display: none;
		}

		${e.breakpoints.up("md")} {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 3rem;

			.image {
				display: block;
				position: absolute;
				margin: unset;
				width: 50%;
				height: 100%;
				right: 0;
				bottom: 0;
				background: var(--color-gray-300);

				img {
					height: 100%;
					width: 100%;
					object-fit: contain;
				}
			}
		}
	`),a=({title:e,description:p,meta:c,actions:d})=>t(h,{children:t(k,{isRounded:!0,color:"secondary",children:i(C,{children:[i("div",{className:"content",children:[t(o,{variant:"overline",className:"CalloutBlock-title",children:c}),t(o,{variant:"h2",className:"CalloutBlock-title",children:e}),t(o,{variant:"body2",className:"CalloutBlock-description",sx:{mb:2},children:p}),t(g,{size:"large",actions:d})]}),t("div",{className:"image"})]})})});try{a.displayName="CalloutBlock",a.__docgenInfo={description:"",displayName:"CalloutBlock",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},meta:{defaultValue:null,description:"",name:"meta",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action[]"}}}}}catch{}const P={component:a},r={args:u()};var l,s,n;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: generateCalloutBlock()
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Q=["Default"];export{r as Default,Q as __namedExportsOrder,P as default};
//# sourceMappingURL=CalloutBlock.stories-20bf6d96.js.map
