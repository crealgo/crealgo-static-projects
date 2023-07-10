import{a as o,j as r}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{I as p}from"./Image-11275a93.js";import{s as l}from"./styled-943e38cb.js";import{T as n}from"./Typography-3f7315c7.js";import{W as c,B as m}from"./Warning-b67f056e.js";import{c as s}from"./emotion-react.browser.esm-c7009067.js";const u=l("div")(({isContained:e,isActionable:a})=>s`
		${e&&`
		padding-inline: 1rem;
		padding-block: 0.75rem;

		border-radius: 0.25rem;
		background-color: var(--color-gray-300);
		border: solid 1px var(--color-gray-50);
		outline: solid 1px var(--color-gray-400);
	`}

		display: grid;
		grid-template-columns: auto 1fr;
		gap: 0.25rem;

		align-items: center;
		color: var(--color-gray-700);

		${a?s`
					cursor: pointer;

					&:hover {
						color: var(--color-brand-primary-main);
					}
			  `:null}
	`),t=({IconComponent:e=c,text:a,...d})=>o(u,{className:"StatusMessage-root",...d,children:[r(e,{fontSize:"small"}),r(n,{className:"StatusMessage-text",variant:"body1",component:"span",children:a})]});try{t.displayName="StatusMessage",t.__docgenInfo={description:"",displayName:"StatusMessage",props:{IconComponent:{defaultValue:null,description:"",name:"IconComponent",required:!1,type:{name:"ComponentType<SvgIconProps>"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},isContained:{defaultValue:null,description:"",name:"isContained",required:!1,type:{name:"boolean"}},isActionable:{defaultValue:null,description:"",name:"isActionable",required:!1,type:{name:"boolean"}}}}}catch{}const g=l("div")`
	.Image-root {
		aspect-ratio: 0.75;
		border: none;
	}

	.ProfileCard-info {
		display: grid;
		gap: 0.25rem;

		padding-block: 0.5rem;
		padding-right: 1rem;
	}
`,i=({profile:e})=>e?o(g,{className:"ProfileCard-root",children:[r(p,{}),o("div",{className:"ProfileCard-info",children:[r(n,{noWrap:!0,variant:"h5",children:e.name}),r(t,{IconComponent:m,text:e.jobTitle}),r(n,{color:"primary",children:"Interests"})]})]}):null;try{i.displayName="ProfileCard",i.__docgenInfo={description:"",displayName:"ProfileCard",props:{profile:{defaultValue:null,description:"",name:"profile",required:!1,type:{name:"Employee"}}}}}catch{}export{i as P};
//# sourceMappingURL=ProfileCard-fc1e8d3b.js.map
