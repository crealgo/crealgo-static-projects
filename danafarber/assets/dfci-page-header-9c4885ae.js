import{s as p,x as h}from"./lit-element-806e1931.js";import{e as n}from"./query-assigned-elements-16a58890.js";import{e as f}from"./property-1027a1df.js";var m=Object.defineProperty,d=Object.getOwnPropertyDescriptor,l=(g,t,o,i)=>{for(var e=i>1?void 0:i?d(t,o):t,a=g.length-1,s;a>=0;a--)(s=g[a])&&(e=(i?s(t,o,e):s(e))||e);return i&&e&&m(t,o,e),e};let r=class extends p{render(){return h`
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
        `}};l([f({type:String,attribute:"image-src"})],r.prototype,"imageSrc",2);l([f({type:String,attribute:"image-alt"})],r.prototype,"imageAlt",2);r=l([n("dfci-page-header")],r);
//# sourceMappingURL=dfci-page-header-9c4885ae.js.map
