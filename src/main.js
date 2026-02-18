import { getImagesByQuery } from "./js/pixabay-api"
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");


form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const value = event.target.elements["search-text"].value.trim();

    if (value.length === 0) {
        return
    }
    
    clearGallery()

    showLoader()

    getImagesByQuery(value)
        .then(res => {
            if (res.length === 0 ) {
                iziToast.show ({
                    message: `Sorry, there are no images matching your search query. Please try again!`,
                    position: "topRight",
                    color: "red"
                });
                return
            }
            createGallery(res);
        })
        .catch(error =>
            iziToast.error({
                message: `Sorry, there are no images matching your search query. Please try again!`,
                position: "topRight",
                color: "red"
            }))
        .finally(
            hideLoader
        )

    form.reset()

}

