import{s as g,x as p,T as v,i as m}from"./lit-element-806e1931.js";import{e as f}from"./query-assigned-elements-16a58890.js";import{e as d}from"./property-1027a1df.js";var u=Object.defineProperty,y=Object.getOwnPropertyDescriptor,l=(r,t,n,a)=>{for(var i=a>1?void 0:a?y(t,n):t,e=r.length-1,o;e>=0;e--)(o=r[e])&&(i=(a?o(t,n,i):o(i))||i);return a&&i&&u(t,n,i),i};let c=class extends g{render(){return p`
            <style>
                .page-header {
                    position: relative;
                    min-height: 400px;
                }

                .page-header .swoosh {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                }

                .page-header figure {
                    margin: 0;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: flex;

                    overflow: hidden;
                }

                .page-header figure img {
                    width: 100%;
                    height: 100%;
                    transform: scale(1.1);
                    object-fit: cover;
                    display: flex;
                }

                ::slotted([slot="heading"]) {
                    position: absolute;
                    bottom: 1rem;
                    width: 100%;
                    margin: unset;

                    font-family: "Arial";
                    font-weight: 700;
                    font-size: 8rem;
                    text-align: center;
                    line-height: 105%;
                    display: block;
                    align-items: center;

                    color: #ffffff;
                }
            </style>
            <hgroup class="page-header">
                <figure>
                    <img src=${this.imageSrc} alt=${this.imageAlt} />
                </figure>
                <svg
                    class="swoosh"
                    viewBox="0 0 1440 145"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 145C591 41.5209 1284 0 1440 0V145H0Z"
                        fill="#00629B"
                    />
                </svg>

                <slot name="heading"></slot>
            </hgroup>
        `}};l([d({type:String,attribute:"image-src"})],c.prototype,"imageSrc",2);l([d({type:String,attribute:"image-alt"})],c.prototype,"imageAlt",2);c=l([f("dfci-page-header")],c);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},w=r=>(...t)=>({_$litDirective$:r,values:t});class _{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,a){this._$Ct=t,this._$AM=n,this._$Ci=a}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=w(class extends _{constructor(r){var t;if(super(r),r.type!==x.ATTRIBUTE||r.name!=="class"||((t=r.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){var n,a;if(this.it===void 0){this.it=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(e=>e!=="")));for(const e in t)t[e]&&!(!((n=this.nt)===null||n===void 0)&&n.has(e))&&this.it.add(e);return this.render(t)}const i=r.element.classList;this.it.forEach(e=>{e in t||(i.remove(e),this.it.delete(e))});for(const e in t){const o=!!t[e];o===this.it.has(e)||!((a=this.nt)===null||a===void 0)&&a.has(e)||(o?(i.add(e),this.it.add(e)):(i.remove(e),this.it.delete(e)))}return v}});var $=Object.defineProperty,z=Object.getOwnPropertyDescriptor,h=(r,t,n,a)=>{for(var i=a>1?void 0:a?z(t,n):t,e=r.length-1,o;e>=0;e--)(o=r[e])&&(i=(a?o(t,n,i):o(i))||i);return a&&i&&$(t,n,i),i};let s=class extends g{constructor(){super(...arguments),this.padded=!1,this.variant="primary"}getContentClassList(){return b({content:!0,padded:this.padded})}render(){return p`
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
        `}};s.styles=m`
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
    `;h([d()],s.prototype,"padded",2);h([d({type:String,reflect:!0})],s.prototype,"variant",2);s=h([f("dfci-card")],s);
//# sourceMappingURL=dfci-card-63d6e92e.js.map
