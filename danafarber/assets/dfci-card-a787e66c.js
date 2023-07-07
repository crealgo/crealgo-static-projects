import{T as l,i as h,s as p,x as g}from"./lit-element-806e1931.js";import{e as v}from"./query-assigned-elements-16a58890.js";import{e as d}from"./property-1027a1df.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},m=n=>(...t)=>({_$litDirective$:n,values:t});class u{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,o){this._$Ct=t,this._$AM=r,this._$Ci=o}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=m(class extends u{constructor(n){var t;if(super(n),n.type!==f.ATTRIBUTE||n.name!=="class"||((t=n.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(t=>n[t]).join(" ")+" "}update(n,[t]){var r,o;if(this.it===void 0){this.it=new Set,n.strings!==void 0&&(this.nt=new Set(n.strings.join(" ").split(/\s/).filter(e=>e!=="")));for(const e in t)t[e]&&!(!((r=this.nt)===null||r===void 0)&&r.has(e))&&this.it.add(e);return this.render(t)}const a=n.element.classList;this.it.forEach(e=>{e in t||(a.remove(e),this.it.delete(e))});for(const e in t){const i=!!t[e];i===this.it.has(e)||!((o=this.nt)===null||o===void 0)&&o.has(e)||(i?(a.add(e),this.it.add(e)):(a.remove(e),this.it.delete(e)))}return l}});var y=Object.defineProperty,_=Object.getOwnPropertyDescriptor,s=(n,t,r,o)=>{for(var a=o>1?void 0:o?_(t,r):t,e=n.length-1,i;e>=0;e--)(i=n[e])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&y(t,r,a),a};let c=class extends p{constructor(){super(...arguments),this.padded=!1,this.variant="primary"}getContentClassList(){return x({content:!0,padded:this.padded})}render(){return g`
            <article>
                <slot name="image"></slot>
                <div class=${this.getContentClassList()}>
                    <slot name="heading"></slot>
                    <slot name="content"></slot>
                    <div class="actions">
                        <slot name="action"></slot>
                    </div>
                </div>
            </article>
        `}};c.styles=h`
        :host {
            --card-content-padding: 1.5rem 0;
            --card-content-spacing: 1.5rem;
            --card-actions-spacing: unset;

            --card-accent-color: var(--color-brand-primary);
            --card-content-color: var(--color-text-primary);

            --card-heading-font-weight: 700;
            --card-heading-font-size: 30px;
            --card-heading-line-height: 28px;

            --card-content-font-weight: 400;
            --card-content-font-size: 18px;
            --card-content-line-height: 28px;

            --card-action-font-size: 20px;
            --card-action-line-height: 31px;
        }

        :host([padded]) {
            --card-content-padding: 1.75rem 1rem;
        }

        :host([dark]) {
            --card-content-color: var(--color-text-contrast);
            --card-accent-color: var(--color-text-contrast);
        }

        :host([variant="secondary"]) {
            --card-accent-color: var(--color-brand-secondary);
        }

        :host([variant="tertiary"]) {
            --card-accent-color: var(--color-text-primary);
            --card-content-color: var(--color-text-secondary);
        }

        :host([size="small"]) {
            --card-content-spacing: 0.5rem;
            --card-actions-spacing: 0.25rem;

            --card-heading-font-size: 24px;
            --card-heading-line-height: 28px;

            --card-content-font-size: 18px;
            --card-content-line-height: 28px;

            --card-action-font-size: 18px;
            --card-action-line-height: 31px;
        }

        article {
            display: block;
        }

        .content {
            display: grid;
            gap: var(--card-content-spacing);
            padding: var(--card-content-padding);
        }

        ::slotted([slot="image"]) + .content {
            margin-top: 2.75rem;
        }

        ::slotted([slot="heading"]) {
            margin: unset;

            font-style: normal;
            font-weight: var(--card-heading-font-weight);
            font-size: var(--card-heading-font-size);
            line-height: var(--card-heading-line-height);
            color: var(--card-accent-color);
        }

        ::slotted([slot="content"]) {
            margin: unset;

            font-weight: var(--card-content-font-weight);
            font-size: var(--card-content-font-size);
            line-height: var(--card-content-line-height);
            color: var(--card-content-color);
        }

        ::slotted([slot="action"]) {
            font-style: normal;
            font-weight: 400;
            font-size: var(--card-action-font-size);
            line-height: var(--card-action-line-height);

            color: var(--card-content-color);

            &:hover {
                text-decoration: underline;
            }
        }

        .actions {
            margin-top: var(--card-actions-spacing);
        }
    `;s([d()],c.prototype,"padded",2);s([d({type:String,reflect:!0})],c.prototype,"variant",2);c=s([v("dfci-card")],c);
//# sourceMappingURL=dfci-card-a787e66c.js.map
