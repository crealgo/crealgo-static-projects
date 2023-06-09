import{i as d,s as m,x as g}from"./lit-element-806e1931.js";import{e as p}from"./query-assigned-elements-16a58890.js";import{e as s}from"./property-1027a1df.js";var v=Object.defineProperty,h=Object.getOwnPropertyDescriptor,o=(l,r,a,i)=>{for(var e=i>1?void 0:i?h(r,a):r,n=l.length-1,c;n>=0;n--)(c=l[n])&&(e=(i?c(r,a,e):c(e))||e);return i&&e&&v(r,a,e),e};let t=class extends m{render(){return g`
            <div class="main container">
                <figure class="image">
                    <img src=${this.imageSrc} alt=${this.imageAlt} />
                </figure>
                <div class="content">
                    <slot name="decade"></slot>
                    <slot name="summary"></slot>
                    <slot name="description"></slot>
                </div>
            </div>
            <nav class="actions">
                <img class="wave" src="assets/brand/tri-color-wave.svg" />
                <div class="container">
                    <slot name="action"></slot>
                </div>
            </nav>
        `}};t.styles=d`
        :host {
            --spacing-block: 2rem;
            --spacing-inline: 1rem;
            --grid-columns: 1fr;

            --order-image: 2;
            --order-content: 1;

            --align-actions: start;
            --action-color: var(--color-brand-primary-dark);

            display: block;
        }

        @media screen and (min-width: 768px) {
            :host {
                --spacing-block: 4rem;
                --spacing-inline: 4rem;
                --grid-columns: 1fr 1fr;

                --order-image: 1;
                --order-content: 2;

                --align-actions: end;
                --action-color: var(--color-text-contrast);
            }

            :host([flipped]) {
                --order-image: 2;
                --order-content: 1;
                --align-actions: start;
                --action-color: var(--color-brand-primary-dark);
            }
        }

        .main {
            padding-block: var(--spacing-block);
        }

        .container {
            display: grid;
            padding-inline: var(--container-padding-inline);
            max-width: var(--container-max-width);
            grid-template-columns: var(--grid-columns);
            gap: var(--spacing-inline);
            place-items: center;
            place-content: center;

            margin-inline: auto;
        }

        .image {
            width: 100%;
            background-color: var(---color-gray-10);
            aspect-ratio: 1 / 1;
            order: var(--order-image);
        }

        .content {
            order: var(--order-content);
        }

        .image img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }

        ::slotted([slot="decade"]) {
            margin: unset;

            font-weight: 700;
            font-size: 34.7px;
            line-height: 52px;
        }

        ::slotted([slot="summary"]) {
            margin: 2rem 0 0 0;

            font-weight: 400;
            font-size: 34px;
            line-height: 43px;
        }

        ::slotted([slot="description"]) {
            margin: 2rem 0 0 0;

            font-weight: 400;
            font-size: 24px;
            line-height: 43px;
        }

        .actions {
            position: relative;

            height: 4.5rem;
        }

        .actions .wave {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            inset: 0 0 0 0;
        }

        .actions .container {
            height: inherit;
            display: flex;
            place-items: center;
            place-content: var(--align-actions);
            position: relative;
        }

        ::slotted([slot="action"]) {
            display: flex;
            color: var(--color-white);
            border: none;
            border-radius: 0.5rem;
            font-size: 1.25rem;
            cursor: pointer;

            color: var(--action-color);
        }

        ::slotted([slot="action"]):hover {
            background-color: var(--color-primary-dark);
        }
    `;o([s({type:String,attribute:"image-src"})],t.prototype,"imageSrc",2);o([s({type:String,attribute:"image-alt"})],t.prototype,"imageAlt",2);o([s({type:Boolean})],t.prototype,"flipped",2);t=o([p("dfci-decade-block")],t);
//# sourceMappingURL=dfci-decade-block-81b992e9.js.map
