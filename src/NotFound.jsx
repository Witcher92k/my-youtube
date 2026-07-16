import { Link } from 'react-router-dom'

const NotFound = () => (
  <div className="flex flex-col items-center justify-center flex-1 min-h-[60vh] gap-4 text-center px-4">
    <h1 className="text-6xl font-bold text-gray-300">404</h1>
    <p className="text-lg text-gray-700">This page isn't available. Sorry about that.</p>
    <Link
      to="/"
      className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800"
    >
      Go to Home
    </Link>
  </div>
)

export default NotFound
