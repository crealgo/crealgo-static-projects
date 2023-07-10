import{j as d}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{a as s}from"./Container-511ded03.js";import{c}from"./clsx.m-1229b3e0.js";import{_ as p}from"./excludePropsFromForwarding-6c5743cd.js";import{s as u}from"./styled-943e38cb.js";const m=u("div",p("hasNoDefaultMargin","color","isRounded","isClipped","hasNoHorizontalPadding"))(({theme:e,color:n,hasNoDefaultMargin:i,hasNoHorizontalPadding:a,isClipped:r,isRounded:l=!1})=>{const t={default:"transparent",primary:"var(--color-brand-primary-lighter)",secondary:"var(--color-brand-secondary-lighter)",tertiary:"var(--color-brand-tertiary-lighter)",grey:"var(--color-gray-50)"}[n??"default"];return s`
			--section-padding-block: var(--section-mobile-padding-block);
			--section-padding-inline: var(--section-mobile-padding-inline);
			--section-margin-inline: 0rem;
			--section-border-radius: none;

			${e.breakpoints.up("md")} {
				--section-padding-block: var(--section-tablet-padding-block);
				--section-padding-inline: ${a?"unset":"var(--section-tablet-padding-inline)"};
				--section-margin-inline: var(--section-tablet-margin-inline);
				--section-border-radius: 0.5rem;
			}

			${e.breakpoints.up("xl")} {
				--section-padding-inline: ${a?"unset":"var(--section-tablet-padding-inline)"};
			}

			background-color: ${t};
			position: relative;

			padding-block: var(--section-padding-block);
			padding-inline: var(--section-padding-inline);
			margin-inline: ${i?"unset":"var(--section-margin-inline)"};
			border-radius: ${l?"var(--section-border-radius)":"none"};
			${r?"overflow: hidden;":""};
		`}),o=({className:e,children:n,...i})=>d(m,{...i,className:c("Block-root",e),children:n});try{o.displayName="Block",o.__docgenInfo={description:"",displayName:"Block",props:{hasNoDefaultMargin:{defaultValue:null,description:"Disables the block's inline margin",name:"hasNoDefaultMargin",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"any"}},isRounded:{defaultValue:null,description:"",name:"isRounded",required:!1,type:{name:"boolean"}},isClipped:{defaultValue:null,description:"",name:"isClipped",required:!1,type:{name:"boolean"}},hasNoHorizontalPadding:{defaultValue:null,description:"",name:"hasNoHorizontalPadding",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}}}catch{}export{o as B};
//# sourceMappingURL=Block-c3675cc7.js.map
