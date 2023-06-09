import{x as n,A as i}from"./lit-element-806e1931.js";import{f as e}from"./index-eadbd174.js";const f={title:"Molecules / Card",parameters:{layout:"fullscreen"},decorators:[(a,t)=>{const s=["width: 100%","display: block","padding: 1rem",t.args.dark?"background-color: var(--color-brand-primary-dark)":""],c=[`max-width: ${t.args.size==="small"?300:400}px`];return n` <div style=${s.join(";")}>
                <div style=${c.join()}>${a()}</div>
            </div>`}],render:a=>n`
        <dfci-card
            variant=${a.variant==="default"?i:a.variant}
            size=${a.size==="default"?i:a.size}
            ?dark=${a.dark}
            ?padded=${a.padded}
        >
            <dfci-image
                slot="image"
                orientation="${a.image.orientation}"
                src="${a.image.src}"
                alt="${a.image.alt}"
            ></dfci-image>
            <h3 slot="heading">${a.heading}</h3>
            <p slot="content">${a.content}</p>
            <a slot="action">
                Explore Now
                <i class="icon bx bxs-right-arrow"> </i>
            </a>
        </dfci-card>
    `},r={argTypes:{variant:{control:{type:"radio"},options:["default","primary","secondary","tertiary"]},size:{control:{type:"radio"},options:["default","small","medium","large"]}},args:{image:{src:e.image.urlLoremFlickr(),alt:e.animal.cat()},heading:e.science.chemicalElement().name,content:e.lorem.paragraph(),variant:"default",size:"default",dark:!1,padded:!1}};var o,d,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        type: "radio"
      },
      options: ["default", "primary", "secondary", "tertiary"]
    },
    size: {
      control: {
        type: "radio"
      },
      options: ["default", "small", "medium", "large"]
    }
  },
  args: {
    image: {
      src: faker.image.urlLoremFlickr(),
      alt: faker.animal.cat()
    },
    heading: faker.science.chemicalElement().name,
    content: faker.lorem.paragraph(),
    variant: "default",
    size: "default",
    dark: false,
    padded: false
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const u=["Default"];export{r as Default,u as __namedExportsOrder,f as default};
//# sourceMappingURL=dfci-card.stories-c4f9b246.js.map
