import{j as s}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{c as u}from"./emotion-react.browser.esm-c7009067.js";import{s as l}from"./emotion-styled.browser.esm-7daedd15.js";import{r as d}from"./index-570b25c1.js";import{c as p}from"./clsx.m-1229b3e0.js";const v=r=>u`
	--input-placeholder-color: var(--color-gray-300);
	--input-background-color: var(--color-white);
	--input-opacity: 1;

	&:hover,
	&:focus-visible {
		--input-border-color: var(--color-gray-600);
	}

	// if has value and is invalid
	&.touched {
		&:invalid,
		&:out-of-range {
			--input-status-color-main: var(--color-feedback-error-main);
			--input-status-color-light: var(--color-feedback-error-light);
			--input-border-color: var(--color-feedback-error-main);
			--input-background-color: var(--color-feedback-error-light);
		}

		&:valid,
		&:in-range {
			--input-status-color-main: var(--color-feedback-success-light);
			--input-border-color: var(--color-feedback-success-main);
			--input-background-color: var(--color-feedback-success-lightest);
		}
	}

	&:disabled {
		--input-opacity: 0.5;
		--input-border-color: transparent;
		--input-background-color: var(--color-gray-200);
		--input-placeholder-color: var(--color-gray-400);
		--input-shadow: none;
	}

	border: unset;
	padding: unset;
	/* outline: unset; */

	height: var(--input-height-${r.inputSize});
	padding-inline: var(--input-spacing-padding-inline-${r.inputSize});
	font-size: var(--input-font-size-${r.inputSize});

	background-color: var(--input-background-color);

	color: var(--input-text-color);
	box-shadow: var(--input-shadow);
	border-radius: var(--input-bezel-${r.inputSize});
	opacity: var(--input-opacity);

	border-style: var(--input-border-style);
	border-width: var(--input-border-width);
	border-color: var(--input-border-color);

	&::placeholder {
		color: var(--input-placeholder-color);
	}

	/* + .input-helper-text {
		color: var(--input-status-color-main);
		opacity: var(--input-opacity);
	} */
`,b=l.input(v),h=new Event("touched",{bubbles:!0}),g=r=>{if(r.value&&!r.classList.contains("touched")){r.dispatchEvent(h),r.classList.add("touched");return}!r.value&&r.classList.contains("touched")&&r.classList.remove("touched")},o=d.forwardRef(({onChange:r,className:a,inputSize:e="medium",...i},c)=>{const n=t=>{g(t.target),r==null||r(t)};return s(b,{...i,ref:c,inputSize:e,className:p("Input-root",a),onChange:n})});o.displayName="Input";try{o.displayName="Input",o.__docgenInfo={description:"",displayName:"Input",props:{}}}catch{}export{o as I,v as g};
//# sourceMappingURL=Input-5978689d.js.map
