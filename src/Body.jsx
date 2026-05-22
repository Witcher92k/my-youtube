import SideBar from './SideBar'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

const Body = () => {

    const navToggleState = useSelector(store=>store.nav.toggle)

  return (
    <div className='flex'>

        { navToggleState && <SideBar/> }
        <Outlet></Outlet>
    </div>
  )
}

export default Body