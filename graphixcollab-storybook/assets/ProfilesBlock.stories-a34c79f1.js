import{c as n,l as d}from"./chance-cee71ec0.js";import{j as e,a as f}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{B as u}from"./Block-10605452.js";import{P as y}from"./ProfileCard-52144d73.js";import{c as g}from"./clsx.m-1229b3e0.js";import{C as k}from"./Container-167fc6f5.js";import{C as G}from"./ContentGrid-c43d3569.js";import{H as B}from"./Heading-908cb5d8.js";import{T as P}from"./Text-71c0d1b5.js";import{s as _}from"./styled-c5161996.js";import{c as h}from"./emotion-react.browser.esm-c7009067.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-570b25c1.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./Image-49bc17e3.js";import"./Typography-3433e336.js";import"./createTheme-0dc7dae6.js";import"./extends-98964cd2.js";import"./useThemeProps-4b422382.js";import"./getThemeProps-6c786bf3.js";import"./useTheme-a01d1f5e.js";import"./Warning-b54acb56.js";import"./createSvgIcon-0cd10119.js";import"./Box-fba3005b.js";import"./emotion-styled.browser.esm-7daedd15.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-38ea7bbc.js";const C=_("div")(({theme:r})=>h`
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
	`),s=r=>e(C,{className:g(r.className,"ProfilesBlock-root"),children:Array.isArray(r.profileGroups)?r.profileGroups.map((o,t)=>e(u,{color:2%t===0?"grey":void 0,className:"ProfilesBlock-profileGroup",children:e(k,{children:f(G,{size:"small",children:[e(B,{level:3,children:o.title}),e(P,{variant:"body",children:o.description}),Array.isArray(o.profiles)?e("div",{className:"ProfilesBlock-profiles",children:o.profiles.map((m,c)=>e(y,{profile:m},c))}):null]})})},t)):null});try{s.displayName="ProfilesBlock",s.__docgenInfo={description:"",displayName:"ProfilesBlock",props:{profileGroups:{defaultValue:null,description:"",name:"profileGroups",required:!0,type:{name:"EmployeeGroup[]"}}}}}catch{}const W={component:s},i={args:{title:n.sentence({words:3}),profileGroups:d()}};var l,a,p;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: chance.sentence({
      words: 3
    }),
    // description: chance.sentence(),
    profileGroups: generateEmployeeGroups()
  }
}`,...(p=(a=i.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const X=["Default"];export{i as Default,X as __namedExportsOrder,W as default};
//# sourceMappingURL=ProfilesBlock.stories-a34c79f1.js.map
