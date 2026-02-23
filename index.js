import{a as S,S as q,i as a}from"./assets/vendor--6n4cVRZ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function h(o,t){return(await S("https://pixabay.com/api/",{params:{key:"54612397-f95ccc6630e34cb503ef4faef",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const p=document.querySelector(".gallery"),y=document.querySelector(".loader"),f=document.querySelector(".load-button");let M=new q(".gallery a");function g(o){const t=o.map(({webformatURL:s,largeImageURL:c,tags:e,likes:r,views:l,comments:w,downloads:x})=>`<li class="gallery-item">
        <a class="gallery-link" href="${c}">
            <img src="${s}" class="gallery-img" alt="${e}"/>
        </a>
        <div class=gallery-wrapper>
            <div class="text-wrapper">
                <h3 class="gallery-subtitle">Likes</h3>
                <p class="gallery-text">${r}</p>
            </div>
            <div class="text-wrapper">
                <h3 class="gallery-subtitle">Views</h3>
                <p class="gallery-text">${l}</p>
            </div>
            <div class="text-wrapper">
                <h3 class="gallery-subtitle">Comments</h3>
                <p class="gallery-text">${w}</p>
            </div>
            <div class="text-wrapper">
                <h3 class="gallery-subtitle">Downloads</h3>
                <p class="gallery-text">${x}</p>
            </div>
        </div>
        </li>`).join("");p.insertAdjacentHTML("beforeend",t),M.refresh()}function $(){p.innerHTML=""}function m(){y.classList.remove("hidden")}function b(){y.classList.add("hidden")}function v(){f.classList.remove("hidden")}function n(){f.classList.add("hidden")}const L=document.querySelector(".form"),O=document.querySelector(".load-button");let i=1,u="",d=0;L.addEventListener("submit",P);O.addEventListener("click",R);async function P(o){if(o.preventDefault(),i=1,u=o.target.elements["search-text"].value.trim(),u===""){a.info({message:"Oooops, request is empty!",position:"topRight",color:"blue"});return}$(),n(),m();try{const t=await h(u,i);if(t.hits.length===0){a.info({message:"Images not found",position:"topRight",color:"red"});return}if(g(t.hits),d=Math.ceil(t.totalHits/15),i>=d){n(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"blue"});return}v()}catch{a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"})}finally{b()}L.reset()}async function R(){i+=1;try{n(),m();const o=await h(u,i);g(o.hits),v(),d=Math.ceil(o.totalHits/15),i>=d&&(n(),a.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"blue"}));const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:s*2,behavior:"smooth"})}catch(o){return n(),a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"}),o.message}finally{b()}}
//# sourceMappingURL=index.js.map
