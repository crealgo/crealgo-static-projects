import{x as s,i as o}from"./lit-element-806e1931.js";import{f as a}from"./index-eadbd174.js";const d=o`
    section.articles {
        --articles-grid-template-areas: "heading" "main" "aside";
        --articles-grid-template-columns: 1fr;

        padding-block: var(--section-padding-block);
    }

    @media (min-width: 768px) {
        section.articles {
            --articles-grid-template-areas: "heading heading" "main aside";
            --articles-grid-template-columns: 1fr 390px;
        }
    }

    section.articles .container {
        display: grid;
        grid-template-columns: var(--articles-grid-template-columns);
        grid-template-areas: var(--articles-grid-template-areas);
        row-gap: 3rem;
        column-gap: 2rem;
    }

    section.articles .container .section-heading {
        grid-area: heading;
        margin: unset;
        text-align: center;

        font-weight: 700;
        font-size: 36px;
        line-height: 44px;

        color: var(--color-brand-primary);
    }

    section.articles .container main {
        grid-area: main;
    }
    section.articles .container aside {
        grid-area: aside;
    }

    dfci-card p[slot="content"] {
        line-clamp: 3;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`,p={title:"Organisms / Article Block",render(t){const e=t.cards.shift();return s`
            <style>
                ${d}
            </style>
            <section class="articles">
                <div class="container">
                    <h2 class="section-heading">
                        Advances in Patient Care and Research at Dana-Farber
                    </h2>
                    <main class="main-article">
                        <dfci-card variant="tertiary" size="small">
                            <dfci-image
                                slot="image"
                                orientation="landscape"
                                src="${e.image.src}"
                                alt="${e.image.alt}"
                            ></dfci-image>
                            <h3 slot="heading">${e.heading}</h3>
                            <p slot="sub-heading">${e.subHeading}</p>
                            <p slot="content">${e.content}</p>
                            <a slot="action">
                                Read More
                                <i class="icon bx bxs-right-arrow"> </i>
                            </a>
                        </dfci-card>
                    </main>
                    <aside class="more-articles">
                        ${t.cards.map(i=>s`
                                <dfci-card variant="tertiary" size="small">
                                    <dfci-image
                                        slot="image"
                                        orientation="landscape"
                                        src="${i.image.src}"
                                        alt="${i.image.alt}"
                                    ></dfci-image>
                                    <h3 slot="heading">${i.heading}</h3>
                                    <p slot="sub-heading">${i.subHeading}</p>
                                    <p slot="content">${i.content}</p>
                                    <a slot="action">
                                        Read More
                                        <i class="icon bx bxs-right-arrow"> </i>
                                    </a>
                                </dfci-card>
                            `)}
                    </aside>
                </div>
            </section>
        `}},r={args:{cards:[{image:{src:a.image.urlLoremFlickr(),alt:a.animal.cat()},heading:"2020's",content:a.lorem.paragraphs(5),padded:!1},...a.helpers.uniqueArray(()=>({image:{src:a.image.urlLoremFlickr(),alt:a.animal.cat()},heading:"2020's",content:a.lorem.lines(2),padded:!1}),4)]}};var n,c,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    cards: [{
      image: {
        src: faker.image.urlLoremFlickr(),
        alt: faker.animal.cat()
      },
      heading: "2020's",
      content: faker.lorem.paragraphs(5),
      padded: false
    }, ...faker.helpers.uniqueArray(() => ({
      image: {
        src: faker.image.urlLoremFlickr(),
        alt: faker.animal.cat()
      },
      heading: "2020's",
      content: faker.lorem.lines(2),
      padded: false
    }), 4)]
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const f=["Default"];export{r as Default,f as __namedExportsOrder,p as default};
//# sourceMappingURL=dfci-article-block.stories-90bc94e4.js.map
