import React from 'react'

const menuItems = [
  { icon: "🏠", label: "Home" },
  { icon: "🎬", label: "Shorts" },
  { icon: "📺", label: "Subscriptions" },
]

const exploreItems = [
  { icon: "🔥", label: "Trending" },
  { icon: "🛍️", label: "Shopping" },
  { icon: "🎵", label: "Music" },
  { icon: "🎮", label: "Gaming" },
  { icon: "📰", label: "News" },
  { icon: "🏆", label: "Sports" },
]

const SideBarSection = ({ title, items }) => (
  <div className="mb-2">
    {title && <p className="text-xs font-semibold text-gray-500 uppercase px-4 py-2">{title}</p>}
    {items.map((item) => (
      <div
        key={item.label}
        className="flex items-center gap-4 px-4 py-2 rounded-xl cursor-pointer hover:bg-gray-100"
      >
        <span className="text-xl">{item.icon}</span>
        <span className="text-sm font-medium">{item.label}</span>
      </div>
    ))}
    <hr className="my-2 border-gray-200" />
  </div>
)

const SideBar = () => {
  return (
    <div className="w-56 h-screen overflow-y-auto pt-2 fixed top-16 left-0 text-black">
      <SideBarSection items={menuItems} />
      <SideBarSection title="Explore" items={exploreItems} />
    </div>
  )
}

export default SideBar
