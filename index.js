import{a as x,S,i as n}from"./assets/vendor--6n4cVRZ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function h(o,t){return(await x("https://pixabay.com/api/",{params:{key:"54612397-f95ccc6630e34cb503ef4faef",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const p=document.querySelector(".gallery"),f=document.querySelector(".loader"),y=document.querySelector(".load-button");let q=new S(".gallery a");function g(o){const t=o.map(({webformatURL:s,largeImageURL:l,tags:e,likes:r,views:i,comments:L,downloads:w})=>`<li class="gallery-item">
        <a class="gallery-link" href="${l}">
            <img src="${s}" class="gallery-img" alt="${e}"/>
        </a>
        <div class=gallery-wrapper>
            <div class="text-wrapper">
                <h3 class="gallery-subtitle">Likes</h3>
                <p class="gallery-text">${r}</p>
            </div>
            <div class="text-wrapper">
                <h3 class="gallery-subtitle">Views</h3>
                <p class="gallery-text">${i}</p>
            </div>
            <div class="text-wrapper">
                <h3 class="gallery-subtitle">Comments</h3>
                <p class="gallery-text">${L}</p>
            </div>
            <div class="text-wrapper">
                <h3 class="gallery-subtitle">Downloads</h3>
                <p class="gallery-text">${w}</p>
            </div>
        </div>
        </li>`).join("");p.insertAdjacentHTML("beforeend",t),q.refresh()}function M(){p.innerHTML=""}function m(){f.classList.remove("hidden")}function b(){f.classList.add("hidden")}function $(){y.classList.remove("hidden")}function d(){y.classList.add("hidden")}const v=document.querySelector(".form"),B=document.querySelector(".load-button");let a=1,u="",c=0;v.addEventListener("submit",O);B.addEventListener("click",P);function O(o){o.preventDefault(),a=1,u=o.target.elements["search-text"].value.trim(),M(),d(),m(),h(u,a).then(t=>{if(t.hits.length===0){n.show({message:"Input empty",position:"topRight",color:"red"});return}if(g(t.hits),c=Math.ceil(t.totalHits/15),a>=c){d(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"blue"});return}$()}).catch(t=>n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"})).finally(()=>{b()}),v.reset()}async function P(){a+=1;try{m();const o=await h(u,a);b(),g(o.hits),c=Math.ceil(o.totalHits/15),a>=c&&(d(),n.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"blue"}));const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:s,behavior:"smooth"})}catch(o){return o.message}}
//# sourceMappingURL=index.js.map
