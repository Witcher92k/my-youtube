import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleNav } from './utils/navStateSlice';

const Header = () => {


    const dispatch = useDispatch();

    const toggleNavbar = ()=>{

        dispatch(toggleNav());

    }
    


  return (
    <div className="flex items-center gap-4 p-4 w-full shadow-md">

      {/* Hamburger */}
      <button onClick={toggleNavbar}>
      <div className="cursor-pointer flex flex-col gap-1">
        <span className="block w-6 h-0.5 bg-black"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
      </div>
      </button>

      {/* YouTube logo */}
      <div className="flex items-center gap-1">
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
        <span className="text-xl font-bold text-black">YouTube</span>
      </div>

      <div className="flex flex-1 max-w-xl">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 border border-gray-300 rounded-l-full text-sm outline-none focus:border-blue-500"
        />
        <button className="px-5 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
          </svg>
        </button>
      </div>

      {/* Right side icons */}
      <div className="flex items-center gap-3 ml-auto">
        {/* Notification bell */}
        <button className="p-2 rounded-full hover:bg-gray-100">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
          </svg>
        </button>

        {/* User avatar */}
        <button className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-sm">
          P
        </button>
      </div>

    </div>
  )
}

export default Header