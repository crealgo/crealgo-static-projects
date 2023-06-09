import{x as p}from"./lit-element-806e1931.js";var l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},l.apply(this,arguments)};function k(a){return a.toLowerCase()}var O=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],A=/[^A-Z0-9]+/gi;function L(a,e){e===void 0&&(e={});for(var t=e.splitRegexp,n=t===void 0?O:t,r=e.stripRegexp,i=r===void 0?A:r,m=e.transform,v=m===void 0?k:m,b=e.delimiter,_=b===void 0?" ":b,s=h(h(a,n,"$1\0$2"),i,"\0"),u=0,d=s.length;s.charAt(u)==="\0";)u++;for(;s.charAt(d-1)==="\0";)d--;return s.slice(u,d).split("\0").map(v).join(_)}function h(a,e,t){return e instanceof RegExp?a.replace(e,t):e.reduce(function(n,r){return n.replace(r,t)},a)}function R(a,e){return e===void 0&&(e={}),L(a,l({delimiter:"."},e))}function $(a,e){return e===void 0&&(e={}),R(a,l({delimiter:"_"},e))}const c=(a,e)=>({name:a,href:`#${$(a)}`,current:!!e}),E={title:"Organisms / Header",render(a){var n;const e=r=>{const i=r.currentTarget.getAttribute("aria-expanded");r.currentTarget.setAttribute("aria-expanded",i==="true"?"false":"true")},t=(n=a.links)==null?void 0:n.map(r=>p`
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
        `}},o={args:{mobileOpen:!1,links:[c("History",!0),c("Research"),c("Impact"),c("About Us"),c("Back to Dana-Farber")]}};var f,g,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    mobileOpen: false,
    links: [createLinkObject("History", true), createLinkObject("Research"), createLinkObject("Impact"), createLinkObject("About Us"), createLinkObject("Back to Dana-Farber")]
  }
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const S=["Default"];export{o as Default,S as __namedExportsOrder,E as default};
//# sourceMappingURL=dfci-header.stories-60d943c7.js.map
