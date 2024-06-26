import useMovieList from "@/hooks/useMovies"

const MovieList = () => {
  const {movieLists} = useMovieList();
  console.log(movieLists)
  return (
    <div>
      {movieLists?.map((movie)=> (
        <p>{movie.title}</p>
      ))}
    </div>
  )
}

export default MovieList