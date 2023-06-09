import{x as i}from"./lit-element-806e1931.js";import{f as a}from"./index-eadbd174.js";const n={title:"Organisms / Article Sidebar",render(c){return i`
            <style>
                aside.articles {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem;
                    max-width: 25rem;
                }
            </style>
            <aside class="articles">
                ${c.cards.map(e=>i`
                        <dfci-card variant="tertiary" size="small">
                            <dfci-image
                                slot="image"
                                orientation="landscape"
                                src="${e.image.src}"
                                alt="${e.image.alt}"
                            ></dfci-image>
                            <h3 slot="heading">${e.heading}</h3>
                            <p slot="content">${e.content}</p>
                            <a slot="action">
                                Read More
                                <i class="icon bx bxs-right-arrow"> </i>
                            </a>
                        </dfci-card>
                    `)}
            </aside>
        `}},r={args:{cards:a.helpers.uniqueArray(()=>({image:{src:a.image.urlLoremFlickr(),alt:a.animal.cat()},heading:"2020's",content:a.lorem.lines(2),padded:!1}),6)}};var s,t,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    cards: faker.helpers.uniqueArray(() => ({
      image: {
        src: faker.image.urlLoremFlickr(),
        alt: faker.animal.cat()
      },
      heading: "2020's",
      content: faker.lorem.lines(2),
      padded: false
    }), 6)
  }
}`,...(l=(t=r.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const m=["Default"];export{r as Default,m as __namedExportsOrder,n as default};
//# sourceMappingURL=dfci-article-sidebar.stories-27749527.js.map
