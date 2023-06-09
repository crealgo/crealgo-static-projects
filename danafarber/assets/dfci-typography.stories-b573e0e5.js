import{f as r}from"./index-eadbd174.js";import{x as d,s as g}from"./lit-element-806e1931.js";import{e as u}from"./query-assigned-elements-16a58890.js";var v=Object.defineProperty,h=Object.getOwnPropertyDescriptor,y=(o,a,i,t)=>{for(var e=t>1?void 0:t?h(a,i):a,s=o.length-1,l;s>=0;s--)(l=o[s])&&(e=(t?l(a,i,e):l(e))||e);return t&&e&&v(a,i,e),e};let m=class extends g{render(){return d`
            <article>
                <div class="image">
                    <slot name="image"></slot>
                </div>
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
            </article>
        `}};m=y([u("dfci-type")],m);const P={title:"Atoms / ⏳ Typography",render(o){return d` <dfci-type>Hello</dfci-type> `}},n={args:{variant:"primary",image:{src:r.image.urlLoremFlickr(),alt:r.animal.cat(),orientation:"portrait"},name:r.person.fullName(),dates:{involvement:"(2016 - Present)",life:"(Birth Year - Death Year)"},biography:r.lorem.paragraphs(),action:{label:"Read More",href:r.internet.url()}}};var p,c,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(c=n.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};const O=["Default"];export{n as Default,O as __namedExportsOrder,P as default};
//# sourceMappingURL=dfci-typography.stories-b573e0e5.js.map
