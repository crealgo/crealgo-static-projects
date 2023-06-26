import{_ as g}from"./extends-98964cd2.js";import{r as $}from"./index-570b25c1.js";import{a as w,j as z}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{e as S,_ as C}from"./createTheme-0dc7dae6.js";import{c as R}from"./clsx.m-1229b3e0.js";import{a as b,g as N,u as B,c as M}from"./useThemeProps-4b422382.js";import{s as T}from"./styled-c5161996.js";function j(o){return b("MuiSvgIcon",o)}N("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const U=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],A=o=>{const{color:e,fontSize:t,classes:i}=o,n={root:["root",e!=="inherit"&&`color${S(e)}`,`fontSize${S(t)}`]};return M(n,j,i)},k=T("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.color!=="inherit"&&e[`color${S(t.color)}`],e[`fontSize${S(t.fontSize)}`]]}})(({theme:o,ownerState:e})=>{var t,i,n,d,a,s,c,f,l,r,p,v,m,u,h,y,_;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:(t=o.transitions)==null||(i=t.create)==null?void 0:i.call(t,"fill",{duration:(n=o.transitions)==null||(d=n.duration)==null?void 0:d.shorter}),fontSize:{inherit:"inherit",small:((a=o.typography)==null||(s=a.pxToRem)==null?void 0:s.call(a,20))||"1.25rem",medium:((c=o.typography)==null||(f=c.pxToRem)==null?void 0:f.call(c,24))||"1.5rem",large:((l=o.typography)==null||(r=l.pxToRem)==null?void 0:r.call(l,35))||"2.1875rem"}[e.fontSize],color:(p=(v=(o.vars||o).palette)==null||(m=v[e.color])==null?void 0:m.main)!=null?p:{action:(u=(o.vars||o).palette)==null||(h=u.action)==null?void 0:h.active,disabled:(y=(o.vars||o).palette)==null||(_=y.action)==null?void 0:_.disabled,inherit:void 0}[e.color]}}),I=$.forwardRef(function(e,t){const i=B({props:e,name:"MuiSvgIcon"}),{children:n,className:d,color:a="inherit",component:s="svg",fontSize:c="medium",htmlColor:f,inheritViewBox:l=!1,titleAccess:r,viewBox:p="0 0 24 24"}=i,v=C(i,U),m=g({},i,{color:a,component:s,fontSize:c,instanceFontSize:e.fontSize,inheritViewBox:l,viewBox:p}),u={};l||(u.viewBox=p);const h=A(m);return w(k,g({as:s,className:R(h.root,d),focusable:"false",color:f,"aria-hidden":r?void 0:!0,role:r?"img":void 0,ref:t},u,v,{ownerState:m,children:[n,r?z("title",{children:r}):null]}))});I.muiName="SvgIcon";const x=I;function q(o,e){function t(i,n){return z(x,g({"data-testid":`${e}Icon`,ref:n},i,{children:o}))}return t.muiName=x.muiName,$.memo($.forwardRef(t))}export{q as c};
//# sourceMappingURL=createSvgIcon-0cd10119.js.map