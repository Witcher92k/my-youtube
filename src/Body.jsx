import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import { useSelector } from 'react-redux'

const Body = () => {

    const navToggleState = useSelector(store=>store.nav.toggle)

  return (
    <div className='flex'>

        { navToggleState && <SideBar/> }
        <MainContainer sidebarOpen={navToggleState}/>
    </div>
  )
}

export default Body