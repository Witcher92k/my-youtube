import React from 'react'

const Comment = ({data}) => {

const {name,text,replies} = data;

  return (
    <div className="flex gap-3 my-2 shadow-sm bg-gray-100 rounded-l">
      <img
        src="https://i.pravatar.cc/40?img=3"
        alt="user"
        className="w-9 h-9 rounded-full flex-shrink-0"
      />
      <div className="flex flex-col">
        <div className="text-sm font-medium text-gray-900">@{name}</div>
        <div className="text-sm text-gray-700 mt-0.5">{text}</div>
      </div>
    </div>
  )
}

export default Comment