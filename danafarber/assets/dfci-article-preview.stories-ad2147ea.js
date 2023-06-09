import{x as n}from"./lit-element-806e1931.js";import{f as e}from"./index-eadbd174.js";const u={title:"Organisms / Article Preview",parameters:{layout:"fullscreen"},render(c){return n`
            <style>
                .block {
                    --sub-category-columns: 1;
                    --sub-category-spacing: 1.5rem;
                }

                @media screen and (min-width: 768px) {
                    .block {
                        --sub-category-columns: 3;
                    }
                }

                .block {
                    width: 100%;
                    padding-block: var(--section-padding-block);
                    background-color: var(--color-brand-primary);
                    color: var(--color-brand-primary-contrast);
                }

                .block .content {
                    display: grid;
                    grid-template-columns: repeat(
                        var(--sub-category-columns),
                        1fr
                    );
                    gap: var(--sub-category-spacing);
                }
            </style>
            <section class="block">
                <div class="container content">
                    ${c.cards.map(a=>n`
                            <dfci-card variant="secondary" dark>
                                <dfci-image
                                    slot="image"
                                    orientation="landscape"
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
                        `)}
                </div>
            </section>
        `}},r={args:{cards:[{image:{src:e.image.urlLoremFlickr(),alt:e.animal.cat(),orientation:"portrait"},heading:"What is the Jimmy Fund?",content:"Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh.",padded:!1},{image:{src:e.image.urlLoremFlickr(),alt:e.animal.cat(),orientation:"portrait"},heading:"Reach of Dana-Farber",content:"Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh.",padded:!1},{image:{src:e.image.urlLoremFlickr(),alt:e.animal.cat(),orientation:"portrait"},heading:"Research Advances",content:"Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh.",padded:!1}]}};var t,i,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    cards: [{
      image: {
        src: faker.image.urlLoremFlickr(),
        alt: faker.animal.cat(),
        orientation: "portrait"
      },
      heading: "What is the Jimmy Fund?",
      content: "Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh.",
      padded: false
    }, {
      image: {
        src: faker.image.urlLoremFlickr(),
        alt: faker.animal.cat(),
        orientation: "portrait"
      },
      heading: "Reach of Dana-Farber",
      content: "Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh.",
      padded: false
    }, {
      image: {
        src: faker.image.urlLoremFlickr(),
        alt: faker.animal.cat(),
        orientation: "portrait"
      },
      heading: "Research Advances",
      content: "Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh.",
      padded: false
    }]
  }
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const m=["Default"];export{r as Default,m as __namedExportsOrder,u as default};
//# sourceMappingURL=dfci-article-preview.stories-ad2147ea.js.map
