import{a as f,S as y,i}from"./assets/vendor--6n4cVRZ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function g(s){return f.get("https://pixabay.com/api/",{params:{key:"54612397-f95ccc6630e34cb503ef4faef",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>console.log(r.statusText))}const n=document.querySelector(".gallery"),c=document.querySelector(".loader");let h=new y(".gallery a");function m(s){const r=s.map(({webformatURL:a,largeImageURL:o,tags:e,likes:t,views:l,comments:d,downloads:p})=>`<li class="gallery-item">
        <a class="gallery-link" href="${o}">
            <img src="${a}" class="gallery-img" alt="${e}"/>
        </a>
        <div class=gallery-wrapper>
            <div class="text-wrapper">
                <h3 class="gallery-subtitle">Likes</h3>
                <p class="gallery-text">${t}</p>
            </div>
            <div class="text-wrapper">
                <h3 class="gallery-subtitle">Views</h3>
                <p class="gallery-text">${l}</p>
            </div>
            <div class="text-wrapper">
                <h3 class="gallery-subtitle">Comments</h3>
                <p class="gallery-text">${d}</p>
            </div>
            <div class="text-wrapper">
                <h3 class="gallery-subtitle">Downloads</h3>
                <p class="gallery-text">${p}</p>
            </div>
        </div>
        </li>`).join("");n.innerHTML=r,h.refresh()}function v(){n.innerHTML=""}function x(){c.classList.remove("hidden")}function L(){c.classList.add("hidden")}const u=document.querySelector(".form");u.addEventListener("submit",b);function b(s){s.preventDefault();const r=s.target.elements["search-text"].value.trim();r.length!==0&&(v(),x(),g(r).then(a=>{if(a.length===0){i.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});return}m(a)}).catch(a=>i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"})).finally(L),u.reset())}
//# sourceMappingURL=index.js.map
