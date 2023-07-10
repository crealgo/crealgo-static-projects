import{k as c}from"./chance-6db3c92c.js";import{j as e,a as n}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{B as u}from"./Block-c3675cc7.js";import{C as g}from"./Container-511ded03.js";import{H as f}from"./Heading-dbad4f1a.js";import{T as h}from"./Text-43b906c3.js";import{M as k}from"./Mark-fe31e544.js";import{s as t}from"./styled-943e38cb.js";import{c as y}from"./emotion-react.browser.esm-c7009067.js";import"./chance-599dc973.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-570b25c1.js";import"./clsx.m-1229b3e0.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./emotion-styled.browser.esm-7daedd15.js";import"./extends-98964cd2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-38ea7bbc.js";import"./BrandDots-1a30b756.js";import"./createTheme-952d4be4.js";const b=t(u)(({color:r="tertiary"})=>y`
		--wrapper-padding-bottom: 6rem;

		@media screen and (min-width: 1123px) {
			--wrapper-padding-bottom: 5rem;
		}

		background-color: var(--color-brand-${r}-lighter);
		margin-top: calc(5rem - 10rem);

		padding-bottom: var(--wrapper-padding-bottom);

		.PageHeaderBlock-container {
			position: relative;
		}

		.Heading-root,
		.Text-root {
			color: var(--color-brand-tertiary-darker);
		}
	`),x=t("img")`
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
`,B=t("hgroup")`
	max-width: 40rem;
`,o=({title:r,description:s,color:p,ImageProps:i})=>e(b,{color:p,children:n(g,{className:"PageHeaderBlock-container",children:[n(B,{children:[e(f,{hasMargin:!0,level:1,children:e(k,{brand:!0,children:r})}),e(h,{children:s})]}),i&&e(x,{...i})]})});o.displayName="PageHeaderBlock";try{o.displayName="PageHeaderBlock",o.__docgenInfo={description:"",displayName:"PageHeaderBlock",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"any"}},breadcrumbs:{defaultValue:null,description:"",name:"breadcrumbs",required:!1,type:{name:"BreadcrumbOptions[]"}},navigationItems:{defaultValue:null,description:"",name:"navigationItems",required:!1,type:{name:"NavItemOptions[]"}},navigationType:{defaultValue:null,description:"",name:"navigationType",required:!1,type:{name:"enum",value:[{value:'"scroll"'},{value:'"anchor-link"'}]}},BlockProps:{defaultValue:null,description:"",name:"BlockProps",required:!1,type:{name:"BlockProps"}},ImageProps:{defaultValue:null,description:"",name:"ImageProps",required:!1,type:{name:"ImageProps"}}}}}catch{}const $={component:o},a={args:c()};var m,d,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: generatePageHeaderBlock()
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const z=["Default"];export{a as Default,z as __namedExportsOrder,$ as default};
//# sourceMappingURL=PageHeaderBlock.stories-dab732f7.js.map
