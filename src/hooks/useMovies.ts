import apiClient from "@/services/api-client"
import { useEffect, useState } from "react";

export interface MovieResult {
    adult : boolean;
    id : number;
    original_language : string;
    original_title : string;
    title : string;
    backdrop_path : string;
    poster_path : string;
    overview : string;
    name? : string;
}


const useMovieList = () => {

    const [movieLists, steMovieLists] = useState<MovieResult[]>();

    const fetchMovieList = async () => {
        try {
        const res = await apiClient.get("/discover/movie");
        steMovieLists(res.data.results);
        // console.log(res.data.results);
        } catch (error) {
            
        }
    };

    useEffect(()=>{
        fetchMovieList();
    },[]);
    return{movieLists};
};

export default useMovieList;