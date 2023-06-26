import{i as s}from"./chance-cee71ec0.js";import{a,j as r}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{A as p}from"./ActionStack-93ca746e.js";import{I as d}from"./index-505088d3.js";import{T as c}from"./Typography-3433e336.js";import{s as u}from"./styled-c5161996.js";import{c as g}from"./emotion-react.browser.esm-c7009067.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-570b25c1.js";import"./Button-a6114443.js";import"./emotion-styled.browser.esm-7daedd15.js";import"./extends-98964cd2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-38ea7bbc.js";import"./clsx.m-1229b3e0.js";import"./ButtonBase-3726785b.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-a61f402b.js";import"./createTheme-0dc7dae6.js";import"./useThemeProps-4b422382.js";import"./getThemeProps-6c786bf3.js";import"./useTheme-a01d1f5e.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-81b8ef00.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./Stack-b74bc2fe.js";import"./Image-49bc17e3.js";import"./useControlled-9b1271e0.js";import"./IconButton-eb2bd37d.js";import"./ArrowBack-0b9fce18.js";import"./createSvgIcon-0cd10119.js";import"./ArrowForward-9930b156.js";const k=u("div")(({theme:e})=>g`
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
	`),t=e=>{var i;return a(k,{children:[(i=e.images)!=null&&i.length?r(d,{images:e.images}):null,a("div",{className:"FanServiceBlock-content",children:[a("div",{className:"FanServiceBlock-intro",children:[r(c,{gutterBottom:!0,variant:"h3",children:e.title}),r(c,{variant:"body1",marginTop:"0.25rem",children:e.description})]}),r("div",{className:"FanServiceBlock-cta",children:r(p,{color:"secondary",...e.ActionStackProps,actions:e.actions})})]})]})};try{t.displayName="FanServiceBlock",t.__docgenInfo={description:"",displayName:"FanServiceBlock",props:{images:{defaultValue:null,description:"",name:"images",required:!1,type:{name:"string[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action<HTMLElement>[]"}},ActionStackProps:{defaultValue:null,description:"",name:"ActionStackProps",required:!1,type:{name:"ActionStackProps"}}}}}catch{}const K={component:t},o={args:s()};var n,l,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: generateFanServiceBlock()
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const Q=["Default"];export{o as Default,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=FanServiceBlock.stories-ff83ed0b.js.map
