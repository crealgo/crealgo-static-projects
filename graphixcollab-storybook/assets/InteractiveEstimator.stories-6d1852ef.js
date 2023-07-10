import{f as c}from"./chance-6db3c92c.js";import{j as e,a as t}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{A as l}from"./ActionStack-98d87dc1.js";import{B as p}from"./Block-c3675cc7.js";import{C as g}from"./Container-511ded03.js";import{H as n}from"./Heading-dbad4f1a.js";import{I as a}from"./InteractiveSelector-f33880c5.js";import{M as h}from"./Mark-fe31e544.js";import{C as u}from"./CheckCircleOutline-8547f02f.js";import{P as v}from"./PaletteOutlined-0e6aad39.js";import{s as o}from"./styled-943e38cb.js";import"./chance-599dc973.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-570b25c1.js";import"./Button-fff501ba.js";import"./emotion-react.browser.esm-c7009067.js";import"./emotion-styled.browser.esm-7daedd15.js";import"./extends-98964cd2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-38ea7bbc.js";import"./clsx.m-1229b3e0.js";import"./ButtonBase-5e380d71.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-fa5d426c.js";import"./createTheme-952d4be4.js";import"./useThemeProps-87902fe6.js";import"./getThemeProps-6c786bf3.js";import"./useTheme-82186cd9.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-81b8ef00.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./Stack-4f5470dc.js";import"./Typography-3f7315c7.js";import"./KeyboardArrowDown-d0fe83ea.js";import"./createSvgIcon-91b9a7de.js";import"./BrandDots-1a30b756.js";const b=o("div")`
	--content-grid-padding-block-end: 50%;
	--action-stack-spacing: 1rem;

	@media screen and (min-width: 425px) {
		--content-grid-padding-block-end: 52%;
	}

	@media screen and (min-width: 768px) {
		--content-grid-padding-block-end: 6.5rem;
	}

	@media screen and (min-width: 911px) {
		--content-grid-padding-block-end: 5rem;
	}

	@media screen and (min-width: 1024px) {
		--content-grid-padding-block-end: 3rem;
	}

	display: grid;
	gap: 2rem;
	max-width: 900px;
	z-index: 1;

	padding-block-end: var(--content-grid-padding-block-end);

	.ActionStack-root {
		margin-top: var(--action-stack-spacing);
	}
`,x=o("img")`
	--adornment-image-position: absolute;
	--adornment-image-z-index: 0;

	--adornment-image-width: 100%;
	--adornment-image-max-width: 100%;
	--adornment-image-inset: auto -1rem 0 auto;

	@media screen and (min-width: 768px) {
		--adornment-image-max-width: 36rem;
		--adornment-image-inset: auto -1rem -2rem auto;
	}

	padding: 0 0 0 1rem;
	max-width: var(--adornment-image-max-width);
	width: var(--adornment-image-width);
	height: auto;

	position: var(--adornment-image-position);
	inset: var(--adornment-image-inset);

	z-index: var(--adornment-image-z-index);
`,k=[{label:"sash",value:"sash"},{label:"t-shirt",value:"t-shirt"},{label:"poster",value:"poster"},{label:"sticker",value:"sticker"}],f=[{label:"embroidered",value:"embroidered"},{label:"printed",value:"printed"}],w=[{label:"my name",value:"name"},{label:"my initials",value:"initials"},{label:"a quote",value:"initials"}],y=o("em")`
	display: block;
	max-width: var(--spacing-96);
	margin-block-start: var(--spacing-2);
	padding-block-start: var(--spacing-2);
	border-block-start: solid 2px var(--color-brand-magenta-lighter);
`,r=()=>e(g,{children:t(p,{isClipped:!0,isRounded:!0,color:"grey",className:"InteractiveEstimator-root",children:[t(b,{children:[t(n,{level:4,children:["Get an"," ",e(h,{text:!0,color:"magenta",children:"estimate"}),"!"]}),t(n,{level:2,children:["I would like a custom"," ",e(a,{options:k})," that is"," ",e(a,{options:f})," with"," ",e(a,{options:w})," "]}),e(y,{children:"Change the options above to what you’re looking for."}),e(l,{actions:[{label:"Estimate",size:"large",color:"secondary",endIcon:e(u,{})},{label:"Design",size:"large",color:"text",endIcon:e(v,{})}]})]}),e(x,{src:"assets/juicy-business-coach-explains-the-material-min@512w.webp",alt:"Explaining the material"})]})});try{r.displayName="InteractiveEstimator",r.__docgenInfo={description:"",displayName:"InteractiveEstimator",props:{actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action[]"}}}}}catch{}const ne={component:r},i={args:{actions:c()}};var m,s,d;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    actions: generateActions()
  }
}`,...(d=(s=i.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const me=["Default"];export{i as Default,me as __namedExportsOrder,ne as default};
//# sourceMappingURL=InteractiveEstimator.stories-6d1852ef.js.map
