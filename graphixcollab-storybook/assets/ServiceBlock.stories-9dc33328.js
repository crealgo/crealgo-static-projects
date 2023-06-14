import{a as g,j as l}from"./emotion-element-6a883da9.browser.esm-e55838e6.js";import{A as F}from"./ActionStack-8dd88bdd.js";import{B as P}from"./Block-91428622.js";import{B as U}from"./Button-6766e6f8.js";import{C as W}from"./Container-df171808.js";import{H as E}from"./Heading-3dd7d259.js";import{c as G}from"./clsx.m-1229b3e0.js";import{s as y}from"./emotion-styled.browser.esm-6ab8df2f.js";import{T as L}from"./Text-d456f8b9.js";import{M as J}from"./Mark-a07f924b.js";import{s as C}from"./styled-b6ce4f35.js";import{c as T}from"./emotion-react.browser.esm-5506366e.js";import{B as K}from"./Box-3f7d297a.js";import{M as Q}from"./Message-5151c3b7.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./Stack-2393552a.js";import"./defaultTheme-8dc337cc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-c604b0e9.js";import"./useThemeProps-1ff09982.js";import"./getThemeProps-f2e6066a.js";import"./Typography-b9fed576.js";import"./generateUtilityClasses-bdae82bf.js";import"./excludePropsFromForwarding-6c5743cd.js";import"./ButtonBase-13334f8c.js";import"./ButtonBase-f0dd9438.js";import"./assertThisInitialized-e784747a.js";import"./useIsFocusVisible-44f71b61.js";import"./useEventCallback-f57d74d7.js";import"./useEnhancedEffect-a150ab51.js";import"./BrandDots-833eab64.js";import"./createSvgIcon-91651465.js";var X={grad:.9,turn:360,rad:360/(2*Math.PI)},p=function(t){return typeof t=="string"?t.length>0:typeof t=="number"},s=function(t,r,e){return r===void 0&&(r=0),e===void 0&&(e=Math.pow(10,r)),Math.round(e*t)/e+0},c=function(t,r,e){return r===void 0&&(r=0),e===void 0&&(e=1),t>e?e:t>r?t:r},D=function(t){return(t=isFinite(t)?t%360:0)>0?t:t+360},I=function(t){return{r:c(t.r,0,255),g:c(t.g,0,255),b:c(t.b,0,255),a:c(t.a)}},N=function(t){return{r:s(t.r),g:s(t.g),b:s(t.b),a:s(t.a,3)}},Y=/^#([0-9a-f]{3,8})$/i,f=function(t){var r=t.toString(16);return r.length<2?"0"+r:r},R=function(t){var r=t.r,e=t.g,n=t.b,o=t.a,a=Math.max(r,e,n),i=a-Math.min(r,e,n),u=i?a===r?(e-n)/i:a===e?2+(n-r)/i:4+(r-e)/i:0;return{h:60*(u<0?u+6:u),s:a?i/a*100:0,v:a/255*100,a:o}},O=function(t){var r=t.h,e=t.s,n=t.v,o=t.a;r=r/360*6,e/=100,n/=100;var a=Math.floor(r),i=n*(1-e),u=n*(1-(r-a)*e),m=n*(1-(1-r+a)*e),x=a%6;return{r:255*[n,u,i,i,m,n][x],g:255*[m,n,n,u,i,i][x],b:255*[i,i,m,n,n,u][x],a:o}},w=function(t){return{h:D(t.h),s:c(t.s,0,100),l:c(t.l,0,100),a:c(t.a)}},M=function(t){return{h:s(t.h),s:s(t.s),l:s(t.l),a:s(t.a,3)}},S=function(t){return O((e=(r=t).s,{h:r.h,s:(e*=((n=r.l)<50?n:100-n)/100)>0?2*e/(n+e)*100:0,v:n+e,a:r.a}));var r,e,n},h=function(t){return{h:(r=R(t)).h,s:(o=(200-(e=r.s))*(n=r.v)/100)>0&&o<200?e*n/100/(o<=100?o:200-o)*100:0,l:o/2,a:r.a};var r,e,n,o},Z=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,tt=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,rt=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,et=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,B={string:[[function(t){var r=Y.exec(t);return r?(t=r[1]).length<=4?{r:parseInt(t[0]+t[0],16),g:parseInt(t[1]+t[1],16),b:parseInt(t[2]+t[2],16),a:t.length===4?s(parseInt(t[3]+t[3],16)/255,2):1}:t.length===6||t.length===8?{r:parseInt(t.substr(0,2),16),g:parseInt(t.substr(2,2),16),b:parseInt(t.substr(4,2),16),a:t.length===8?s(parseInt(t.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(t){var r=rt.exec(t)||et.exec(t);return r?r[2]!==r[4]||r[4]!==r[6]?null:I({r:Number(r[1])/(r[2]?100/255:1),g:Number(r[3])/(r[4]?100/255:1),b:Number(r[5])/(r[6]?100/255:1),a:r[7]===void 0?1:Number(r[7])/(r[8]?100:1)}):null},"rgb"],[function(t){var r=Z.exec(t)||tt.exec(t);if(!r)return null;var e,n,o=w({h:(e=r[1],n=r[2],n===void 0&&(n="deg"),Number(e)*(X[n]||1)),s:Number(r[3]),l:Number(r[4]),a:r[5]===void 0?1:Number(r[5])/(r[6]?100:1)});return S(o)},"hsl"]],object:[[function(t){var r=t.r,e=t.g,n=t.b,o=t.a,a=o===void 0?1:o;return p(r)&&p(e)&&p(n)?I({r:Number(r),g:Number(e),b:Number(n),a:Number(a)}):null},"rgb"],[function(t){var r=t.h,e=t.s,n=t.l,o=t.a,a=o===void 0?1:o;if(!p(r)||!p(e)||!p(n))return null;var i=w({h:Number(r),s:Number(e),l:Number(n),a:Number(a)});return S(i)},"hsl"],[function(t){var r=t.h,e=t.s,n=t.v,o=t.a,a=o===void 0?1:o;if(!p(r)||!p(e)||!p(n))return null;var i=function(u){return{h:D(u.h),s:c(u.s,0,100),v:c(u.v,0,100),a:c(u.a)}}({h:Number(r),s:Number(e),v:Number(n),a:Number(a)});return O(i)},"hsv"]]},j=function(t,r){for(var e=0;e<r.length;e++){var n=r[e][0](t);if(n)return[n,r[e][1]]}return[null,void 0]},nt=function(t){return typeof t=="string"?j(t.trim(),B.string):typeof t=="object"&&t!==null?j(t,B.object):[null,void 0]},k=function(t,r){var e=h(t);return{h:e.h,s:c(e.s+100*r,0,100),l:e.l,a:e.a}},_=function(t){return(299*t.r+587*t.g+114*t.b)/1e3/255},$=function(t,r){var e=h(t);return{h:e.h,s:e.s,l:c(e.l+100*r,0,100),a:e.a}},A=function(){function t(r){this.parsed=nt(r)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return t.prototype.isValid=function(){return this.parsed!==null},t.prototype.brightness=function(){return s(_(this.rgba),2)},t.prototype.isDark=function(){return _(this.rgba)<.5},t.prototype.isLight=function(){return _(this.rgba)>=.5},t.prototype.toHex=function(){return r=N(this.rgba),e=r.r,n=r.g,o=r.b,i=(a=r.a)<1?f(s(255*a)):"","#"+f(e)+f(n)+f(o)+i;var r,e,n,o,a,i},t.prototype.toRgb=function(){return N(this.rgba)},t.prototype.toRgbString=function(){return r=N(this.rgba),e=r.r,n=r.g,o=r.b,(a=r.a)<1?"rgba("+e+", "+n+", "+o+", "+a+")":"rgb("+e+", "+n+", "+o+")";var r,e,n,o,a},t.prototype.toHsl=function(){return M(h(this.rgba))},t.prototype.toHslString=function(){return r=M(h(this.rgba)),e=r.h,n=r.s,o=r.l,(a=r.a)<1?"hsla("+e+", "+n+"%, "+o+"%, "+a+")":"hsl("+e+", "+n+"%, "+o+"%)";var r,e,n,o,a},t.prototype.toHsv=function(){return r=R(this.rgba),{h:s(r.h),s:s(r.s),v:s(r.v),a:s(r.a,3)};var r},t.prototype.invert=function(){return d({r:255-(r=this.rgba).r,g:255-r.g,b:255-r.b,a:r.a});var r},t.prototype.saturate=function(r){return r===void 0&&(r=.1),d(k(this.rgba,r))},t.prototype.desaturate=function(r){return r===void 0&&(r=.1),d(k(this.rgba,-r))},t.prototype.grayscale=function(){return d(k(this.rgba,-1))},t.prototype.lighten=function(r){return r===void 0&&(r=.1),d($(this.rgba,r))},t.prototype.darken=function(r){return r===void 0&&(r=.1),d($(this.rgba,-r))},t.prototype.rotate=function(r){return r===void 0&&(r=15),this.hue(this.hue()+r)},t.prototype.alpha=function(r){return typeof r=="number"?d({r:(e=this.rgba).r,g:e.g,b:e.b,a:r}):s(this.rgba.a,3);var e},t.prototype.hue=function(r){var e=h(this.rgba);return typeof r=="number"?d({h:r,s:e.s,l:e.l,a:e.a}):s(e.h)},t.prototype.isEqual=function(r){return this.toHex()===d(r).toHex()},t}(),d=function(t){return t instanceof A?t:new A(t)};const ot=y.a`
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
`,at=y.figure`
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
`,it=y.img`
	position: relative;
	width: 100%;
	height: auto;
	object-fit: contain;
`,st=y.div`
	display: grid;
	align-content: start;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr auto;
	gap: 0.5rem;

	.ActionStack-root {
		margin-top: 0.25rem;
		justify-content: start;
	}
`,H=({title:t,subtitle:r,description:e,className:n,image:o,imageColor:a,actions:i,...u})=>{const m=d(a??"lightgray").alpha(.375).toHex();return g(ot,{className:G("HorizontalCard-root",n),...u,children:[l(at,{color:m,children:l(it,{...o})}),g(st,{children:[l(E,{className:"title",level:5,children:t}),l(L,{spacing:"small",color:"secondary",children:e})]})]})};try{H.displayName="HorizontalCard",H.__docgenInfo={description:"",displayName:"HorizontalCard",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"{ src: string; alt: string; }"}},imageColor:{defaultValue:null,description:"",name:"imageColor",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"Action[]"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLAnchorElement | null) => void) | RefObject<HTMLAnchorElement> | null"}}}}}catch{}C("div")(({theme:t})=>T`
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
	`),v=({title:t,description:r,services:e})=>l(ut,{children:l(W,{children:g(lt,{children:[g("hgroup",{children:[l(E,{hasMargin:!0,level:2,children:l(J,{brand:!0,children:t})}),l(L,{children:r})]}),l("div",{className:"services",children:e==null?void 0:e.map((n,o)=>l(H,{title:n.name,description:n.summary,image:n.image,imageColor:n.color},o))}),g(F,{color:"secondary",children:[l(K,{mr:-1,zIndex:1,children:"Looking for something else?"}),l(U,{color:"text",endIcon:l(Q,{}),children:"Contact Us"})]})]})})});v.displayName="ServicesBlock";try{v.displayName="ServicesBlock",v.__docgenInfo={description:"",displayName:"ServicesBlock",props:{}}}catch{}const Ot={component:v},b={};var q,V,z;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:"{}",...(z=(V=b.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};const Ft=["Default"];export{b as Default,Ft as __namedExportsOrder,Ot as default};
//# sourceMappingURL=ServiceBlock.stories-9dc33328.js.map
