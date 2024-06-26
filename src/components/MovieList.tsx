import useMovieList from "@/hooks/useMovies"
import MovieCard from "./MovieCard";

const MovieList = () => {
  const {movieLists} = useMovieList();
  console.log(movieLists)
  return (
    <div>
      {movieLists?.map((movieList)=> (
        <div key={movieList.id}><MovieCard movieResult={movieList}/></div>
      ))}
    </div>
  )
}

export default MovieList