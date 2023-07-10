import{a as m,j as i}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{s as u}from"./emotion-styled.browser.esm-7daedd15.js";import{c}from"./clsx.m-1229b3e0.js";import{r as n}from"./index-570b25c1.js";const l=u.span`
	font-weight: 500;
	font-size: 0.75rem;
	line-height: 1rem;

	color: var(--color-text-secondary);
`;try{l.displayName="InputHelperText",l.__docgenInfo={description:"",displayName:"InputHelperText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}}}catch{}const s=e=>{e.type==="touched"&&(e.stopPropagation(),[e.currentTarget,...e.currentTarget.querySelectorAll(".input-label, .input-helper-text")].forEach(r=>{r.classList.add("touched")}))},p=u.label`
	display: inline-grid;
	grid-template-columns: 1fr;
	border: unset;
	padding: unset;

	color: var(--color-text-primary);
	font-size: 14px;
	line-height: 1rem;
	font-weight: 500;
	letter-spacing: -0.1px;

	.FormControl-label {
		margin-bottom: 0.25rem;
		width: 100%;
		display: block;
	}

	.FormControl-helper-text {
		margin-top: 0.25rem;
		max-width: 25rem;
	}

	&.is-full-width {
		width: 100%;
	}

	&.is-fieldset .FormControl-label {
		padding-bottom: 0.25rem;
		margin-bottom: 0.5rem;
		border-bottom: 1px solid var(--color-gray-400);
	}

	&.is-required .FormControl-label::after {
		content: '*';
		color: var(--color-feedback-error-main);
	}

	&.is-invalid {
		.FormControl-label,
		.FormControl-helper-text {
			color: var(--color-feedback-error-main);
		}
	}

	&.is-valid {
		.FormControl-label,
		.FormControl-helper-text {
			color: var(--color-feedback-success-main);
		}
	}
`,d=e=>{const r=n.useRef(null);n.useEffect(()=>{if(r.current){const o=r.current;return o.addEventListener("touched",s),()=>{o.removeEventListener("touched",s)}}},[r]);let t="label",a="span";return e.isFieldset&&(t="fieldset",a="legend"),m(p,{ref:r,as:t,htmlFor:e.labelFor,className:c(e.className,"FormControl-root",{"is-full-width":e.isFullWidth,"is-fieldset":e.isFieldset,"is-required":e.isRequired,"is-invalid":e.isInvalid,"is-valid":e.isValid,"is-touched":e.isTouched}),children:[i(a,{className:"FormControl-label",children:e.label}),e.children,e.helperText&&i(l,{id:e.helperTextId,className:"FormControl-helper-text",children:e.helperText})]})};try{d.displayName="FormControl",d.__docgenInfo={description:"",displayName:"FormControl",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},labelFor:{defaultValue:null,description:"",name:"labelFor",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"ReactNode"}},helperTextId:{defaultValue:null,description:"",name:"helperTextId",required:!1,type:{name:"string"}},isRequired:{defaultValue:null,description:"",name:"isRequired",required:!1,type:{name:"boolean"}},isFullWidth:{defaultValue:null,description:"",name:"isFullWidth",required:!1,type:{name:"boolean"}},isFieldset:{defaultValue:{value:"false"},description:`This prop is primarily used for when the FormControl wraps a group of
radio buttons or checkboxes.`,name:"isFieldset",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"BaseComponentProps"}},isTouched:{defaultValue:null,description:"",name:"isTouched",required:!0,type:{name:"BaseControlProps"}},isInvalid:{defaultValue:null,description:"",name:"isInvalid",required:!0,type:{name:"BaseControlProps"}},isValid:{defaultValue:null,description:"",name:"isValid",required:!0,type:{name:"BaseControlProps"}}}}}catch{}export{d as F};
//# sourceMappingURL=FormControl-1797c8e1.js.map
