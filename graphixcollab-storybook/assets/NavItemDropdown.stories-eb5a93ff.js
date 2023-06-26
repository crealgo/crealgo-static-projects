import{m as y,c as s}from"./chance-cee71ec0.js";import{a as n,j as e}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{I}from"./Image-49bc17e3.js";import{s as r}from"./styled-c5161996.js";import{r as h}from"./index-570b25c1.js";import{H as v}from"./Heading-908cb5d8.js";import{T as _}from"./Text-71c0d1b5.js";import{N as F}from"./NavItemDropdown-70190fcb.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-1229b3e0.js";import"./emotion-react.browser.esm-c7009067.js";import"./emotion-styled.browser.esm-7daedd15.js";import"./extends-98964cd2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-38ea7bbc.js";import"./createTheme-0dc7dae6.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ArrowDownward-7fc81491.js";import"./createSvgIcon-0cd10119.js";import"./useThemeProps-4b422382.js";import"./getThemeProps-6c786bf3.js";import"./useTheme-a01d1f5e.js";import"./Modal-c90c8588.js";import"./useTheme-cd93cc18.js";import"./utils-ecc8b08b.js";import"./assertThisInitialized-e784747a.js";import"./index-8a077077.js";import"./ButtonBase-a61f402b.js";import"./useIsFocusVisible-81b8ef00.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./ownerWindow-2150232e.js";import"./Paper-6b67602d.js";import"./react-is.production.min-a192e302.js";import"./dividerClasses-d779d833.js";const x=r("div")`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
	cursor: pointer;

	&:hover {
		.Title-root {
			color: var(--color-gray-800);
		}

		.Image-root {
			background-color: var(--color-gray-400);
			outline: dashed 2px var(--color-gray-400);
			outline-offset: 2px;
		}
	}
`,w=r(I)`
	background-color: var(--color-gray-300);
	width: 100%;
	aspect-ratio: 1;
`,N=r("span")`
	font-size: 0.75rem;
	text-align: center;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;

	color: var(--color-gray-600);
`,p=({ImageProps:t,label:i})=>n(x,{children:[e(w,{...t}),e(N,{className:"Title-root",children:i})]});try{p.displayName="FeaturedItem",p.__docgenInfo={description:"",displayName:"FeaturedItem",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},ImageProps:{defaultValue:null,description:"",name:"ImageProps",required:!1,type:{name:"ImageProps"}}}}}catch{}const b=r("nav")`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1rem;
`,a=h.forwardRef(({className:t,children:i,items:m},u)=>e(b,{ref:u,className:t,children:i??(m==null?void 0:m.map((g,f)=>e(p,{...g},f)))}));a.displayName="FeaturedItems";try{a.displayName="FeaturedItems",a.__docgenInfo={description:"",displayName:"FeaturedItems",props:{items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"FeaturedItemProps[]"}}}}}catch{}const D=r("div")`
	padding: 1.5rem;
`,T=r("div")`
	aspect-ratio: 2/1;
	max-width: 30rem;

	display: flex;
	flex-direction: column;
	gap: 2rem;
`,q=r("main")`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`,C=()=>e(D,{children:n(T,{children:[n(q,{children:[e(v,{level:3,children:"Sed ut perspiciatis unde omnis."}),e(_,{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,"})]}),e(a,{items:y()})]})}),le={component:F},o={args:{children:"Nav Item Dropdown",items:s.n(()=>({label:s.word({length:5})}),5),FlyoutComponent:C}};var l,d,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Nav Item Dropdown',
    items: chance.n(() => ({
      label: chance.word({
        length: 5
      })
    }), 5),
    FlyoutComponent: Flyout
  }
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const de=["Default"];export{o as Default,de as __namedExportsOrder,le as default};
//# sourceMappingURL=NavItemDropdown.stories-eb5a93ff.js.map
