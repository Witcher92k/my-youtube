import React from 'react'
import Button from './Button'

const buttonNameList = [
  "All", "Music", "Gaming", "Mixes", "Trailers", "Gym",
  "Hot", "Web series", "Hip hop", "Drum & Bass", "AI", "Live", "Esports"
]

const ButtonList = () => {
  return (
    <div className="flex items-center gap-3 px-4 py-3 overflow-x-auto sticky top-0 bg-white z-10"
      style={{ scrollbarWidth: 'none' }}>
      {buttonNameList.map((item, i) => (
        <Button key={item} name={item} active={i === 0} />
      ))}
    </div>
  )
}

export default ButtonList