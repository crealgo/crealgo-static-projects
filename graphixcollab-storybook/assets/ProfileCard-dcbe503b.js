import{a as n,j as r}from"./emotion-element-6a883da9.browser.esm-e55838e6.js";import{I as p}from"./Image-61c3e035.js";import{s as d}from"./styled-b6ce4f35.js";import{T as t}from"./Typography-b9fed576.js";import{W as c,B as m}from"./Warning-c601f90e.js";import{c as i}from"./emotion-react.browser.esm-5506366e.js";const u=d("div")(({theme:e,isContained:a,isActionable:o})=>i`
		${a&&`
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

		${o?i`
					cursor: pointer;

					&:hover {
						color: var(--color-brand-primary-main);
					}
			  `:null}
	`),s=({IconComponent:e=c,text:a,...o})=>n(u,{className:"StatusMessage-root",...o,children:[r(e,{fontSize:"small"}),r(t,{className:"StatusMessage-text",variant:"body1",component:"span",children:a})]});try{s.displayName="StatusMessage",s.__docgenInfo={description:"",displayName:"StatusMessage",props:{IconComponent:{defaultValue:null,description:"",name:"IconComponent",required:!1,type:{name:"ComponentType<SvgIconProps>"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},isContained:{defaultValue:null,description:"",name:"isContained",required:!1,type:{name:"boolean"}},isActionable:{defaultValue:null,description:"",name:"isActionable",required:!1,type:{name:"boolean"}}}}}catch{}const g=d("div")`
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
`,l=({profile:e})=>e?n(g,{className:"ProfileCard-root",children:[r(p,{}),n("div",{className:"ProfileCard-info",children:[r(t,{noWrap:!0,variant:"h5",children:e.name}),r(s,{IconComponent:m,text:e.jobTitle}),r(t,{color:"primary",children:"Interests"})]})]}):null;try{l.displayName="ProfileCard",l.__docgenInfo={description:"",displayName:"ProfileCard",props:{profile:{defaultValue:null,description:"",name:"profile",required:!1,type:{name:"Employee"}}}}}catch{}export{l as P};
//# sourceMappingURL=ProfileCard-dcbe503b.js.map
