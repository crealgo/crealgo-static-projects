import{x as p}from"./lit-element-806e1931.js";var l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},l.apply(this,arguments)};function O(a){return a.toLowerCase()}var k=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],A=/[^A-Z0-9]+/gi;function j(a,e){e===void 0&&(e={});for(var t=e.splitRegexp,n=t===void 0?k:t,r=e.stripRegexp,i=r===void 0?A:r,b=e.transform,x=b===void 0?O:b,m=e.delimiter,_=m===void 0?" ":m,o=f(f(a,n,"$1\0$2"),i,"\0"),u=0,d=o.length;o.charAt(u)==="\0";)u++;for(;o.charAt(d-1)==="\0";)d--;return o.slice(u,d).split("\0").map(x).join(_)}function f(a,e,t){return e instanceof RegExp?a.replace(e,t):e.reduce(function(n,r){return n.replace(r,t)},a)}function S(a,e){return e===void 0&&(e={}),j(a,l({delimiter:"."},e))}function y(a,e){return e===void 0&&(e={}),S(a,l({delimiter:"_"},e))}const c=(a,e)=>({name:a,href:`#${y(a)}`,current:!!e}),L={title:"Organisms / Header",render(a){var n;const e=r=>{const i=r.currentTarget.getAttribute("aria-expanded");r.currentTarget.setAttribute("aria-expanded",i==="true"?"false":"true")},t=(n=a.links)==null?void 0:n.map(r=>p`
                <li role="presentation">
                    <a
                        role="menuitem"
                        href="${r.href}"
                        aria-current="${r.current?"page":"false"}"
                    >
                        ${r.name}
                    </a>
                </li>
            `);return p`
            <header>
                <div class="container">
                    <a class="visually-hidden" href="#main-content">
                        Skip To main content
                    </a>
                    <a href="" class="logo">
                        <img />
                    </a>
                    <button
                        id="menu-button"
                        class="button-icon"
                        aria-expanded="${a.mobileOpen}"
                        aria-haspopup="true"
                        aria-controls="main-menu"
                        @click="${e}"
                        data-controller
                    >
                        <i class="open icon bx  bx-menu"></i>
                        <i class="close icon bx  bx-x"></i>
                    </button>
                    <nav id="main-menu" data-controlled aria-label="Main Menu">
                        <ul role="menubar">
                            ${t}
                            <li role="presentation" class="search-box">
                                <button
                                    role="menuitem"
                                    id="search-button"
                                    class="button-icon with-mobile-text"
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    aria-controls="search-bar"
                                    @click="${e}"
                                    data-controller
                                >
                                    <span class="text">Search</span>
                                    <i class="icon bx  bx-search"></i>
                                </button>
                                <div id="search-bar" data-controlled>
                                    <div
                                        class="control"
                                        aria-label="Search the page"
                                    >
                                        <i class="icon bx  bx-search"></i>
                                        <input
                                            placeholder="Search"
                                            aria-label="Search"
                                            name="page-search"
                                            type="text"
                                        />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main id="main-content"></main>
        `}},s={args:{mobileOpen:!1,links:[c("History",!0),c("Research"),c("Impact"),c("About Us"),c("Back to Dana-Farber")]}};var h,g,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    mobileOpen: false,
    links: [createLinkObject("History", true), createLinkObject("Research"), createLinkObject("Impact"), createLinkObject("About Us"), createLinkObject("Back to Dana-Farber")]
  }
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const R=["Default"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:s,__namedExportsOrder:R,default:L},Symbol.toStringTag,{value:"Module"}));export{s as D,L as H,l as _,E as a,S as d};
//# sourceMappingURL=dfci-header.stories-451684b9.js.map
