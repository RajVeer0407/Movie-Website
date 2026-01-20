import MovieList from "@/components/MovieList"
import Player from "@/components/Player"
import TvPlayer from "@/components/TvPlayer"
import SearchList from "@/components/SearchList"
import Trending from "@/components/Trending/Trending"
import TvShowList from "@/components/TvShowList"
import { Route, Routes, Navigate} from "react-router"

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Trending/>}/>
        <Route path="/movies" element={<MovieList/>}/>
        <Route path="/tvshows" element={<TvShowList/>}/>
        <Route path="/search/:searchName/" element={<SearchList/>}/>

        <Route path="/player/:playerId" element={<Player/>}/>
        <Route path="/TvPlayer/:playerId" element={<TvPlayer/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AllRoutes