import{a as c,j as l}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{_ as o}from"./excludePropsFromForwarding-6c5743cd.js";import{s as u}from"./styled-c5161996.js";import{M as d}from"./ButtonBase-a61f402b.js";import{c as p}from"./emotion-react.browser.esm-c7009067.js";const f=u(d,o("endIcon","startIcon","size"))(({size:e="medium"})=>p`
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		gap: var(--button-spacing-gap-${e});

		font-family: inherit;

		letter-spacing: -0.0156rem;
		white-space: nowrap;

		border-radius: 0.25rem;
	`),s=u("span",o("end","start"))(({start:e,end:t})=>`
	svg {
		height: 0.875em;
		width: 0.875em;
	}

	display: inline-flex;
	${e?"margin-left: -0.25rem;":""}
	${t?"margin-right: -0.25rem;":""}
`),i=({children:e,startIcon:t,endIcon:a,onClick:n,...m})=>c(f,{...m,role:"button",onClick:r=>{n&&(r.preventDefault(),n(r))},children:[t&&l(s,{start:!0,className:"Button-icon Button-startIcon",children:t}),e,a&&l(s,{end:!0,className:"Button-icon Button-endIcon",children:a})]});try{i.displayName="ButtonBase",i.__docgenInfo={description:"",displayName:"ButtonBase",props:{endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}}}catch{}export{i as B};
//# sourceMappingURL=ButtonBase-3726785b.js.map
