// Compact view counts: 1234 -> "1.2K", 4567890 -> "4.6M"
export const formatCount = (count) => {
  const n = Number(count)
  if (!Number.isFinite(n)) return null
  return new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(n)
}

// Relative published time: "3 hours ago", "2 years ago"
export const timeAgo = (isoDate) => {
  if (!isoDate) return null
  const seconds = Math.floor((Date.now() - new Date(isoDate).getTime()) / 1000)
  if (!Number.isFinite(seconds) || seconds < 0) return null

  const units = [
    ['year', 31536000],
    ['month', 2592000],
    ['week', 604800],
    ['day', 86400],
    ['hour', 3600],
    ['minute', 60],
  ]
  for (const [unit, secs] of units) {
    const value = Math.floor(seconds / secs)
    if (value >= 1) return `${value} ${unit}${value > 1 ? 's' : ''} ago`
  }
  return 'just now'
}
