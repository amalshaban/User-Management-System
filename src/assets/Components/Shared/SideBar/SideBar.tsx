
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import p from '../../'
import pf from 'E:/react course/User Management System/user/src/assets/imgs/9c5672219055d43b0ffb2caf907f4b0d.jpg'
export default function SideBar() {
  return (
    <div className='sidebarContainer'>
      <Sidebar>
  <Menu>
    
      <div className='profileData m-5'>
        <img src= {pf} className='rounded-circle' ></img>
        <h3>User Name</h3>      
        </div>
      <MenuItem icon={<i className='fa fa-home aria-hidden="true"'></i>}> Home </MenuItem>
  
      <MenuItem icon={<i className='fa fa-home aria-hidden="true"'></i>}> Users </MenuItem>
      <MenuItem icon={<i className='fa fa-home aria-hidden="true"'></i>}> Add user </MenuItem>
      <MenuItem icon={<i className='fa fa-home aria-hidden="true"'></i>}> Profile </MenuItem>
    <MenuItem> Documentation </MenuItem>
    <MenuItem> Calendar </MenuItem>
  </Menu>
</Sidebar>
    </div>

  )
}
