import { useEffect, useState } from 'react'
import Comment from './Comment'
import { YOUTUBE_COMMENTS_API } from './utils/constants'

// Map a YouTube commentThread item into our internal shape.
// The API nests replies one level deep; the renderer supports arbitrary depth.
const mapThread = (thread) => {
  const top = thread?.snippet?.topLevelComment?.snippet
  return {
    id: thread?.id,
    name: (top?.authorDisplayName ?? 'user').replace(/^@/, ''),
    avatar: top?.authorProfileImageUrl,
    text: top?.textOriginal ?? '',
    likeCount: top?.likeCount ?? 0,
    publishedAt: top?.publishedAt,
    replies: (thread?.replies?.comments ?? []).map((reply) => ({
      id: reply?.id,
      name: (reply?.snippet?.authorDisplayName ?? 'user').replace(/^@/, ''),
      avatar: reply?.snippet?.authorProfileImageUrl,
      text: reply?.snippet?.textOriginal ?? '',
      likeCount: reply?.snippet?.likeCount ?? 0,
      publishedAt: reply?.snippet?.publishedAt,
      replies: [],
    })),
  }
}

const CommentList = ({ commentList }) => (
  <div>
    {commentList.map((item) => (
      <div key={item.id}>
        <Comment data={item} />
        {item.replies.length > 0 && (
          <div className="pl-5 border-l border-gray-300 ml-5">
            <CommentList commentList={item.replies} />
          </div>
        )}
      </div>
    ))}
  </div>
)

const CommentsContainer = ({ videoId }) => {
  const [comments, setComments] = useState([])
  const [status, setStatus] = useState('loading') // 'loading' | 'success' | 'error'

  useEffect(() => {
    if (!videoId) return
    const controller = new AbortController()

    const getComments = async () => {
      try {
        const data = await fetch(YOUTUBE_COMMENTS_API(videoId), {
          signal: controller.signal,
        })
        if (!data.ok) throw new Error(`Comments request failed: ${data.status}`)
        const res = await data.json()
        setComments((res?.items ?? []).map(mapThread))
        setStatus('success')
      } catch (e) {
        // Comments can be disabled per-video or quota-limited — degrade gracefully
        if (e.name !== 'AbortError') setStatus('error')
      }
    }
    getComments()

    return () => controller.abort()
  }, [videoId])

  return (
    <div className="py-6 max-w-4xl">
      <h2 className="mb-3 text-lg font-bold text-black">Comments</h2>
      {status === 'loading' && <p className="text-sm text-gray-500">Loading comments…</p>}
      {status === 'error' && (
        <p className="text-sm text-gray-500">Comments are unavailable for this video.</p>
      )}
      {status === 'success' && comments.length === 0 && (
        <p className="text-sm text-gray-500">No comments yet.</p>
      )}
      {status === 'success' && <CommentList commentList={comments} />}
    </div>
  )
}

export default CommentsContainer
