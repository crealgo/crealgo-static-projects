import{i as s}from"./chance-6db3c92c.js";import{a as t,j as r}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{A as p}from"./ActionStack-98d87dc1.js";import{I as d}from"./index-3ae309e7.js";import{T as c}from"./Typography-3f7315c7.js";import{s as u}from"./styled-943e38cb.js";import{c as g}from"./emotion-react.browser.esm-c7009067.js";import"./chance-599dc973.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-570b25c1.js";import"./Button-fff501ba.js";import"./emotion-styled.browser.esm-7daedd15.js";import"./extends-98964cd2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-38ea7bbc.js";import"./clsx.m-1229b3e0.js";import"./ButtonBase-5e380d71.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-fa5d426c.js";import"./createTheme-952d4be4.js";import"./useThemeProps-87902fe6.js";import"./getThemeProps-6c786bf3.js";import"./useTheme-82186cd9.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-81b8ef00.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./Stack-4f5470dc.js";import"./Image-11275a93.js";import"./useControlled-9b1271e0.js";import"./IconButton-0b57df28.js";import"./ArrowBack-fa879c42.js";import"./createSvgIcon-91b9a7de.js";import"./ArrowForward-dd74cc9f.js";const k=u("div")(({theme:e})=>g`
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
	`),a=e=>{var i;return t(k,{children:[(i=e.images)!=null&&i.length?r(d,{images:e.images}):null,t("div",{className:"FanServiceBlock-content",children:[t("div",{className:"FanServiceBlock-intro",children:[r(c,{gutterBottom:!0,variant:"h3",children:e.title}),r(c,{variant:"body1",marginTop:"0.25rem",children:e.description})]}),r("div",{className:"FanServiceBlock-cta",children:r(p,{color:"secondary",...e.ActionStackProps,actions:e.actions})})]})]})};try{a.displayName="FanServiceBlock",a.__docgenInfo={description:"",displayName:"FanServiceBlock",props:{images:{defaultValue:null,description:"",name:"images",required:!1,type:{name:"string[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action<HTMLElement>[]"}},ActionStackProps:{defaultValue:null,description:"",name:"ActionStackProps",required:!1,type:{name:"ActionStackProps"}}}}}catch{}const Q={component:a},o={args:s()};var n,l,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: generateFanServiceBlock()
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const U=["Default"];export{o as Default,U as __namedExportsOrder,Q as default};
//# sourceMappingURL=FanServiceBlock.stories-08b54e97.js.map
