// @ts-nocheck
import { useNavigate } from 'react-router';
import { Card, CardContent } from './ui/card'

const TvShowCard = ({tvShowResult}) => {
  const navigate = useNavigate();
  return (
    <Card className="border-0" onClick={()=>{
      navigate(`/TvPlayer/${tvShowResult.id}`);
    }}>
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