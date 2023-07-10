import{c as i,f as _,j as y}from"./chance-6db3c92c.js";import{a as s,j as t}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{A as w}from"./ActionStack-98d87dc1.js";import{N as k}from"./NewsCard-ce1d12f4.js";import{T as n}from"./Typography-3f7315c7.js";import{s as l}from"./styled-943e38cb.js";import"./chance-599dc973.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-570b25c1.js";import"./Button-fff501ba.js";import"./emotion-react.browser.esm-c7009067.js";import"./emotion-styled.browser.esm-7daedd15.js";import"./extends-98964cd2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-38ea7bbc.js";import"./clsx.m-1229b3e0.js";import"./ButtonBase-5e380d71.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-fa5d426c.js";import"./createTheme-952d4be4.js";import"./useThemeProps-87902fe6.js";import"./getThemeProps-6c786bf3.js";import"./useTheme-82186cd9.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-81b8ef00.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./Stack-4f5470dc.js";import"./Profile-b93045be.js";import"./Avatar-0d504cfc.js";import"./createSvgIcon-91b9a7de.js";import"./Link-dfdd1756.js";import"./dividerClasses-f31bc062.js";import"./ArrowForward-dd74cc9f.js";const o=l("div")(({theme:e})=>`
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;

		.NewsCard-root {
			max-width: 100%;
		}

		${e.breakpoints.up("sm")} {
			grid-template-columns: repeat(2, 1fr);
		}

		${e.breakpoints.up("md")} {
			grid-template-columns: repeat(4, 1fr);
		}
	`),h=l("div")(({theme:e})=>`
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: ${e.spacing(2)};
	`),a=({articles:e,meta:d,title:u,actions:f})=>s(o,{className:"NewsBlock-root",children:[s(h,{children:[t(n,{variant:"h2",className:"NewsBlock-contentMeta",children:d}),t(n,{variant:"body1",className:"NewsBlock-contentTitle",children:u}),t(w,{actions:f})]}),e==null?void 0:e.map((g,N)=>t(k,{article:g},N))]});try{o.displayName="NewsBlockWrapper",o.__docgenInfo={description:"",displayName:"NewsBlockWrapper",props:{}}}catch{}try{a.displayName="NewsBlock",a.__docgenInfo={description:"",displayName:"NewsBlock",props:{meta:{defaultValue:null,description:"",name:"meta",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!0,type:{name:"Action[]"}},articles:{defaultValue:null,description:"",name:"articles",required:!0,type:{name:"Article[]"}}}}}catch{}const te={component:a},r={args:{title:i.sentence(),meta:i.sentence({words:3}),actions:_(),articles:y()}};var p,c,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: chance.sentence(),
    meta: chance.sentence({
      words: 3
    }),
    actions: generateActions(),
    articles: generateArticles()
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const re=["Default"];export{r as Default,re as __namedExportsOrder,te as default};
//# sourceMappingURL=NewsBlock.stories-b14e769f.js.map
