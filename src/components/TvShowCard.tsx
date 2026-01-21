// @ts-nocheck
import { Card, CardContent } from './ui/card'

const TvShowCard = ({tvShowResult}) => {
  return (
    <Card className="border-0">
        <CardContent>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${tvShowResult.poster_path}`} alt="poster"
                className="hover:opacity-80 transition-all "
                />
                <h1 className="mt-3">
                  {tvShowResult.title ? tvShowResult.title : tvShowResult.name}
                </h1>
            </div>
        </CardContent>
    </Card>
  )
}

export default TvShowCard;