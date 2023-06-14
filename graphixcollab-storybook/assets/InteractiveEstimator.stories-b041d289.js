import{j as c}from"./chance-a31e5df2.js";import{j as e,a as t}from"./emotion-element-6a883da9.browser.esm-e55838e6.js";import{A as l}from"./ActionStack-8dd88bdd.js";import{B as p}from"./Block-91428622.js";import{C as g}from"./Container-df171808.js";import{H as n}from"./Heading-3dd7d259.js";import{I as i}from"./InteractiveSelector-fc87cfd9.js";import{M as h}from"./Mark-a07f924b.js";import{C as u}from"./CheckCircleOutline-854265a5.js";import{P as v}from"./PaletteOutlined-0ba941bb.js";import{s as o}from"./styled-b6ce4f35.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./Button-6766e6f8.js";import"./clsx.m-1229b3e0.js";import"./ButtonBase-13334f8c.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-f0dd9438.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-c604b0e9.js";import"./defaultTheme-8dc337cc.js";import"./useThemeProps-1ff09982.js";import"./getThemeProps-f2e6066a.js";import"./generateUtilityClasses-bdae82bf.js";import"./emotion-react.browser.esm-5506366e.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-44f71b61.js";import"./useEventCallback-f57d74d7.js";import"./useEnhancedEffect-a150ab51.js";import"./emotion-styled.browser.esm-6ab8df2f.js";import"./Stack-2393552a.js";import"./Typography-b9fed576.js";import"./KeyboardArrowDown-24ea9a52.js";import"./createSvgIcon-91651465.js";import"./BrandDots-833eab64.js";const b=o("div")`
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
`,k=[{label:"sash",value:"sash"},{label:"t-shirt",value:"t-shirt"},{label:"poster",value:"poster"},{label:"sticker",value:"sticker"}],w=[{label:"embroidered",value:"embroidered"},{label:"printed",value:"printed"}],f=[{label:"my name",value:"name"},{label:"my initials",value:"initials"},{label:"a quote",value:"initials"}],y=o("em")`
	display: block;
	max-width: var(--spacing-96);
	margin-block-start: var(--spacing-2);
	padding-block-start: var(--spacing-2);
	border-block-start: solid 2px var(--color-brand-magenta-lighter);
`,r=()=>e(g,{children:t(p,{isClipped:!0,isRounded:!0,color:"grey",className:"InteractiveEstimator-root",children:[t(b,{children:[t(n,{level:4,children:["Get an"," ",e(h,{text:!0,color:"magenta",children:"estimate"}),"!"]}),t(n,{level:2,children:["I would like a custom"," ",e(i,{options:k})," that is"," ",e(i,{options:w})," with"," ",e(i,{options:f})," "]}),e(y,{children:"Change the options above to what you’re looking for."}),e(l,{actions:[{label:"Estimate",size:"large",color:"secondary",endIcon:e(u,{})},{label:"Design",size:"large",color:"text",endIcon:e(v,{})}]})]}),e(x,{src:"assets/juicy-business-coach-explains-the-material-min@512w.webp",alt:"Explaining the material"})]})});try{r.displayName="InteractiveEstimator",r.__docgenInfo={description:"",displayName:"InteractiveEstimator",props:{actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action[]"}}}}}catch{}const re={component:r},a={args:{actions:c()}};var m,s,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    actions: generateActions()
  }
}`,...(d=(s=a.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const oe=["Default"];export{a as Default,oe as __namedExportsOrder,re as default};
//# sourceMappingURL=InteractiveEstimator.stories-b041d289.js.map
