(function(){"use strict";var n={8272:function(n,e,o){var t=o(9242),r=o(3396);function a(n,e,o,t,a,c){const i=(0,r.up)("HelloWorld");return(0,r.wg)(),(0,r.j4)(i)}const c=(0,r.uE)('<div class="container" data-v-63316e1b><video class="input_video" data-v-63316e1b></video><div class="canvas-container" data-v-63316e1b><canvas class="output_canvas" width="1280px" height="720px" data-v-63316e1b></canvas></div></div><div class="control-panel" data-v-63316e1b></div>',2);function i(n,e,o,t,r,a){return c}var s=o(3767),u=o(5726),d=o(9880);function l(){const n=document.getElementsByClassName("input_video")[0],e=document.getElementsByClassName("output_canvas")[0],o=e.getContext("2d");function t(n){if(o.save(),o.clearRect(0,0,e.width,e.height),o.drawImage(n.image,0,0,e.width,e.height),n.multiFaceLandmarks)for(const e of n.multiFaceLandmarks)(0,u.drawConnectors)(o,e,d.FACEMESH_TESSELATION,{color:"#C0C0C070",lineWidth:1}),(0,u.drawConnectors)(o,e,d.FACEMESH_RIGHT_EYE,{color:"#FF3030"}),(0,u.drawConnectors)(o,e,d.FACEMESH_RIGHT_EYEBROW,{color:"#FF3030"}),(0,u.drawConnectors)(o,e,d.FACEMESH_RIGHT_IRIS,{color:"#FF3030"}),(0,u.drawConnectors)(o,e,d.FACEMESH_LEFT_EYE,{color:"#30FF30"}),(0,u.drawConnectors)(o,e,d.FACEMESH_LEFT_EYEBROW,{color:"#30FF30"}),(0,u.drawConnectors)(o,e,d.FACEMESH_LEFT_IRIS,{color:"#30FF30"}),(0,u.drawConnectors)(o,e,d.FACEMESH_FACE_OVAL,{color:"#E0E0E0"}),(0,u.drawConnectors)(o,e,d.FACEMESH_LIPS,{color:"#E0E0E0"});o.restore()}const r=new d.FaceMesh({locateFile:n=>(console.log(n),console.log(`@/assets/js/face_mesh/${n}`),`https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${n}`)});console.log(r),r.setOptions({maxNumFaces:1,refineLandmarks:!0,minDetectionConfidence:.5,minTrackingConfidence:.5}),r.onResults(t);const a=new s.Camera(n,{onFrame:async()=>{await r.send({image:n})},width:1280,height:720});a.start()}var f={setup(){(0,r.bv)((()=>{l()}))}},v=o(89);const E=(0,v.Z)(f,[["render",i],["__scopeId","data-v-63316e1b"]]);var p=E,m={name:"App",components:{HelloWorld:p}};const h=(0,v.Z)(m,[["render",a]]);var F=h;(0,t.ri)(F).mount("#app")}},e={};function o(t){var r=e[t];if(void 0!==r)return r.exports;var a=e[t]={exports:{}};return n[t].call(a.exports,a,a.exports,o),a.exports}o.m=n,function(){var n=[];o.O=function(e,t,r,a){if(!t){var c=1/0;for(d=0;d<n.length;d++){t=n[d][0],r=n[d][1],a=n[d][2];for(var i=!0,s=0;s<t.length;s++)(!1&a||c>=a)&&Object.keys(o.O).every((function(n){return o.O[n](t[s])}))?t.splice(s--,1):(i=!1,a<c&&(c=a));if(i){n.splice(d--,1);var u=r();void 0!==u&&(e=u)}}return e}a=a||0;for(var d=n.length;d>0&&n[d-1][2]>a;d--)n[d]=n[d-1];n[d]=[t,r,a]}}(),function(){o.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(e,{a:e}),e}}(),function(){o.d=function(n,e){for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};o.O.j=function(e){return 0===n[e]};var e=function(e,t){var r,a,c=t[0],i=t[1],s=t[2],u=0;if(c.some((function(e){return 0!==n[e]}))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(s)var d=s(o)}for(e&&e(t);u<c.length;u++)a=c[u],o.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return o.O(d)},t=self["webpackChunkmediapipe"]=self["webpackChunkmediapipe"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(8272)}));t=o.O(t)})();
//# sourceMappingURL=app.b678f8fc.js.map