import{q as c}from"./chance-a31e5df2.js";import{j as e,a as n}from"./emotion-element-6a883da9.browser.esm-e55838e6.js";import{B as u}from"./Block-91428622.js";import{C as g}from"./Container-df171808.js";import{H as f}from"./Heading-3dd7d259.js";import{T as h}from"./Text-d456f8b9.js";import{M as y}from"./Mark-a07f924b.js";import{s as t}from"./styled-b6ce4f35.js";import{c as b}from"./emotion-react.browser.esm-5506366e.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-1229b3e0.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./emotion-styled.browser.esm-6ab8df2f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-c604b0e9.js";import"./BrandDots-833eab64.js";import"./defaultTheme-8dc337cc.js";const k=t(u)(({color:a="tertiary"})=>b`
		--wrapper-padding-bottom: 6rem;

		@media screen and (min-width: 1123px) {
			--wrapper-padding-bottom: 5rem;
		}

		background-color: var(--color-brand-${a}-lighter);
		margin-top: calc(5rem - 10rem);

		padding-bottom: var(--wrapper-padding-bottom);

		.PageHeaderBlock-container {
			position: relative;
		}

		.Heading-root,
		.Text-root {
			color: var(--color-brand-tertiary-darker);
		}
	`),v=t("img")`
	/* background-color: rgba(0, 0, 0, 0.1); */

	width: 100%;
	max-width: 40rem;
	display: block;
	margin-bottom: -12rem;
	padding: 3rem; // TODO: shouldn't be applied to all images

	@media screen and (min-width: 600px) {
		float: right;
	}

	@media screen and (min-width: 768px) {
		margin-top: -2.5rem;
	}

	@media screen and (min-width: 1027px) {
		margin-top: -5rem;
		margin-right: -2.5rem;
	}

	@media screen and (min-width: 1123px) {
		position: absolute;
		inset: 100% 0 auto auto;
		margin-top: -15rem;
		max-width: 35rem;
	}

	@media screen and (min-width: 1200px) {
		max-width: 40rem;
	}
`,x=t("hgroup")`
	max-width: 40rem;
`,o=({title:a,description:s,color:p,ImageProps:i})=>e(k,{color:p,children:n(g,{className:"PageHeaderBlock-container",children:[n(x,{children:[e(f,{hasMargin:!0,level:1,children:e(y,{brand:!0,children:a})}),e(h,{children:s})]}),i&&e(v,{...i})]})});o.displayName="PageHeaderBlock";try{o.displayName="PageHeaderBlock",o.__docgenInfo={description:"",displayName:"PageHeaderBlock",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},breadcrumbs:{defaultValue:null,description:"",name:"breadcrumbs",required:!1,type:{name:"BreadcrumbOptions[]"}},navigationItems:{defaultValue:null,description:"",name:"navigationItems",required:!1,type:{name:"NavItemOptions[]"}},navigationType:{defaultValue:null,description:"",name:"navigationType",required:!1,type:{name:"enum",value:[{value:'"scroll"'},{value:'"anchor-link"'}]}},BlockProps:{defaultValue:null,description:"",name:"BlockProps",required:!1,type:{name:"BlockProps"}},ImageProps:{defaultValue:null,description:"",name:"ImageProps",required:!1,type:{name:"ImageProps"}}}}}catch{}const S={component:o},r={args:c()};var m,d,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: generatePageHeaderBlock()
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const W=["Default"];export{r as Default,W as __namedExportsOrder,S as default};
//# sourceMappingURL=PageHeaderBlock.stories-3a2b0d08.js.map
