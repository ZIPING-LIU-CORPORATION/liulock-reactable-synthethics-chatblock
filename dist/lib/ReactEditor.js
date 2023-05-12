import"../node_modules/prismjs/prism.js";import"../node_modules/prismjs/components.js";import"../node_modules/prismjs/components/prism-core.js";import"../node_modules/prismjs/components/prism-clike.js";import"../node_modules/prismjs/components/prism-javascript.js";import"../node_modules/prismjs/components/prism-typescript.js";import"../node_modules/prismjs/themes/prism-tomorrow.css.js";import e from"../node_modules/react-simple-code-editor/lib/index.js";function t(t){var s=window.Prism,o=s.highlight,a=s.languages,i=window.React,r=i.useState(""),l=r[0],c=r[1],m=i.useState(!1),d=m[0],p=m[1],u=i.useState([]),g=u[0],h=u[1],y=(null==t?void 0:t.debug)||!1,f=function(){var e=g;e.push({message:l,name:"You",timestamp:Date.now()}),h(e),function(e){var n=e.includes("?")&&!e.includes("->")?e+"-> ":e,s=new XMLHttpRequest;s.open("POST","https://liu.academy/synth/ethics",!0),s.setRequestHeader("Content-Type","application/json"),s.onreadystatechange=function(){if(4===s.readyState){if(200===s.status){console.info("Request succeeded");var e=document.querySelector("".concat((null==t?void 0:t.blockId)?"#editor-"+t.blockId+" > ":"","#typing"));e&&e.classList.remove("active");var n=s.responseText,o="";try{var a=JSON.parse(n);o=null==a?void 0:a.completion}catch(e){y&&console.log(e,"error at json parse"),o=(null==e?void 0:e.toString())||"error"}o.match(/[^\.!\?]+[\.!\?]+/g);var i=g;i.push({message:o,name:"Synthethics",timestamp:Date.now()}),h(i),console.log("completion",o),console.log("messages",g),p(!0)}}else 3===s.readyState?y&&console.info("loading..."):2===s.readyState?y&&console.info("loaded"):1===s.readyState&&y&&console.info("opened")};var o={prompt:n};y&&console.info('Sending + "'+JSON.stringify(o)+'"');var a=document.querySelector("".concat((null==t?void 0:t.blockId)?"#editor-"+t.blockId+" > ":"","#typing"));console.log("theColumn",a),a&&a.classList.add("active"),s.send(JSON.stringify(o))}(l),c("")};return!0===d&&(p(!1),c("")),i.createElement(i.Fragment,null,i.createElement("div",{id:"chat_box_body",className:"chat-box-body"},i.createElement("div",{id:"chat_messages"},0===(null==g?void 0:g.length)?i.createElement(n,{message:"Welcome to Synthethics! Type a question to get started, e.g. 'What does ethics mean to Ziping Liu?'",name:"Synthethics",timestamp:Date.now(),userVisitor:!1}):null==g?void 0:g.map((function(e,t){return i.createElement(n,{message:e.message,name:e.name,timestamp:e.timestamp,key:t,userVisitor:"You"===e.name})})))),i.createElement("div",{id:"typing"},i.createElement("div",null,i.createElement("span",null)," ",i.createElement("span",null)," ",i.createElement("span",null)," ",i.createElement("span",{className:"n"},"Synthethics")," is typing...")),i.createElement("div",{className:"chat-box-footer"},i.createElement(e,{id:"chat_input",placeholder:"Enter your message here...",defaultValue:"",onValueChange:function(e){c(e)},highlight:function(e){return o(e,a.ts,"typescript")},value:l,onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),e.stopPropagation(),f())}}),i.createElement("button",{id:"send",onClick:function(e){e.preventDefault(),f()}},i.createElement("svg",{style:{width:24,height:24},viewBox:"0 0 24 24"},i.createElement("path",{fill:"#006ae3",d:"M2,21L23,12L2,3V10L17,12L2,14V21Z"})))))}function n(e){var t=window.React;return t.createElement(t.Fragment,null,t.createElement("div",{className:e.userVisitor?"profile my-profile":"profile other-profile"},t.createElement("img",{src:"https://images.unsplash.com/photo-1537396123722-b93d0acd8848?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=efc6e85c24d3cfdd15cd36cb8a2471ed",width:"30",height:"30"}),t.createElement("span",null,"You"===e.name?"You™":"Synthethics™")),t.createElement("div",{className:"message ".concat(e.userVisitor?"my-message":"other-message")},e.message))}export{t as default};
//# sourceMappingURL=ReactEditor.js.map
