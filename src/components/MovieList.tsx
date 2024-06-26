import useMovieList from "@/hooks/useMovies"
import MovieCard from "./MovieCard";

const MovieList = () => {
  const {movieLists} = useMovieList();
  console.log(movieLists)
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid:cols-2 gap-y-3">
      {movieLists?.map((movieList)=> (
        <div key={movieList.id}><MovieCard movieResult={movieList}/></div>
      ))}
    </div>
  )
}

export default MovieList;