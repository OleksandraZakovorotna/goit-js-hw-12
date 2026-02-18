
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const list = document.querySelector(".gallery");
const loader = document.querySelector(".loader")

let galleryBox = new SimpleLightbox('.gallery a');

export function createGallery(images) {

   const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
    return `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
            <img src="${webformatURL}" class="gallery-img" alt="${tags}"/>
        </a>
        <div class=gallery-wrapper>
            <div class="text-wrapper">
                <h3 class="gallery-subtitle">Likes</h3>
                <p class="gallery-text">${likes}</p>
            </div>
            <div class="text-wrapper">
                <h3 class="gallery-subtitle">Views</h3>
                <p class="gallery-text">${views}</p>
            </div>
            <div class="text-wrapper">
                <h3 class="gallery-subtitle">Comments</h3>
                <p class="gallery-text">${comments}</p>
            </div>
            <div class="text-wrapper">
                <h3 class="gallery-subtitle">Downloads</h3>
                <p class="gallery-text">${downloads}</p>
            </div>
        </div>
        </li>`
   }).join("");
    
    list.innerHTML = markup;

    galleryBox.refresh();

};


export function clearGallery(){
    list.innerHTML = '';
};

export function showLoader(){
    loader.classList.remove("hidden");
};

export function hideLoader() {
    loader.classList.add("hidden");
};
