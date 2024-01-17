import{S as p,i as l}from"./assets/vendor-1d172d44.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const u="41883234-6691d5bcae5feebb5d3051225",f=document.getElementById("searchForm"),c=document.getElementById("searchInput"),n=document.querySelector(".loader"),d=document.querySelector(".gallery");var m=new p(".gallery a",{captionDelay:250,captionsData:"alt",captionPosition:"bottom"});f.addEventListener("submit",function(s){s.preventDefault();const r=c.value.trim();r!==""&&(n.style.display="block",d.innerHTML="",fetch(`https://pixabay.com/api/?key=${u}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>e.json()).then(e=>{n.style.display="none",e.hits.length>0?y(e.hits):l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again."})}).catch(e=>{n.style.display="none",console.error("Error fetching data:",e),l.error({position:"topRight",message:"An error occurred. Please try again later."})}))});function y(s){const r=s.map(e=>`
      <div class="image-container">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}">
        </a>
        <div class="image-panel">
          <div class="statistic">
            <p>Likes</p>
            <p>${e.likes}</p>
          </div>
          <div class="statistic">
            <p>Views</p>
            <p>${e.views}</p>
          </div>
          <div class="statistic">
            <p>Comments</p>
            <p>${e.comments}</p>
          </div>
          <div class="statistic">
            <p>Downloads</p>
            <p>${e.downloads}</p>
          </div>
        </div>
      </div>
      `).join("");d.innerHTML=r,c.value="",m.refresh()}
//# sourceMappingURL=commonHelpers.js.map
