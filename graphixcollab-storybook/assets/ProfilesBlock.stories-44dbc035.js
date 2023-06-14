import{c as n,r as d}from"./chance-a31e5df2.js";import{j as e,a as f}from"./emotion-element-6a883da9.browser.esm-e55838e6.js";import{B as u}from"./Block-91428622.js";import{P as y}from"./ProfileCard-dcbe503b.js";import{c as g}from"./clsx.m-1229b3e0.js";import{C as k}from"./Container-df171808.js";import{C as G}from"./ContentGrid-9070fa1a.js";import{H as B}from"./Heading-3dd7d259.js";import{T as P}from"./Text-d456f8b9.js";import{s as _}from"./styled-b6ce4f35.js";import{c as h}from"./emotion-react.browser.esm-5506366e.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./Image-61c3e035.js";import"./Typography-b9fed576.js";import"./defaultTheme-8dc337cc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-c604b0e9.js";import"./useThemeProps-1ff09982.js";import"./getThemeProps-f2e6066a.js";import"./generateUtilityClasses-bdae82bf.js";import"./Warning-c601f90e.js";import"./createSvgIcon-91651465.js";import"./Box-3f7d297a.js";import"./emotion-styled.browser.esm-6ab8df2f.js";const C=_("div")(({theme:r})=>h`
		display: grid;

		.ProfilesBlock-profileGroup {
			display: grid;
			row-gap: 1rem;

			.ProfilesBlock-profiles {
				display: grid;
				grid-template-columns: repeat(1, 1fr);
				row-gap: 2rem;

				${r.breakpoints.up("sm")} {
					grid-template-columns: repeat(3, 1fr);
				}

				${r.breakpoints.up("md")} {
					grid-template-columns: repeat(4, 1fr);
				}
			}
		}
	`),i=r=>e(C,{className:g(r.className,"ProfilesBlock-root"),children:Array.isArray(r.profileGroups)?r.profileGroups.map((o,t)=>e(u,{color:2%t===0?"grey":void 0,className:"ProfilesBlock-profileGroup",children:e(k,{children:f(G,{size:"small",children:[e(B,{level:3,children:o.title}),e(P,{variant:"body",children:o.description}),Array.isArray(o.profiles)?e("div",{className:"ProfilesBlock-profiles",children:o.profiles.map((m,c)=>e(y,{profile:m},c))}):null]})})},t)):null});try{i.displayName="ProfilesBlock",i.__docgenInfo={description:"",displayName:"ProfilesBlock",props:{profileGroups:{defaultValue:null,description:"",name:"profileGroups",required:!0,type:{name:"EmployeeGroup[]"}}}}}catch{}const U={component:i},s={args:{title:n.sentence({words:3}),profileGroups:d()}};var l,a,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: chance.sentence({
      words: 3
    }),
    // description: chance.sentence(),
    profileGroups: generateEmployeeGroups()
  }
}`,...(p=(a=s.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const W=["Default"];export{s as Default,W as __namedExportsOrder,U as default};
//# sourceMappingURL=ProfilesBlock.stories-44dbc035.js.map
