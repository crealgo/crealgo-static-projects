import{d as h,c as l}from"./chance-a31e5df2.js";import{a as n,j as r}from"./emotion-element-6a883da9.browser.esm-e55838e6.js";import{I}from"./Image-61c3e035.js";import{s as t}from"./styled-b6ce4f35.js";import{c as p}from"./emotion-react.browser.esm-5506366e.js";import{r as v}from"./index-f1f749bf.js";import{H as _}from"./Heading-3dd7d259.js";import{T as F}from"./Text-d456f8b9.js";import{N as x}from"./NavItemDropdown-15391b93.js";import"./clsx.m-1229b3e0.js";import"./defaultTheme-8dc337cc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-c604b0e9.js";import"./emotion-styled.browser.esm-6ab8df2f.js";import"./_commonjsHelpers-042e6b4d.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ArrowDownward-0104ae4c.js";import"./createSvgIcon-91651465.js";import"./useThemeProps-1ff09982.js";import"./getThemeProps-f2e6066a.js";import"./generateUtilityClasses-bdae82bf.js";import"./Modal-42a51df8.js";import"./useTheme-da848437.js";import"./utils-3d8ceabf.js";import"./assertThisInitialized-e784747a.js";import"./index-96c5f47c.js";import"./ButtonBase-f0dd9438.js";import"./useIsFocusVisible-44f71b61.js";import"./useEventCallback-f57d74d7.js";import"./useEnhancedEffect-a150ab51.js";import"./ownerWindow-2150232e.js";import"./Paper-952e3300.js";import"./index-1aacdabe.js";import"./dividerClasses-3a51a39a.js";const w=t("div")(({theme:e})=>p`
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
	`),N=t(I)(({theme:e})=>p`
		background-color: var(--color-gray-300);
		width: 100%;
		aspect-ratio: 1;
	`),b=t("span")(({theme:e})=>p`
		font-size: 0.75rem;
		text-align: center;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;

		color: var(--color-gray-600);
	`),s=({ImageProps:e,label:i})=>n(w,{children:[r(N,{...e}),r(b,{className:"Title-root",children:i})]});try{s.displayName="FeaturedItem",s.__docgenInfo={description:"",displayName:"FeaturedItem",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},ImageProps:{defaultValue:null,description:"",name:"ImageProps",required:!1,type:{name:"ImageProps"}}}}}catch{}const D=t("nav")`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1rem;
`,a=v.forwardRef(({className:e,children:i,items:m},g)=>r(D,{ref:g,className:e,children:i??(m==null?void 0:m.map((f,y)=>r(s,{...f},y)))}));a.displayName="FeaturedItems";try{a.displayName="FeaturedItems",a.__docgenInfo={description:"",displayName:"FeaturedItems",props:{items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"FeaturedItemProps[]"}}}}}catch{}const T=t("div")`
	padding: 1.5rem;
`,q=t("div")`
	aspect-ratio: 2/1;
	max-width: 30rem;

	display: flex;
	flex-direction: column;
	gap: 2rem;
`,C=t("main")`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`,P=()=>r(T,{children:n(q,{children:[n(C,{children:[r(_,{level:3,children:"Sed ut perspiciatis unde omnis."}),r(F,{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,"})]}),r(a,{items:h()})]})}),le={component:x},o={args:{children:"Nav Item Dropdown",items:l.n(()=>({label:l.word({length:5})}),5),FlyoutComponent:P}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Nav Item Dropdown',
    items: chance.n(() => ({
      label: chance.word({
        length: 5
      })
    }), 5),
    FlyoutComponent: Flyout
  }
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const de=["Default"];export{o as Default,de as __namedExportsOrder,le as default};
//# sourceMappingURL=NavItemDropdown.stories-07632d41.js.map
