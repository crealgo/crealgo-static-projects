import{a as t,j as r}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{c as m}from"./clsx.m-1229b3e0.js";import{A as n}from"./Avatar-33755171.js";import{T as o}from"./Typography-3433e336.js";import{L as c}from"./Link-a713847e.js";import{s as i}from"./styled-c5161996.js";const d=i("div")`
	display: grid;
	column-gap: 0.75rem;
	grid-template-columns: auto 1fr;

	align-items: center;

	& .Avatar-root {
		width: 2.875rem;
		aspect-ratio: 1;
	}

	& .Profile-content {
		display: grid;
		grid-template-columns: 1fr;

		.Profile-username {
			margin-top: -3px;
		}
	}
`,s=({className:e,profile:a})=>t(d,{className:m(e,"Profile-root"),children:[r(n,{src:a==null?void 0:a.avatar,alt:a==null?void 0:a.name}),t("div",{className:"Profile-content",children:[r(o,{className:"Profile-name",variant:"body2",fontWeight:"bold",children:a==null?void 0:a.name}),r(c,{className:"Profile-username",variant:"body2",children:a==null?void 0:a.username})]})]});try{s.displayName="Profile",s.__docgenInfo={description:"",displayName:"Profile",props:{profile:{defaultValue:null,description:"",name:"profile",required:!1,type:{name:"Person"}}}}}catch{}export{s as P};
//# sourceMappingURL=Profile-b1b56c4f.js.map
