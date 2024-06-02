import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import SideBar from '../SideBar/SideBar'

export default function () {
  return (
    <div className='d-flex flex-row mb-3'>
    
            <div className=''>
                <SideBar/>
            </div>
            <div className='w-100'>
                <NavBar/>
                <Outlet/>
            </div>
      
    </div>
  )
}
