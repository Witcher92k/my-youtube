import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const navToggleState = useSelector(store => store.nav.toggle)
  return (
    <div className={`flex-1 ${navToggleState ? 'ml-56' : 'ml-0'}`}>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer