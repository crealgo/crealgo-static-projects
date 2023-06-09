import{x as a}from"./lit-element-806e1931.js";import{f as i}from"./index-eadbd174.js";const u={title:"Organisms / History / Header Block",parameters:{layout:"fullscreen"},render(e){return a`
            <style>
                :root {
                    --header-block-spacing-block: 2rem;
                    --header-block-spacing-inline: 1rem;
                    --header-block-grid-columns: 1fr;

                    --header-block-order-image: 2;
                    --header-block-order-content: 1;

                    /* @media screen and (min-width: 375px) { */
                    @media screen and (min-width: 768px) {
                        --header-block-spacing-block: 4rem;
                        --header-block-spacing-inline: 4rem;
                        --header-block-grid-columns: 1fr 1fr;

                        --header-block-order-image: 1;
                        --header-block-order-content: 2;
                    }
                }

                .header-block {
                    width: 100%;
                    background-color: var(--color-brand-primary);
                    color: var(--color-brand-primary-contrast);

                    padding-block: var(--header-block-spacing-block);
                }

                .header-block .container {
                    display: grid;
                    grid-template-columns: var(--header-block-grid-columns);
                    gap: var(--header-block-spacing-inline);
                    place-items: center;
                    place-content: center;
                }

                .header-block .container .image {
                    width: 100%;
                    background-color: var(---color-gray-10);
                    aspect-ratio: 1 / 1;
                    order: var(--header-block-order-image);
                }

                .header-block .container .image img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }

                .header-block .container .content {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1rem;
                    order: var(--header-block-order-content);
                }

                .header-block .container .content .title {
                    margin: unset;

                    font-size: 2rem;
                    font-weight: 700;
                }

                .header-block .container .content .description {
                    margin: 1rem 0 0 0;

                    font-size: 1.25rem;
                    /* font-weight: 300; */
                    font-size: 1.125rem;
                    line-height: 2rem;
                }

                .header-block .container .content .actions {
                    margin-top: 1rem;
                    display: flex;
                    place-items: center;
                    place-content: end;
                }

                .header-block .container .content .actions .button-base {
                    display: flex;
                    color: var(--color-white);
                    border: none;
                    border-radius: 0.5rem;
                    font-size: 1.25rem;
                    cursor: pointer;
                }

                .header-block .container .content .actions .button-base:hover {
                    background-color: var(--color-primary-dark);
                }
            </style>

            <div class="header-block">
                <div class="container">
                    <figure class="image">
                        <img src=${e.image.src} alt=${e.image.alt} />
                    </figure>
                    <div class="content">
                        <h3 class="title">${e.title}</h3>
                        <p class="description">${e.slot}</p>
                        ${e.action?a` <div class="actions">
                                  <button class="button-base">
                                      ${e.action.label}
                                      <i class="icon bx bxs-right-arrow"></i>
                                  </button>
                              </div>`:""}
                    </div>
                </div>
            </div>
        `}},r={args:{image:{src:i.image.urlPicsumPhotos(),alt:i.animal.dog()},title:"Explore the Decades",slot:"Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh. Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh. Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh. Quis neque, eu et ipsum amet.Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh. Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh. Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh. Quis neque, eu et ipsum amet.",action:{label:"Explore Now",link:"explore-now"}}};var t,n,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    image: {
      src: faker.image.urlPicsumPhotos(),
      alt: faker.animal.dog()
    },
    title: "Explore the Decades",
    slot: "Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh. Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh. Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh. Quis neque, eu et ipsum amet.Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh. Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh. Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh. Quis neque, eu et ipsum amet.",
    action: {
      label: "Explore Now",
      link: "explore-now"
    }
  }
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const c=["Default"];export{r as Default,c as __namedExportsOrder,u as default};
//# sourceMappingURL=dfci-history-header-block.stories-47b9249b.js.map
