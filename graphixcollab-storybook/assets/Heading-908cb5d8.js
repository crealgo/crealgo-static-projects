import{j as i}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{c as l}from"./emotion-react.browser.esm-c7009067.js";import{s as r}from"./emotion-styled.browser.esm-7daedd15.js";const o=r.span(e=>l`
		--type-heading-font-size: var(
			--type-heading-font-size-small-${e.level}
		);

		--type-heading-align: ${e.isCentered?"center":"unset"};

		@media screen and (min-width: 425px) {
			--type-heading-font-size: var(
				--type-heading-font-size-medium-${e.level}
			);
		}

		@media screen and (min-width: 768px) {
			--type-heading-font-size: var(
				--type-heading-font-size-large-${e.level}
			);
		}

		font-size: var(--type-heading-font-size);
		font-family: var(--type-heading-font-family);
		font-weight: var(--type-heading-font-weight);
		line-height: var(--type-heading-font-leading);
		color: var(--color-text-${e.isContrast?"contrast":"primary"});
		text-align: var(--type-heading-align);

		margin: ${e.hasMargin?"var(--type-heading-font-margin-top) 0 var(--type-heading-font-margin-bottom)":"unset"};
	`),n=({children:e,...a})=>{const t=`h${a.level??6}`;return i(o,{...a,as:t,children:e})};try{n.displayName="Heading",n.__docgenInfo={description:"",displayName:"Heading",props:{level:{defaultValue:null,description:"",name:"level",required:!1,type:{name:"enum",value:[{value:"2"},{value:"1"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},isCentered:{defaultValue:null,description:"",name:"isCentered",required:!1,type:{name:"boolean"}},isContrast:{defaultValue:null,description:"",name:"isContrast",required:!1,type:{name:"boolean"}},hasMargin:{defaultValue:null,description:"",name:"hasMargin",required:!1,type:{name:"boolean"}}}}}catch{}export{n as H};
//# sourceMappingURL=Heading-908cb5d8.js.map
