import{a as m,j as a}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{c as n}from"./emotion-react.browser.esm-c7009067.js";import{s as i}from"./emotion-styled.browser.esm-7daedd15.js";import{r as f,i as v,a as g}from"./jsx-runtime_commonjs-proxy-526ce555.js";import{g as y}from"./Input-5978689d.js";import{c as _}from"./clsx.m-1229b3e0.js";var r={},S=v;Object.defineProperty(r,"__esModule",{value:!0});var o=r.default=void 0,q=S(f()),h=g,b=(0,q.default)((0,h.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");o=r.default=b;const j=i("div")(({inputSize:e})=>n`
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
	`),x=i.select(e=>n`
		${y(e)};

		padding-inline: var(--select-spacing-padding-inline-${e.inputSize});
		appearance: none;
		cursor: pointer;

		width: 100%;
	`),l=({options:e,inputSize:t="medium",className:u,...s})=>m(j,{className:_("Select-root",u),inputSize:t,children:[a(x,{inputSize:t,...s,children:e==null?void 0:e.map(({label:d,value:p},c)=>a("option",{value:p,children:d},c))}),a(o,{})]});try{l.displayName="Select",l.__docgenInfo={description:"",displayName:"Select",props:{options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"OptionValue[]"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"standard"'},{value:'"branded"'}]}},inputSize:{defaultValue:{value:"medium"},description:"",name:"inputSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSelectElement | null) => void) | RefObject<HTMLSelectElement> | null"}}}}}catch{}export{l as S};
//# sourceMappingURL=Select-3a954bc6.js.map
