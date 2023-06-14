import{k as s}from"./chance-a31e5df2.js";import{a,j as r}from"./emotion-element-6a883da9.browser.esm-e55838e6.js";import{A as p}from"./ActionStack-8dd88bdd.js";import{I as d}from"./index-19c6e154.js";import{T as c}from"./Typography-b9fed576.js";import{s as u}from"./styled-b6ce4f35.js";import{c as g}from"./emotion-react.browser.esm-5506366e.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./Button-6766e6f8.js";import"./clsx.m-1229b3e0.js";import"./ButtonBase-13334f8c.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-f0dd9438.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-c604b0e9.js";import"./defaultTheme-8dc337cc.js";import"./useThemeProps-1ff09982.js";import"./getThemeProps-f2e6066a.js";import"./generateUtilityClasses-bdae82bf.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-44f71b61.js";import"./useEventCallback-f57d74d7.js";import"./useEnhancedEffect-a150ab51.js";import"./emotion-styled.browser.esm-6ab8df2f.js";import"./Stack-2393552a.js";import"./Image-61c3e035.js";import"./IconButton-e20a3a12.js";import"./ArrowBack-e2eceec6.js";import"./createSvgIcon-91651465.js";import"./ArrowForward-1c1d1aa5.js";import"./useControlled-5fb3b1c0.js";const k=u("div")(({theme:e})=>g`
		display: grid;
		grid-template-columns: 1fr;

		.ImageCarousel-root {
			background-color: var(--color-gray-200);
			min-height: 300px;
		}

		.FanServiceBlock-content {
			.FanServiceBlock-intro,
			.FanServiceBlock-cta {
				padding: 1.5rem 1rem;
			}

			.FanServiceBlock-intro {
				max-width: 30rem;
			}

			.FanServiceBlock-cta {
				background-color: var(--color-gray-200);
			}
		}

		${e.breakpoints.up("md")} {
			grid-template-columns: 1fr 1fr;

			.ImageCarousel-root {
				background-color: var(--color-gray-200);
			}

			.FanServiceBlock-content {
				.FanServiceBlock-intro,
				.FanServiceBlock-cta {
					padding: 2.5rem;
				}
			}
		}
	`),t=e=>{var i;return a(k,{children:[(i=e.images)!=null&&i.length?r(d,{images:e.images}):null,a("div",{className:"FanServiceBlock-content",children:[a("div",{className:"FanServiceBlock-intro",children:[r(c,{gutterBottom:!0,variant:"h3",children:e.title}),r(c,{variant:"body1",marginTop:"0.25rem",children:e.description})]}),r("div",{className:"FanServiceBlock-cta",children:r(p,{color:"secondary",...e.ActionStackProps,actions:e.actions})})]})]})};try{t.displayName="FanServiceBlock",t.__docgenInfo={description:"",displayName:"FanServiceBlock",props:{images:{defaultValue:null,description:"",name:"images",required:!1,type:{name:"string[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action<HTMLElement>[]"}},ActionStackProps:{defaultValue:null,description:"",name:"ActionStackProps",required:!1,type:{name:"ActionStackProps"}}}}}catch{}const J={component:t},o={args:s()};var n,l,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: generateFanServiceBlock()
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const K=["Default"];export{o as Default,K as __namedExportsOrder,J as default};
//# sourceMappingURL=FanServiceBlock.stories-eb6c55c2.js.map
