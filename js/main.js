// //lib call
// import { insertHTML } from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.4/croot.js";
// import { onHashChange } from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.4/croot.js";
// import { getHash } from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.2/croot.js";
// //internal call
// import { url } from "./helpers/urlConfig.js";

// function getURLContentHTML() {
//   let hashlink = getHash();
//   switch (hashlink) {
//     case "register":
//       return url.pages.register + "wrapper-register.html";
//     default:
//       return url.pages.register + "wrapper-register.html";
//   }
// }

// function getURLContentJS() {
//   let hashlink = getHash();
//   switch (hashlink) {
//     case "register":
//       return url.pages.register + "register.js";
//     default:
//       return url.pages.register + "register.js";
//   }
// }

// insertHTML(getURLContentHTML(), "main", runAfterContent);
// onHashChange(runAfterHashChange);

// function runAfterHashChange(evt) {
//   insertHTML(getURLContentHTML(), "main", runAfterContent);
// }

// async function runAfterContent() {
//   let urljs = getURLContentJS();
//   let module = await import(urljs);
//   module.main();
//   console.log("urljs : " + urljs);
// }

// export async function loadScript(src) {
//   return new Promise((resolve, reject) => {
//     const script = document.createElement("script");
//     script.src = src;
//     script.onload = resolve;
//     script.onerror = reject;
//     document.head.appendChild(script);
//   });
// }