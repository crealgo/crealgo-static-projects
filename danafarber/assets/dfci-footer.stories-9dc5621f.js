import{x as n}from"./lit-element-806e1931.js";/* empty css                         */const f={title:"Molecules / Footer",render(i){const o=i.links.map(e=>n`
                <li class="link-list-item">
                    <i class="icon bx bxs-right-arrow"></i>
                    <a class="link" href=${e.href}> ${e.name} </a>
                </li>
            `),l=i.socialLinks.map(e=>n`
                <li class="link-list-item">
                    <a class="link" href=${e.href}> </a>
                </li>
            `),c=i.copyrightLinks.map((e,h)=>n`
                <li class="link-list-item">
                    <a class="link" href=${e.href}>${e.name}</a>
                </li>
                ${h<i.copyrightLinks.length-1?n`
                          <li hidden style="display: inline-block;">
                              <!-- TEMP WORKAROUND A11Y -->
                              <span role="separator">|</span>
                          </li>
                      `:null}
            `);return n`
            <footer>
                <div class="promotion">
                    <svg
                        class="swoosh"
                        viewBox="0 0 1440 145"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1440 0H0V144.62C591 41.521 1284 0 1440 0Z"
                            fill="#FFFFFF"
                        />
                    </svg>
                    <div class="container content">
                        <div class="image">
                            <figure>
                                <img src="assets/promotional/defy-cancer.png" />
                            </figure>
                        </div>
                        <div class="text">
                            <p>
                                The Dana-Farber Campaign supports revolutionary
                                science, extraordinary care, and exceptional
                                expertise. Learn more about a few of the most
                                challenging areas the Institute is tackling
                                through stories of hope and inspiration about
                                three key campaign priorities: Immunotherapy;
                                Access to Care; and Prevention, Early Detection,
                                and Interception. Hear from Dana-Farber
                                President and CEO, Dr. Laurie H. Glimcher and
                                others about how your support can help Defy
                                Cancer.
                            </p>

                            <nav class="actions">
                                <a href="">
                                    <svg
                                        width="47"
                                        height="46"
                                        viewBox="0 0 47 46"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            x="2"
                                            y="2"
                                            width="43"
                                            height="42"
                                            stroke="black"
                                            stroke-width="4"
                                        />
                                        <path
                                            d="M12.2129 19.3682V18.1621H15.3281V21.0137C15.0254 21.3066 14.5859 21.5654 14.0098 21.79C13.4368 22.0114 12.8558 22.1221 12.2666 22.1221C11.5179 22.1221 10.8652 21.9658 10.3086 21.6533C9.75195 21.3376 9.33366 20.8883 9.05371 20.3057C8.77376 19.7197 8.63379 19.0833 8.63379 18.3965C8.63379 17.651 8.79004 16.9886 9.10254 16.4092C9.41504 15.8298 9.8724 15.3854 10.4746 15.0762C10.9336 14.8385 11.5049 14.7197 12.1885 14.7197C13.0771 14.7197 13.7705 14.9069 14.2686 15.2812C14.7699 15.6523 15.0921 16.1667 15.2354 16.8242L13.7998 17.0928C13.6989 16.7412 13.5085 16.4645 13.2285 16.2627C12.9518 16.0576 12.6051 15.9551 12.1885 15.9551C11.557 15.9551 11.054 16.1553 10.6797 16.5557C10.3086 16.9561 10.123 17.5501 10.123 18.3379C10.123 19.1875 10.3118 19.8255 10.6895 20.252C11.0671 20.6751 11.5618 20.8867 12.1738 20.8867C12.4766 20.8867 12.7793 20.8281 13.082 20.7109C13.388 20.5905 13.6501 20.4456 13.8682 20.2764V19.3682H12.2129ZM16.6221 22V14.8418H18.0674V22H16.6221ZM21.2754 22L18.7168 14.8418H20.2842L22.0957 20.1396L23.8486 14.8418H25.3818L22.8184 22H21.2754ZM26.1191 22V14.8418H31.4268V16.0527H27.5645V17.6396H31.1582V18.8457H27.5645V20.7939H31.5635V22H26.1191ZM10.0156 34V26.8418H11.4219L14.3516 31.6221V26.8418H15.6943V34H14.2441L11.3584 29.332V34H10.0156ZM16.9346 30.4648C16.9346 29.7357 17.0436 29.1237 17.2617 28.6289C17.4245 28.2643 17.6458 27.9372 17.9258 27.6475C18.209 27.3577 18.5182 27.1429 18.8535 27.0029C19.2995 26.8141 19.8138 26.7197 20.3965 26.7197C21.4512 26.7197 22.2943 27.0469 22.9258 27.7012C23.5605 28.3555 23.8779 29.2653 23.8779 30.4307C23.8779 31.5863 23.5638 32.4912 22.9355 33.1455C22.3073 33.7965 21.4674 34.1221 20.416 34.1221C19.3516 34.1221 18.5052 33.7982 17.877 33.1504C17.2487 32.4993 16.9346 31.6042 16.9346 30.4648ZM18.4238 30.416C18.4238 31.2266 18.611 31.8418 18.9854 32.2617C19.3597 32.6784 19.835 32.8867 20.4111 32.8867C20.9873 32.8867 21.4593 32.68 21.8271 32.2666C22.1982 31.8499 22.3838 31.2266 22.3838 30.3965C22.3838 29.5762 22.2031 28.9642 21.8418 28.5605C21.4837 28.1569 21.0068 27.9551 20.4111 27.9551C19.8154 27.9551 19.3353 28.1602 18.9707 28.5703C18.6061 28.9772 18.4238 29.5924 18.4238 30.416ZM26.0264 34L24.3174 26.8418H25.7969L26.876 31.7588L28.1846 26.8418H29.9033L31.1582 31.8418L32.2568 26.8418H33.7119L31.9736 34H30.4404L29.0146 28.6484L27.5938 34H26.0264Z"
                                            fill="black"
                                        />
                                    </svg>
                                </a>
                                <a href="">
                                    <svg
                                        width="47"
                                        height="46"
                                        viewBox="0 0 47 46"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5.85156 37.6709L7.25781 37.5342C7.34245 38.0062 7.51335 38.3529 7.77051 38.5742C8.03092 38.7956 8.38086 38.9062 8.82031 38.9062C9.28581 38.9062 9.63574 38.8086 9.87012 38.6133C10.1077 38.4147 10.2266 38.1836 10.2266 37.9199C10.2266 37.7507 10.1761 37.6074 10.0752 37.4902C9.97754 37.3698 9.80501 37.2656 9.55762 37.1777C9.38835 37.1191 9.0026 37.015 8.40039 36.8652C7.62565 36.6732 7.08203 36.4372 6.76953 36.1572C6.33008 35.7633 6.11035 35.2832 6.11035 34.7168C6.11035 34.3522 6.21289 34.012 6.41797 33.6963C6.6263 33.3773 6.92415 33.1348 7.31152 32.9688C7.70215 32.8027 8.17253 32.7197 8.72266 32.7197C9.62109 32.7197 10.2965 32.9167 10.749 33.3105C11.2048 33.7044 11.444 34.2301 11.4668 34.8877L10.0215 34.9512C9.95964 34.5833 9.82617 34.3197 9.62109 34.1602C9.41927 33.9974 9.11491 33.916 8.70801 33.916C8.28809 33.916 7.95931 34.0023 7.72168 34.1748C7.56868 34.2855 7.49219 34.4336 7.49219 34.6191C7.49219 34.7884 7.5638 34.9333 7.70703 35.0537C7.88932 35.2067 8.33203 35.3662 9.03516 35.5322C9.73828 35.6982 10.2575 35.8708 10.5928 36.0498C10.9313 36.2256 11.195 36.4681 11.3838 36.7773C11.5758 37.0833 11.6719 37.4626 11.6719 37.915C11.6719 38.3252 11.5579 38.7093 11.3301 39.0674C11.1022 39.4255 10.7799 39.6924 10.3633 39.8682C9.94661 40.0407 9.42741 40.127 8.80566 40.127C7.90072 40.127 7.20573 39.9186 6.7207 39.502C6.23568 39.082 5.94596 38.4717 5.85156 37.6709ZM12.8926 40V32.8418H14.3379V35.6592H17.1699V32.8418H18.6152V40H17.1699V36.8701H14.3379V40H12.8926ZM26.5693 40H24.9971L24.3721 38.374H21.5107L20.9199 40H19.3867L22.1748 32.8418H23.7031L26.5693 40ZM23.9082 37.168L22.9219 34.5117L21.9551 37.168H23.9082ZM27.3457 40V32.8418H30.3877C31.1527 32.8418 31.7077 32.9069 32.0527 33.0371C32.401 33.1641 32.6794 33.3919 32.8877 33.7207C33.096 34.0495 33.2002 34.4255 33.2002 34.8486C33.2002 35.3857 33.0423 35.8301 32.7266 36.1816C32.4108 36.5299 31.9388 36.7497 31.3105 36.8408C31.623 37.0231 31.8802 37.2233 32.082 37.4414C32.2871 37.6595 32.5622 38.0469 32.9072 38.6035L33.7812 40H32.0527L31.0078 38.4424C30.6367 37.8857 30.3828 37.5358 30.2461 37.3926C30.1094 37.2461 29.9645 37.1468 29.8115 37.0947C29.6585 37.0394 29.416 37.0117 29.084 37.0117H28.791V40H27.3457ZM28.791 35.8691H29.8604C30.5537 35.8691 30.9867 35.8398 31.1592 35.7812C31.3317 35.7227 31.4668 35.6217 31.5645 35.4785C31.6621 35.3353 31.7109 35.1562 31.7109 34.9414C31.7109 34.7005 31.6458 34.5068 31.5156 34.3604C31.3887 34.2106 31.208 34.1162 30.9736 34.0771C30.8564 34.0609 30.5049 34.0527 29.9189 34.0527H28.791V35.8691ZM34.5674 40V32.8418H39.875V34.0527H36.0127V35.6396H39.6064V36.8457H36.0127V38.7939H40.0117V40H34.5674Z"
                                            fill="#00629B"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M47 16V4V0H43H31V4H43V16H47ZM27 4H4V42H43V20H47V42V46H43H4H0V42V4V0H4H27V4Z"
                                            fill="#00629B"
                                        />
                                        <rect
                                            x="21"
                                            y="23.7656"
                                            width="32"
                                            height="4"
                                            transform="rotate(-45.351 21 23.7656)"
                                            fill="#00629B"
                                        />
                                    </svg>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
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
                                ${l}
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="copyright">
                    <div class="container content">
                        <div class="logo"></div>
                        <ul class="copyright-link-list">
                            ${c}
                        </ul>
                    </div>
                </div>
            </footer>
        `}},a={args:{promotion:{image:{src:"",alt:""},content:{title:""}},links:[{name:"Main Page",href:"main-page"},{name:"About Us",href:"about-us"},{name:"History",href:"history"},{name:"Resources",href:"resources"},{name:"Impact",href:"impact"},{name:"Current News",href:"current-news"},{name:"Filtered Topics",href:"filtered-topics"},{name:"Contact Us",href:"contact-us"}],socialLinks:[{name:"Facebook",href:"facebook"},{name:"Instagram",href:"instagram"},{name:"LinkedIn",href:"linkedin"},{name:"Twitter",href:"twitter"},{name:"YouTube",href:"youtube"}],copyrightLinks:[{name:"Privacy Policy",href:"privacy-policy"},{name:"Terms of Use",href:"terms-of-use"},{name:"Accessibility",href:"accessibility"},{name:"Sitemap",href:"sitemap"}]}};var t,s,r;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    promotion: {
      image: {
        src: "",
        alt: ""
      },
      content: {
        title: ""
        // actions: [

        // ]
      }
    },

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
}`,...(r=(s=a.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const d=["Default"];export{a as Default,d as __namedExportsOrder,f as default};
//# sourceMappingURL=dfci-footer.stories-9dc5621f.js.map
