import{a as m,j as a}from"./emotion-element-6a883da9.browser.esm-e55838e6.js";import{c as i}from"./emotion-react.browser.esm-5506366e.js";import{s as l}from"./emotion-styled.browser.esm-6ab8df2f.js";import{r as v,i as f,a as g}from"./jsx-runtime_commonjs-proxy-564537a5.js";import{g as y}from"./Input-5f518c4b.js";var r={},_=f;Object.defineProperty(r,"__esModule",{value:!0});var u=r.default=void 0,q=_(v()),S=g,h=(0,q.default)((0,S.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");u=r.default=h;const b=l("div")(({inputSize:e})=>i`
		display: inline-block;
		position: relative;

		& svg {
			pointer-events: none;
			position: absolute;
			top: 50%;
			height: var(--input-group-action-size-${e});
			width: var(--input-group-action-size-${e});
			right: var(--input-spacing-gap-${e});
			transform: translateY(-50%);
			opacity: 0.5;
		}
	`),j=l.select(e=>i`
		${y(e)};

		padding-inline: var(--select-spacing-padding-inline-${e.inputSize});
		appearance: none;
		cursor: pointer;

		width: 100%;
	`),n=({options:e,inputSize:t="medium",className:o,...d})=>m(b,{className:o,inputSize:t,children:[a(j,{inputSize:t,...d,children:e==null?void 0:e.map(({label:s,value:p},c)=>a("option",{value:p,children:s},c))}),a(u,{})]});try{n.displayName="Select",n.__docgenInfo={description:"",displayName:"Select",props:{options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"OptionValue[]"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"standard"'},{value:'"branded"'}]}},inputSize:{defaultValue:{value:"medium"},description:"",name:"inputSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSelectElement | null) => void) | RefObject<HTMLSelectElement> | null"}}}}}catch{}export{n as S};
//# sourceMappingURL=Select-aafb4c14.js.map
