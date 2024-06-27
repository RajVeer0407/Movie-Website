import MovieList from "@/components/MovieList"
import SearchList from "@/components/SearchList"
import TvShowList from "@/components/TvShowList"
import { Route, Routes } from "react-router"

const AllRoutes = () => {
  return (
    <Routes>
        {/* <Route path="/" element={}/> */}
        <Route path="/movies" element={<MovieList/>}/>
        <Route path="/tvshows" element={<TvShowList/>}/>
        <Route path="/search/:searchName/" element={<SearchList/>}/>
    </Routes>
  )
}

export default AllRoutes