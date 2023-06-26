import{a as d,j as n}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{c as p}from"./clsx.m-1229b3e0.js";import{s as u}from"./styled-c5161996.js";import{c as t}from"./emotion-react.browser.esm-c7009067.js";const g=({className:a,onLoad:e,onError:o,caption:s,...i})=>{const c=l=>{console.log("loaded"),e==null||e(l)},m=l=>{console.log("loaded"),o==null||o(l)};return d("figure",{className:p("Image-root",a),children:[n("img",{className:"Image-element",onLoad:c,onError:m,...i}),s&&n("figcaption",{className:"Image-caption",children:s})]})},r=u(g)(({shape:a})=>{const e={square:t`
			aspect-ratio: 1;
		`,portrait:t``,landscape:t``}[a??"square"];return t`
		margin: unset;
		padding: unset;
		border: unset;
		outline: unset;

		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.5rem;

		background-color: var(--color-gray-200);

		/* FIXME: doesn't work well with caption, needs wrapper around image */
		${e}

		.Image-element {
			outline: unset;
			object-fit: cover;
			width: 100%;
			height: 100%;
			border-radius: 0.25rem;
			aspect-ratio: 1;
		}

		&[loaded] {
		}
	`});try{r.displayName="Image",r.__docgenInfo={description:"",displayName:"Image",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLImageElement | null) => void) | RefObject<HTMLImageElement> | null"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"ReactNode"}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"portrait"'},{value:'"landscape"'}]}}}}}catch{}export{r as I};
//# sourceMappingURL=Image-49bc17e3.js.map
