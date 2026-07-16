import Header from './Header'
import SideBar from './SideBar'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

const Body = () => {
  const navToggleState = useSelector((store) => store.nav.toggle)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex">
        {navToggleState && <SideBar />}
        <div className={`flex-1 min-w-0 ${navToggleState ? 'ml-56' : ''}`}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Body
