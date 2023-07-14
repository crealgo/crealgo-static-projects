(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7331:function(n,e,t){"use strict";var r=t(8175),i=t(5893);e.Z=(0,r.Z)((0,i.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward")},5843:function(n,e,t){"use strict";var r=t(8175),i=t(5893);e.Z=(0,r.Z)((0,i.jsx)("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"}),"Message")},8312:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2492)}])},4557:function(n,e,t){"use strict";t.d(e,{t:function(){return D}});var r=t(7297),i=t(5893),a=t(7074),o=t(1026),s=t(7331),l=t(754),c=t(4944),d=t(2546),u=t(6651),m=t(6838),p=t(3209),h=t(150),g=t(9003),f=t(4024),v=t(3868),x=t(2220);function y(){var n=(0,r.Z)(["\n	.FormControl-root {\n		@media screen and (min-width: 500px) {\n			grid-column: span 3;\n		}\n\n		@media screen and (min-width: 688px) {\n			&:nth-of-type(1) {\n				grid-column: span 2;\n			}\n			&:nth-of-type(2) {\n				grid-column: span 2;\n			}\n			&:nth-of-type(3) {\n				grid-column: span 2;\n			}\n			&:nth-of-type(4) {\n				grid-column: span 1;\n			}\n			&:nth-of-type(5) {\n				grid-column: span 1;\n			}\n			&:nth-of-type(6) {\n				grid-column: span 2;\n			}\n\n			&.FormControl-id-terms {\n				grid-column: span 6;\n			}\n		}\n	}\n"]);return y=function(){return n},n}var j=v.O.filter(function(n){return"title"!==n.itemType}),b=(0,x.Z)(p.T)(y()),w=function(){var n=(0,m.c)();return(0,i.jsxs)(b,{noValidate:!0,method:"post",action:"send-message/estimate-request",encType:"multipart/form-data",id:"estimator-form",onReset:n.handleReset,onSubmit:n.handleSubmit,children:[(0,i.jsx)(h.p,{title:(0,i.jsxs)(i.Fragment,{children:["Get a quick"," ",(0,i.jsx)(u.v,{text:!0,color:"magenta",children:"estimate"}),"!"]}),instructions:"Fill out the form below to get your quick estimate, and a step closer to getting your project started!"}),(0,i.jsx)(g.U,{items:j,formState:n}),n.isSubmitted&&(0,f.z)(n.isSuccessful),(0,i.jsxs)(c.k,{children:[(0,i.jsx)(d.z,{color:"secondary",endIcon:n.isSubmitting?(0,i.jsx)(l.Z,{size:"inherit",thickness:6,sx:{color:"white"}}):(0,i.jsx)(o.Z,{}),type:"submit",children:n.isSubmitting?"Sending...":"Get Estimate"}),(0,i.jsx)(d.z,{color:"text",href:"mailto:graphixcollab@gmail.com",endIcon:(0,i.jsx)(s.Z,{}),children:"Not sure? Contact us"})]})]})},k=t(5968),Z=t(1944);function S(){var n=(0,r.Z)(["\n	--adornment-image-position: absolute;\n	--adornment-image-z-index: 0;\n\n	--adornment-image-width: 100%;\n	--adornment-image-max-width: 100%;\n	--adornment-image-inset: auto -1rem 0 auto;\n\n	@media screen and (min-width: 768px) {\n		--adornment-image-max-width: 36rem;\n		--adornment-image-inset: auto -10rem -2rem auto;\n	}\n\n	padding: 0 0 0 1rem;\n	max-width: var(--adornment-image-max-width);\n	width: var(--adornment-image-width);\n	height: auto;\n\n	position: var(--adornment-image-position);\n	inset: var(--adornment-image-inset);\n\n	z-index: var(--adornment-image-z-index);\n"]);return S=function(){return n},n}var T=(0,a.ZP)("img")(S()),D=function(){return(0,i.jsx)(Z.W,{children:(0,i.jsxs)(k.g,{isClipped:!0,isRounded:!0,color:"grey",className:"EstimatorBlock-root",children:[(0,i.jsx)(w,{}),(0,i.jsx)(T,{src:"assets/juicy-business-coach-explains-the-material-min@512w.webp",alt:"Explaining the material"})]})})}},3868:function(n,e,t){"use strict";t.d(e,{O:function(){return u}});var r=t(5893),i=t(4251),a=t(9784),o=function(){for(var n=arguments.length,e=Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.map(function(n){return{label:n,value:(0,a.o)(n)}})},s=o("T-shirt","Hoodie","Sash","Poster","Sticker"),l=o("Embroidery","Print");o("\uD83C\uDF05 Image","\uD83D\uDC64 Name","\uD83C\uDD70 Initials","\uD83D\uDCAC Quote");var c=new Date,d=Date.now()+2592e6,u=[{itemType:"title",title:"\uD83D\uDC4B Your Information"},{itemType:"input",inputType:"text",name:"name",placeholder:"John Snow",label:"Full Name",required:!0,span:4},{itemType:"input",inputType:"text",name:"email",placeholder:"johnsnow@gmail.com",label:"Email",required:!0,span:4},{itemType:"title",title:"⚙️ Service Request"},{itemType:"select",name:"service",label:"Service Type",options:l,span:4},{itemType:"select",name:"material",label:"Material Type",options:s,span:4},{itemType:"input",inputType:"number",name:"quantity",defaultValue:10,label:"Quantity",required:!0,min:10,max:9999,span:4},{itemType:"input",inputType:"date",name:"deadline",defaultValue:new Date(d).toISOString().split("T")[0],label:"Deadline",helperText:"By default, we will assume 1 month from now.",required:!0,min:c.toISOString().split("T")[0],span:4},{itemType:"radio",name:"delivery",required:!0,label:"Delivery Method",options:[{value:"pickup",label:"Pick-Up \uD83D\uDCCD",meta:"Pick up your order at our store"},{value:"ship",label:"Ship \uD83D\uDCE6",meta:"We'll ship it to ya!"}],span:3},{itemType:"title",title:"\uD83D\uDCDD Additional Information"},{itemType:"input",inputType:"file",multiple:!0,name:"artwork",label:"Artwork File(s)",displayText:"\uD83C\uDF05 Upload your artwork",accept:".gif,.jpeg,.jpg,.png,.pdf,.svg,.webp",helperText:"Although this step is optional, uploading your artwork helps us come up with a more accurate estimate.",span:8},{itemType:"checkbox",name:"terms",label:"Terms and Conditions",required:!0,options:[{value:"terms",label:(0,r.jsxs)(r.Fragment,{children:["I agree to the"," ",(0,r.jsx)(i.r,{href:"/terms/terms-and-conditions",children:"Terms and Conditions"})," ","and the"," ",(0,r.jsx)(i.r,{href:"/terms/privacy-policy",children:"Privacy Policy"}),"."]})}]}]},2492:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return no},default:function(){return ns}});var r=t(6042),i=t(5893),a=t(4557),o=t(1688),s=t(7297),l=t(1225),c=t(7074),d=t(917),u=t(6010),m=t(7005),p=t(5968),h=t(1944),g=t(2562),f=t(9534);function v(){var n=(0,s.Z)(["\n			aspect-ratio: 1;\n		"]);return v=function(){return n},n}function x(){var n=(0,s.Z)([""]);return x=function(){return n},n}function y(){var n=(0,s.Z)([""]);return y=function(){return n},n}function j(){var n=(0,s.Z)(["\n		margin: unset;\n		padding: unset;\n		border: unset;\n		outline: unset;\n\n		width: 100%;\n		display: grid;\n		grid-template-columns: 1fr;\n		gap: 0.5rem;\n\n		background-color: var(--color-gray-200);\n\n		/* FIXME: doesn't work well with caption, needs wrapper around image */\n		","\n\n		.Image-element {\n			outline: unset;\n			object-fit: cover;\n			width: 100%;\n			height: 100%;\n			border-radius: 0.25rem;\n			aspect-ratio: 1;\n		}\n\n		&[loaded] {\n		}\n	"]);return j=function(){return n},n}var b=(0,c.ZP)(function(n){var e=n.className,t=n.onLoad,a=n.onError,o=n.caption,s=(0,f.Z)(n,["className","onLoad","onError","caption"]);return(0,i.jsxs)("figure",{className:(0,u.Z)("Image-root",e),children:[(0,i.jsx)("img",(0,r.Z)({className:"Image-element",onLoad:function(n){console.log("loaded"),null==t||t(n)},onError:function(n){console.log("loaded"),null==a||a(n)}},s)),o&&(0,i.jsx)("figcaption",{className:"Image-caption",children:o})]})})(function(n){var e=n.shape,t={square:(0,d.iv)(v()),portrait:(0,d.iv)(x()),landscape:(0,d.iv)(y())}[null!=e?e:"square"];return(0,d.iv)(j(),t)}),w=t(696),k=t(4944),Z=t(8346),S=(0,c.ZP)("div")({display:"flex",alignItems:"center",justifyContent:"center",gap:"0.75rem"}),T=function(n){var e=n.className,t=n.url,r=n.text,a=n.actions;return(0,i.jsxs)(S,{className:(0,u.Z)(e,"SocialMediaBlock-root"),children:[(0,i.jsx)(w.x,{children:(0,i.jsx)(Z.Z,{variant:"body2",className:(0,u.Z)(e,"SocialMediaBlock-link"),href:t,children:r})}),(0,i.jsx)(k.k,{color:"secondary",actions:a})]})};function D(){var n=(0,s.Z)(["\n		/* padding-inline: 0rem; */\n\n		.Container-root {\n			display: grid;\n			grid-template-columns: 1fr;\n			gap: 1rem;\n		}\n\n		.content {\n			text-align: center;\n			display: grid;\n			grid-template-columns: 1fr;\n			gap: 1rem;\n		}\n\n		.gallery {\n			overflow: hidden;\n			margin-top: 2.5rem;\n			margin-inline: -1.5rem;\n			display: grid;\n			gap: 0.5rem;\n\n			.GalleryBlock-image {\n				margin-inline: 0.25rem;\n				width: 10rem;\n			}\n			"," {\n				margin-inline: 0;\n\n				.GalleryBlock-image {\n					width: 13rem;\n				}\n			}\n		}\n	"]);return D=function(){return n},n}var N=(0,c.ZP)(p.g)(function(n){var e=n.theme;return(0,d.iv)(D(),e.breakpoints.up("md"))}),P=function(n){var e=n.className,t=n.title,a=n.description,o=n.SocialMediaBlockProps,s=n.images,c=void 0===s?[]:s,d=c.slice(0,7),p=c.slice(7,14),f=(0,l.Z)(function(n){return n.breakpoints.up("md")});return(0,i.jsx)(N,{className:(0,u.Z)(e,"GalleryBlock-root"),children:(0,i.jsxs)(h.W,{className:"GalleryBlock-container",children:[(0,i.jsxs)("div",{className:"content",children:[(0,i.jsx)(g.X,{level:2,children:t}),(0,i.jsx)(h.W,{size:"small",children:(0,i.jsx)(w.x,{size:"large",children:a})}),(0,i.jsx)(T,(0,r.Z)({},o))]}),(0,i.jsxs)("div",{className:"gallery",children:[(null==d?void 0:d.length)&&(0,i.jsx)(m.Z,{gradient:f,children:d.map(function(n,e){return(0,i.jsx)(b,(0,r.Z)({className:"GalleryBlock-image"},n),e)})}),(null==p?void 0:p.length)&&(0,i.jsx)(m.Z,{gradient:f,direction:"right",children:p.map(function(n,e){return(0,i.jsx)(b,(0,r.Z)({className:"GalleryBlock-image"},n),e)})})]})]})})},C=t(3632),I=t(3026),z=(0,t(8175).Z)((0,i.jsx)("path",{d:"m10 17 5-5-5-5v10z"}),"ArrowRight"),B=t(1163);function q(){var n=(0,s.Z)(["\n	position: relative;\n	background-color: var(--color-gray-200);\n	margin-top: -5rem;\n\n	.IntroBlock-root {\n		padding-top: 5rem;\n		padding-bottom: 5rem;\n	}\n"]);return q=function(){return n},n}function F(){var n=(0,s.Z)(["\n	position: absolute;\n	height: 100%;\n	width: 100%;\n	overflow: hidden;\n"]);return F=function(){return n},n}function E(){var n=(0,s.Z)(["\n	height: 100%;\n	position: relative;\n\n	img {\n		width: 100%;\n		opacity: 0.25;\n		height: 100%;\n		object-fit: cover;\n		object-position: center center;\n	}\n\n	.Block-root {\n		position: absolute;\n		width: 100%;\n		color: white;\n		z-index: 2;\n\n		padding-block: 3rem !important;\n		bottom: 0;\n\n		.Container-root {\n			line-height: 1;\n\n			.Slide-heading {\n				text-align: center;\n\n				"," {\n					text-align: left;\n				}\n			}\n		}\n	}\n\n	&:nth-of-type(1n) .Slide-heading {\n		color: var(--color-brand-cyan-dark);\n	}\n\n	&:nth-of-type(2n) .Slide-heading {\n		color: var(--color-brand-magenta-dark);\n	}\n\n	&:nth-of-type(3n) .Slide-heading {\n		color: var(--color-brand-yellow-dark);\n	}\n\n	&:nth-of-type(4n) .Slide-heading {\n		color: var(--color-brand-yellow-dark);\n	}\n"]);return E=function(){return n},n}function _(){var n=(0,s.Z)(["\n		position: relative;\n		display: grid;\n		grid-template-columns: 1fr;\n		align-items: center;\n		justify-content: center;\n\n		.content {\n			display: grid;\n			grid-template-columns: 1fr;\n			gap: 1rem;\n			align-content: center;\n			justify-items: center;\n			border-radius: 0.5rem;\n			text-align: center;\n\n			.Text-root {\n				max-width: ","px;\n			}\n		}\n\n		.image {\n		}\n\n		"," {\n			grid-template-columns: 1fr 1fr;\n\n			.content {\n				padding-inline: 0;\n				justify-items: start;\n				text-align: left;\n			}\n		}\n	"]);return _=function(){return n},n}var A=[{src:"assets/sash-hs-min@1280w.webp",alt:"Sashes"},{src:"assets/embroidery-shirts-min@1280w.webp",alt:"Embroidery"},{src:"assets/laughing-group-min@1280w.webp",alt:"T-Shirts"}],G=(0,c.ZP)("div")(q()),H=(0,c.ZP)(I.l)(F()),W=(0,c.ZP)(I.q)(E(),function(n){return n.theme.breakpoints.up("lg")}),M=(0,c.ZP)("div")(function(n){var e=n.theme;return(0,d.iv)(_(),e.breakpoints.values.sm,e.breakpoints.up("lg"))}),V=function(n){var e=n.description,t=(0,B.useRouter)();return(0,i.jsxs)(G,{children:[(0,i.jsx)(H,{children:A.map(function(n){return(0,i.jsxs)(W,{children:[(0,i.jsx)("img",{src:n.src,alt:n.alt}),(0,i.jsx)(p.g,{children:(0,i.jsx)(h.W,{children:(0,i.jsx)(g.X,{className:"Slide-heading",level:2,children:n.alt})})})]},n.alt)})}),(0,i.jsx)(h.W,{className:"IntroBlock-root",children:(0,i.jsxs)(M,{children:[(0,i.jsxs)(p.g,{className:"content",children:[(0,i.jsxs)(g.X,{level:1,children:["Welcome to ",(0,i.jsx)(C.Z,{})]}),(0,i.jsx)(w.x,{size:"large",children:e}),(0,i.jsx)(k.k,{size:"large",actions:[{label:"Get Started",color:"primary",href:"".concat(t.basePath,"/services"),endIcon:(0,i.jsx)(z,{})},{label:"Book Appointment",href:"".concat(t.basePath,"/book-appointment"),color:"text",endIcon:(0,i.jsx)(z,{})}]})]}),(0,i.jsx)("div",{className:"image"})]})})]})},L=t(7331),R=t(5843),X=t(9630),O=t(1796),U=t(9808),Q=t.n(U),Y=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"background",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return[(0,O.Fq)(Q().red[500],t),(0,O.Fq)(Q().orange[500],t),(0,O.Fq)(Q().green[500],t),(0,O.Fq)(Q().blue[500],t),(0,O.Fq)(Q().purple[500],t)].reduce(function(t,r,i){return"\n		".concat(t,"\n		&:nth-of-type(").concat(i+1,"n) ").concat(e," {\n			").concat(n,": ").concat(r,";\n		}\n	")},"")},J=t(2546),K=t(4733),$=t(2340);function nn(){var n=(0,s.Z)(["\n		max-width: ","px;\n\n		.ActionStack-root {\n			margin-top: 1.5rem;\n		}\n\n		.Heading-root {\n			margin-bottom: 0.5rem;\n		}\n	"]);return nn=function(){return n},n}function ne(){var n=(0,s.Z)(["\n		display: grid;\n		grid-template-columns: 1fr;\n		gap: 3rem;\n\n		.Container-root {\n			text-align: center;\n			display: grid;\n			grid-template-columns: 1fr;\n			gap: 1rem;\n\n			.ActionStack-root {\n				justify-content: center !important;\n			}\n		}\n\n		.services {\n			display: grid;\n			grid-template-columns: 1fr;\n			gap: 1rem;\n\n			.service {\n				","\n			}\n		}\n\n		"," {\n			.services {\n				row-gap: 3rem;\n				grid-template-columns: repeat(2, 1fr);\n			}\n		}\n\n		"," {\n			.services {\n				grid-template-columns: repeat(3, 1fr);\n			}\n		}\n\n		"," {\n			.services {\n				grid-template-columns: repeat(5, 1fr);\n			}\n		}\n	"]);return ne=function(){return n},n}(0,c.ZP)("div")(function(n){var e=n.theme;return(0,d.iv)(nn(),e.breakpoints.values.sm)});var nt=(0,c.ZP)("div")(function(n){var e=n.theme;return(0,d.iv)(ne(),Y("background",".image"),e.breakpoints.up("sm"),e.breakpoints.up("md"),e.breakpoints.up("lg"))}),nr=function(n){var e=n.title,t=n.subtitle,r=n.description,a=n.services,o=(0,l.Z)(function(n){return n.breakpoints.up("md")}),s=(0,B.useRouter)(),c=o?K.Z:$.L;return(0,i.jsx)(p.g,{children:(0,i.jsx)(h.W,{children:(0,i.jsxs)(nt,{children:[(0,i.jsxs)(h.W,{size:"small",children:[(0,i.jsx)(X.Z,{variant:"overline",children:t}),(0,i.jsx)(g.X,{level:2,children:e}),(0,i.jsx)(X.Z,{variant:"body2",children:r})]}),(0,i.jsx)("div",{className:"services",children:null==a?void 0:a.map(function(n){return(0,i.jsx)(c,{className:"service",title:n.name,description:n.summary,image:n.image,imageColor:n.color},n.id)})}),(0,i.jsx)(h.W,{size:"small",children:(0,i.jsxs)(k.k,{align:"center",color:"secondary",children:[(0,i.jsx)(J.z,{color:"secondary",href:"".concat(s.basePath,"/services"),endIcon:(0,i.jsx)(L.Z,{}),children:"View All Services"}),(0,i.jsx)(J.z,{color:"text",endIcon:(0,i.jsx)(R.Z,{}),children:"Contact Us"})]})})]})})})},ni=t(9877),na=t(4218),no=!0,ns=function(n){return(0,i.jsxs)(na.H,{showYelp:!0,children:[(0,i.jsx)(ni.V,{text:"Home"}),(0,i.jsx)(V,(0,r.Z)({},n.IntroBlockProps)),(0,i.jsx)(o.H,(0,r.Z)({},n.FeaturedInBlockProps)),(0,i.jsx)(a.t,{}),(0,i.jsx)(nr,(0,r.Z)({},n.ServicesPreviewBlockProps)),(0,i.jsx)(P,(0,r.Z)({},n.GalleryBlockProps))]})}}},function(n){n.O(0,[492,740,583,558,75,218,505,742,774,888,179],function(){return n(n.s=8312)}),_N_E=n.O()}]);