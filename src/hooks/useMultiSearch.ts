import apiClient from "@/services/api-client"


const useMultiSearch  = () => {


    const fetchSearch = async () => {
        const res = await apiClient.get("/search/multi");
    }
}