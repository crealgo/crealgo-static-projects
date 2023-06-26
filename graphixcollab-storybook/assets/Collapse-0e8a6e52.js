import{a as Z,_ as tt}from"./createTheme-0dc7dae6.js";import{_ as o}from"./extends-98964cd2.js";import{r as d}from"./index-570b25c1.js";import{c as et}from"./clsx.m-1229b3e0.js";import{s as T}from"./styled-c5161996.js";import{a as nt,g as it,u as ot,c as rt}from"./useThemeProps-4b422382.js";import{T as st,g as A}from"./utils-ecc8b08b.js";import{u as at}from"./useTheme-cd93cc18.js";import{j as C}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{u as lt}from"./useIsFocusVisible-81b8ef00.js";function pt(n){return nt("MuiCollapse",n)}it("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const dt=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],ct=n=>{const{orientation:e,classes:r}=n,c={root:["root",`${e}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${e}`],wrapperInner:["wrapperInner",`${e}`]};return rt(c,pt,r)},ut=T("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:r}=n;return[e.root,e[r.orientation],r.state==="entered"&&e.entered,r.state==="exited"&&!r.in&&r.collapsedSize==="0px"&&e.hidden]}})(({theme:n,ownerState:e})=>o({height:0,overflow:"hidden",transition:n.transitions.create("height")},e.orientation==="horizontal"&&{height:"auto",width:0,transition:n.transitions.create("width")},e.state==="entered"&&o({height:"auto",overflow:"visible"},e.orientation==="horizontal"&&{width:"auto"}),e.state==="exited"&&!e.in&&e.collapsedSize==="0px"&&{visibility:"hidden"})),ht=T("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(n,e)=>e.wrapper})(({ownerState:n})=>o({display:"flex",width:"100%"},n.orientation==="horizontal"&&{width:"auto",height:"100%"})),mt=T("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(n,e)=>e.wrapperInner})(({ownerState:n})=>o({width:"100%"},n.orientation==="horizontal"&&{width:"auto",height:"100%"})),U=d.forwardRef(function(e,r){const c=ot({props:e,name:"MuiCollapse"}),{addEndListener:S,children:b,className:j,collapsedSize:g="0px",component:k,easing:$,in:D,onEnter:W,onEntered:I,onEntering:L,onExit:M,onExited:q,onExiting:F,orientation:H="vertical",style:z,timeout:a=Z.standard,TransitionComponent:B=st}=c,G=tt(c,dt),E=o({},c,{orientation:H,collapsedSize:g}),u=ct(E),N=at(),P=d.useRef(),l=d.useRef(null),v=d.useRef(),x=typeof g=="number"?`${g}px`:g,h=H==="horizontal",m=h?"width":"height";d.useEffect(()=>()=>{clearTimeout(P.current)},[]);const w=d.useRef(null),J=lt(r,w),p=t=>i=>{if(t){const s=w.current;i===void 0?t(s):t(s,i)}},R=()=>l.current?l.current[h?"clientWidth":"clientHeight"]:0,K=p((t,i)=>{l.current&&h&&(l.current.style.position="absolute"),t.style[m]=x,W&&W(t,i)}),O=p((t,i)=>{const s=R();l.current&&h&&(l.current.style.position="");const{duration:f,easing:y}=A({style:z,timeout:a,easing:$},{mode:"enter"});if(a==="auto"){const _=N.transitions.getAutoHeightDuration(s);t.style.transitionDuration=`${_}ms`,v.current=_}else t.style.transitionDuration=typeof f=="string"?f:`${f}ms`;t.style[m]=`${s}px`,t.style.transitionTimingFunction=y,L&&L(t,i)}),Q=p((t,i)=>{t.style[m]="auto",I&&I(t,i)}),V=p(t=>{t.style[m]=`${R()}px`,M&&M(t)}),X=p(q),Y=p(t=>{const i=R(),{duration:s,easing:f}=A({style:z,timeout:a,easing:$},{mode:"exit"});if(a==="auto"){const y=N.transitions.getAutoHeightDuration(i);t.style.transitionDuration=`${y}ms`,v.current=y}else t.style.transitionDuration=typeof s=="string"?s:`${s}ms`;t.style[m]=x,t.style.transitionTimingFunction=f,F&&F(t)});return C(B,o({in:D,onEnter:K,onEntered:Q,onEntering:O,onExit:V,onExited:X,onExiting:Y,addEndListener:t=>{a==="auto"&&(P.current=setTimeout(t,v.current||0)),S&&S(w.current,t)},nodeRef:w,timeout:a==="auto"?null:a},G,{children:(t,i)=>C(ut,o({as:k,className:et(u.root,j,{entered:u.entered,exited:!D&&x==="0px"&&u.hidden}[t]),style:o({[h?"minWidth":"minHeight"]:x},z),ownerState:o({},E,{state:t}),ref:J},i,{children:C(ht,{ownerState:o({},E,{state:t}),className:u.wrapper,ref:l,children:C(mt,{ownerState:o({},E,{state:t}),className:u.wrapperInner,children:b})})}))}))});U.muiSupportAuto=!0;const St=U;export{St as C};
//# sourceMappingURL=Collapse-0e8a6e52.js.map