import MovieList from "@/components/MovieList"
import TvShowList from "@/components/TvShowList"
import { Route, Routes } from "react-router"

const AllRoutes = () => {
  return (
    <Routes>
        {/* <Route path="/" element={}/> */}
        <Route path="/movies" element={<MovieList/>}/>
        <Route path="/tvshows" element={<TvShowList/>}/>
    </Routes>
  )
}

export default AllRoutes