import{a as l,F as d,j as r}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{r as u}from"./index-570b25c1.js";import{g as B}from"./chance-cee71ec0.js";import{a as s,B as a}from"./BannerService-07f3006b.js";import{B as f}from"./Button-a6114443.js";import"./_commonjsHelpers-042e6b4d.js";import"./IconButton-59415dfd.js";import"./jsx-runtime_commonjs-proxy-526ce555.js";import"./createSvgIcon-0cd10119.js";import"./extends-98964cd2.js";import"./createTheme-0dc7dae6.js";import"./clsx.m-1229b3e0.js";import"./useThemeProps-4b422382.js";import"./styled-c5161996.js";import"./emotion-styled.browser.esm-7daedd15.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-38ea7bbc.js";import"./getThemeProps-6c786bf3.js";import"./useTheme-a01d1f5e.js";import"./ownerWindow-2150232e.js";import"./useIsFocusVisible-81b8ef00.js";import"./useEnhancedEffect-460150e6.js";import"./useId-19251564.js";import"./useControlled-9b1271e0.js";import"./useEventCallback-e1b9edb9.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./IconButtonBase-580359f7.js";import"./ButtonBase-a61f402b.js";import"./emotion-react.browser.esm-c7009067.js";import"./assertThisInitialized-e784747a.js";import"./ActionStack-93ca746e.js";import"./Stack-b74bc2fe.js";import"./Typography-3433e336.js";import"./Block-10605452.js";import"./Container-167fc6f5.js";import"./Collapse-0e8a6e52.js";import"./utils-ecc8b08b.js";import"./index-8a077077.js";import"./useTheme-cd93cc18.js";import"./ButtonBase-3726785b.js";const nr={component:s,subcomponents:{Banner:a}},e={render:i=>{const[m,n]=u.useState(!0),c=()=>{n(!0)};return l(d,{children:[r(s,{open:m,children:r(a,{...i,onCloseClick:()=>{n(!1)}})}),r("br",{}),r(f,{onClick:c,children:"Open Banner"})]})},args:B()};var o,t,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return <>
                <BannerService open={open}>
                    <Banner {...args} onCloseClick={handleClose} />
                </BannerService>
                <br />
                <Button onClick={handleOpen}>Open Banner</Button>
            </>;
  },
  args: generateBanner()
}`,...(p=(t=e.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};const or=["Default"];export{e as Default,or as __namedExportsOrder,nr as default};
//# sourceMappingURL=BannerService.stories-9bc09990.js.map
