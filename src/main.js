import { getImagesByQuery } from "./js/pixabay-api"
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const btn = document.querySelector(".load-button");


let page = 1;
let value = "";
let totalPages = 0;

form.addEventListener("submit", handleSubmit);
btn.addEventListener("click", loadMore)

async function handleSubmit(event) {
    event.preventDefault();
    page = 1;

    value = event.target.elements["search-text"].value.trim();

    if (value === "") {
        iziToast.info({
            message: `Oooops, request is empty!`,
            position: "topRight",
            color: "blue"
        })
        return
    }
    
    clearGallery();
    hideLoadMoreButton();
    showLoader();

    try {
        const res = await getImagesByQuery(value, page)

        if (res.hits.length === 0) {
            iziToast.info({
                message: `Images not found`,
                position: "topRight",
                color: "red"
            });
            return
        }
            
        createGallery(res.hits)

        totalPages = Math.ceil(res.totalHits / 15);

        if (page >= totalPages) {
                
            hideLoadMoreButton();
            iziToast.info({
                message: `We're sorry, but you've reached the end of search results.`,
                position: "topRight",
                color: "blue"
            });
            return
        }
        showLoadMoreButton();
    }
    catch (error){
        iziToast.error({
            message: `Sorry, there are no images matching your search query. Please try again!`,
            position: "topRight",
            color: "red"
        })
    }
    finally{
        hideLoader();
    }

    form.reset()

}

async function loadMore() {
    
    page += 1;
    try {
        hideLoadMoreButton();
        showLoader();

        const data = await getImagesByQuery(value, page);

        createGallery(data.hits);
        showLoadMoreButton();

        totalPages = Math.ceil(data.totalHits / 15);
            
        if (page >= totalPages) {
            hideLoadMoreButton();
            iziToast.show({
                message: `We're sorry, but you've reached the end of search results.`,
                position: "topRight",
                color: "blue"
            });
        }

        const card = document.querySelector(".gallery-item")

        const cardHeight = card.getBoundingClientRect().height;

        window.scrollBy({
            left: 0,
            top: cardHeight * 2,
            behavior: "smooth"
        })
        
    }
    catch (error) {
        hideLoadMoreButton()
        iziToast.error({
            message: `Sorry, there are no images matching your search query. Please try again!`,
            position: "topRight",
            color: "red"
        });
        return error.message

    }
    finally {
        hideLoader();
    }
};

