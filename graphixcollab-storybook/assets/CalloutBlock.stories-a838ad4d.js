import{i as u}from"./chance-a31e5df2.js";import{j as e,a as i}from"./emotion-element-6a883da9.browser.esm-e55838e6.js";import{A as g}from"./ActionStack-8dd88bdd.js";import{C as f}from"./Container-df171808.js";import{B as h}from"./Block-91428622.js";import{T as o}from"./Typography-b9fed576.js";import{s as m}from"./styled-b6ce4f35.js";import{c as y}from"./emotion-react.browser.esm-5506366e.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./Button-6766e6f8.js";import"./clsx.m-1229b3e0.js";import"./ButtonBase-13334f8c.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-f0dd9438.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-c604b0e9.js";import"./defaultTheme-8dc337cc.js";import"./useThemeProps-1ff09982.js";import"./getThemeProps-f2e6066a.js";import"./generateUtilityClasses-bdae82bf.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-44f71b61.js";import"./useEventCallback-f57d74d7.js";import"./useEnhancedEffect-a150ab51.js";import"./emotion-styled.browser.esm-6ab8df2f.js";import"./Stack-2393552a.js";const k=m(h)`
	overflow: hidden;
`,C=m("div")(({theme:t})=>y`
		.content {
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.image {
			display: none;
		}

		${t.breakpoints.up("md")} {
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
	`),a=({title:t,description:p,meta:c,actions:d})=>e(f,{children:e(k,{isRounded:!0,color:"secondary",children:i(C,{children:[i("div",{className:"content",children:[e(o,{variant:"overline",className:"CalloutBlock-title",children:c}),e(o,{variant:"h2",className:"CalloutBlock-title",children:t}),e(o,{variant:"body2",className:"CalloutBlock-description",sx:{mb:2},children:p}),e(g,{size:"large",actions:d})]}),e("div",{className:"image"})]})})});try{a.displayName="CalloutBlock",a.__docgenInfo={description:"",displayName:"CalloutBlock",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},meta:{defaultValue:null,description:"",name:"meta",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action[]"}}}}}catch{}const L={component:a},r={args:u()};var l,s,n;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: generateCalloutBlock()
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const M=["Default"];export{r as Default,M as __namedExportsOrder,L as default};
//# sourceMappingURL=CalloutBlock.stories-a838ad4d.js.map
