import{a as m,j as s}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{_ as l}from"./excludePropsFromForwarding-6c5743cd.js";import{s as c}from"./styled-943e38cb.js";import{M as d}from"./ButtonBase-fa5d426c.js";import{c as p}from"./emotion-react.browser.esm-c7009067.js";const f=c(d,l("endIcon","startIcon","size"))(({size:e="medium"})=>p`
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		gap: var(--button-spacing-gap-${e});

		font-family: inherit;

		letter-spacing: -0.0156rem;
		white-space: nowrap;

		border-radius: 0.25rem;
	`),o=c("span",l("end","start"))(({start:e,end:t})=>`
	svg {
		height: 0.875em;
		width: 0.875em;
	}

	display: inline-flex;
	${e?"margin-left: -0.25rem;":""}
	${t?"margin-right: -0.25rem;":""}
`),i=({children:e,startIcon:t,endIcon:n,onClick:a,...u})=>m(f,{...u,role:"button",onClick:r=>{a&&(r.preventDefault(),a(r))},children:[t&&s(o,{start:!0,className:"Button-icon Button-startIcon",children:t}),e,n&&s(o,{end:!0,className:"Button-icon Button-endIcon",children:n})]});try{i.displayName="ButtonBase",i.__docgenInfo={description:"",displayName:"ButtonBase",props:{endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"any"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"any"}}}}}catch{}export{i as B};
//# sourceMappingURL=ButtonBase-5e380d71.js.map
