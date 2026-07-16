import React from 'react'

// Deterministic colour per username so each user always gets the same colour
const NAME_COLORS = [
  '#3ea6ff', '#ff6b6b', '#5cdd8b', '#ffb347',
  '#d98cf7', '#ff8fab', '#80deea', '#ffd54f',
]

const getNameColor = (name = '') => {
  const index = name.charCodeAt(0) % NAME_COLORS.length
  return NAME_COLORS[index]
}

const ChatMessage = ({ name, text }) => {
  return (
    <div className='flex items-start gap-2 px-1 py-1 rounded-lg hover:bg-[#1f1f1f] transition-colors group'>

      {/* Avatar */}
      <div
        className='w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 mt-0.5'
        style={{ backgroundColor: getNameColor(name) }}
      >
        {name?.charAt(0).toUpperCase()}
      </div>

      {/* Name + message */}
      <div className='flex flex-wrap items-baseline gap-x-1.5 text-sm leading-snug'>
        <span
          className='font-semibold text-xs shrink-0'
          style={{ color: getNameColor(name) }}
        >
          {name}
        </span>
        <span className='text-[#e5e5e5] text-sm break-words'>
          {text}
        </span>
      </div>

    </div>
  )
}

export default ChatMessage
