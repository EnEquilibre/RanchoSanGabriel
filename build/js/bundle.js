const contenedorActividades=document.getElementById("actividades"),mostrarActividades=async()=>{try{const e=await fetch("actividades.json"),t=await e.json(),{actividades:n}=t,a=document.createDocumentFragment();n.forEach(e=>{const{id:t,actividad:n,status:o,informacion:i}=e,s=document.createElement("DIV"),c=document.createElement("H2"),d=document.createElement("IMG");"es"===language?d.setAttribute("src",`build/img/actividad-${t}.webp`):d.setAttribute("src",`../build/img/actividad-${t}.webp`),d.dataset.imagenId=t,c.textContent=n,s.addEventListener("click",()=>{mostrarInfoActividad(n,i,o)}),s.classList.add("actividad"),d.classList.add("actividad--imagen"),c.classList.add("actividad--nombre"),s.appendChild(d),s.appendChild(c),a.appendChild(s)}),contenedorActividades.appendChild(a)}catch(e){console.log(e)}},mostrarInfoActividad=(e,t,n)=>{const a=document.createElement("DIV"),o=document.createElement("DIV"),i=document.createElement("H2");i.textContent=e,o.appendChild(i),t.forEach(e=>{const{tipo:t,contenido:n}=e,a=document.createElement(t);"IMG"==t?a.setAttribute("src",n):a.innerHTML=n,o.appendChild(a)});const s=document.createElement("SPAN");"proximo"==n&&(s.textContent="Próximamente en UMA Rancho San Gabriel"),o.appendChild(s);const c=document.createElement("BUTTON");c.textContent="Cerrar",c.onclick=()=>{a.remove()},o.appendChild(c),o.classList.add("info-actividad"),a.appendChild(o),a.classList.add("overlay");document.querySelector("body").appendChild(a)},bodyActividades=document.querySelector(".body-actividades");bodyActividades&&(bodyActividades.onload=mostrarActividades);const mostrarImagen=(e,t,n,a)=>{console.log("Hola Aldo");const o=document.createElement("DIV");o.classList.add("overlay");const i=document.createElement("DIV");i.classList.add("contenedor-foto");const s=document.createElement("BUTTON");s.classList.add("cerrar-foto"),s.textContent="X",s.onclick=()=>{o.remove()},i.appendChild(s);const c=document.createElement("IMG");c.setAttribute("src",e+"imagen-galeria-"+n+t),c.classList.add("foto-galeria"),i.appendChild(c);const d=document.createElement("DIV");d.classList.add("botones-galeria");const l=document.createElement("BUTTON"),r=document.createElement("BUTTON");r.innerHTML="&#10092;",l.innerHTML="&#10093;",d.appendChild(r),d.appendChild(l),i.appendChild(d),o.appendChild(i),1===n&&r.classList.add("ocultar"),n===a&&l.classList.add("ocultar"),l.onclick=()=>{o.remove(),mostrarImagen(e,t,n+1,a)},r.onclick=()=>{o.remove(),mostrarImagen(e,t,n-1,a)};document.querySelector("body").appendChild(o)},llenarGaleria=()=>{const e=document.querySelector(".galeria"),t=document.querySelector(".webp");let n="src/img/";"es"!==language&&(n="../"+n);let a=".jpg";t&&(n="build/img/","es"!==language&&(n="../"+n),a=".webp");const o=document.createDocumentFragment();for(let e=1;e<10;e++){const t=document.createElement("DIV"),i=document.createElement("IMG");t.classList.add("img-individual"),i.setAttribute("src",n+"imagen-galeria-"+e+a),i.onclick=()=>{mostrarImagen(n,a,e,9)},t.appendChild(i),o.appendChild(t)}e.appendChild(o)},bodyGaleria=document.querySelector(".body-galeria");bodyGaleria&&(bodyGaleria.onload=llenarGaleria);let language=document.getElementsByTagName("html")[0].getAttribute("lang"),esp=document.querySelector(".es"),eng=document.querySelector(".en");const filename=()=>{let e=self.location.href,t=e.lastIndexOf("/");return e.substring(t+"/".length,e.length)};esp.onclick=()=>{"es"!==language&&(location.href="../"+filename(),language="es")},eng.onclick=()=>{"en"!==language&&(location.href="english/"+filename(),language="en")};const menuHamIcono=document.getElementById("menu-ham--icono");if(menuHamIcono){const e=document.getElementById("navegacion");menuHamIcono.addEventListener("click",t=>{t.preventDefault();const n=e.scrollHeight;e.classList.contains("mostrar")?(e.classList.remove("mostrar"),e.removeAttribute("style")):(e.classList.add("mostrar"),e.style.height=n+"px")})}
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses !*/!function(e,t,n){function a(e,t){return typeof e===t}function o(e){var t=A.className,n=l._config.classPrefix||"";if(m&&(t=t.baseVal),l._config.enableJSClass){var a=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(a,"$1"+n+"js$2")}l._config.enableClasses&&(t+=" "+n+e.join(" "+n),m?A.className.baseVal=t:A.className=t)}function i(e,t){if("object"==typeof e)for(var n in e)r(e,n)&&i(n,e[n]);else{var a=(e=e.toLowerCase()).split("."),s=l[a[0]];if(2==a.length&&(s=s[a[1]]),void 0!==s)return l;t="function"==typeof t?t():t,1==a.length?l[a[0]]=t:(!l[a[0]]||l[a[0]]instanceof Boolean||(l[a[0]]=new Boolean(l[a[0]])),l[a[0]][a[1]]=t),o([(t&&0!=t?"":"no-")+a.join("-")]),l._trigger(e,t)}return l}var s=[],c=[],d={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout((function(){t(n[e])}),0)},addTest:function(e,t,n){c.push({name:e,fn:t,options:n})},addAsyncTest:function(e){c.push({name:null,fn:e})}},l=function(){};l.prototype=d,l=new l;var r,A=t.documentElement,m="svg"===A.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;r=a(e,"undefined")||a(e.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),d._l={},d.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),l.hasOwnProperty(e)&&setTimeout((function(){l._trigger(e,l[e])}),0)},d._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout((function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)}),0),delete this._l[e]}},l._q.push((function(){d.addTest=i})),l.addAsyncTest((function(){function e(e,t,n){function a(t){var a=!(!t||"load"!==t.type)&&1==o.width;i(e,"webp"===e&&a?new Boolean(a):a),n&&n(t)}var o=new Image;o.onerror=a,o.onload=a,o.src=t}var t=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],n=t.shift();e(n.name,n.uri,(function(n){if(n&&"load"===n.type)for(var a=0;a<t.length;a++)e(t[a].name,t[a].uri)}))})),function(){var e,t,n,o,i,d;for(var r in c)if(c.hasOwnProperty(r)){if(e=[],(t=c[r]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=a(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)1===(d=e[i].split(".")).length?l[d[0]]=o:(!l[d[0]]||l[d[0]]instanceof Boolean||(l[d[0]]=new Boolean(l[d[0]])),l[d[0]][d[1]]=o),s.push((o?"":"no-")+d.join("-"))}}(),o(s),delete d.addTest,delete d.addAsyncTest;for(var u=0;u<l._q.length;u++)l._q[u]();e.Modernizr=l}(window,document);
//# sourceMappingURL=bundle.js.map
