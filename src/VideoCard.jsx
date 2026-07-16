import { formatCount, timeAgo } from './utils/helpers'

const VideoCard = ({ data }) => {
  const { statistics, snippet } = data ?? {}
  const { channelTitle, title, thumbnails, publishedAt } = snippet ?? {}

  const thumbnailUrl = thumbnails?.high?.url || thumbnails?.medium?.url || thumbnails?.default?.url
  const views = formatCount(statistics?.viewCount)
  const published = timeAgo(publishedAt)

  if (!snippet) return null

  return (
    <div className="w-full cursor-pointer hover:opacity-95">
      {/* Thumbnail */}
      <img
        className="w-full rounded-xl aspect-video object-cover bg-gray-200"
        src={thumbnailUrl}
        alt={title}
        loading="lazy"
      />

      {/* Info row */}
      <div className="flex gap-3 mt-3">
        {/* Channel avatar */}
        <img
          className="w-9 h-9 rounded-full flex-shrink-0 bg-gray-200"
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(channelTitle ?? '')}&background=random`}
          alt={channelTitle}
          loading="lazy"
        />

        {/* Text */}
        <div>
          <p className="text-sm font-semibold text-black line-clamp-2 leading-snug">{title}</p>
          <p className="text-xs text-gray-500 mt-1">{channelTitle}</p>
          <p className="text-xs text-gray-500">
            {[views && `${views} views`, published].filter(Boolean).join(' • ')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
