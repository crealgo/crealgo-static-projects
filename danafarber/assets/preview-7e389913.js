import"./dfci-card-a787e66c.js";import{s as c,x as p,i as w}from"./lit-element-806e1931.js";import{e as g}from"./query-assigned-elements-16a58890.js";import{e as n}from"./property-1027a1df.js";import"./dfci-page-header-9c4885ae.js";var _={iphone5:{name:"iPhone 5",styles:{height:"568px",width:"320px"},type:"mobile"},iphone6:{name:"iPhone 6",styles:{height:"667px",width:"375px"},type:"mobile"},iphone6p:{name:"iPhone 6 Plus",styles:{height:"736px",width:"414px"},type:"mobile"},iphone8p:{name:"iPhone 8 Plus",styles:{height:"736px",width:"414px"},type:"mobile"},iphonex:{name:"iPhone X",styles:{height:"812px",width:"375px"},type:"mobile"},iphonexr:{name:"iPhone XR",styles:{height:"896px",width:"414px"},type:"mobile"},iphonexsmax:{name:"iPhone XS Max",styles:{height:"896px",width:"414px"},type:"mobile"},iphonese2:{name:"iPhone SE (2nd generation)",styles:{height:"667px",width:"375px"},type:"mobile"},iphone12mini:{name:"iPhone 12 mini",styles:{height:"812px",width:"375px"},type:"mobile"},iphone12:{name:"iPhone 12",styles:{height:"844px",width:"390px"},type:"mobile"},iphone12promax:{name:"iPhone 12 Pro Max",styles:{height:"926px",width:"428px"},type:"mobile"},ipad:{name:"iPad",styles:{height:"1024px",width:"768px"},type:"tablet"},ipad10p:{name:"iPad Pro 10.5-in",styles:{height:"1112px",width:"834px"},type:"tablet"},ipad12p:{name:"iPad Pro 12.9-in",styles:{height:"1366px",width:"1024px"},type:"tablet"},galaxys5:{name:"Galaxy S5",styles:{height:"640px",width:"360px"},type:"mobile"},galaxys9:{name:"Galaxy S9",styles:{height:"740px",width:"360px"},type:"mobile"},nexus5x:{name:"Nexus 5X",styles:{height:"660px",width:"412px"},type:"mobile"},nexus6p:{name:"Nexus 6P",styles:{height:"732px",width:"412px"},type:"mobile"},pixel:{name:"Pixel",styles:{height:"960px",width:"540px"},type:"mobile"},pixelxl:{name:"Pixel XL",styles:{height:"1280px",width:"720px"},type:"mobile"}};const y={mdi:{size:24,viewbox:"0 0 24 24"},"simple-icons":{size:24,viewbox:"0 0 24 24"},default:{size:0,viewbox:"0 0 0 0"}};class C extends HTMLElement{static get observedAttributes(){return["type","path","size","viewbox","flip","rotate"]}get defaults(){return y[this.getAttribute("type")]||y.default}get size(){return this.getAttribute("size")||this.defaults.size}get viewbox(){return this.getAttribute("viewbox")||this.defaults.viewbox}get flip(){const t=(this.getAttribute("flip")||"").toLowerCase();return{x:["both","horizontal"].includes(t)?"-1":"1",y:["both","vertical"].includes(t)?"-1":"1"}}get rotate(){const t=this.getAttribute("rotate");return isNaN(t)?t:t+"deg"}constructor(...t){const s=super(...t);s.attachShadow({mode:"open"});const i=document.createElement("style"),e=document.createElementNS("http://www.w3.org/2000/svg","svg"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return i.textContent=`
			svg {
				transform: rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1)); 
			}

			path {
				fill: currentColor;
			}
		`,e.append(r),s.shadowRoot.append(i,e),s}connectedCallback(){const t=this.shadowRoot.querySelector("svg"),s=this.shadowRoot.querySelector("path");t.setAttribute("width",this.size),t.setAttribute("height",this.size),t.setAttribute("viewBox",this.viewbox),t.style.setProperty("--sx",this.flip.x),t.style.setProperty("--sy",this.flip.y),t.style.setProperty("--r",this.rotate),s.setAttribute("d",this.getAttribute("path"))}attributeChangedCallback(t,s,i){const e=this.shadowRoot.querySelector("svg"),r=this.shadowRoot.querySelector("path");switch(t){case"type":e.setAttribute("width",this.size),e.setAttribute("height",this.size),e.setAttribute("viewBox",this.viewbox);break;case"path":r.setAttribute("d",i);break;case"size":e.setAttribute("width",this.size),e.setAttribute("height",this.size);break;case"viewbox":e.setAttribute("viewBox",this.viewbox);break;case"flip":e.style.setProperty("--sx",this.flip.x),e.style.setProperty("--sy",this.flip.y);break;case"rotate":e.style.setProperty("--r",this.rotate);break}}}customElements.define("svg-icon",C);var O=Object.defineProperty,A=Object.getOwnPropertyDescriptor,$=(a,t,s,i)=>{for(var e=i>1?void 0:i?A(t,s):t,r=a.length-1,o;r>=0;r--)(o=a[r])&&(e=(i?o(t,s,e):o(e))||e);return i&&e&&O(t,s,e),e};let b=class extends c{render(){return p`
            <Host>
                <slot></slot>
            </Host>
        `}};b=$([g("dfci-card-content")],b);var D=Object.defineProperty,j=Object.getOwnPropertyDescriptor,z=(a,t,s,i)=>{for(var e=i>1?void 0:i?j(t,s):t,r=a.length-1,o;r>=0;r--)(o=a[r])&&(e=(i?o(t,s,e):o(e))||e);return i&&e&&D(t,s,e),e};let v=class extends c{render(){return p`
            <Host>
                <slot></slot>
            </Host>
        `}};v=z([g("dfci-card-title")],v);var S=Object.defineProperty,q=Object.getOwnPropertyDescriptor,x=(a,t,s,i)=>{for(var e=i>1?void 0:i?q(t,s):t,r=a.length-1,o;r>=0;r--)(o=a[r])&&(e=(i?o(t,s,e):o(e))||e);return i&&e&&S(t,s,e),e};let d=class extends c{constructor(){super(...arguments),this.name="Test Link",this.links=[]}render(){return p`
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
        `}};x([n()],d.prototype,"name",2);x([n({type:Array})],d.prototype,"links",2);d=x([g("dfci-header")],d);var T=Object.defineProperty,E=Object.getOwnPropertyDescriptor,u=(a,t,s,i)=>{for(var e=i>1?void 0:i?E(t,s):t,r=a.length-1,o;r>=0;r--)(o=a[r])&&(e=(i?o(t,s,e):o(e))||e);return i&&e&&T(t,s,e),e};let l=class extends c{constructor(){super(...arguments),this.orientation="square"}render(){return p`
            <figure>
                <img src=${this.src} alt=${this.alt} />
            </figure>
        `}};l.styles=w`
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
    `;u([n()],l.prototype,"orientation",2);u([n()],l.prototype,"src",2);u([n()],l.prototype,"alt",2);l=u([g("dfci-image")],l);var H=Object.defineProperty,M=Object.getOwnPropertyDescriptor,f=(a,t,s,i)=>{for(var e=i>1?void 0:i?M(t,s):t,r=a.length-1,o;r>=0;r--)(o=a[r])&&(e=(i?o(t,s,e):o(e))||e);return i&&e&&H(t,s,e),e};let h=class extends c{constructor(){super(...arguments),this.name="John Doe",this.job="CEO",this.company="Some Company",this.backgroundMotif=p`
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
    `}getText(){return[this.name,this.job,this.company].join(",")}render(){return p`
            <blockquote>
                ${this.backgroundMotif}
                <p>
                    <slot></slot>
                </p>
                <cite> ${this.getText()} </cite>
            </blockquote>
        `}};h.styles=w`
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
    `;f([n()],h.prototype,"name",2);f([n()],h.prototype,"job",2);f([n()],h.prototype,"company",2);h=f([g("dfci-quote-block")],h);var R=Object.defineProperty,I=Object.getOwnPropertyDescriptor,P=(a,t,s,i)=>{for(var e=i>1?void 0:i?I(t,s):t,r=a.length-1,o;r>=0;r--)(o=a[r])&&(e=(i?o(t,s,e):o(e))||e);return i&&e&&R(t,s,e),e};let m=class extends c{render(){return p`
            <div>
                This is your new component!
                <slot></slot>
            </div>
        `}};P([n({type:Boolean})],m.prototype,"padded",2);m=P([g("dfci-banner")],m);const Z={parameters:{options:{storySort:{order:["Pages","Templates","Organisms","Molecules","Atoms"]}},actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/date$/i}},viewport:{viewports:_},backgrounds:{values:[{name:"light",value:"var(--color-gray-10)"},{name:"dark",value:"var(--color-brand-primary)"}]}}};export{Z as default};
//# sourceMappingURL=preview-7e389913.js.map
