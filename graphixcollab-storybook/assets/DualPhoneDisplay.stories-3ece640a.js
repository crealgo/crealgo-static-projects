import{j as o,a as c}from"./emotion-element-6a883da9.browser.esm-e55838e6.js";import{P as t}from"./Phone-c05d04f7.js";import{s as i}from"./styled-b6ce4f35.js";import{c as m}from"./emotion-react.browser.esm-5506366e.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./defaultTheme-8dc337cc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-c604b0e9.js";import"./emotion-styled.browser.esm-6ab8df2f.js";const h=i("div")(({theme:e})=>m`
		background-color: transparent;
		z-index: 1;
		position: relative;

		padding-block: 0 !important;

		.Phone-root {
			position: absolute;
			width: 55%;
			border-radius: 2rem;
		}

		.Phone-root:nth-of-type(1) {
			left: 0;
			top: 35%;
		}

		.Phone-root:nth-of-type(2) {
			right: 0;
			top: 15%;
		}
	`),u=i("div")`
	position: relative;
	height: 100%;
	width: 100%;
`,a=({phone1Props:e,phone2Props:l,...d})=>o(h,{className:"DualPhoneDisplay-root",role:"img","aria-label":"Phone app display",...d,children:c(u,{children:[o(t,{elevation:10,...e}),o(t,{hasBorder:!0,elevation:20,...l})]})});try{a.displayName="DualPhoneDisplay",a.__docgenInfo={description:"",displayName:"DualPhoneDisplay",props:{phone1Props:{defaultValue:null,description:"",name:"phone1Props",required:!1,type:{name:"PhoneProps"}},phone2Props:{defaultValue:null,description:"",name:"phone2Props",required:!1,type:{name:"PhoneProps"}}}}}catch{}const j={component:a,decorators:[e=>o("div",{style:{maxWidth:"40rem"},children:o(e,{})})]},r={args:{}};var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {}
}`,...(n=(p=r.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const N=["Default"];export{r as Default,N as __namedExportsOrder,j as default};
//# sourceMappingURL=DualPhoneDisplay.stories-3ece640a.js.map
