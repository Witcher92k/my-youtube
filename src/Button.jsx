import React from 'react'

const Button = ({ name, active = false }) => {
  return (
    <button
      className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer
        ${active
          ? 'bg-black text-white'
          : 'bg-gray-100 text-black hover:bg-gray-200'
        }`}
    >
    {name}
    </button>
  )
}

export default Button
