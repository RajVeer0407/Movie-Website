import { MovieResult } from "@/hooks/useMovies"
import { Card, CardContent } from "./ui/card"

interface Props {
    movieResult : MovieResult
}

const MovieCard = ({movieResult} : Props) => {
  return (
    <Card className="border-0">
        <CardContent>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${movieResult.poster_path}`} alt="poster" />
            </div>
        </CardContent>
    </Card>
  )
}

export default MovieCard