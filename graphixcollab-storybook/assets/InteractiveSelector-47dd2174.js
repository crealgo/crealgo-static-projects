import{a as d,j as a}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{c as u}from"./emotion-react.browser.esm-c7009067.js";import{s as n}from"./emotion-styled.browser.esm-7daedd15.js";import{r as m}from"./index-570b25c1.js";import{K as p}from"./KeyboardArrowDown-149175f0.js";const b=n.button(({color:e="cyan"})=>u`
		background: unset;
		border-radius: 0rem;
		outline: unset;
		padding: unset;

		position: relative;
		box-sizing: border-box;

		display: inline-flex;
		place-items: center;

		background: var(--color-brand-${e}-lighter);
		border: none;
		border-block-end: solid 0.25rem var(--color-brand-${e}-main);

		z-index: 0;

		font: inherit;
		color: inherit;

		.endIcon {
			font-size: 0.875em;
			margin-right: -0.5rem;
		}

		&:hover,
		&:focus-visible {
			background-color: var(--color-brand-${e}-light);
		}
	`),v=n.select`
	border-radius: 0rem;
	cursor: pointer;

	position: absolute;
	opacity: 0;
	inset: 50% 0 0 0;
	transform: translateY(-50%);
	width: 100%;
	height: 100%;
`,t=({options:e=[],...o})=>{const[l,i]=m.useState(0),c=r=>{i(r.currentTarget.selectedIndex)};return d(b,{...o,children:[e[l].label,a(p,{className:"endIcon"}),a(v,{className:"InteractiveSelector-select",onChange:c,children:e==null?void 0:e.map((r,s)=>a("option",{value:r.value,children:r.label},s))})]})};try{t.displayName="InteractiveSelector",t.__docgenInfo={description:"",displayName:"InteractiveSelector",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"key"'},{value:'"cyan"'},{value:'"magenta"'},{value:'"yellow"'}]}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"OptionValue[]"}}}}}catch{}export{t as I};
//# sourceMappingURL=InteractiveSelector-47dd2174.js.map
