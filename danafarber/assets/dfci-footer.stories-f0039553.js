import{x as n}from"./lit-element-806e1931.js";/* empty css                         */const u={title:"Molecules / Footer",render(i){const o=i.links.map(e=>n`
                <li class="link-list-item">
                    <i class="icon bx bxs-right-arrow"></i>
                    <a class="link" href=${e.href}> ${e.name} </a>
                </li>
            `),c=i.socialLinks.map(e=>n`
                <li class="link-list-item">
                    <a class="link" href=${e.href}> </a>
                </li>
            `),l=i.copyrightLinks.map((e,m)=>n`
                <li class="link-list-item">
                    <a class="link" href=${e.href}>${e.name}</a>
                </li>
                ${m<i.copyrightLinks.length-1?n`
                          <li hidden style="display: inline-block;">
                              <!-- TEMP WORKAROUND A11Y -->
                              <span role="separator">|</span>
                          </li>
                      `:null}
            `);return n`
            <footer>
                <div class="wrapper">
                    <div class="container content">
                        <div class="main" aria-labelledby="footer-link-title">
                            <h6 class="nav-title" id="footer-link-title">
                                Go To
                            </h6>
                            <hr />
                            <ul class="link-list">
                                ${o}
                            </ul>
                        </div>
                        <div class="social">
                            <h6 class="nav-title">Stay in touch with us</h6>
                            <hr />
                            <button class="button-base social-cta">
                                Sign Up
                            </button>
                            <ul class="social-link-list">
                                ${c}
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="copyright">
                    <div class="container content">
                        <div class="logo"></div>
                        <ul class="copyright-link-list">
                            ${l}
                        </ul>
                    </div>
                </div>
            </footer>
        `}},a={args:{links:[{name:"Main Page",href:"main-page"},{name:"About Us",href:"about-us"},{name:"History",href:"history"},{name:"Resources",href:"resources"},{name:"Impact",href:"impact"},{name:"Current News",href:"current-news"},{name:"Filtered Topics",href:"filtered-topics"},{name:"Contact Us",href:"contact-us"}],socialLinks:[{name:"Facebook",href:"facebook"},{name:"Instagram",href:"instagram"},{name:"LinkedIn",href:"linkedin"},{name:"Twitter",href:"twitter"},{name:"YouTube",href:"youtube"}],copyrightLinks:[{name:"Privacy Policy",href:"privacy-policy"},{name:"Terms of Use",href:"terms-of-use"},{name:"Accessibility",href:"accessibility"},{name:"Sitemap",href:"sitemap"}]}};var s,t,r;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    links: [{
      name: "Main Page",
      href: "main-page"
    }, {
      name: "About Us",
      href: "about-us"
    }, {
      name: "History",
      href: "history"
    }, {
      name: "Resources",
      href: "resources"
    }, {
      name: "Impact",
      href: "impact"
    }, {
      name: "Current News",
      href: "current-news"
    }, {
      name: "Filtered Topics",
      href: "filtered-topics"
    }, {
      name: "Contact Us",
      href: "contact-us"
    }],
    socialLinks: [{
      name: "Facebook",
      href: "facebook"
    }, {
      name: "Instagram",
      href: "instagram"
    }, {
      name: "LinkedIn",
      href: "linkedin"
    }, {
      name: "Twitter",
      href: "twitter"
    }, {
      name: "YouTube",
      href: "youtube"
    }],
    copyrightLinks: [{
      name: "Privacy Policy",
      href: "privacy-policy"
    }, {
      name: "Terms of Use",
      href: "terms-of-use"
    }, {
      name: "Accessibility",
      href: "accessibility"
    }, {
      name: "Sitemap",
      href: "sitemap"
    }]
  }
}`,...(r=(t=a.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const p=["Default"];export{a as Default,p as __namedExportsOrder,u as default};
//# sourceMappingURL=dfci-footer.stories-f0039553.js.map
