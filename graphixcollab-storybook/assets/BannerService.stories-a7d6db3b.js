import{a as l,F as d,j as r}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{r as u}from"./index-570b25c1.js";import{g as B}from"./chance-6db3c92c.js";import{a as i,B as s}from"./BannerService-d83fb0df.js";import{B as f}from"./Button-fff501ba.js";import"./_commonjsHelpers-042e6b4d.js";import"./chance-599dc973.js";import"./IconButton-e2fe1e34.js";import"./jsx-runtime_commonjs-proxy-600fb832.js";import"./createSvgIcon-91b9a7de.js";import"./extends-98964cd2.js";import"./createTheme-952d4be4.js";import"./clsx.m-1229b3e0.js";import"./useThemeProps-87902fe6.js";import"./styled-943e38cb.js";import"./emotion-styled.browser.esm-7daedd15.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-38ea7bbc.js";import"./getThemeProps-6c786bf3.js";import"./useTheme-82186cd9.js";import"./ownerWindow-2150232e.js";import"./useIsFocusVisible-81b8ef00.js";import"./useEnhancedEffect-460150e6.js";import"./useId-19251564.js";import"./useControlled-9b1271e0.js";import"./useEventCallback-e1b9edb9.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./IconButtonBase-3c500e6d.js";import"./ButtonBase-fa5d426c.js";import"./emotion-react.browser.esm-c7009067.js";import"./assertThisInitialized-e784747a.js";import"./ActionStack-98d87dc1.js";import"./Stack-4f5470dc.js";import"./Typography-3f7315c7.js";import"./Block-c3675cc7.js";import"./Container-511ded03.js";import"./Collapse-a9a6f4fe.js";import"./utils-7add8905.js";import"./index-8a077077.js";import"./useTheme-4269b4b1.js";import"./ButtonBase-5e380d71.js";const or={component:i,subcomponents:{Banner:s}},e={render:a=>{const[m,n]=u.useState(!0),c=()=>{n(!0)};return l(d,{children:[r(i,{open:m,children:r(s,{...a,onCloseClick:()=>{n(!1)}})}),r("br",{}),r(f,{onClick:c,children:"Open Banner"})]})},args:B()};var o,t,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(t=e.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};const tr=["Default"];export{e as Default,tr as __namedExportsOrder,or as default};
//# sourceMappingURL=BannerService.stories-a7d6db3b.js.map
