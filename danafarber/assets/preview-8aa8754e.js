import{T as A,i as x,s as c,x as l}from"./lit-element-806e1931.js";import{e as p}from"./query-assigned-elements-16a58890.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,o)}};function n(o){return(t,i)=>i!==void 0?((s,e,r)=>{e.constructor.createProperty(r,s)})(o,t,i):z(o,t)}var D={iphone5:{name:"iPhone 5",styles:{height:"568px",width:"320px"},type:"mobile"},iphone6:{name:"iPhone 6",styles:{height:"667px",width:"375px"},type:"mobile"},iphone6p:{name:"iPhone 6 Plus",styles:{height:"736px",width:"414px"},type:"mobile"},iphone8p:{name:"iPhone 8 Plus",styles:{height:"736px",width:"414px"},type:"mobile"},iphonex:{name:"iPhone X",styles:{height:"812px",width:"375px"},type:"mobile"},iphonexr:{name:"iPhone XR",styles:{height:"896px",width:"414px"},type:"mobile"},iphonexsmax:{name:"iPhone XS Max",styles:{height:"896px",width:"414px"},type:"mobile"},iphonese2:{name:"iPhone SE (2nd generation)",styles:{height:"667px",width:"375px"},type:"mobile"},iphone12mini:{name:"iPhone 12 mini",styles:{height:"812px",width:"375px"},type:"mobile"},iphone12:{name:"iPhone 12",styles:{height:"844px",width:"390px"},type:"mobile"},iphone12promax:{name:"iPhone 12 Pro Max",styles:{height:"926px",width:"428px"},type:"mobile"},ipad:{name:"iPad",styles:{height:"1024px",width:"768px"},type:"tablet"},ipad10p:{name:"iPad Pro 10.5-in",styles:{height:"1112px",width:"834px"},type:"tablet"},ipad12p:{name:"iPad Pro 12.9-in",styles:{height:"1366px",width:"1024px"},type:"tablet"},galaxys5:{name:"Galaxy S5",styles:{height:"640px",width:"360px"},type:"mobile"},galaxys9:{name:"Galaxy S9",styles:{height:"740px",width:"360px"},type:"mobile"},nexus5x:{name:"Nexus 5X",styles:{height:"660px",width:"412px"},type:"mobile"},nexus6p:{name:"Nexus 6P",styles:{height:"732px",width:"412px"},type:"mobile"},pixel:{name:"Pixel",styles:{height:"960px",width:"540px"},type:"mobile"},pixelxl:{name:"Pixel XL",styles:{height:"1280px",width:"720px"},type:"mobile"}};const _={mdi:{size:24,viewbox:"0 0 24 24"},"simple-icons":{size:24,viewbox:"0 0 24 24"},default:{size:0,viewbox:"0 0 0 0"}};class j extends HTMLElement{static get observedAttributes(){return["type","path","size","viewbox","flip","rotate"]}get defaults(){return _[this.getAttribute("type")]||_.default}get size(){return this.getAttribute("size")||this.defaults.size}get viewbox(){return this.getAttribute("viewbox")||this.defaults.viewbox}get flip(){const t=(this.getAttribute("flip")||"").toLowerCase();return{x:["both","horizontal"].includes(t)?"-1":"1",y:["both","vertical"].includes(t)?"-1":"1"}}get rotate(){const t=this.getAttribute("rotate");return isNaN(t)?t:t+"deg"}constructor(...t){const i=super(...t);i.attachShadow({mode:"open"});const s=document.createElement("style"),e=document.createElementNS("http://www.w3.org/2000/svg","svg"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return s.textContent=`
			svg {
				transform: rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1)); 
			}

			path {
				fill: currentColor;
			}
		`,e.append(r),i.shadowRoot.append(s,e),i}connectedCallback(){const t=this.shadowRoot.querySelector("svg"),i=this.shadowRoot.querySelector("path");t.setAttribute("width",this.size),t.setAttribute("height",this.size),t.setAttribute("viewBox",this.viewbox),t.style.setProperty("--sx",this.flip.x),t.style.setProperty("--sy",this.flip.y),t.style.setProperty("--r",this.rotate),i.setAttribute("d",this.getAttribute("path"))}attributeChangedCallback(t,i,s){const e=this.shadowRoot.querySelector("svg"),r=this.shadowRoot.querySelector("path");switch(t){case"type":e.setAttribute("width",this.size),e.setAttribute("height",this.size),e.setAttribute("viewBox",this.viewbox);break;case"path":r.setAttribute("d",s);break;case"size":e.setAttribute("width",this.size),e.setAttribute("height",this.size);break;case"viewbox":e.setAttribute("viewBox",this.viewbox);break;case"flip":e.style.setProperty("--sx",this.flip.x),e.style.setProperty("--sy",this.flip.y);break;case"rotate":e.style.setProperty("--r",this.rotate);break}}}customElements.define("svg-icon",j);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},T=o=>(...t)=>({_$litDirective$:o,values:t});class E{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,s){this._$Ct=t,this._$AM=i,this._$Ci=s}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=T(class extends E{constructor(o){var t;if(super(o),o.type!==S.ATTRIBUTE||o.name!=="class"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){var i,s;if(this.it===void 0){this.it=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!(!((i=this.nt)===null||i===void 0)&&i.has(r))&&this.it.add(r);return this.render(t)}const e=o.element.classList;this.it.forEach(r=>{r in t||(e.remove(r),this.it.delete(r))});for(const r in t){const a=!!t[r];a===this.it.has(r)||!((s=this.nt)===null||s===void 0)&&s.has(r)||(a?(e.add(r),this.it.add(r)):(e.remove(r),this.it.delete(r)))}return A}});var R=Object.defineProperty,M=Object.getOwnPropertyDescriptor,b=(o,t,i,s)=>{for(var e=s>1?void 0:s?M(t,i):t,r=o.length-1,a;r>=0;r--)(a=o[r])&&(e=(s?a(t,i,e):a(e))||e);return s&&e&&R(t,i,e),e};let g=class extends c{constructor(){super(...arguments),this.padded=!1,this.variant="primary"}getContentClassList(){return L({content:!0,padded:this.padded})}render(){return l`
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
        `}};g.styles=x`
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
    `;b([n()],g.prototype,"padded",2);b([n({type:String,reflect:!0})],g.prototype,"variant",2);g=b([p("dfci-card")],g);var I=Object.defineProperty,q=Object.getOwnPropertyDescriptor,B=(o,t,i,s)=>{for(var e=s>1?void 0:s?q(t,i):t,r=o.length-1,a;r>=0;r--)(a=o[r])&&(e=(s?a(t,i,e):a(e))||e);return s&&e&&I(t,i,e),e};let $=class extends c{render(){return l`
            <Host>
                <slot></slot>
            </Host>
        `}};$=B([p("dfci-card-content")],$);var H=Object.defineProperty,N=Object.getOwnPropertyDescriptor,U=(o,t,i,s)=>{for(var e=s>1?void 0:s?N(t,i):t,r=o.length-1,a;r>=0;r--)(a=o[r])&&(e=(s?a(t,i,e):a(e))||e);return s&&e&&H(t,i,e),e};let O=class extends c{render(){return l`
            <Host>
                <slot></slot>
            </Host>
        `}};O=U([p("dfci-card-title")],O);var V=Object.defineProperty,X=Object.getOwnPropertyDescriptor,w=(o,t,i,s)=>{for(var e=s>1?void 0:s?X(t,i):t,r=o.length-1,a;r>=0;r--)(a=o[r])&&(e=(s?a(t,i,e):a(e))||e);return s&&e&&V(t,i,e),e};let u=class extends c{constructor(){super(...arguments),this.name="Test Link",this.links=[]}render(){return l`
            <header>
                <a class="logo" href="/">
                    <img
                        src="/assets/dfci-logo.png"
                        alt="Dana-Farber Cancer Institute"
                    />
                </a>
                <slot name="links"></slot>
                <div class="extra">
                    <input name="search-bar" type="text" placeholder="Search" />
                </div>
            </header>
        `}};w([n()],u.prototype,"name",2);w([n({type:Array})],u.prototype,"links",2);u=w([p("dfci-header")],u);var Z=Object.defineProperty,G=Object.getOwnPropertyDescriptor,m=(o,t,i,s)=>{for(var e=s>1?void 0:s?G(t,i):t,r=o.length-1,a;r>=0;r--)(a=o[r])&&(e=(s?a(t,i,e):a(e))||e);return s&&e&&Z(t,i,e),e};let h=class extends c{constructor(){super(...arguments),this.orientation="square"}render(){return l`
            <figure>
                <img src=${this.src} alt=${this.alt} />
            </figure>
        `}};h.styles=x`
        :host figure {
            --image-aspect-ratio: 1/1;
        }

        :host([orientation="square"]) figure {
            --image-aspect-ratio: 1/1;
        }

        :host([orientation="portrait"]) figure {
            --image-aspect-ratio: 423 / 566;
        }

        :host([orientation="landscape"]) figure {
            --image-aspect-ratio: 384 / 216;
        }

        figure {
            margin: unset;
            padding: unset;
            display: flex;
            width: 100%;

            aspect-ratio: var(--image-aspect-ratio, 1/1);
        }

        figure img {
            display: flex;
            object-fit: cover;
            background-color: lightgrey;
            width: 100%;
            height: 100%;
        }
    `;m([n()],h.prototype,"orientation",2);m([n()],h.prototype,"src",2);m([n()],h.prototype,"alt",2);h=m([p("dfci-image")],h);var Y=Object.defineProperty,F=Object.getOwnPropertyDescriptor,P=(o,t,i,s)=>{for(var e=s>1?void 0:s?F(t,i):t,r=o.length-1,a;r>=0;r--)(a=o[r])&&(e=(s?a(t,i,e):a(e))||e);return s&&e&&Y(t,i,e),e};let f=class extends c{render(){return l`
            <figure>
                <img src=${this.imageSrc} alt=${this.imageAlt} />
            </figure>
            <h1 class="heading">
                <slot></slot>
            </h1>
        `}};P([n({type:String,attribute:"image-src"})],f.prototype,"imageSrc",2);P([n({type:String,attribute:"image-alt"})],f.prototype,"imageAlt",2);f=P([p("dfci-page-header")],f);var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,v=(o,t,i,s)=>{for(var e=s>1?void 0:s?K(t,i):t,r=o.length-1,a;r>=0;r--)(a=o[r])&&(e=(s?a(t,i,e):a(e))||e);return s&&e&&J(t,i,e),e};let d=class extends c{constructor(){super(...arguments),this.name="John Doe",this.job="CEO",this.company="Some Company",this.backgroundMotif=l`
        <figure>
            <svg
                width="447"
                height="386"
                view-box="0 0 447 386"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clip-path="url(#clip0_1_4615)">
                    <path
                        opacity="0.4"
                        d="M1.24609 274.669C1.24609 350.387 43.7538 384.926 94.2337 384.926C146.042 384.926 188.548 343.745 188.548 291.938C188.548 242.788 146.041 197.622 94.2337 197.622H70.3204C79.621 121.903 122.131 48.8416 192.531 20.9456V19.6173L183.236 1.01953C58.3677 48.8416 1.24609 172.382 1.24609 274.669ZM254.971 274.669C254.971 350.387 297.48 384.926 347.958 384.926C401.094 384.926 443.602 343.745 443.602 291.938C443.602 242.788 401.092 197.622 347.958 197.622H325.372C334.673 121.904 375.852 48.8428 446.258 20.9456V19.6173L436.958 1.01953C312.09 48.8416 254.971 172.382 254.971 274.669Z"
                        stroke="white"
                        stroke-width="2"
                    />
                </g>
                <defs>
                    <clip-path id="clip0_1_4615">
                        <rect
                            width="446.131"
                            height="385.169"
                            fill="white"
                            transform="translate(0.6875 0.316406)"
                        />
                    </clip-path>
                </defs>
            </svg>
        </figure>
    `}getText(){return[this.name,this.job,this.company].join(",")}render(){return l`
            <blockquote>
                ${this.backgroundMotif}
                <p>
                    <slot></slot>
                </p>
                <cite> ${this.getText()} </cite>
            </blockquote>
        `}};d.styles=x`
        blockquote {
            margin: unset;
            padding: unset;

            padding-block: 106px;
            padding-inline: 1rem;
            background: #00629b;
            position: relative;

            text-align: center;
            display: grid;
            grid-template-rows: 1fr;
            align-content: center;
            justify-items: center;
            gap: 1rem;
        }

        figure {
            margin: unset;
            padding: unset;
            opacity: 0.25;

            position: absolute;
            height: 70%;
            width: auto;
            top: 50%;
            transform: translateY(-50%);
            left: 20px;
        }

        svg {
            object-fit: contain;
            width: 100%;
            height: 100%;
        }

        p {
            max-width: 622px;
            margin-block: unset;
            margin-inline: auto;

            font-family: "Arial";
            font-style: normal;
            font-weight: 400;
            font-size: 28.4981px;
            line-height: 47px;
            /* or 166% */

            display: flex;
            align-items: center;
            text-align: center;

            color: #ffffff;
        }

        cite {
            font-family: "Arial";
            font-style: normal;
            font-weight: 400;
            font-size: 12.7491px;
            line-height: 21px;
            /* or 164% */

            color: #ffffff;
            display: flex;
            align-items: center;
            gap: 0.25rem;
            text-align: center;
        }
    `;v([n()],d.prototype,"name",2);v([n()],d.prototype,"job",2);v([n()],d.prototype,"company",2);d=v([p("dfci-quote-block")],d);var Q=Object.defineProperty,W=Object.getOwnPropertyDescriptor,C=(o,t,i,s)=>{for(var e=s>1?void 0:s?W(t,i):t,r=o.length-1,a;r>=0;r--)(a=o[r])&&(e=(s?a(t,i,e):a(e))||e);return s&&e&&Q(t,i,e),e};let y=class extends c{render(){return l`
            <div>
                This is your new component!
                <slot></slot>
            </div>
        `}};C([n({type:Boolean})],y.prototype,"padded",2);y=C([p("dfci-banner")],y);const et={parameters:{options:{storySort:{order:["Pages","Templates","Organisms","Molecules","Atoms"]}},actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/date$/i}},viewport:{viewports:D},backgrounds:{values:[{name:"light",value:"var(--color-gray-10)"},{name:"dark",value:"var(--color-brand-primary)"}]}}};export{et as default};
//# sourceMappingURL=preview-8aa8754e.js.map
