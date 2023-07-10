import{_ as Y}from"./extends-98964cd2.js";import{_ as ee}from"./createTheme-952d4be4.js";import{a as X,r as a}from"./index-570b25c1.js";import{c as E}from"./clsx.m-1229b3e0.js";import{s as te}from"./styled-943e38cb.js";import{g as me,u as be,a as Ue,c as _e}from"./useThemeProps-87902fe6.js";import{j as U,a as ze}from"./emotion-element-6a883da9.browser.esm-c98fbb89.js";import{k as ne}from"./emotion-react.browser.esm-c7009067.js";import{_ as je,a as Oe}from"./assertThisInitialized-e784747a.js";import{u as ue,a as Ke}from"./useIsFocusVisible-81b8ef00.js";import{u as H}from"./useEventCallback-e1b9edb9.js";const ce=X.createContext(null);function oe(e,r){var s=function(t){return r&&a.isValidElement(t)?r(t):t},l=Object.create(null);return e&&a.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=s(n)}),l}function Xe(e,r){e=e||{},r=r||{};function s(d){return d in r?r[d]:e[d]}var l=Object.create(null),n=[];for(var t in e)t in r?n.length&&(l[t]=n,n=[]):n.push(t);var o,c={};for(var u in r){if(l[u])for(o=0;o<l[u].length;o++){var p=l[u][o];c[l[u][o]]=s(p)}c[u]=s(u)}for(o=0;o<n.length;o++)c[n[o]]=s(n[o]);return c}function $(e,r,s){return s[r]!=null?s[r]:e.props[r]}function Ye(e,r){return oe(e.children,function(s){return a.cloneElement(s,{onExited:r.bind(null,s),in:!0,appear:$(s,"appear",e),enter:$(s,"enter",e),exit:$(s,"exit",e)})})}function Ae(e,r,s){var l=oe(e.children),n=Xe(r,l);return Object.keys(n).forEach(function(t){var o=n[t];if(a.isValidElement(o)){var c=t in r,u=t in l,p=r[t],d=a.isValidElement(p)&&!p.props.in;u&&(!c||d)?n[t]=a.cloneElement(o,{onExited:s.bind(null,o),in:!0,exit:$(o,"exit",e),enter:$(o,"enter",e)}):!u&&c&&!d?n[t]=a.cloneElement(o,{in:!1}):u&&c&&a.isValidElement(p)&&(n[t]=a.cloneElement(o,{onExited:s.bind(null,o),in:p.props.in,exit:$(o,"exit",e),enter:$(o,"enter",e)}))}}),n}var We=Object.values||function(e){return Object.keys(e).map(function(r){return e[r]})},He={component:"div",childFactory:function(r){return r}},ie=function(e){je(r,e);function r(l,n){var t;t=e.call(this,l,n)||this;var o=t.handleExited.bind(Oe(t));return t.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},t}var s=r.prototype;return s.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},s.componentWillUnmount=function(){this.mounted=!1},r.getDerivedStateFromProps=function(n,t){var o=t.children,c=t.handleExited,u=t.firstRender;return{children:u?Ye(n,c):Ae(n,o,c),firstRender:!1}},s.handleExited=function(n,t){var o=oe(this.props.children);n.key in o||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(c){var u=Y({},c.children);return delete u[n.key],{children:u}}))},s.render=function(){var n=this.props,t=n.component,o=n.childFactory,c=ee(n,["component","childFactory"]),u=this.state.contextValue,p=We(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,t===null?X.createElement(ce.Provider,{value:u},p):X.createElement(ce.Provider,{value:u},X.createElement(t,c,p))},r}(X.Component);ie.propTypes={};ie.defaultProps=He;const Ge=ie;function qe(e){const{className:r,classes:s,pulsate:l=!1,rippleX:n,rippleY:t,rippleSize:o,in:c,onExited:u,timeout:p}=e,[d,g]=a.useState(!1),b=E(r,s.ripple,s.rippleVisible,l&&s.ripplePulsate),B={width:o,height:o,top:-(o/2)+t,left:-(o/2)+n},h=E(s.child,d&&s.childLeaving,l&&s.childPulsate);return!c&&!d&&g(!0),a.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),U("span",{className:b,style:B,children:U("span",{className:h})})}const Je=me("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=Je,Qe=["center","classes","className"];let G=e=>e,pe,fe,de,he;const Z=550,Ze=80,et=ne(pe||(pe=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),tt=ne(fe||(fe=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),nt=ne(de||(de=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),ot=te("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),it=te(qe,{name:"MuiTouchRipple",slot:"Ripple"})(he||(he=G`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,et,Z,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,tt,Z,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,nt,({theme:e})=>e.transitions.easing.easeInOut),rt=a.forwardRef(function(r,s){const l=be({props:r,name:"MuiTouchRipple"}),{center:n=!1,classes:t={},className:o}=l,c=ee(l,Qe),[u,p]=a.useState([]),d=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.useRef(!1),B=a.useRef(null),h=a.useRef(null),R=a.useRef(null);a.useEffect(()=>()=>{clearTimeout(B.current)},[]);const _=a.useCallback(f=>{const{pulsate:M,rippleX:T,rippleY:k,rippleSize:I,cb:j}=f;p(y=>[...y,U(it,{classes:{ripple:E(t.ripple,m.ripple),rippleVisible:E(t.rippleVisible,m.rippleVisible),ripplePulsate:E(t.ripplePulsate,m.ripplePulsate),child:E(t.child,m.child),childLeaving:E(t.childLeaving,m.childLeaving),childPulsate:E(t.childPulsate,m.childPulsate)},timeout:Z,pulsate:M,rippleX:T,rippleY:k,rippleSize:I},d.current)]),d.current+=1,g.current=j},[t]),F=a.useCallback((f={},M={},T=()=>{})=>{const{pulsate:k=!1,center:I=n||M.pulsate,fakeElement:j=!1}=M;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const y=j?null:R.current,P=y?y.getBoundingClientRect():{width:0,height:0,left:0,top:0};let x,S,D;if(I||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)x=Math.round(P.width/2),S=Math.round(P.height/2);else{const{clientX:L,clientY:V}=f.touches&&f.touches.length>0?f.touches[0]:f;x=Math.round(L-P.left),S=Math.round(V-P.top)}if(I)D=Math.sqrt((2*P.width**2+P.height**2)/3),D%2===0&&(D+=1);else{const L=Math.max(Math.abs((y?y.clientWidth:0)-x),x)*2+2,V=Math.max(Math.abs((y?y.clientHeight:0)-S),S)*2+2;D=Math.sqrt(L**2+V**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{_({pulsate:k,rippleX:x,rippleY:S,rippleSize:D,cb:T})},B.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},Ze)):_({pulsate:k,rippleX:x,rippleY:S,rippleSize:D,cb:T})},[n,_]),z=a.useCallback(()=>{F({},{pulsate:!0})},[F]),N=a.useCallback((f,M)=>{if(clearTimeout(B.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,B.current=setTimeout(()=>{N(f,M)});return}h.current=null,p(T=>T.length>0?T.slice(1):T),g.current=M},[]);return a.useImperativeHandle(s,()=>({pulsate:z,start:F,stop:N}),[z,F,N]),U(ot,Y({className:E(m.root,t.root,o),ref:R},c,{children:U(Ge,{component:null,exit:!0,children:u})}))}),st=rt;function at(e){return Ue("MuiButtonBase",e)}const lt=me("MuiButtonBase",["root","disabled","focusVisible"]),ut=lt,ct=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],pt=e=>{const{disabled:r,focusVisible:s,focusVisibleClassName:l,classes:n}=e,o=_e({root:["root",r&&"disabled",s&&"focusVisible"]},at,n);return s&&l&&(o.root+=` ${l}`),o},ft=te("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,r)=>r.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ut.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),dt=a.forwardRef(function(r,s){const l=be({props:r,name:"MuiButtonBase"}),{action:n,centerRipple:t=!1,children:o,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:B="a",onBlur:h,onClick:R,onContextMenu:_,onDragLeave:F,onFocus:z,onFocusVisible:N,onKeyDown:f,onKeyUp:M,onMouseDown:T,onMouseLeave:k,onMouseUp:I,onTouchEnd:j,onTouchMove:y,onTouchStart:P,tabIndex:x=0,TouchRippleProps:S,touchRippleRef:D,type:L}=l,V=ee(l,ct),O=a.useRef(null),C=a.useRef(null),ge=ue(C,D),{isFocusVisibleRef:re,onFocus:Re,onBlur:Me,ref:Te}=Ke(),[w,A]=a.useState(!1);p&&w&&A(!1),a.useImperativeHandle(n,()=>({focusVisible:()=>{A(!0),O.current.focus()}}),[]);const[q,ye]=a.useState(!1);a.useEffect(()=>{ye(!0)},[]);const Ce=q&&!d&&!p;a.useEffect(()=>{w&&b&&!d&&q&&C.current.pulsate()},[d,b,w,q]);function v(i,ae,Ie=g){return H(le=>(ae&&ae(le),!Ie&&C.current&&C.current[i](le),!0))}const Ee=v("start",T),xe=v("stop",_),Ve=v("stop",F),ve=v("stop",I),Be=v("stop",i=>{w&&i.preventDefault(),k&&k(i)}),Pe=v("start",P),Se=v("stop",j),De=v("stop",y),ke=v("stop",i=>{Me(i),re.current===!1&&A(!1),h&&h(i)},!1),Le=H(i=>{O.current||(O.current=i.currentTarget),Re(i),re.current===!0&&(A(!0),N&&N(i)),z&&z(i)}),J=()=>{const i=O.current;return u&&u!=="button"&&!(i.tagName==="A"&&i.href)},Q=a.useRef(!1),we=H(i=>{b&&!Q.current&&w&&C.current&&i.key===" "&&(Q.current=!0,C.current.stop(i,()=>{C.current.start(i)})),i.target===i.currentTarget&&J()&&i.key===" "&&i.preventDefault(),f&&f(i),i.target===i.currentTarget&&J()&&i.key==="Enter"&&!p&&(i.preventDefault(),R&&R(i))}),$e=H(i=>{b&&i.key===" "&&C.current&&w&&!i.defaultPrevented&&(Q.current=!1,C.current.stop(i,()=>{C.current.pulsate(i)})),M&&M(i),R&&i.target===i.currentTarget&&J()&&i.key===" "&&!i.defaultPrevented&&R(i)});let W=u;W==="button"&&(V.href||V.to)&&(W=B);const K={};W==="button"?(K.type=L===void 0?"button":L,K.disabled=p):(!V.href&&!V.to&&(K.role="button"),p&&(K["aria-disabled"]=p));const Fe=ue(s,Te,O),se=Y({},l,{centerRipple:t,component:u,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:x,focusVisible:w}),Ne=pt(se);return ze(ft,Y({as:W,className:E(Ne.root,c),ownerState:se,onBlur:ke,onClick:R,onContextMenu:xe,onFocus:Le,onKeyDown:we,onKeyUp:$e,onMouseDown:Ee,onMouseLeave:Be,onMouseUp:ve,onDragLeave:Ve,onTouchEnd:Se,onTouchMove:De,onTouchStart:Pe,ref:Fe,tabIndex:p?-1:x,type:L},K,V,{children:[o,Ce?U(st,Y({ref:ge,center:t},S)):null]}))}),vt=dt;export{vt as M,ce as T};
//# sourceMappingURL=ButtonBase-fa5d426c.js.map
