import{a as d,j as a}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{s}from"./emotion-styled.browser.esm-7daedd15.js";import{c}from"./clsx.m-1229b3e0.js";import{r as o}from"./index-570b25c1.js";const t=s.span`
	font-weight: 500;
	font-size: 0.75rem;
	line-height: 1rem;

	color: var(--color-text-secondary);
`;try{t.displayName="InputHelperText",t.__docgenInfo={description:"",displayName:"InputHelperText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}}}catch{}const n=e=>{e.type==="touched"&&(e.stopPropagation(),[e.currentTarget,...e.currentTarget.querySelectorAll(".input-label, .input-helper-text")].forEach(r=>{r.classList.add("touched")}))},u=s.label`
	display: inline-grid;
	grid-template-columns: 1fr;

	color: var(--color-text-primary);
	font-size: 14px;
	line-height: 1rem;
	font-weight: 500;
	letter-spacing: -0.1px;

	.Select-root,
	.Input-root {
		margin-top: 0.25rem;
	}

	.FormControl-helper-text {
		margin-top: 0.25rem;
	}

	&.full-width {
		width: 100%;
	}

	&.required {
		.input-label::after {
			content: '*';
			color: var(--color-feedback-error-main);
		}
	}
`,i=e=>{const r=o.useRef(null);return o.useEffect(()=>{if(r.current){const l=r.current;return l.addEventListener("touched",n),()=>{l.removeEventListener("touched",n)}}},[r]),d(u,{ref:r,htmlFor:e.labelFor,className:c(e.className,"FormControl-root",{"full-width":e.isFullWidth}),children:[a("span",{className:"FormControl-label-text",children:e.label}),e.children,e.helperText&&a(t,{id:e.helperTextId,className:"FormControl-helper-text",children:e.helperText})]})};try{i.displayName="FormControl",i.__docgenInfo={description:"",displayName:"FormControl",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelFor:{defaultValue:null,description:"",name:"labelFor",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},helperTextId:{defaultValue:null,description:"",name:"helperTextId",required:!1,type:{name:"string"}},isFullWidth:{defaultValue:null,description:"",name:"isFullWidth",required:!1,type:{name:"boolean"}}}}}catch{}export{i as F};
//# sourceMappingURL=FormControl-68bdfda7.js.map
