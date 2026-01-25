// import React from 'react'
import { useParams } from 'react-router'

const Player = () => {
    const {playerId} = useParams()
    //VIDKING embed link format
    const movieUrl = `https://www.vidking.net/embed/movie/${playerId}?color=e50914&nextEpisode=true&episodeSelector=true`
  return (
    <div>
        <iframe
        className='w-full h-screen'
        allow='autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        src={movieUrl}
        >

        </iframe>
    </div>
  )
}

export default Player