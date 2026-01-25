import { useParams } from 'react-router'

const tvPlayer = () => {
    const {playerId} = useParams()
    const tvShowUrl = `https://vidsrc-embed.ru/embed/tv/${playerId}`
  return (
    <div>
        <iframe
        className='w-full h-screen'
        allow='autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        src={tvShowUrl}
        >

        </iframe>
    </div>
  )
}

export default tvPlayer