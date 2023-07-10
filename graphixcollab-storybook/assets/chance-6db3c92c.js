import{C as c}from"./chance-599dc973.js";const e=new c,s=()=>e.word({capitalize:!0,syllables:3}),a=()=>({avatar:e.avatar(),photo:`https://picsum.photos/200?random=${Math.random()}`,name:e.name(),username:e.twitter()}),l=()=>({...a(),employeeId:e.guid(),jobTitle:e.profession(),interests:e.n(e.word,3)}),p=(t=3)=>e.n(l,t),d=()=>({title:"Employee Group",description:e.sentence(),profiles:p(e.d10())}),y=(t=2)=>e.n(d,t),g=()=>({author:a(),postDate:e.date().toString(),summary:e.paragraph(),tags:e.n(e.word,3),title:e.sentence({words:3}),url:e.url()}),v=(t=5)=>e.n(g,t),h=()=>({href:e.url(),label:s()}),r=(t=3)=>e.n(h,t),o=(t=300)=>`https://picsum.photos/${t}?random=${e.natural()}`,u=(t=5)=>e.n(()=>o(),t),m=()=>({label:s(),ImageProps:{src:o(),alt:e.sentence({words:5})}}),k=(t=4)=>e.n(()=>m(),t),q=(t=5)=>e.n(()=>{const n=s();return{label:n,value:n}},t),I=()=>({children:"⚡️⚡️ It's sash season!! Don't wait too long, spots are filling up."}),i=t=>{const n=e.bool();return{label:s(),...t&&n&&{subItems:e.n(()=>i(!1),5)}}},f=(t=3)=>e.n(()=>i(!0),t),S=()=>({}),W=()=>({title:"Graphix Collab",description:e.sentence({words:15}),meta:e.n(()=>({term:e.sentence({words:3}),description:e.sentence()}),3)}),x=()=>({title:e.sentence({words:5}),meta:e.sentence({words:3}),description:e.sentence(),actions:r(2)}),B=()=>({title:"Our process",description:"We specialize in creating bold, eye-catching designs that are perfect for t-shirts, posters, stickers, and more. Whether you need a small run of custom t-shirts for your business or a large order of promotional materials for an event, we can help. Here's a glimpse of our process below",TimelineProps:{selectedIndex:1}}),A=()=>({title:"See what we're up to",description:"With years of experience in the industry, we have the expertise and equipment necessary to produce stunning prints on a wide range of materials, including fabric, paper, metal, glass, and plastic. Follow us for an inside scoop of what's going on behind the scenes.",SocialMediaBlockProps:{text:"@fashiongreekusc",url:e.url(),actions:[{label:"Follow"},{label:"Share"}]},images:Array.from({length:10},(t,n)=>({alt:"Dog Picture",src:`https://picsum.photos/200?random=${n}`})),actions:r()}),F=()=>({title:"Clean, High Quality.",subtitle:"A Small Caption",description:"Our team of skilled designers and technicians is dedicated to delivering exceptional customer service and top-notch results. We work closely with our clients to ensure that their vision is brought to life, and we are always happy to provide guidance and advice on design and printing options.",actions:[{label:"Get Started"},{label:"Book an Appointment"}]}),P=()=>({title:"Page Title",breadcrumbs:e.n(()=>({href:e.url(),label:s()}),3),navigationItems:f(),navigationType:"anchor-link"}),w=()=>[{question:"What is screen printing?",answer:'Screen printing is a printing technique that involves using a mesh stencil (or "screen") to transfer ink onto a substrate, such as a t-shirt, poster, or sticker.'},{question:"What types of materials can be screen printed?",answer:"Screen printing can be done on a wide variety of materials, including fabric, paper, metal, glass, and plastic."},{question:"What are the advantages of screen printing?",answer:"Screen printing is a versatile and cost-effective printing method that can produce high-quality, long-lasting prints. It can also be used to print on a wide range of materials and is suitable for both large and small production runs."},{question:"What is the process of screen printing?",answer:'The process of screen printing involves creating a stencil, or "screen" of the design to be printed, which is then placed over the substrate. Ink is then applied to the screen and forced through the mesh onto the substrate using a squeegee. This process can be repeated for multiple colors or layers.'},{question:"What types of designs are suitable for screen printing?",answer:"Screen printing is best suited for designs with bold, solid colors or simple, graphic shapes. It is less suitable for designs with fine details or complex gradients."},{question:"What is the turnaround time for a screen printing order?",answer:"Turnaround times for screen printing orders can vary depending on the size of the order and the complexity of the design. Generally, orders can be completed within a few days to a few weeks."},{question:"Can I provide my own artwork for screen printing?",answer:"Yes, most screen printing companies will accept customer-provided artwork. However, it is important to ensure that the artwork meets certain technical specifications to ensure the best possible print quality."}],T=()=>({title:"Frequently Asked Questions",faqs:w()}),C=()=>({title:e.sentence({words:3}),description:e.paragraph({sentences:3}),images:u(),actions:r(2),ActionStackProps:{text:e.sentence()}});export{q as a,g as b,e as c,a as d,l as e,r as f,I as g,x as h,C as i,v as j,P as k,y as l,k as m,A as n,B as o,S as p,F as q,W as r,T as s};
//# sourceMappingURL=chance-6db3c92c.js.map