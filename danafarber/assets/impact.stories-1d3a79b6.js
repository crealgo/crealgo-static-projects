import{f as e}from"./index-eadbd174.js";import{x as t}from"./lit-element-806e1931.js";import"./dfci-page-header-9c4885ae.js";import"./dfci-card-a787e66c.js";import f,{Default as $}from"./dfci-footer.stories-9dc5621f.js";import{H as v,D as y}from"./dfci-header.stories-5e271458.js";import k from"./dfci-history-header-block.stories-47b9249b.js";import"./query-assigned-elements-16a58890.js";import"./property-1027a1df.js";/* empty css                         */const j={title:"Pages / Impact",parameters:{layout:"fullscreen"}},s={args:{page:{title:"Impact",image:{src:e.image.urlPicsumPhotos(),alt:e.animal.dog()},summary:"Summary of Impact through the years",description:e.lorem.paragraph(15)},section:{impacts:{title:"A Headline About Dana-Farber’s Impact on Cancer",content:e.helpers.uniqueArray(()=>({title:e.lorem.sentence(),description:e.lorem.paragraph(),image:e.image.urlPlaceholder({width:400,height:400})}),6)},jimmyFund:{title:"Jimmy Fund",image:e.image.urlPlaceholder({width:802,height:510}),content:e.helpers.uniqueArray(()=>({title:e.lorem.sentence(),description:e.lorem.paragraph()}),4)},panMassChallenge:{title:"Pan Mass Challenge",image:e.image.urlPlaceholder({width:695,height:815}),content:e.helpers.uniqueArray(()=>({title:e.lorem.sentence(),description:e.lorem.paragraph(5)}),3)},articles:{general:e.helpers.uniqueArray(()=>({title:e.lorem.sentence(),content:e.lorem.paragraph(2),image:e.image.urlPlaceholder({width:400,height:400})}),3),featured:e.helpers.uniqueArray(()=>({title:e.lorem.sentence(),content:e.lorem.paragraph(2),image:e.image.urlPlaceholder({width:400,height:400})}),2)}}},render:({page:i,section:a},r)=>{var o,l,d,m,h,p;return t`
        ${(l=(o=v).render)==null?void 0:l.call(o,y.args??{},r)}
        <dfci-page-header
            image-src="assets/general/women-discussing.png"
            image-alt="Women Discussing"
        >
            <h1 slot="heading">${i.title}</h1>
        </dfci-page-header>
        ${(m=(d=k).render)==null?void 0:m.call(d,{image:i.image,title:i.summary,slot:i.description},r)}
        <section id="impact-on-cancer" class="section">
            <div class="section__container">
                <h2 class="section__title">${a.impacts.title}</h2>
                <div class="section__content">
                    ${a.impacts.content.map(n=>t`
                            <li class="card ">
                                <div class="card__image"></div>
                                <div class="card__title">${n.title}</div>
                                <div class="card__content">
                                    ${n.description}
                                </div>
                            </li>
                        `)}
                </div>
            </div>
        </section>
        <section id="jimmy-fund" class="section">
            <div class="section__container">
                <h2 class="section__title">${a.jimmyFund.title}</h2>
                <img class="section__image" src="${a.jimmyFund.image}" />
                <ol class="section__content">
                    ${a.jimmyFund.content.map((n,c)=>t`
                            <li class="card card--with-numbers">
                                <div class="card__number">${c+1}</div>
                                <div class="card__content">
                                    <h3 class="card__title">${n.title}</h3>
                                    <p>${n.description}</p>
                                </div>
                            </li>
                        `)}
                </ol>
            </div>
        </section>
        <section id="pan-mass-challenge" class="section">
            <div class="section__container">
                <h2 class="section__title">
                    ${a.panMassChallenge.title}
                </h2>
                <img
                    class="section__image"
                    src="${a.panMassChallenge.image}"
                />
                <ol class="section__content">
                    ${a.panMassChallenge.content.map((n,c)=>t`
                            <li class="card card--with-numbers" data-counter>
                                <div class="card__number" data-count>
                                    ${c+1}
                                </div>
                                <div class="card__content">
                                    <h3 class="card__title">${n.title}</h3>
                                    <p>${n.description}</p>
                                </div>
                            </li>
                        `)}
                </ol>
            </div>
        </section>
        <section id="community-impact" class="section">
            <div class="section__container">
                <h2 class="section__title">
                    A headline about DFCI Community Impact
                </h2>
                <div class="section__content">
                    ${a.articles.general.map(n=>t`
                            <dfci-card dark variant="secondary" size="small">
                                <dfci-image
                                    slot="image"
                                    variant="portrait"
                                    src=${e.image.urlPicsumPhotos()}
                                ></dfci-image>
                                <h3 slot="heading">${n.title}</h3>
                                <p slot="content">${n.content}</p>
                                <a slot="action">
                                    Explore Now
                                    <i class="icon bx bxs-right-arrow"> </i>
                                </a>
                            </dfci-card>
                        `)}
                    ${a.articles.featured.map(n=>t`
                            <dfci-card dark>
                                <dfci-image
                                    slot="image"
                                    variant="portrait"
                                    src=${e.image.urlPicsumPhotos()}
                                ></dfci-image>
                                <h3 slot="heading">${n.title}</h3>
                                <p slot="content">${n.content}</p>
                                <a slot="action">
                                    Explore Now
                                    <i class="icon bx bxs-right-arrow"> </i>
                                </a>
                            </dfci-card>
                        `)}
            </div>
        </section>
        ${(p=(h=f).render)==null?void 0:p.call(h,$.args??{},r)}
    `}};var g,u,_;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    page: {
      title: "Impact",
      image: {
        src: faker.image.urlPicsumPhotos(),
        alt: faker.animal.dog()
      },
      summary: "Summary of Impact through the years",
      description: faker.lorem.paragraph(15)
    },
    section: {
      impacts: {
        title: "A Headline About Dana-Farber’s Impact on Cancer",
        content: faker.helpers.uniqueArray(() => ({
          title: faker.lorem.sentence(),
          description: faker.lorem.paragraph(),
          image: faker.image.urlPlaceholder({
            width: 400,
            height: 400
          })
        }), 6)
      },
      jimmyFund: {
        title: "Jimmy Fund",
        image: faker.image.urlPlaceholder({
          width: 802,
          height: 510
        }),
        content: faker.helpers.uniqueArray(() => ({
          title: faker.lorem.sentence(),
          description: faker.lorem.paragraph()
        }), 4)
      },
      panMassChallenge: {
        title: "Pan Mass Challenge",
        image: faker.image.urlPlaceholder({
          width: 695,
          height: 815
        }),
        content: faker.helpers.uniqueArray(() => ({
          title: faker.lorem.sentence(),
          description: faker.lorem.paragraph(5)
        }), 3)
      },
      articles: {
        general: faker.helpers.uniqueArray(() => ({
          title: faker.lorem.sentence(),
          content: faker.lorem.paragraph(2),
          image: faker.image.urlPlaceholder({
            width: 400,
            height: 400
          })
        }), 3),
        featured: faker.helpers.uniqueArray(() => ({
          title: faker.lorem.sentence(),
          content: faker.lorem.paragraph(2),
          image: faker.image.urlPlaceholder({
            width: 400,
            height: 400
          })
        }), 2)
      }
    }
  },
  render: ({
    page,
    section
  }, context) => html\`
        \${HeaderStory.render?.(HeaderDefaultStory.args ?? {}, context)}
        <dfci-page-header
            image-src="assets/general/women-discussing.png"
            image-alt="Women Discussing"
        >
            <h1 slot="heading">\${page.title}</h1>
        </dfci-page-header>
        \${HistoryHeaderStory.render?.({
    image: page.image,
    title: page.summary,
    slot: page.description
  }, context)}
        <section id="impact-on-cancer" class="section">
            <div class="section__container">
                <h2 class="section__title">\${section.impacts.title}</h2>
                <div class="section__content">
                    \${section.impacts.content.map(impact => html\`
                            <li class="card ">
                                <div class="card__image"></div>
                                <div class="card__title">\${impact.title}</div>
                                <div class="card__content">
                                    \${impact.description}
                                </div>
                            </li>
                        \`)}
                </div>
            </div>
        </section>
        <section id="jimmy-fund" class="section">
            <div class="section__container">
                <h2 class="section__title">\${section.jimmyFund.title}</h2>
                <img class="section__image" src="\${section.jimmyFund.image}" />
                <ol class="section__content">
                    \${section.jimmyFund.content.map((info, infoIndex) => html\`
                            <li class="card card--with-numbers">
                                <div class="card__number">\${infoIndex + 1}</div>
                                <div class="card__content">
                                    <h3 class="card__title">\${info.title}</h3>
                                    <p>\${info.description}</p>
                                </div>
                            </li>
                        \`)}
                </ol>
            </div>
        </section>
        <section id="pan-mass-challenge" class="section">
            <div class="section__container">
                <h2 class="section__title">
                    \${section.panMassChallenge.title}
                </h2>
                <img
                    class="section__image"
                    src="\${section.panMassChallenge.image}"
                />
                <ol class="section__content">
                    \${section.panMassChallenge.content.map((info, infoIndex) => html\`
                            <li class="card card--with-numbers" data-counter>
                                <div class="card__number" data-count>
                                    \${infoIndex + 1}
                                </div>
                                <div class="card__content">
                                    <h3 class="card__title">\${info.title}</h3>
                                    <p>\${info.description}</p>
                                </div>
                            </li>
                        \`)}
                </ol>
            </div>
        </section>
        <section id="community-impact" class="section">
            <div class="section__container">
                <h2 class="section__title">
                    A headline about DFCI Community Impact
                </h2>
                <div class="section__content">
                    \${section.articles.general.map(impact => html\`
                            <dfci-card dark variant="secondary" size="small">
                                <dfci-image
                                    slot="image"
                                    variant="portrait"
                                    src=\${faker.image.urlPicsumPhotos()}
                                ></dfci-image>
                                <h3 slot="heading">\${impact.title}</h3>
                                <p slot="content">\${impact.content}</p>
                                <a slot="action">
                                    Explore Now
                                    <i class="icon bx bxs-right-arrow"> </i>
                                </a>
                            </dfci-card>
                        \`)}
                    \${section.articles.featured.map(impact => html\`
                            <dfci-card dark>
                                <dfci-image
                                    slot="image"
                                    variant="portrait"
                                    src=\${faker.image.urlPicsumPhotos()}
                                ></dfci-image>
                                <h3 slot="heading">\${impact.title}</h3>
                                <p slot="content">\${impact.content}</p>
                                <a slot="action">
                                    Explore Now
                                    <i class="icon bx bxs-right-arrow"> </i>
                                </a>
                            </dfci-card>
                        \`)}
            </div>
        </section>
        \${FooterStory.render?.(FooterDefaultStory.args ?? {}, context)}
    \`
}`,...(_=(u=s.parameters)==null?void 0:u.docs)==null?void 0:_.source}}};const q=["Default"];export{s as Default,q as __namedExportsOrder,j as default};
//# sourceMappingURL=impact.stories-1d3a79b6.js.map
