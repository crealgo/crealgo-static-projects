import{a as m,j as u}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{A as F}from"./ActionStack-93ca746e.js";import{B as P}from"./Block-10605452.js";import{B as U}from"./Button-a6114443.js";import{C as W}from"./Container-167fc6f5.js";import{H as E}from"./Heading-908cb5d8.js";import{s as v}from"./emotion-styled.browser.esm-7daedd15.js";import{c as G}from"./clsx.m-1229b3e0.js";import{T as L}from"./Text-71c0d1b5.js";import{M as J}from"./Mark-b2e78b4b.js";import{s as C}from"./styled-c5161996.js";import{c as T}from"./emotion-react.browser.esm-c7009067.js";import{B as K}from"./Box-fba3005b.js";import{M as Q}from"./Message-a7c670d3.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./Stack-b74bc2fe.js";import"./createTheme-0dc7dae6.js";import"./extends-98964cd2.js";import"./useThemeProps-4b422382.js";import"./getThemeProps-6c786bf3.js";import"./useTheme-a01d1f5e.js";import"./Typography-3433e336.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-3726785b.js";import"./ButtonBase-a61f402b.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-81b8ef00.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-38ea7bbc.js";import"./BrandDots-1a30b756.js";import"./createSvgIcon-0cd10119.js";var X={grad:.9,turn:360,rad:360/(2*Math.PI)},d=function(t){return typeof t=="string"?t.length>0:typeof t=="number"},s=function(t,r,e){return r===void 0&&(r=0),e===void 0&&(e=Math.pow(10,r)),Math.round(e*t)/e+0},c=function(t,r,e){return r===void 0&&(r=0),e===void 0&&(e=1),t>e?e:t>r?t:r},D=function(t){return(t=isFinite(t)?t%360:0)>0?t:t+360},I=function(t){return{r:c(t.r,0,255),g:c(t.g,0,255),b:c(t.b,0,255),a:c(t.a)}},N=function(t){return{r:s(t.r),g:s(t.g),b:s(t.b),a:s(t.a,3)}},Y=/^#([0-9a-f]{3,8})$/i,h=function(t){var r=t.toString(16);return r.length<2?"0"+r:r},R=function(t){var r=t.r,e=t.g,n=t.b,o=t.a,a=Math.max(r,e,n),i=a-Math.min(r,e,n),l=i?a===r?(e-n)/i:a===e?2+(n-r)/i:4+(r-e)/i:0;return{h:60*(l<0?l+6:l),s:a?i/a*100:0,v:a/255*100,a:o}},O=function(t){var r=t.h,e=t.s,n=t.v,o=t.a;r=r/360*6,e/=100,n/=100;var a=Math.floor(r),i=n*(1-e),l=n*(1-(r-a)*e),y=n*(1-(1-r+a)*e),x=a%6;return{r:255*[n,l,i,i,y,n][x],g:255*[y,n,n,l,i,i][x],b:255*[i,i,y,n,n,l][x],a:o}},w=function(t){return{h:D(t.h),s:c(t.s,0,100),l:c(t.l,0,100),a:c(t.a)}},M=function(t){return{h:s(t.h),s:s(t.s),l:s(t.l),a:s(t.a,3)}},S=function(t){return O((e=(r=t).s,{h:r.h,s:(e*=((n=r.l)<50?n:100-n)/100)>0?2*e/(n+e)*100:0,v:n+e,a:r.a}));var r,e,n},g=function(t){return{h:(r=R(t)).h,s:(o=(200-(e=r.s))*(n=r.v)/100)>0&&o<200?e*n/100/(o<=100?o:200-o)*100:0,l:o/2,a:r.a};var r,e,n,o},Z=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,tt=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,rt=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,et=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,B={string:[[function(t){var r=Y.exec(t);return r?(t=r[1]).length<=4?{r:parseInt(t[0]+t[0],16),g:parseInt(t[1]+t[1],16),b:parseInt(t[2]+t[2],16),a:t.length===4?s(parseInt(t[3]+t[3],16)/255,2):1}:t.length===6||t.length===8?{r:parseInt(t.substr(0,2),16),g:parseInt(t.substr(2,2),16),b:parseInt(t.substr(4,2),16),a:t.length===8?s(parseInt(t.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(t){var r=rt.exec(t)||et.exec(t);return r?r[2]!==r[4]||r[4]!==r[6]?null:I({r:Number(r[1])/(r[2]?100/255:1),g:Number(r[3])/(r[4]?100/255:1),b:Number(r[5])/(r[6]?100/255:1),a:r[7]===void 0?1:Number(r[7])/(r[8]?100:1)}):null},"rgb"],[function(t){var r=Z.exec(t)||tt.exec(t);if(!r)return null;var e,n,o=w({h:(e=r[1],n=r[2],n===void 0&&(n="deg"),Number(e)*(X[n]||1)),s:Number(r[3]),l:Number(r[4]),a:r[5]===void 0?1:Number(r[5])/(r[6]?100:1)});return S(o)},"hsl"]],object:[[function(t){var r=t.r,e=t.g,n=t.b,o=t.a,a=o===void 0?1:o;return d(r)&&d(e)&&d(n)?I({r:Number(r),g:Number(e),b:Number(n),a:Number(a)}):null},"rgb"],[function(t){var r=t.h,e=t.s,n=t.l,o=t.a,a=o===void 0?1:o;if(!d(r)||!d(e)||!d(n))return null;var i=w({h:Number(r),s:Number(e),l:Number(n),a:Number(a)});return S(i)},"hsl"],[function(t){var r=t.h,e=t.s,n=t.v,o=t.a,a=o===void 0?1:o;if(!d(r)||!d(e)||!d(n))return null;var i=function(l){return{h:D(l.h),s:c(l.s,0,100),v:c(l.v,0,100),a:c(l.a)}}({h:Number(r),s:Number(e),v:Number(n),a:Number(a)});return O(i)},"hsv"]]},j=function(t,r){for(var e=0;e<r.length;e++){var n=r[e][0](t);if(n)return[n,r[e][1]]}return[null,void 0]},nt=function(t){return typeof t=="string"?j(t.trim(),B.string):typeof t=="object"&&t!==null?j(t,B.object):[null,void 0]},k=function(t,r){var e=g(t);return{h:e.h,s:c(e.s+100*r,0,100),l:e.l,a:e.a}},_=function(t){return(299*t.r+587*t.g+114*t.b)/1e3/255},$=function(t,r){var e=g(t);return{h:e.h,s:e.s,l:c(e.l+100*r,0,100),a:e.a}},q=function(){function t(r){this.parsed=nt(r)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return t.prototype.isValid=function(){return this.parsed!==null},t.prototype.brightness=function(){return s(_(this.rgba),2)},t.prototype.isDark=function(){return _(this.rgba)<.5},t.prototype.isLight=function(){return _(this.rgba)>=.5},t.prototype.toHex=function(){return r=N(this.rgba),e=r.r,n=r.g,o=r.b,i=(a=r.a)<1?h(s(255*a)):"","#"+h(e)+h(n)+h(o)+i;var r,e,n,o,a,i},t.prototype.toRgb=function(){return N(this.rgba)},t.prototype.toRgbString=function(){return r=N(this.rgba),e=r.r,n=r.g,o=r.b,(a=r.a)<1?"rgba("+e+", "+n+", "+o+", "+a+")":"rgb("+e+", "+n+", "+o+")";var r,e,n,o,a},t.prototype.toHsl=function(){return M(g(this.rgba))},t.prototype.toHslString=function(){return r=M(g(this.rgba)),e=r.h,n=r.s,o=r.l,(a=r.a)<1?"hsla("+e+", "+n+"%, "+o+"%, "+a+")":"hsl("+e+", "+n+"%, "+o+"%)";var r,e,n,o,a},t.prototype.toHsv=function(){return r=R(this.rgba),{h:s(r.h),s:s(r.s),v:s(r.v),a:s(r.a,3)};var r},t.prototype.invert=function(){return p({r:255-(r=this.rgba).r,g:255-r.g,b:255-r.b,a:r.a});var r},t.prototype.saturate=function(r){return r===void 0&&(r=.1),p(k(this.rgba,r))},t.prototype.desaturate=function(r){return r===void 0&&(r=.1),p(k(this.rgba,-r))},t.prototype.grayscale=function(){return p(k(this.rgba,-1))},t.prototype.lighten=function(r){return r===void 0&&(r=.1),p($(this.rgba,r))},t.prototype.darken=function(r){return r===void 0&&(r=.1),p($(this.rgba,-r))},t.prototype.rotate=function(r){return r===void 0&&(r=15),this.hue(this.hue()+r)},t.prototype.alpha=function(r){return typeof r=="number"?p({r:(e=this.rgba).r,g:e.g,b:e.b,a:r}):s(this.rgba.a,3);var e},t.prototype.hue=function(r){var e=g(this.rgba);return typeof r=="number"?p({h:r,s:e.s,l:e.l,a:e.a}):s(e.h)},t.prototype.isEqual=function(r){return this.toHex()===p(r).toHex()},t}(),p=function(t){return t instanceof q?t:new q(t)};const ot=v.a`
	cursor: pointer;
	position: relative;
	display: grid;
	place-items: start;
	grid-template-columns: 4.75rem 2fr;
	gap: 1.25rem;

	&::before {
		content: '';
		position: absolute;
		z-index: -1;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		width: 0.25rem;
		height: calc(100% + 1rem);
		width: calc(100% + 1rem);
		background-color: var(--color-gray-50);
		border-radius: 0.5rem;

		opacity: 0;
	}

	&:hover::before {
		opacity: 0.5;
	}
`,at=v.figure`
	margin: unset;

	position: relative;
	padding: 0.5rem;
	background-color: ${({color:t})=>t};
	border-radius: 0.5rem;
	overflow: hidden;
	display: flex;
	width: 100%;
	place-items: center;
	place-content: center;
`,it=v.img`
	position: relative;
	width: 100%;
	height: auto;
	object-fit: contain;
`,st=v.div`
	display: grid;
	align-content: start;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr auto;
	gap: 0.5rem;

	.ActionStack-root {
		margin-top: 0.25rem;
		justify-content: start;
	}
`,H=({title:t,description:r,className:e,image:n,imageColor:o,...a})=>{const i=p(o??"lightgray").alpha(.375).toHex();return m(ot,{className:G("HorizontalCard-root",e),...a,children:[u(at,{color:i,children:u(it,{...n})}),m(st,{children:[u(E,{className:"title",level:5,children:t}),u(L,{spacing:"small",color:"secondary",children:r})]})]})};try{H.displayName="HorizontalCard",H.__docgenInfo={description:"",displayName:"HorizontalCard",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"{ src: string; alt: string; }"}},imageColor:{defaultValue:null,description:"",name:"imageColor",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action[]"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLAnchorElement | null) => void) | RefObject<HTMLAnchorElement> | null"}}}}}catch{}C("div")(({theme:t})=>T`
		max-width: ${t.breakpoints.values.sm}px;

		.ActionStack-root {
			margin-top: 1.5rem;
		}

		.Heading-root {
			margin-bottom: 0.5rem;
		}
	`);const ut=C(P)`
	padding-block: 3rem !important;
`,lt=C("div")(({theme:t})=>T`
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;

		hgroup {
			display: block;

			h2 {
				max-width: 1200px;
			}
			p {
				max-width: 500px;
			}
		}

		.container {
			text-align: center;
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;

			.ActionStack-root {
				justify-content: center !important;
			}
		}

		.services {
			display: grid;
			grid-template-columns: 1fr;
			column-gap: 1rem;
			row-gap: 1rem;
		}

		${t.breakpoints.up("sm")} {
			.services {
				column-gap: 3rem;
				row-gap: 4rem;
				grid-template-columns: repeat(2, 1fr);
			}
		}

		${t.breakpoints.up("lg")} {
			.services {
				grid-template-columns: repeat(3, 1fr);
			}
		}
	`),b=({title:t,description:r,services:e})=>u(ut,{children:u(W,{children:m(lt,{children:[m("hgroup",{children:[u(E,{hasMargin:!0,level:2,children:u(J,{brand:!0,children:t})}),u(L,{children:r})]}),u("div",{className:"services",children:e==null?void 0:e.map((n,o)=>u(H,{title:n.name,description:n.summary,image:n.image,imageColor:n.color},o))}),m(F,{color:"secondary",children:[u(K,{mr:-1,zIndex:1,children:"Looking for something else?"}),u(U,{color:"text",href:"mailto:fashiongreekusc@gmail.com?subject=Inquiry%20from%20website",endIcon:u(Q,{}),children:"Contact Us"})]})]})})});b.displayName="ServicesBlock";try{b.displayName="ServicesBlock",b.__docgenInfo={description:"",displayName:"ServicesBlock",props:{}}}catch{}const Ft={component:b},f={};var A,V,z;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:"{}",...(z=(V=f.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};const Pt=["Default"];export{f as Default,Pt as __namedExportsOrder,Ft as default};
//# sourceMappingURL=ServiceBlock.stories-218d28f1.js.map
