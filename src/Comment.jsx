import { formatCount, timeAgo } from './utils/helpers'

const Comment = ({ data }) => {
  const { name, text, avatar, likeCount, publishedAt } = data
  const published = timeAgo(publishedAt)
  const likes = formatCount(likeCount)

  return (
    <div className="flex gap-3 my-3">
      <img
        src={avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`}
        alt={name}
        loading="lazy"
        className="w-9 h-9 rounded-full flex-shrink-0 bg-gray-200"
      />
      <div className="flex flex-col min-w-0">
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-medium text-gray-900">@{name}</span>
          {published && <span className="text-xs text-gray-500">{published}</span>}
        </div>
        <p className="text-sm text-gray-700 mt-0.5 whitespace-pre-line break-words">{text}</p>
        {likeCount > 0 && (
          <span className="text-xs text-gray-500 mt-1">👍 {likes}</span>
        )}
      </div>
    </div>
  )
}

export default Comment
