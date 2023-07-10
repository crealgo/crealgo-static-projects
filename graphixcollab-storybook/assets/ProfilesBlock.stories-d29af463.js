import{c as n,l as d}from"./chance-6db3c92c.js";import{j as o,a as f}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{B as u}from"./Block-c3675cc7.js";import{P as y}from"./ProfileCard-fc1e8d3b.js";import{c as g}from"./clsx.m-1229b3e0.js";import{C as k}from"./Container-511ded03.js";import{C as G}from"./ContentGrid-e8bc1caa.js";import{H as B}from"./Heading-dbad4f1a.js";import{T as P}from"./Text-43b906c3.js";import{s as _}from"./styled-943e38cb.js";import{c as h}from"./emotion-react.browser.esm-c7009067.js";import"./chance-599dc973.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-570b25c1.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./Image-11275a93.js";import"./Typography-3f7315c7.js";import"./createTheme-952d4be4.js";import"./extends-98964cd2.js";import"./useThemeProps-87902fe6.js";import"./getThemeProps-6c786bf3.js";import"./useTheme-82186cd9.js";import"./Warning-b67f056e.js";import"./createSvgIcon-91b9a7de.js";import"./Box-dab42a39.js";import"./emotion-styled.browser.esm-7daedd15.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-38ea7bbc.js";const C=_("div")(({theme:r})=>h`
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
	`),s=r=>o(C,{className:g(r.className,"ProfilesBlock-root"),children:Array.isArray(r.profileGroups)?r.profileGroups.map((e,t)=>o(u,{color:2%t===0?"grey":void 0,className:"ProfilesBlock-profileGroup",children:o(k,{children:f(G,{size:"small",children:[o(B,{level:3,children:e.title}),o(P,{variant:"body",children:e.description}),Array.isArray(e.profiles)?o("div",{className:"ProfilesBlock-profiles",children:e.profiles.map((m,c)=>o(y,{profile:m},c))}):null]})})},t)):null});try{s.displayName="ProfilesBlock",s.__docgenInfo={description:"",displayName:"ProfilesBlock",props:{profileGroups:{defaultValue:null,description:"",name:"profileGroups",required:!0,type:{name:"EmployeeGroup[]"}}}}}catch{}const X={component:s},i={args:{title:n.sentence({words:3}),profileGroups:d()}};var l,p,a;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: chance.sentence({
      words: 3
    }),
    // description: chance.sentence(),
    profileGroups: generateEmployeeGroups()
  }
}`,...(a=(p=i.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const Y=["Default"];export{i as Default,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=ProfilesBlock.stories-d29af463.js.map
