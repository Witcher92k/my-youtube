import React from 'react'
import ButtonList from './ButtonList'

const MainContainer = ({ sidebarOpen }) => {
  return (
    <div className={`flex-1 ${sidebarOpen ? 'ml-56' : ''}`}>
        <ButtonList/>
    </div>
  )
}

export default MainContainer