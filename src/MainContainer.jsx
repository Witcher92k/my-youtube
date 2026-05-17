import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = ({ sidebarOpen }) => {
  return (
    <div className={`flex-1 ${sidebarOpen ? 'ml-56' : ''}`}>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer