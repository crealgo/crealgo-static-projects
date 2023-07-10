import{a as f,j as r}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{c as o}from"./emotion-react.browser.esm-c7009067.js";import{s}from"./emotion-styled.browser.esm-7daedd15.js";import{r as v,i as g,a as _}from"./jsx-runtime_commonjs-proxy-600fb832.js";import{r as h}from"./index-570b25c1.js";import{g as y}from"./generateBaseInputStyles-fa1d22f6.js";import{c as S}from"./clsx.m-1229b3e0.js";var a={},w=g;Object.defineProperty(a,"__esModule",{value:!0});var n=a.default=void 0,x=w(v()),$=_,j=(0,x.default)((0,$.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");n=a.default=j;const b=s("div")(({inputSize:e})=>o`
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
	`),I=s("select",{shouldForwardProp:e=>!["inputSize","isTouched","isInvalid","isValid"].includes(e)})(e=>o`
		${y({inputSize:e.inputSize})};

		padding-inline: var(--select-spacing-padding-inline-${e.inputSize});
		appearance: none;
		cursor: pointer;

		width: 100%;
	`),i=h.forwardRef(({options:e,inputSize:t="medium",className:l,...c},p)=>f(b,{className:S("Select-root",l),inputSize:t,children:[r(I,{...c,ref:p,inputSize:t,children:e==null?void 0:e.map(({label:d,value:u},m)=>r("option",{value:u,children:d},m))}),r(n,{})]}));try{i.displayName="Select",i.__docgenInfo={description:"",displayName:"Select",props:{}}}catch{}export{i as S};
//# sourceMappingURL=Select-6428b7c8.js.map
