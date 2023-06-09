import{x as r,i as n}from"./lit-element-806e1931.js";import{f as l}from"./index-eadbd174.js";const i=n`
    hgroup.banner {
        position: relative;
        display: flex;
        place-items: center;
        place-content: center;
        min-height: 500px;

        background-color: #00629b;
    }

    hgroup.banner .adornment {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    hgroup.banner .title {
        position: relative;
        color: var(--color-text-contrast);
        font-weight: 700;
        font-size: 128.303px;
        line-height: 135px;
        letter-spacing: -0.0675em;
    }
`,m={title:"Molecules / Banner",decorators:[t=>r`<div style="">${t()}</div>`],render(t){return r`
            <style>
                ${i}
            </style>
            <hgroup class="banner">
                <svg
                    class="adornment"
                    viewBox="0 0 1439 395"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1439 0H0V394.117C589.746 293.017 1281.06 252.173 1439 252.001V0Z"
                        fill="#003354"
                    />
                </svg>
                <h1 class="title">${t.slot}</h1>
            </hgroup>
        `}},e={args:{image:l.image.urlPicsumPhotos(),slot:"Impact"}};var o,s,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    image: faker.image.urlPicsumPhotos(),
    slot: "Impact"
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,m as default};
//# sourceMappingURL=dfci-banner.stories-e507b7a4.js.map
