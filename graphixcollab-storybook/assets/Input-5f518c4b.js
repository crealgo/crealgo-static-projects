import{j as i}from"./emotion-element-6a883da9.browser.esm-e55838e6.js";import{c as n}from"./emotion-react.browser.esm-5506366e.js";import{s as c}from"./emotion-styled.browser.esm-6ab8df2f.js";import{r as s}from"./index-f1f749bf.js";const u=r=>n`
	--input-status-color-main: blue;
	--input-background-color: var(--color-white);
	--input-opacity: 1;

	// if has value and is invalid
	&.touched {
		&:invalid,
		&:out-of-range {
			--input-status-color-main: var(--color-feedback-error-main);
			--input-status-color-light: var(--color-feedback-error-light);
			--input-border-color: var(--color-feedback-error-main);
			--input-background-color: var(--color-feedback-error-light);

			// temporary
			+ .input-helper-text {
				color: var(--color-feedback-error-main);
			}
		}

		&:valid,
		&:in-range {
			--input-status-color-main: var(--color-feedback-success-light);
			--input-border-color: var(--color-feedback-success-main);
			--input-background-color: var(--color-feedback-success-lightest);

			// temporary
			+ .input-helper-text {
				color: var(--color-feedback-success-main);
			}
		}
	}

	&:disabled {
		--input-opacity: 0.5;

		~ .input-helper-text {
			opacity: 0.5;
		}
	}

	border: unset;
	padding: unset;
	outline: unset;

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
`,d=c.input(u),p=new Event("touched",{bubbles:!0}),l=r=>{if(r.value&&!r.classList.contains("touched")){r.dispatchEvent(p),r.classList.add("touched");return}!r.value&&r.classList.contains("touched")&&r.classList.remove("touched")},t=s.forwardRef(({onChange:r,...e},a)=>i(d,{...e,ref:a,onChange:o=>{l(o.target),r==null||r(o)}}));t.displayName="Input";try{t.displayName="Input",t.__docgenInfo={description:"",displayName:"Input",props:{}}}catch{}export{t as I,u as g};
//# sourceMappingURL=Input-5f518c4b.js.map
