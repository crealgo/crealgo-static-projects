import{f as i}from"./index-eadbd174.js";import{x as a}from"./lit-element-806e1931.js";const o={title:"Pages / Research",parameters:{layout:"fullscreen"}},r={args:{impacts:i.helpers.uniqueArray(()=>({title:i.lorem.sentence(),description:i.lorem.paragraph(),image:i.image.urlPlaceholder({width:400,height:400})}),6),jimmyFundInfo:i.helpers.uniqueArray(()=>({title:i.lorem.sentence(),description:i.lorem.paragraph()}),4),panMassChallengeInfo:i.helpers.uniqueArray(()=>({title:i.lorem.sentence(),description:i.lorem.paragraph()}),3),articles:{general:i.helpers.uniqueArray(()=>({title:i.lorem.sentence(),description:i.lorem.paragraph(),image:i.image.urlPlaceholder({width:400,height:400})}),3),featured:i.helpers.uniqueArray(()=>({title:i.lorem.sentence(),description:i.lorem.paragraph(),image:i.image.urlPlaceholder({width:400,height:400})}),2)}},render:(n,c)=>a`
        <section id="impact-on-cancer">
            <h2>A Headline About Dana-Farber’s Impact on Cancer</h2>
            <div class="grid">
                ${n.impacts.map(e=>a`
                        <div class="card">
                            <div class="card__image">
                                <img
                                    src="${e.image}"
                                    alt="${e.title}"
                                />
                                <div class="card__title">${e.title}</div>
                                <div class="card__description">
                                    ${e.description}
                                </div>
                            </div>
                        </div>
                    `)}
            </div>
        </section>
        <section id="jimmy-fund">
            <h2>Jimmy Fund</h2>
            <img
                src="${i.image.urlPlaceholder({width:1200,height:400})}"
            />
            <div class="grid">
                <ol>
                    ${n.jimmyFundInfo.map(e=>a`
                            <li>
                                <h3>${e.title}</h3>
                                <p>${e.description}</p>
                            </li>
                        `)}
                </ol>
            </div>
        </section>
        <section id="pan-mass-challenge">
            <h2>Pan-Mass Challenge</h2>
            <img
                src="${i.image.urlPlaceholder({width:1200,height:400})}"
            />
            <div class="grid">
                <ol>
                    ${n.panMassChallengeInfo.map(e=>a`
                            <li>
                                <h3>${e.title}</h3>
                                <p>${e.description}</p>
                            </li>
                        `)}
                </ol>
            </div>
        </section>
        <section id="community-impact">
            <h2>A headline about DFCI Community Impact</h2>
            <div class="articles grid">
                ${n.articles.general.map(e=>a`
                        <div class="card">
                            <div class="card__image">
                                <img
                                    src="${e.image}"
                                    alt="${e.title}"
                                />
                                <div class="card__title">${e.title}</div>
                                <div class="card__description">
                                    ${e.description}
                                </div>
                            </div>
                        </div>
                    `)}
            </div>
            <div class="featured articles grid">
                ${n.articles.featured.map(e=>a`
                        <div class="card">
                            <div class="card__image">
                                <img
                                    src="${e.image}"
                                    alt="${e.title}"
                                />
                                <div class="card__title">${e.title}</div>
                                <div class="card__description">
                                    ${e.description}
                                </div>
                            </div>
                        </div>
                    `)}
            </div>
        </section>
    `};var t,l,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    impacts: faker.helpers.uniqueArray(() => ({
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      image: faker.image.urlPlaceholder({
        width: 400,
        height: 400
      })
    }), 6),
    jimmyFundInfo: faker.helpers.uniqueArray(() => ({
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph()
    }), 4),
    panMassChallengeInfo: faker.helpers.uniqueArray(() => ({
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph()
    }), 3),
    articles: {
      general: faker.helpers.uniqueArray(() => ({
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        image: faker.image.urlPlaceholder({
          width: 400,
          height: 400
        })
      }), 3),
      featured: faker.helpers.uniqueArray(() => ({
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        image: faker.image.urlPlaceholder({
          width: 400,
          height: 400
        })
      }), 2)
    }
  },
  render: (args, context) => html\`
        <section id="impact-on-cancer">
            <h2>A Headline About Dana-Farber’s Impact on Cancer</h2>
            <div class="grid">
                \${args.impacts.map(impact => html\`
                        <div class="card">
                            <div class="card__image">
                                <img
                                    src="\${impact.image}"
                                    alt="\${impact.title}"
                                />
                                <div class="card__title">\${impact.title}</div>
                                <div class="card__description">
                                    \${impact.description}
                                </div>
                            </div>
                        </div>
                    \`)}
            </div>
        </section>
        <section id="jimmy-fund">
            <h2>Jimmy Fund</h2>
            <img
                src="\${faker.image.urlPlaceholder({
    width: 1200,
    height: 400
  })}"
            />
            <div class="grid">
                <ol>
                    \${args.jimmyFundInfo.map(info => html\`
                            <li>
                                <h3>\${info.title}</h3>
                                <p>\${info.description}</p>
                            </li>
                        \`)}
                </ol>
            </div>
        </section>
        <section id="pan-mass-challenge">
            <h2>Pan-Mass Challenge</h2>
            <img
                src="\${faker.image.urlPlaceholder({
    width: 1200,
    height: 400
  })}"
            />
            <div class="grid">
                <ol>
                    \${args.panMassChallengeInfo.map(info => html\`
                            <li>
                                <h3>\${info.title}</h3>
                                <p>\${info.description}</p>
                            </li>
                        \`)}
                </ol>
            </div>
        </section>
        <section id="community-impact">
            <h2>A headline about DFCI Community Impact</h2>
            <div class="articles grid">
                \${args.articles.general.map(impact => html\`
                        <div class="card">
                            <div class="card__image">
                                <img
                                    src="\${impact.image}"
                                    alt="\${impact.title}"
                                />
                                <div class="card__title">\${impact.title}</div>
                                <div class="card__description">
                                    \${impact.description}
                                </div>
                            </div>
                        </div>
                    \`)}
            </div>
            <div class="featured articles grid">
                \${args.articles.featured.map(impact => html\`
                        <div class="card">
                            <div class="card__image">
                                <img
                                    src="\${impact.image}"
                                    alt="\${impact.title}"
                                />
                                <div class="card__title">\${impact.title}</div>
                                <div class="card__description">
                                    \${impact.description}
                                </div>
                            </div>
                        </div>
                    \`)}
            </div>
        </section>
    \`
}`,...(s=(l=r.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const p=["Default"];export{r as Default,p as __namedExportsOrder,o as default};
//# sourceMappingURL=impact.stories-71130d3f.js.map
