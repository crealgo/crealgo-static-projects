import{c as s}from"./chance-6db3c92c.js";import{j as c}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{c as m}from"./clsx.m-1229b3e0.js";import{s as d}from"./styled-943e38cb.js";import"./chance-599dc973.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-570b25c1.js";import"./createTheme-952d4be4.js";import"./extends-98964cd2.js";import"./emotion-styled.browser.esm-7daedd15.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-38ea7bbc.js";const o=({theme:e,variant:r="primary"})=>{const a={primary:"var(--color-brand-primary-main)",secondary:"var(--color-brand-secondary-main)",grey:"var(--color-grey-300)"}[r];return{backgroundColor:a,color:e.palette.getContrastText(a)}},y=d("span")(({theme:e,variant:r="primary"})=>({...o({theme:e,variant:r}),paddingInline:"1rem",paddingBlock:"0.5rem",borderRadius:"4px",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:e.typography.body2.fontSize,fontWeight:500,letterSpacing:"-0.0125rem"})),n=({className:e,children:r,...a})=>c(y,{className:m(e,"Label-root"),...a,children:r});try{o.displayName="getLabelStyles",o.__docgenInfo={description:"",displayName:"getLabelStyles",props:{theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"Theme"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"grey"'}]}}}}}catch{}try{n.displayName="Label",n.__docgenInfo={description:"",displayName:"Label",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"grey"'}]}}}}}catch{}const w={component:n},t={argTypes:{variant:{control:{type:"select"},options:["primary","secondary","grey"],defaultValue:"primary"},children:{control:{type:"text"},defaultValue:s.word()}}};var l,p,i;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        type: 'select'
      },
      options: ['primary', 'secondary', 'grey'],
      defaultValue: 'primary'
    },
    children: {
      control: {
        type: 'text'
      },
      defaultValue: chance.word()
    }
  }
}`,...(i=(p=t.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const N=["Default"];export{t as Default,N as __namedExportsOrder,w as default};
//# sourceMappingURL=Label.stories-ef0753a1.js.map
