import React from 'react'

const VideoCard = ({data}) => {

    const {statistics,snippet} = data;
    const {channelTitle,title,thumbnails} =snippet;

  return (
    <div className="w-full cursor-pointer hover:opacity-95">
      {/* Thumbnail */}
      <img
        className="w-full rounded-xl aspect-video object-cover"
        src={thumbnails.high.url}
        alt={title}
      />

      {/* Info row */}
      <div className="flex gap-3 mt-3">
        {/* Channel avatar */}
        <img
          className="w-9 h-9 rounded-full flex-shrink-0"
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(channelTitle)}&background=random`}
          alt={channelTitle}
        />

        {/* Text */}
        <div>
          <p className="text-sm font-semibold text-black line-clamp-2 leading-snug">{title}</p>
          <p className="text-xs text-gray-500 mt-1">{channelTitle}</p>
          <p className="text-xs text-gray-500">{Number(statistics.viewCount).toLocaleString()} views</p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard