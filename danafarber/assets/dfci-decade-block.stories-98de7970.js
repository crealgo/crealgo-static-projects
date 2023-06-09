import{f as r}from"./index-eadbd174.js";import{x as s}from"./lit-element-806e1931.js";import"./dfci-decade-block-81b992e9.js";import"./query-assigned-elements-16a58890.js";import"./property-1027a1df.js";const h={title:"Organisms / Decade Block",render(e){return s`
            <dfci-decade-block
                image-src=${e.image.src}
                image-alt=${e.image.alt}
                ?flipped=${e.flipped}
            >
                <h3 slot="decade">${e.decade}</h3>
                <h4 slot="summary">${e.summary}</h4>
                <p slot="description">${e.description}</p>
                <a slot="action">
                    <i class="icon bx bxs-right-arrow"> </i>
                    ${e.action.label}
                </a>
            </dfci-decade-block>
        `}},a={args:{image:{src:r.image.urlPicsumPhotos(),alt:r.animal.dog()},flipped:!1,decade:"1950s",summary:"Advancing Cancer Care: Dana-Farber's Major Breakthroughs in the 1950s",description:"In the 1950s, Dana-Farber researchers continued to make strides in cancer treatment. In 1954, Farber and his team developed methotrexate, a chemotherapy drug that is still used to treat a variety of cancers today. In 1959, Dana-Farber researchers discovered the first genetic abnormality associated with cancer. The jimmy fund continued to grow, becoming the exclusive charity of the Boston Red Sox.",action:{label:"Explore Now",link:"explore-now"}}};var t,o,i;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    image: {
      src: faker.image.urlPicsumPhotos(),
      alt: faker.animal.dog()
    },
    flipped: false,
    decade: "1950s",
    summary: "Advancing Cancer Care: Dana-Farber's Major Breakthroughs in the 1950s",
    description: "In the 1950s, Dana-Farber researchers continued to make strides in cancer treatment. In 1954, Farber and his team developed methotrexate, a chemotherapy drug that is still used to treat a variety of cancers today. In 1959, Dana-Farber researchers discovered the first genetic abnormality associated with cancer. The jimmy fund continued to grow, becoming the exclusive charity of the Boston Red Sox.",
    action: {
      label: "Explore Now",
      link: "explore-now"
    }
  }
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const p=["Default"];export{a as Default,p as __namedExportsOrder,h as default};
//# sourceMappingURL=dfci-decade-block.stories-98de7970.js.map
