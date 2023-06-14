import{j as t,a as l}from"./emotion-element-6a883da9.browser.esm-e55838e6.js";import{A as a}from"./Autocomplete-ff498aa5.js";import{F as m}from"./FormControl-af3048fc.js";import{I as r}from"./Input-5f518c4b.js";import{S as c}from"./Select-aafb4c14.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-styled.browser.esm-6ab8df2f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-c604b0e9.js";import"./clsx.m-1229b3e0.js";import"./emotion-react.browser.esm-5506366e.js";import"./jsx-runtime_commonjs-proxy-564537a5.js";import"./createSvgIcon-91651465.js";import"./defaultTheme-8dc337cc.js";import"./useThemeProps-1ff09982.js";import"./getThemeProps-f2e6066a.js";import"./styled-b6ce4f35.js";import"./generateUtilityClasses-bdae82bf.js";import"./ownerWindow-2150232e.js";import"./useIsFocusVisible-44f71b61.js";import"./useEnhancedEffect-a150ab51.js";import"./useId-53ad803b.js";import"./useControlled-5fb3b1c0.js";import"./useEventCallback-f57d74d7.js";const w={title:"Form / FormControl"},e={render:o=>{const s=o.controlType;return t(m,{...o,children:t(s,{})})},args:{label:"Input Label",helperText:"This is helper text",controlSize:"medium"},argTypes:{controlType:{control:{type:"select"},options:["input","textarea","select","autocomplete"],mapping:{input:r,autocomplete:()=>l(a,{children:[t("option",{value:"test-things",children:"Test Things"}),t("option",{value:"test-things-1",children:"Test Things 1"}),t("option",{value:"test-things-2",children:"Test Things 2"}),t("option",{value:"test-things-3",children:"Test Things 3"})]}),select:c,textarea:r},labels:{input:"Input",autocomplete:"Autocomplete",select:"Select",textarea:"Textarea"}},controlSize:{control:{type:"inline-radio"},options:["small","medium","large"]}}};var n,p,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: any) => {
    const InputComponent = (args.controlType as ComponentType);
    return <FormControl {...args}>
                <InputComponent />
            </FormControl>;
  },
  args: {
    label: 'Input Label',
    helperText: 'This is helper text',
    controlSize: 'medium'
  },
  argTypes: {
    controlType: {
      control: {
        type: 'select'
      },
      options: ['input', 'textarea', 'select', 'autocomplete'],
      mapping: {
        input: Input,
        autocomplete: () => <Autocomplete>
                        <option value="test-things">Test Things</option>
                        <option value="test-things-1">Test Things 1</option>
                        <option value="test-things-2">Test Things 2</option>
                        <option value="test-things-3">Test Things 3</option>
                    </Autocomplete>,
        select: Select,
        textarea: Input
      },
      labels: {
        input: 'Input',
        autocomplete: 'Autocomplete',
        select: 'Select',
        textarea: 'Textarea'
      }
    },
    controlSize: {
      control: {
        type: 'inline-radio'
      },
      options: ['small', 'medium', 'large']
    }
  }
}`,...(i=(p=e.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const B=["Default"];export{e as Default,B as __namedExportsOrder,w as default};
//# sourceMappingURL=FormControl.stories-1a8b7fd7.js.map
