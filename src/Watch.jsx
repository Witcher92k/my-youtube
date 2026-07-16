import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from './utils/navStateSlice'
import { Navigate, useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import ChatWindow from './ChatWindow'
import { YOUTUBE_VIDEO_DETAILS_API } from './utils/constants'
import { formatCount, timeAgo } from './utils/helpers'

const WatchComponent = () => {
  const [params] = useSearchParams()
  const videoId = params.get('v')

  const [videoDetails, setVideoDetails] = useState(null)
  const [showFullDescription, setShowFullDescription] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(closeMenu())
  }, [dispatch])

  useEffect(() => {
    if (!videoId) return
    const controller = new AbortController()

    const getVideoDetails = async () => {
      try {
        const data = await fetch(YOUTUBE_VIDEO_DETAILS_API(videoId), {
          signal: controller.signal,
        })
        if (!data.ok) throw new Error(`Video details request failed: ${data.status}`)
        const res = await data.json()
        setVideoDetails(res?.items?.[0] ?? null)
      } catch (e) {
        // Details are progressive enhancement — the embedded player still works without them
        if (e.name !== 'AbortError') setVideoDetails(null)
      }
    }
    getVideoDetails()

    return () => controller.abort()
  }, [videoId])

  if (!videoId) return <Navigate to="/" replace />

  const snippet = videoDetails?.snippet
  const statistics = videoDetails?.statistics
  const views = formatCount(statistics?.viewCount)
  const likes = formatCount(statistics?.likeCount)
  const published = timeAgo(snippet?.publishedAt)

  return (
    <div className="flex flex-col w-full min-h-screen px-4 pt-4">
      {/* Video + Live Chat Row (chat stacks below on small screens) */}
      <div className="flex flex-col lg:flex-row w-full gap-4">
        {/* Video — grows to fill all space left of chat */}
        <div className="flex-1 min-w-0">
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${encodeURIComponent(videoId)}`}
              title={snippet?.title ?? 'YouTube video player'}
              style={{ border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-xl w-full h-full"
            />
          </div>

          {/* Video metadata */}
          {snippet && (
            <div className="mt-3">
              <h1 className="text-lg font-bold text-black leading-snug">{snippet.title}</h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
                <div className="flex items-center gap-2">
                  <img
                    className="w-9 h-9 rounded-full bg-gray-200"
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(snippet.channelTitle)}&background=random`}
                    alt={snippet.channelTitle}
                  />
                  <span className="text-sm font-semibold text-black">{snippet.channelTitle}</span>
                </div>
                <span className="text-xs text-gray-600">
                  {[views && `${views} views`, published].filter(Boolean).join(' • ')}
                </span>
                {likes && (
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-black">
                    👍 {likes}
                  </span>
                )}
              </div>

              {/* Description */}
              {snippet.description && (
                <div
                  className="mt-3 p-3 bg-gray-100 rounded-xl text-sm text-gray-800 whitespace-pre-line cursor-pointer"
                  onClick={() => setShowFullDescription((prev) => !prev)}
                >
                  {showFullDescription
                    ? snippet.description
                    : `${snippet.description.slice(0, 250)}${snippet.description.length > 250 ? '…' : ''}`}
                  {snippet.description.length > 250 && (
                    <span className="block mt-1 font-semibold text-black">
                      {showFullDescription ? 'Show less' : 'Show more'}
                    </span>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Live Chat — fixed width on the right (full width when stacked) */}
        <ChatWindow />
      </div>

      {/* Comments below */}
      <CommentsContainer videoId={videoId} />
    </div>
  )
}

export default WatchComponent
