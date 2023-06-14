import{a as T,j as c}from"./emotion-element-6a883da9.browser.esm-e55838e6.js";import{s as d}from"./emotion-styled.browser.esm-6ab8df2f.js";import{c as f}from"./clsx.m-1229b3e0.js";import{r as a}from"./index-f1f749bf.js";const u=d.span`
	font-weight: 500;
	font-size: 0.75rem;
	line-height: 1rem;

	color: var(--color-text-secondary);
`;try{u.displayName="InputHelperText",u.__docgenInfo={description:"",displayName:"InputHelperText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}}}catch{}const o=d.label`
	display: inline-flex;
	color: var(--color-text-primary);
	font-size: 14px;
	line-height: 1rem;
	font-weight: 500;
`;try{o.displayName="InputLabel",o.__docgenInfo={description:"",displayName:"InputLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}}}catch{}const s=d.div`
	display: inline-grid;
	min-width: 10rem;

	.input {
		margin-top: 0.25rem;
	}

	.input-helper-text {
		margin-top: 0.125rem;
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
`,y=t=>{t.type==="touched"&&(t.stopPropagation(),[t.currentTarget,...t.currentTarget.querySelectorAll(".input-label, .input-helper-text")].forEach(n=>{n.classList.add("touched")}))},h=({LabelProps:t,HelperTextProps:n,...e})=>{const _=a.useId(),p=e.id??_,i=`${p}-input`,m=`${p}-helper-text`,l=a.useRef(null);return a.useEffect(()=>{if(!l.current)return;const r=l.current;return r.addEventListener("touched",y),()=>{r.removeEventListener("touched",y)}},[l]),T(s,{ref:l,className:f(e.className,"root",{required:e.required,"full-width":e.isFullWidth}),children:[e.label&&c(o,{className:"input-label",htmlFor:i,...t,children:e.label}),a.Children.map(e.children,r=>a.isValidElement(r)?a.cloneElement(r,{id:i,name:i,className:f(r.props.className,"input"),required:e.required,inputSize:e.controlSize??"medium","aria-describedby":m,...r.props,...e.InputProps}):r),e.helperText&&c(u,{id:m,className:"input-helper-text",...n,children:e.helperText})]})};try{s.displayName="Wrapper",s.__docgenInfo={description:"",displayName:"Wrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}}}catch{}try{h.displayName="FormControl",h.__docgenInfo={description:"",displayName:"FormControl",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},controlSize:{defaultValue:null,description:"",name:"controlSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},isFullWidth:{defaultValue:null,description:"",name:"isFullWidth",required:!1,type:{name:"boolean"}},InputProps:{defaultValue:null,description:"",name:"InputProps",required:!1,type:{name:"AutocompleteProps | InputProps | SelectProps"}},LabelProps:{defaultValue:null,description:"",name:"LabelProps",required:!1,type:{name:'(Pick<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "key" | keyof LabelHTMLAttributes<...>> & { ...; })'}},HelperTextProps:{defaultValue:null,description:"",name:"HelperTextProps",required:!1,type:{name:'(Pick<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof HTMLAttributes<HTMLSpanElement>> & { ...; })'}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"standard"'},{value:'"branded"'}]}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}}}}}catch{}export{h as F};
//# sourceMappingURL=FormControl-af3048fc.js.map
