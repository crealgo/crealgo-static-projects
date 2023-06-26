import{n as oe}from"./chance-cee71ec0.js";import{j as i,a as q}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{c as le}from"./clsx.m-1229b3e0.js";import{r as se}from"./index-570b25c1.js";import{B as de}from"./Block-10605452.js";import{C as $}from"./Container-167fc6f5.js";import{H as ce}from"./Heading-908cb5d8.js";import{I as Q}from"./Image-49bc17e3.js";import{T as me}from"./Text-71c0d1b5.js";import{S as ue}from"./SocialMediaBlock-ef711bb9.js";import{s as pe}from"./styled-c5161996.js";import{c as fe}from"./emotion-react.browser.esm-c7009067.js";import{u as ge}from"./useMediaQuery-cea6fdeb.js";import"./_commonjsHelpers-042e6b4d.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./emotion-styled.browser.esm-7daedd15.js";import"./extends-98964cd2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-38ea7bbc.js";import"./ActionStack-93ca746e.js";import"./Button-a6114443.js";import"./ButtonBase-3726785b.js";import"./ButtonBase-a61f402b.js";import"./createTheme-0dc7dae6.js";import"./useThemeProps-4b422382.js";import"./getThemeProps-6c786bf3.js";import"./useTheme-a01d1f5e.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-81b8ef00.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./Stack-b74bc2fe.js";import"./Typography-3433e336.js";import"./Link-a713847e.js";var Y={};function ye(e){if(!e||typeof window>"u")return;const r=document.createElement("style");return r.setAttribute("type","text/css"),r.innerHTML=e,document.head.appendChild(r),e}Object.defineProperty(Y,"__esModule",{value:!0});var o=se;function ve(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var u=ve(o);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var y=function(){return y=Object.assign||function(r){for(var a,n=1,t=arguments.length;n<t;n++){a=arguments[n];for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&(r[d]=a[d])}return r},y.apply(this,arguments)};ye(`.marquee-container {
  overflow-x: hidden !important;
  display: flex !important;
  flex-direction: row !important;
  position: relative;
  width: 100%;
}
.marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.overlay::before, .overlay::after {
  background: linear-gradient(to right, var(--gradient-color));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
}
.overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.overlay::before {
  left: 0;
  top: 0;
}

.marquee {
  flex: 0 0 auto;
  min-width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}`);var he=function(e){var r,a,n,t,d=e.style,m=d===void 0?{}:d,c=e.className,p=c===void 0?"":c,l=e.play,s=l===void 0?!0:l,b=e.pauseOnHover,C=b===void 0?!1:b,N=e.pauseOnClick,E=N===void 0?!1:N,G=e.direction,M=G===void 0?"left":G,O=e.speed,j=O===void 0?20:O,R=e.delay,S=R===void 0?0:R,W=e.loop,f=W===void 0?0:W,z=e.gradient,ee=z===void 0?!0:z,I=e.gradientColor,v=I===void 0?[255,255,255]:I,P=e.gradientWidth,h=P===void 0?200:P,re=e.onFinish,ne=e.onCycleComplete,V=e.children,H=o.useState(0),A=H[0],te=H[1],D=o.useState(0),L=D[0],ae=D[1],F=o.useState(!1),_=F[0],ie=F[1],k=o.useRef(null),w=o.useRef(null);o.useEffect(function(){if(_){var B=function(){w.current&&k.current&&(te(k.current.getBoundingClientRect().width),ae(w.current.getBoundingClientRect().width))};return B(),window.addEventListener("resize",B),function(){window.removeEventListener("resize",B)}}},[_]),o.useEffect(function(){ie(!0)},[]);var T="rgba("+v[0]+", "+v[1]+", "+v[2],X=L<A?A/j:L/j;return u.default.createElement(o.Fragment,null,_?u.default.createElement("div",{ref:k,style:y(y({},m),(r={},r["--pause-on-hover"]=!s||C?"paused":"running",r["--pause-on-click"]=!s||C&&!E||E?"paused":"running",r)),className:p+" marquee-container"},ee&&u.default.createElement("div",{style:(a={},a["--gradient-color"]=T+", 1), "+T+", 0)",a["--gradient-width"]=typeof h=="number"?h+"px":h,a),className:"overlay"}),u.default.createElement("div",{ref:w,style:(n={},n["--play"]=s?"running":"paused",n["--direction"]=M==="left"?"normal":"reverse",n["--duration"]=X+"s",n["--delay"]=S+"s",n["--iteration-count"]=f?""+f:"infinite",n),className:"marquee",onAnimationIteration:ne,onAnimationEnd:re},V),u.default.createElement("div",{style:(t={},t["--play"]=s?"running":"paused",t["--direction"]=M==="left"?"normal":"reverse",t["--duration"]=X+"s",t["--delay"]=S+"s",t["--iteration-count"]=f?""+f:"infinite",t),className:"marquee","aria-hidden":"true"},V)):null)},Z=Y.default=he;const _e=pe(de)(({theme:e})=>fe`
		/* padding-inline: 0rem; */

		.Container-root {
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.content {
			text-align: center;
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.gallery {
			overflow: hidden;
			margin-top: 2.5rem;
			margin-inline: -1.5rem;
			display: grid;
			gap: 0.5rem;

			.GalleryBlock-image {
				margin-inline: 0.25rem;
				width: 10rem;
			}
			${e.breakpoints.up("md")} {
				margin-inline: 0;

				.GalleryBlock-image {
					width: 13rem;
				}
			}
		}
	`),x=({className:e,title:r,description:a,SocialMediaBlockProps:n,images:t=[]})=>{const m=t.slice(0,7),c=t.slice(7,7*2),p=ge(l=>l.breakpoints.up("md"));return i(_e,{className:le(e,"GalleryBlock-root"),children:q($,{className:"GalleryBlock-container",children:[q("div",{className:"content",children:[i(ce,{level:2,children:r}),i($,{size:"small",children:i(me,{size:"large",children:a})}),i(ue,{...n})]}),q("div",{className:"gallery",children:[(m==null?void 0:m.length)&&i(Z,{gradient:p,children:m.map((l,s)=>i(Q,{className:"GalleryBlock-image",...l},s))}),(c==null?void 0:c.length)&&i(Z,{gradient:p,direction:"right",children:c.map((l,s)=>i(Q,{className:"GalleryBlock-image",...l},s))})]})]})})};try{x.displayName="GalleryBlock",x.__docgenInfo={description:"",displayName:"GalleryBlock",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},SocialMediaBlockProps:{defaultValue:null,description:"",name:"SocialMediaBlockProps",required:!1,type:{name:"SocialMediaBlockProps"}},images:{defaultValue:{value:"[]"},description:"",name:"images",required:!1,type:{name:"ImageProps[]"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Ye={component:x},g={args:oe()};var J,K,U;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: generateGalleryBlock()
}`,...(U=(K=g.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};const er=["Default"];export{g as Default,er as __namedExportsOrder,Ye as default};
//# sourceMappingURL=GalleryBlock.stories-3a618f89.js.map
