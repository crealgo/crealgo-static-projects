import{x as s}from"./lit-element-806e1931.js";import{f as a}from"./index-eadbd174.js";/* empty css                         */const c={title:"Organisms / Article Feature",parameters:{layout:"fullscreen"},render(e){return s`
            <style>
                .farber-block {
                    --farber-block-spacing-block: 2rem;
                    --farber-block-spacing-inline: 1rem;
                    --farber-block-grid-columns: 1fr;

                    --farber-block-order-image: 2;
                    --farber-block-order-content: 1;

                    /* @media screen and (min-width: 375px) { */
                    @media screen and (min-width: 768px) {
                        --farber-block-spacing-block: 4rem;
                        --farber-block-spacing-inline: 4rem;
                        --farber-block-grid-columns: 1fr 1fr;

                        --farber-block-order-image: 1;
                        --farber-block-order-content: 2;
                    }
                }

                .farber-block {
                    isolation: isolate;
                    position: relative;
                    width: 100%;
                    background-color: var(--color-brand-primary);
                    color: var(--color-brand-primary-contrast);

                    padding-block: var(--farber-block-spacing-block);
                }

                .farber-block .adornment {
                    position: absolute;
                    z-index: -1;
                    width: 100%;
                    top: 0;
                    left: 0;
                    fill: var(--color-brand-primary-dark);
                }

                .farber-block .container {
                    display: grid;
                    grid-template-columns: var(--farber-block-grid-columns);
                    gap: var(--farber-block-spacing-inline);
                    place-items: center;
                    place-content: center;
                }

                .farber-block .container .image {
                    margin: unset;

                    width: 100%;
                    background-color: var(---color-gray-10);
                    aspect-ratio: 1 / 1;
                    order: var(--farber-block-order-image);
                }

                .farber-block .container .image img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }

                .farber-block .container .content {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1rem;
                    order: var(--farber-block-order-content);
                }

                .farber-block .container .content .title {
                    margin: unset;

                    font-size: 2rem;
                    font-weight: 700;

                    padding-block-end: 0.25rem;
                    border-bottom: dotted 2px var(--color-brand-secondary);
                }

                .farber-block .container .content .description {
                    margin: 1rem 0 0 0;

                    font-size: 1.25rem;
                    font-size: 1.125rem;
                    line-height: 2rem;
                }

                .farber-block .actions {
                    display: flex;
                    margin-top: 1rem;
                    place-items: center;
                    place-content: start;
                }

                .farber-block .actions .action {
                    cursor: pointer;
                    background-color: var(--color-brand-primary-dark);
                    color: var(--color-brand-primary-contrast);
                }
            </style>
            <div class="farber-block">
                <svg
                    class="adornment"
                    role="presentation"
                    viewBox="0 0 1440 276"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M1440 0H0V275.289C591 171 1284 129 1440 129V0Z" />
                </svg>

                <div class="container">
                    <figure class="image">
                        <img src=${e.image.src} alt=${e.image.alt} />
                    </figure>
                    <div class="content">
                        <h3 class="title">${e.title}</h3>
                        <p class="description">${e.slot}</p>
                        <div class="actions">
                            <button class="action button-base">
                                ${e.action.label}
                                <i class="icon bx bxs-right-arrow"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `}},r={args:{image:{src:a.image.urlPicsumPhotos(),alt:a.animal.dog()},title:"Who is Dr. Farber?",slot:"Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh. Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh. Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh. Quis neque, eu et ipsum amet.Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh. Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh. Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh. Quis neque, eu et ipsum amet.",action:{label:"Explore Now",link:"explore-now"}}};var i,t,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    image: {
      src: faker.image.urlPicsumPhotos(),
      alt: faker.animal.dog()
    },
    title: "Who is Dr. Farber?",
    slot: "Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh. Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh. Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh. Quis neque, eu et ipsum amet.Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh. Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh. Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh. Quis neque, eu et ipsum amet.",
    action: {
      label: "Explore Now",
      link: "explore-now"
    }
  }
}`,...(n=(t=r.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const b=["Default"];export{r as Default,b as __namedExportsOrder,c as default};
//# sourceMappingURL=dfci-article-feature.stories-d52ba12b.js.map
