import axios from "axios";


export async function getImagesByQuery(query) {


    return axios.get("https://pixabay.com/api/", {
        params: {
        key: "54612397-f95ccc6630e34cb503ef4faef",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    }})
        .then(res => {
            return res.data.hits;
        })
        .catch(error =>
            console.log(error.statusText)
        )
}
