import{j as i}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{c as o}from"./emotion-react.browser.esm-c7009067.js";import{s as r}from"./emotion-styled.browser.esm-7daedd15.js";const d=r.span(e=>o`
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
	`),n=({children:e,...t})=>{const a=`h${t.level??6}`;return i(d,{...t,as:a,children:e})};try{n.displayName="Heading",n.__docgenInfo={description:"",displayName:"Heading",props:{}}}catch{}export{n as H};
//# sourceMappingURL=Heading-dbad4f1a.js.map
