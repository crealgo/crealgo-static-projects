import{x as r}from"./lit-element-806e1931.js";import{f as a}from"./index-eadbd174.js";const l={title:"Organisms / Research / Header",parameters:{layout:"fullscreen"},render(c){return r`
            <style>
                .block {
                    --sub-category-columns: 1;
                    --sub-category-spacing: 1.5rem;
                }

                @media screen and (min-width: 768px) {
                    .block {
                        --sub-category-columns: 2;
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
                        minmax(0, 26rem)
                    );
                    gap: var(--sub-category-spacing);
                    place-content: space-around;
                }
            </style>
            <section class="block">
                <div class="container content">
                    ${c.cards.map(t=>r`
                            <dfci-card variant="secondary" dark>
                                <h3 slot="heading">${t.heading}</h3>
                                <p slot="content">${t.content}</p>
                                <a slot="action">
                                    Explore Now
                                    <i class="icon bx bxs-right-arrow"> </i>
                                </a>
                            </dfci-card>
                        `)}
                </div>
            </section>
        `}},e={args:{cards:[{image:{src:a.image.urlLoremFlickr(),alt:a.animal.cat(),orientation:"portrait"},heading:"What is the Jimmy Fund?",content:"Clinical trials are scientific studies in which new treatments – drugs, diagnostic procedures, and other therapies – are tested in patients to determine if they are safe and effective. Search ongoing clinical trials for cancer at Dana-Farber and affiliated institutions, and learn what it means to participate in a clinical trial.",padded:!1},{image:{src:a.image.urlLoremFlickr(),alt:a.animal.cat(),orientation:"portrait"},heading:"Reach of Dana-Farber",content:'At Dana-Farber, scientists are attacking cancer at every level: unraveling the most basic mechanisms in cells and tissues, discovering molecular targets for new "smart" drug therapies, harnessing the immune forces to combat cancer, and seeking to identify disparities in cancer incidence and treatment in diverse populations.',padded:!1}]}};var i,n,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    cards: [{
      image: {
        src: faker.image.urlLoremFlickr(),
        alt: faker.animal.cat(),
        orientation: "portrait"
      },
      heading: "What is the Jimmy Fund?",
      content: "Clinical trials are scientific studies in which new treatments – drugs, diagnostic procedures, and other therapies – are tested in patients to determine if they are safe and effective. Search ongoing clinical trials for cancer at Dana-Farber and affiliated institutions, and learn what it means to participate in a clinical trial.",
      padded: false
    }, {
      image: {
        src: faker.image.urlLoremFlickr(),
        alt: faker.animal.cat(),
        orientation: "portrait"
      },
      heading: "Reach of Dana-Farber",
      content: 'At Dana-Farber, scientists are attacking cancer at every level: unraveling the most basic mechanisms in cells and tissues, discovering molecular targets for new "smart" drug therapies, harnessing the immune forces to combat cancer, and seeking to identify disparities in cancer incidence and treatment in diverse populations.',
      padded: false
    }]
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const m=["Default"];export{e as Default,m as __namedExportsOrder,l as default};
//# sourceMappingURL=dfci-research-header.stories-4790e385.js.map
