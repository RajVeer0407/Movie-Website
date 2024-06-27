import apiClient from "@/services/api-client"


const useMultiSearch  = (input : String) => {


    const fetchSearch = async () => {
        const res = await apiClient.get("/search/multi", {
            params : {
                query : input,
            },
        });
    };
};