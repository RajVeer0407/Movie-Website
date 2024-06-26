import axios from "axios";

export default axios.create({
    baseURL : "https://api.themoviedb.org/3",
    params : {
        api_key : "9229cf41e3f8ff7226f73921b9b41a38",
    },
})