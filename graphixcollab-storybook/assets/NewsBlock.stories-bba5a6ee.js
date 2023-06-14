import{c as i,j as _,p as y}from"./chance-a31e5df2.js";import{a as s,j as t}from"./emotion-element-6a883da9.browser.esm-e55838e6.js";import{A as w}from"./ActionStack-8dd88bdd.js";import{N as k}from"./NewsCard-20fd63ab.js";import{T as n}from"./Typography-b9fed576.js";import{s as l}from"./styled-b6ce4f35.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./Button-6766e6f8.js";import"./clsx.m-1229b3e0.js";import"./ButtonBase-13334f8c.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-f0dd9438.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-c604b0e9.js";import"./defaultTheme-8dc337cc.js";import"./useThemeProps-1ff09982.js";import"./getThemeProps-f2e6066a.js";import"./generateUtilityClasses-bdae82bf.js";import"./emotion-react.browser.esm-5506366e.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-44f71b61.js";import"./useEventCallback-f57d74d7.js";import"./useEnhancedEffect-a150ab51.js";import"./emotion-styled.browser.esm-6ab8df2f.js";import"./Stack-2393552a.js";import"./Profile-124d25f7.js";import"./Avatar-aca4aa6e.js";import"./createSvgIcon-91651465.js";import"./Link-b69c7059.js";import"./dividerClasses-3a51a39a.js";import"./ArrowForward-1c1d1aa5.js";const o=l("div")(({theme:e})=>`
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
	`),a=({articles:e,meta:d,title:u,actions:f})=>s(o,{className:"NewsBlock-root",children:[s(h,{children:[t(n,{variant:"h2",className:"NewsBlock-contentMeta",children:d}),t(n,{variant:"body1",className:"NewsBlock-contentTitle",children:u}),t(w,{actions:f})]}),e==null?void 0:e.map((g,N)=>t(k,{article:g},N))]});try{o.displayName="NewsBlockWrapper",o.__docgenInfo={description:"",displayName:"NewsBlockWrapper",props:{}}}catch{}try{a.displayName="NewsBlock",a.__docgenInfo={description:"",displayName:"NewsBlock",props:{meta:{defaultValue:null,description:"",name:"meta",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!0,type:{name:"Action[]"}},articles:{defaultValue:null,description:"",name:"articles",required:!0,type:{name:"Article[]"}}}}}catch{}const Z={component:a},r={args:{title:i.sentence(),meta:i.sentence({words:3}),actions:_(),articles:y()}};var p,c,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: chance.sentence(),
    meta: chance.sentence({
      words: 3
    }),
    actions: generateActions(),
    articles: generateArticles()
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const ee=["Default"];export{r as Default,ee as __namedExportsOrder,Z as default};
//# sourceMappingURL=NewsBlock.stories-bba5a6ee.js.map
