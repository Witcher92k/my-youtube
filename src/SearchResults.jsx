import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { YOUTUBE_SEARCH_API } from './utils/constants'
import VideoCard from './VideoCard'
import Shimmer from './Shimmer'

const SearchResults = () => {
  const [params] = useSearchParams()
  const query = params.get('search_query') ?? ''

  const [videos, setVideos] = useState([])
  const [status, setStatus] = useState('loading') // 'loading' | 'success' | 'error'

  useEffect(() => {
    if (!query) {
      setVideos([])
      setStatus('success')
      return
    }

    const controller = new AbortController()
    const fetchResults = async () => {
      setStatus('loading')
      try {
        const data = await fetch(YOUTUBE_SEARCH_API(query), { signal: controller.signal })
        if (!data.ok) throw new Error(`Search request failed: ${data.status}`)
        const res = await data.json()
        setVideos(res?.items ?? [])
        setStatus('success')
      } catch (e) {
        if (e.name !== 'AbortError') setStatus('error')
      }
    }
    fetchResults()

    return () => controller.abort()
  }, [query])

  if (status === 'loading') return <Shimmer />

  if (status === 'error') {
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] gap-2 text-center px-4">
        <p className="text-lg font-semibold text-black">Couldn't load search results</p>
        <p className="text-sm text-gray-600">Check your connection or API quota and try again.</p>
      </div>
    )
  }

  return (
    <div className="flex-1">
      <p className="px-4 pt-4 text-sm text-gray-600">
        Results for <span className="font-semibold text-black">"{query}"</span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 p-4">
        {videos.map((item) => {
          const videoId = item?.id?.videoId
          if (!videoId) return null
          return (
            <Link key={videoId} to={`/watch?v=${videoId}`}>
              <VideoCard data={item} />
            </Link>
          )
        })}
      </div>
      {videos.length === 0 && (
        <p className="px-4 text-sm text-gray-600">No results found.</p>
      )}
    </div>
  )
}

export default SearchResults
