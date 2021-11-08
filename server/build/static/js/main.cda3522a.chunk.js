(this.webpackJsonpmusicals=this.webpackJsonpmusicals||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(26),i=c.n(s),l=(c(33),c(3)),o=(c(34),c(5)),r=c(0),u=function(){return Object(r.jsxs)("nav",{className:"navbar",children:[Object(r.jsx)(o.b,{to:"/",children:Object(r.jsx)("h1",{children:"The Musical Review"})}),Object(r.jsxs)("div",{className:"links",children:[Object(r.jsx)(o.b,{to:"/",children:"Home"}),Object(r.jsx)(o.b,{to:"/create",className:"new-button",children:"New Musical"})]})]})},j=function(e){var t=e.musicals;return Object(r.jsx)("div",{className:"musical-list",children:t.map((function(e){return Object(r.jsx)("div",{className:"musical-preview",children:Object(r.jsx)(o.b,{to:"/musicals/".concat(e.key),children:Object(r.jsx)("h2",{children:e.name})})},e.key)}))})},b=c(10),d=c.n(b),h=function(e){var t=e.musicals,c=e.setMusicals,a=e.serverBase;return Object(n.useEffect)((function(){d.a.get(a).then((function(e){c(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(r.jsx)("div",{className:"home",children:t&&Object(r.jsx)(j,{musicals:t,setMusicals:c,serverBase:a})})},m=c(2),O=function(e){var t=function(e){var t=Object(n.useState)(new Audio(e)),c=Object(l.a)(t,1)[0],a=Object(n.useState)(!0),s=Object(l.a)(a,2),i=s[0],o=s[1];return Object(n.useEffect)((function(){i?c.play():c.pause()}),[i]),Object(n.useEffect)((function(){return console.log("player loaded"),c.addEventListener("ended",(function(){return o(!1)})),function(){o(!1),console.log("player out"+i),c.removeEventListener("ended",(function(){return o(!1)}))}}),[]),[i,function(){return o(!i)}]}(e.url),c=Object(l.a)(t,2),a=c[0],s=c[1];return Object(r.jsx)("div",{className:"player",children:Object(r.jsx)("button",{onClick:s,className:"audio-button",children:a?"\u23f8":"\u25b7"})})},x=function(e){var t=e.oldName,c=e.oldContent,a=e.oldImage,s=e.oldMusic,i=e.serverBase,o=e.setEdit,u=Object(m.g)().id,j=Object(n.useState)(t),b=Object(l.a)(j,2),h=b[0],O=b[1],x=Object(n.useState)(c),f=Object(l.a)(x,2),p=f[0],v=f[1],g=Object(n.useState)(a),N=Object(l.a)(g,2),y=N[0],w=N[1],E=Object(n.useState)(s),M=Object(l.a)(E,2),S=M[0],C=M[1];Object(m.f)();return Object(r.jsxs)("div",{className:"create",children:[Object(r.jsx)("h2",{children:"Edit Musical"}),Object(r.jsxs)("form",{onSubmit:function(e){console.log("Handle edit!"),e.preventDefault();var t={name:h,content:p,image:y,music:S};d.a.put("".concat(i,"/").concat(u),t).then((function(e){console.log(e)})).catch((function(e){console.log("Error here: ".concat(e))})),o(!1),window.location.reload()},children:[Object(r.jsx)("label",{children:"Musical name:"}),Object(r.jsx)("input",{type:"text",required:!0,value:h,onChange:function(e){return O(e.target.value)}}),Object(r.jsx)("label",{children:"Content:"}),Object(r.jsx)("textarea",{rows:"10",required:!0,value:p,onChange:function(e){return v(e.target.value)}}),Object(r.jsx)("label",{id:"bbb",children:"Image:"}),Object(r.jsx)("input",{type:"file",id:"input_img",onChange:function(){var e=document.getElementById("input_img"),t=new FormData;t.append("image",e.files[0]);d.a.post("https://api.imgbb.com/1/upload?key=ae0b2df60c0f04a52ed1be38b3a78be6",t,{timeout:0,processData:!1,mimeType:"multipart/form-data",contentType:!1}).then((function(e){w(e.data.data.url)})).catch((function(e){console.log("Error here: ".concat(e))}))}}),Object(r.jsxs)("label",{children:["Music Link: (Please signup and upload onto ",Object(r.jsx)("a",{href:"https://mailboxdrive.com/",children:"MailboxDrive"}),", then paste the link here. Please upload instrumental covers, no copyrighted materials.)"]}),Object(r.jsx)("input",{type:"text",required:!0,value:S,onChange:function(e){return C(e.target.value)}}),Object(r.jsx)("button",{children:"Submit"})]})]})},f=function(e){var t=e.serverBase,c=Object(m.g)().id,a=Object(n.useState)(),s=Object(l.a)(a,2),i=s[0],o=s[1],u=Object(n.useState)(!1),j=Object(l.a)(u,2),b=j[0],h=j[1],f=Object(m.f)();return Object(n.useEffect)((function(){d.a.get("".concat(t,"/").concat(c)).then((function(e){o(e.data[0]),console.log(e.data[0])})).catch((function(e){console.log(e)}))}),[]),Object(r.jsx)("div",{children:i&&Object(r.jsxs)("div",{className:"musical-details",children:[Object(r.jsx)(O,{url:i.music}),Object(r.jsxs)("div",{className:"split-container",children:[Object(r.jsx)("div",{className:"split left",children:Object(r.jsx)("img",{className:"musical-image",src:i.image,alt:"new"})}),Object(r.jsxs)("div",{className:"split right",children:[Object(r.jsxs)("div",{className:"buttons-container",children:[!b&&Object(r.jsx)("button",{onClick:function(){h(!0)},className:"edit-button",children:"\u270f\ufe0f  EDIT"}),b&&Object(r.jsx)("button",{onClick:function(){h(!1)},className:"edit-button",children:"\u2716  CLOSE EDIT"}),Object(r.jsx)("button",{onClick:function(){window.confirm("Are you sure you want to delete?")&&(d.a.delete("".concat(t,"/").concat(c)).then((function(){alert("Post deleted!"),o(null)})).catch((function(e){console.log(e)})),f.push("/"),window.location.reload())},className:"delete-button",children:"\u26a0\ufe0f  DELETE"})]}),!b&&Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:i.name}),Object(r.jsx)("div",{className:"musical-content",children:i.content})]}),b&&Object(r.jsx)(x,{oldName:i.name,oldContent:i.content,oldImage:i.image,oldMusic:i.music,serverBase:t,setEdit:h})]})]})]})})},p=function(e){e.musicals,e.setMusicals;var t=e.serverBase,c=Object(n.useState)(""),a=Object(l.a)(c,2),s=a[0],i=a[1],o=Object(n.useState)(""),u=Object(l.a)(o,2),j=u[0],b=u[1],h=Object(n.useState)(""),O=Object(l.a)(h,2),x=O[0],f=O[1],p=Object(n.useState)(),v=Object(l.a)(p,2),g=v[0],N=v[1],y=Object(m.f)();return Object(r.jsxs)("div",{className:"create",children:[Object(r.jsx)("h2",{children:"Add a New Musical"}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c={name:s,content:j,image:x,music:g};d.a.post(t,c).then((function(e){console.log(e)})).catch((function(e){console.log("Error here: ".concat(e))})),y.push("/"),window.location.reload()},children:[Object(r.jsx)("label",{children:"Musical name:"}),Object(r.jsx)("input",{type:"text",required:!0,value:s,onChange:function(e){return i(e.target.value)}}),Object(r.jsx)("label",{children:"Content:"}),Object(r.jsx)("textarea",{row:"10",required:!0,value:j,onChange:function(e){return b(e.target.value)}}),Object(r.jsx)("label",{id:"bbb",children:"Image:"}),Object(r.jsx)("input",{type:"file",id:"input_img",onChange:function(){var e=document.getElementById("input_img"),t=new FormData;t.append("image",e.files[0]);d.a.post("https://api.imgbb.com/1/upload?key=ae0b2df60c0f04a52ed1be38b3a78be6",t,{timeout:0,processData:!1,mimeType:"multipart/form-data",contentType:!1}).then((function(e){f(e.data.data.url)})).catch((function(e){console.log("Error here: ".concat(e))}))}}),Object(r.jsxs)("label",{children:["Music Link: (Please signup and upload onto ",Object(r.jsx)("a",{href:"https://mailboxdrive.com/",children:"MailboxDrive"}),", then paste the link here. Please upload instrumental covers, no copyrighted materials.)"]}),Object(r.jsx)("input",{type:"text",required:!0,value:g,onChange:function(e){return N(e.target.value)}}),Object(r.jsx)("button",{children:"Submit"})]})]})},v="http://localhost:8000/musicals";var g=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(r.jsx)(o.a,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(u,{}),Object(r.jsx)("div",{className:"content",children:Object(r.jsxs)(m.c,{children:[Object(r.jsx)(m.a,{path:"/musicals/:id",children:Object(r.jsx)(f,{musicals:c,setMusicals:a,serverBase:v})}),Object(r.jsx)(m.a,{path:"/create",children:Object(r.jsx)(p,{musicals:c,setMusicals:a,serverBase:v})}),Object(r.jsx)(m.a,{path:"/",children:Object(r.jsx)(h,{musicals:c,setMusicals:a,serverBase:v})})]})})]})})};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.cda3522a.chunk.js.map