import{a as l,F as d,j as r}from"./emotion-element-6a883da9.browser.esm-e55838e6.js";import{r as u}from"./index-f1f749bf.js";import{g as B}from"./chance-a31e5df2.js";import{a as s,B as a}from"./BannerService-aaa44c28.js";import{B as f}from"./Button-6766e6f8.js";import"./_commonjsHelpers-042e6b4d.js";import"./IconButton-1051e4ed.js";import"./jsx-runtime_commonjs-proxy-564537a5.js";import"./createSvgIcon-91651465.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-c604b0e9.js";import"./defaultTheme-8dc337cc.js";import"./clsx.m-1229b3e0.js";import"./useThemeProps-1ff09982.js";import"./getThemeProps-f2e6066a.js";import"./styled-b6ce4f35.js";import"./emotion-styled.browser.esm-6ab8df2f.js";import"./generateUtilityClasses-bdae82bf.js";import"./ownerWindow-2150232e.js";import"./useIsFocusVisible-44f71b61.js";import"./useEnhancedEffect-a150ab51.js";import"./useId-53ad803b.js";import"./useControlled-5fb3b1c0.js";import"./useEventCallback-f57d74d7.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./IconButtonBase-a01c0035.js";import"./ButtonBase-f0dd9438.js";import"./emotion-react.browser.esm-5506366e.js";import"./assertThisInitialized-e784747a.js";import"./ActionStack-8dd88bdd.js";import"./Stack-2393552a.js";import"./Typography-b9fed576.js";import"./Block-91428622.js";import"./Container-df171808.js";import"./Collapse-ebdbd2e0.js";import"./utils-3d8ceabf.js";import"./index-96c5f47c.js";import"./useTheme-da848437.js";import"./ButtonBase-13334f8c.js";const er={component:s,subcomponents:{Banner:a}},e={render:i=>{const[m,n]=u.useState(!0),c=()=>{n(!0)};return l(d,{children:[r(s,{open:m,children:r(a,{...i,onCloseClick:()=>{n(!1)}})}),r("br",{}),r(f,{onClick:c,children:"Open Banner"})]})},args:B()};var o,t,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(t=e.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};const nr=["Default"];export{e as Default,nr as __namedExportsOrder,er as default};
//# sourceMappingURL=BannerService.stories-1e311cd8.js.map
