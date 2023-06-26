import{j as n,a as l}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{I as c,d as p}from"./IconButton-59415dfd.js";import{A as d}from"./ActionStack-93ca746e.js";import{B as m}from"./Block-10605452.js";import{C as u}from"./Container-167fc6f5.js";import{s}from"./styled-c5161996.js";import{C as B}from"./Collapse-0e8a6e52.js";const f=s(m)`
	display: block;
	position: relative;
	background-color: var(--color-brand-primary-lighter);
	padding-block: 0.5rem !important;
	color: white;

	.Banner-container {
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
		gap: 1rem;
	}

	.Banner-content {
		display: grid;
		grid-template-columns: auto auto;
		justify-content: center;

		width: 100%;
	}

	.Banner-textContent {
		font-size: 14px;
		font-weight: 500;
		line-height: var(--height-small-input);

		display: inline-block;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.Banner-actionStack .Button-root,
	.Banner-closeButton {
		color: white;
	}

	.Banner-closeButton {
		flex: none;
	}
`,y=s(c)`
	height: 1.5rem;
	font-size: 1rem;
`,o=({actions:e,onCloseClick:t,text:a,children:r})=>n(f,{hasNoDefaultMargin:!0,className:"Banner-root",title:typeof r=="string"?r:"",children:l(u,{className:"Banner-container",children:[l("div",{className:"Banner-content",children:[n("span",{className:"Banner-textContent",children:r??a}),(e==null?void 0:e.length)&&n(d,{className:"Banner-actionStack",size:"small",color:"text",actions:e})]}),n(y,{className:"Banner-closeButton","aria-label":"Close Banner",color:"text",Icon:p,onClick:t})]})});try{o.displayName="Banner",o.__docgenInfo={description:"",displayName:"Banner",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action[]"}},onCloseClick:{defaultValue:null,description:"",name:"onCloseClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}}}catch{}const i=({open:e,children:t,BannerProps:a})=>n(B,{in:e,children:t??n(o,{...a})});try{i.displayName="BannerService",i.__docgenInfo={description:"",displayName:"BannerService",props:{open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},BannerProps:{defaultValue:null,description:"",name:"BannerProps",required:!1,type:{name:"BannerProps"}}}}}catch{}export{o as B,i as a};
//# sourceMappingURL=BannerService-07f3006b.js.map
