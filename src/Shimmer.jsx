// Skeleton grid shown while videos (or a lazy route) are loading
const ShimmerCard = () => (
  <div className="w-full animate-pulse">
    <div className="w-full rounded-xl aspect-video bg-gray-200" />
    <div className="flex gap-3 mt-3">
      <div className="w-9 h-9 rounded-full bg-gray-200 flex-shrink-0" />
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-gray-200 rounded w-11/12" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
        <div className="h-3 bg-gray-200 rounded w-1/3" />
      </div>
    </div>
  </div>
)

const Shimmer = ({ count = 12 }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 p-4 flex-1">
    {Array.from({ length: count }, (_, i) => (
      <ShimmerCard key={i} />
    ))}
  </div>
)

export default Shimmer
