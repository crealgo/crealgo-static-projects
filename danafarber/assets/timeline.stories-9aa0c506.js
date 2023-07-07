import{f as t}from"./index-eadbd174.js";import{x as i}from"./lit-element-806e1931.js";import"./dfci-page-header-9c4885ae.js";import y,{Default as b}from"./dfci-footer.stories-9dc5621f.js";import{d as $,_ as F,H as S,D as x}from"./dfci-header.stories-451684b9.js";import D from"./dfci-history-header-block.stories-47b9249b.js";import"./query-assigned-elements-16a58890.js";import"./property-1027a1df.js";/* empty css                         */function w(n,r){return r===void 0&&(r={}),$(n,F({delimiter:"-"},r))}const H={title:"Pages / Timeline",parameters:{layout:"fullscreen"}},s={args:{page:{title:"Timeline",image:{src:t.image.urlPicsumPhotos(),alt:t.animal.dog()},summary:"Dana-Farber through the years",description:"When Sidney Farber, MD, founded the Children's Cancer Research Foundation in 1947, he gave a newfound sense of hope to young patients with cancer and their loved ones, and set the course for a mission dedicated to cancer research and care. Today, Dana-Farber Cancer Institute is a comprehensive cancer center treating patients of all ages. With a global reputation for excellence and cutting edge science, our unique combination of clinical treatment, bench-to-bedside research, and high-quality holistic patient care has made us one of our community’s most cherished organizations. We look boldly ahead to the future, filled with an enduring sense of hope as we continue the great promise of this organization — to reduce the burden of cancer for all. "},decades:t.helpers.uniqueArray(()=>{const n=t.date.soon().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"short",day:"numeric"});return{year:t.date.soon().getFullYear(),events:t.helpers.uniqueArray(()=>({title:t.lorem.sentence(),date:n,description:t.lorem.paragraph()}),t.number.int({min:3,max:8}))}},t.number.int({min:7,max:10})),filters:["All","2021","2020","2019","2018","DEI","Philanthropy","Buildings","People","Research","Education","Events","Awards"]},render(n,r){var d,c,u,h,m,f;const l=e=>{e.currentTarget.setAttribute("aria-expanded",(!0).toString())},o=()=>{const e=document.querySelector("#filter-control");e==null||e.setAttribute("aria-expanded",(!1).toString())};return i`
            ${(c=(d=S).render)==null?void 0:c.call(d,x.args??{},r)}
            <dfci-page-header
                image-src="assets/general/women-discussing.png"
                image-alt="Women Discussing"
            >
                <h1 slot="heading">${n.page.title}</h1>
            </dfci-page-header>
            ${(h=(u=D).render)==null?void 0:h.call(u,{image:n.page.image,title:n.page.summary,slot:n.page.description},r)}
            <section id="timeline">
                <div class="filters">
                    <fieldset class="fieldset">
                        <div class="title">Search. Filter.Sort.</div>
                        <input
                            class="input"
                            name="search"
                            type="search"
                            placeholder="Search for queries"
                        />
                        <input
                            id="filter-control"
                            class="input"
                            name="filter"
                            list="filter-list"
                            placeholder="Set Filters"
                            data-filter-control
                            aria-expanded="false"
                            @focus=${l}
                        />
                        <!-- ADD Decade Filter ../ -->
                        <input
                            id="filter-control"
                            class="input"
                            name="filter"
                            list="filter-list"
                            placeholder="Set Decades"
                            data-filter-control
                            aria-expanded="false"
                            @focus=${l}
                        />
                        <div
                            class="available-filters"
                            @blur=${o}
                            data-filter-box
                        >
                            <div class="container">
                                <fieldset style="width: 100%">
                                    <legend class="title" hidden>
                                        Available Filters
                                    </legend>
                                    <p class="instruction">
                                        Select a filter below:
                                        <button @click=${o}>
                                            Close [x]
                                        </button>
                                    </p>
                                    <div class="grid">
                                        ${n.filters.map(e=>{const a=w(e);return i`
                                                <label
                                                    class="filter"
                                                    for="${a}"
                                                >
                                                    ${e}
                                                    <input
                                                        id="${a}"
                                                        name="${a}"
                                                        type="checkbox"
                                                    />
                                                </label>
                                            `})}
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div class="decades">
                    <div class="container">
                        <div>
                            ${n.decades.map(e=>i`
                                    <div class="decade">
                                        <h3 class="year">
                                            ${e.year}
                                            <i class="icon bx bxs-down-arrow">
                                            </i>
                                        </h3>
                                        ${e.events.map(a=>i`
                                                <div class="event">
                                                    <h4 class="event__title">
                                                        ${a.title}
                                                    </h4>
                                                    <small class="event__date">
                                                        ${a.date}
                                                    </small>
                                                    <div
                                                        class="event__description"
                                                    >
                                                        ${a.description}
                                                    </div>
                                                </div>
                                            `)}
                                    </div>
                                `)}
                        </div>
                    </div>
                </div>
            </section>
            ${(f=(m=y).render)==null?void 0:f.call(m,b.args??{},r)}
        `}};var p,g,v;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    page: {
      title: "Timeline",
      image: {
        src: faker.image.urlPicsumPhotos(),
        alt: faker.animal.dog()
      },
      summary: "Dana-Farber through the years",
      description: "When Sidney Farber, MD, founded the Children's Cancer Research Foundation in 1947, he gave a newfound sense of hope to young patients with cancer and their loved ones, and set the course for a mission dedicated to cancer research and care. Today, Dana-Farber Cancer Institute is a comprehensive cancer center treating patients of all ages. With a global reputation for excellence and cutting edge science, our unique combination of clinical treatment, bench-to-bedside research, and high-quality holistic patient care has made us one of our community’s most cherished organizations. We look boldly ahead to the future, filled with an enduring sense of hope as we continue the great promise of this organization — to reduce the burden of cancer for all. "
    },
    decades: faker.helpers.uniqueArray(() => {
      const date = faker.date.soon().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric"
      });
      return {
        year: faker.date.soon().getFullYear(),
        events: faker.helpers.uniqueArray(() => ({
          title: faker.lorem.sentence(),
          date,
          description: faker.lorem.paragraph()
        }), faker.number.int({
          min: 3,
          max: 8
        }))
      };
    }, faker.number.int({
      min: 7,
      max: 10
    })),
    filters: ["All", "2021", "2020", "2019", "2018", "DEI", "Philanthropy", "Buildings", "People", "Research", "Education", "Events", "Awards"]
  },
  render(args, context) {
    // add click away

    const handleFilterOnFocus = event => {
      const el = event.currentTarget;
      el.setAttribute("aria-expanded", true.toString());
    };
    const handleFilterOnBlur = () => {
      const el = document.querySelector("#filter-control");
      el?.setAttribute("aria-expanded", false.toString());
    };

    // window.addEventListener("click", function (event) {
    //     if (
    //         !document
    //             .querySelector("[data-enable-click-away]")
    //             ?.contains(event.target)
    //     ) {
    //         // Clicked outside the box
    //         handleFilterOnBlur();
    //     }
    // });

    return html\`
            \${HeaderStory.render?.(HeaderDefaultStory.args ?? {}, context)}
            <dfci-page-header
                image-src="assets/general/women-discussing.png"
                image-alt="Women Discussing"
            >
                <h1 slot="heading">\${args.page.title}</h1>
            </dfci-page-header>
            \${HistoryHeaderStory.render?.({
      image: args.page.image,
      title: args.page.summary,
      slot: args.page.description
    }, context)}
            <section id="timeline">
                <div class="filters">
                    <fieldset class="fieldset">
                        <div class="title">Search. Filter.Sort.</div>
                        <input
                            class="input"
                            name="search"
                            type="search"
                            placeholder="Search for queries"
                        />
                        <input
                            id="filter-control"
                            class="input"
                            name="filter"
                            list="filter-list"
                            placeholder="Set Filters"
                            data-filter-control
                            aria-expanded="false"
                            @focus=\${handleFilterOnFocus}
                        />
                        <!-- ADD Decade Filter ../ -->
                        <input
                            id="filter-control"
                            class="input"
                            name="filter"
                            list="filter-list"
                            placeholder="Set Decades"
                            data-filter-control
                            aria-expanded="false"
                            @focus=\${handleFilterOnFocus}
                        />
                        <div
                            class="available-filters"
                            @blur=\${handleFilterOnBlur}
                            data-filter-box
                        >
                            <div class="container">
                                <fieldset style="width: 100%">
                                    <legend class="title" hidden>
                                        Available Filters
                                    </legend>
                                    <p class="instruction">
                                        Select a filter below:
                                        <button @click=\${handleFilterOnBlur}>
                                            Close [x]
                                        </button>
                                    </p>
                                    <div class="grid">
                                        \${args.filters.map(filter => {
      const generatedId = paramCase(filter);
      return html\`
                                                <label
                                                    class="filter"
                                                    for="\${generatedId}"
                                                >
                                                    \${filter}
                                                    <input
                                                        id="\${generatedId}"
                                                        name="\${generatedId}"
                                                        type="checkbox"
                                                    />
                                                </label>
                                            \`;
    })}
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div class="decades">
                    <div class="container">
                        <div>
                            \${args.decades.map(
    // TODO:make collapsable /decade
    // first one open
    // search triggers
    decade => html\`
                                    <div class="decade">
                                        <h3 class="year">
                                            \${decade.year}
                                            <i class="icon bx bxs-down-arrow">
                                            </i>
                                        </h3>
                                        \${decade.events.map(event => html\`
                                                <div class="event">
                                                    <h4 class="event__title">
                                                        \${event.title}
                                                    </h4>
                                                    <small class="event__date">
                                                        \${event.date}
                                                    </small>
                                                    <div
                                                        class="event__description"
                                                    >
                                                        \${event.description}
                                                    </div>
                                                </div>
                                            \`)}
                                    </div>
                                \`)}
                        </div>
                    </div>
                </div>
            </section>
            \${FooterStory.render?.(FooterDefaultStory.args ?? {}, context)}
        \`;
  }
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const T=["Default"];export{s as Default,T as __namedExportsOrder,H as default};
//# sourceMappingURL=timeline.stories-9aa0c506.js.map
