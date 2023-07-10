import{a as e,j as i}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{c as o}from"./emotion-react.browser.esm-c7009067.js";import{s as c}from"./emotion-styled.browser.esm-7daedd15.js";import{B as d}from"./BrandDots-1a30b756.js";const l=c("mark")(({text:r,brand:a,color:n="cyan"})=>{const s=o`
			background: unset;
			/* display: inline-flex; */
		`;return a?o`
				${s}
				position: relative;
			`:r?o`
				${s}
				color: var(--color-brand-${n}-main);
			`:o`
			${s}
			background: var(--color-brand-${n}-lighter);
		`}),t=({children:r,...a})=>e(l,{...a,children:[r,a.brand?i(d,{}):null]});try{t.displayName="Mark",t.__docgenInfo={description:"",displayName:"Mark",props:{}}}catch{}export{t as M};
//# sourceMappingURL=Mark-fe31e544.js.map
