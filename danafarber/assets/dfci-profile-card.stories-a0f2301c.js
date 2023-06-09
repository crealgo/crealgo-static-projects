import{f as a}from"./index-eadbd174.js";import{x as g,s as f,i as h}from"./lit-element-806e1931.js";import{e as v}from"./query-assigned-elements-16a58890.js";var b=Object.defineProperty,u=Object.getOwnPropertyDescriptor,x=(e,r,o,n)=>{for(var t=n>1?void 0:n?u(r,o):r,l=e.length-1,s;l>=0;l--)(s=e[l])&&(t=(n?s(r,o,t):s(t))||t);return n&&t&&b(r,o,t),t};let c=class extends f{render(){return g`
            <article>
                <div class="image-box">
                    <slot name="image"></slot>
                </div>
                <div class="content-box">
                    <div class="content">
                        <hgroup>
                            <slot name="name"></slot>
                            <slot name="meta"></slot>
                        </hgroup>
                        <slot name="biography"></slot>
                    </div>
                    <div class="actions">
                        <slot name="action"></slot>
                    </div>
                </div>
            </article>
        `}};c.styles=h`
        :host {
            --card-content-spacing-md: 1.5rem;
            --card-content-spacing-sm: 1rem;

            --card-content-grid-template-columns: 1fr;

            --card-image-content-spacing: 32px;
            --card-image-aspect-ratio: 1 / 1;
        }

        @media screen and (min-width: 768px) {
            :host {
                --card-content-spacing-md: 2.375rem;
                --card-content-spacing-sm: 1rem;

                --card-content-grid-template-columns: 1fr 2fr;

                --card-image-content-spacing: 0;
                --card-image-aspect-ratio: 1 / 1.25;
            }
        }

        article {
            display: grid;
            grid-template-columns: var(--card-content-grid-template-columns);
            grid-template-rows: auto;
        }

        .image-box {
            display: flex;
            height: 100%;
            aspect-ratio: var(--card-image-aspect-ratio);
            background-color: lightgray;
        }

        ::slotted([slot="image"]) {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }

        .content-box {
            overflow: hidden;
            height: 100%;
            display: grid;
            grid-template-rows: 1fr auto;
        }

        .content-box .content {
            padding-block: var(--card-content-spacing-md);
            padding-inline: var(--card-content-spacing-md);
        }

        .actions {
            position: relative;
            padding-inline: var(--card-content-spacing-md);
            padding-block: var(--card-content-spacing-sm);

            display: flex;
            align-items: center;
            place-content: end;
        }

        .actions::before {
            z-index: -1;
            display: block;
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            transition: all 0.2s;
            background-color: var(--color-brand-primary);

            transform-origin: center 2rem;
        }

        .actions:hover::before {
            transform: scale(2) rotate(-2deg);
        }

        hgroup {
            margin-block-end: 1rem;
            display: grid;
            gap: 0.5rem;
        }

        ::slotted([slot="name"]) {
            margin: unset;

            font-size: 36px;
            font-weight: 700;
            line-height: 44px;
            letter-spacing: -0.02em;
        }

        ::slotted([slot="meta"]) {
            margin: unset;

            display: block;
            font-size: 24px;
            font-weight: 400;
            line-height: 28px;

            color: #737373;
        }

        ::slotted([slot="biography"]) {
            font-size: 18px;
            font-weight: 400;
            line-height: 28px;
        }

        ::slotted([slot="action"]) {
            font-size: 20px;
            font-weight: 400;
            line-height: 31px;
            letter-spacing: 0em;
            text-align: center;

            color: var(--color-brand-primary-contrast);
        }
    `;c=x([v("dfci-profile-card")],c);const k={title:"Molecules / Profile Card",render(e){return g`
            <dfci-profile-card>
                <img
                    slot="image"
                    src="${e.image.src}"
                    alt="${e.image.alt}"
                />
                <h3 slot="name">${e.name}</h3>
                <p slot="meta">${e.dates.involvement}</p>
                <p slot="meta">${e.dates.life}</p>
                <p slot="biography">${e.biography}</p>
                <a slot="action">
                    ${e.action.label}
                    <i class="icon bx bxs-right-arrow"></i>
                </a>
            </dfci-profile-card>
        `}},i={args:{variant:"primary",image:{src:a.image.urlLoremFlickr(),alt:a.animal.cat(),orientation:"portrait"},name:a.person.fullName(),dates:{involvement:"(2016 - Present)",life:"(Birth Year - Death Year)"},biography:a.lorem.paragraphs(),action:{label:"Read More",href:a.internet.url()}}};var d,m,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    // primary, secondary
    image: {
      src: faker.image.urlLoremFlickr(),
      alt: faker.animal.cat(),
      orientation: "portrait"
    },
    name: faker.person.fullName(),
    dates: {
      involvement: "(2016 - Present)",
      life: "(Birth Year - Death Year)"
    },
    biography: faker.lorem.paragraphs(),
    action: {
      label: "Read More",
      href: faker.internet.url()
    }
  }
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const _=["DfciProfileCard","Default"];export{i as Default,c as DfciProfileCard,_ as __namedExportsOrder,k as default};
//# sourceMappingURL=dfci-profile-card.stories-a0f2301c.js.map
