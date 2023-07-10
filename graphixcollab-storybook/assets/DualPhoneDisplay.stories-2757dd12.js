import{j as e,a as m}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{P as t}from"./Phone-d5ba0536.js";import{s as i}from"./styled-943e38cb.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-react.browser.esm-c7009067.js";import"./emotion-styled.browser.esm-7daedd15.js";import"./extends-98964cd2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-38ea7bbc.js";import"./createTheme-952d4be4.js";const c=i("div")`
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
`,h=i("div")`
	position: relative;
	height: 100%;
	width: 100%;
`,a=({phone1Props:o,phone2Props:l,...d})=>e(c,{className:"DualPhoneDisplay-root",role:"img","aria-label":"Phone app display",...d,children:m(h,{children:[e(t,{elevation:10,...o}),e(t,{hasBorder:!0,elevation:20,...l})]})});try{a.displayName="DualPhoneDisplay",a.__docgenInfo={description:"",displayName:"DualPhoneDisplay",props:{phone1Props:{defaultValue:null,description:"",name:"phone1Props",required:!1,type:{name:"PhoneProps"}},phone2Props:{defaultValue:null,description:"",name:"phone2Props",required:!1,type:{name:"PhoneProps"}}}}}catch{}const j={component:a,decorators:[o=>e("div",{style:{maxWidth:"40rem"},children:e(o,{})})]},r={args:{}};var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {}
}`,...(n=(p=r.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const N=["Default"];export{r as Default,N as __namedExportsOrder,j as default};
//# sourceMappingURL=DualPhoneDisplay.stories-2757dd12.js.map
