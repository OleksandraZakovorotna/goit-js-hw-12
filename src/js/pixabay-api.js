import axios from "axios";


export async function getImagesByQuery(query, page) {


    const res = await axios("https://pixabay.com/api/", {
        params: {
            key: "54612397-f95ccc6630e34cb503ef4faef",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            page,
            per_page: 15
        }
    })

    return res.data;

};
