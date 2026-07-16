import { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from './utils/constants'
import VideoCard from './VideoCard'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
  const [videos, setVideos] = useState([])
  const [status, setStatus] = useState('loading') // 'loading' | 'success' | 'error'

  useEffect(() => {
    const controller = new AbortController()

    const getPopularVideos = async () => {
      try {
        const data = await fetch(YOUTUBE_VIDEOS_API, { signal: controller.signal })
        if (!data.ok) throw new Error(`Videos request failed: ${data.status}`)
        const res = await data.json()
        setVideos(res?.items ?? [])
        setStatus('success')
      } catch (e) {
        if (e.name !== 'AbortError') setStatus('error')
      }
    }
    getPopularVideos()

    return () => controller.abort()
  }, [])

  if (status === 'loading') return <Shimmer />

  if (status === 'error') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-2 text-center px-4">
        <p className="text-lg font-semibold text-black">Couldn't load videos</p>
        <p className="text-sm text-gray-600">
          Check your internet connection or YouTube API key/quota, then refresh.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 p-4">
      {videos.map((item) => (
        <Link key={item.id} to={`/watch?v=${item.id}`}>
          <VideoCard data={item} />
        </Link>
      ))}
    </div>
  )
}

export default VideoContainer
