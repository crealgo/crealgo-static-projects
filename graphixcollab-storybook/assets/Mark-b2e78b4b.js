import{a as o,j as s}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{c as r}from"./emotion-react.browser.esm-c7009067.js";import{s as u}from"./emotion-styled.browser.esm-7daedd15.js";import{B as i}from"./BrandDots-1a30b756.js";const d=u("mark")(({text:e,brand:a,color:n="cyan"})=>{const l=r`
			background: unset;
			display: inline-flex;
		`;return a?r`
				${l}
				position: relative;
			`:e?r`
				${l}
				color: var(--color-brand-${n}-main);
			`:r`
			${l}
			background: var(--color-brand-${n}-lighter);
		`}),t=({children:e,...a})=>o(d,{...a,children:[e,a.brand?s(i,{}):null]});try{t.displayName="Mark",t.__docgenInfo={description:"",displayName:"Mark",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"key"'},{value:'"square"'},{value:'"cyan"'},{value:'"magenta"'},{value:'"yellow"'},{value:'"yelp"'},{value:'"facebook"'},{value:'"twitter"'},{value:'"instagram"'}]}},brand:{defaultValue:null,description:"",name:"brand",required:!1,type:{name:"boolean"}}}}}catch{}export{t as M};
//# sourceMappingURL=Mark-b2e78b4b.js.map
