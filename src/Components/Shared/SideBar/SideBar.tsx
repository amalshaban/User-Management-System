
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import pf from 'E:/react course/User Management System/user/src/assets/imgs/9c5672219055d43b0ffb2caf907f4b0d.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function SideBar() {
  const [ isCollapsed , setIsCollapsed ] =useState(false);
  const toggleCollapse = () =>{
    setIsCollapsed(! isCollapsed);
  }
  return (
    <div className='sidebarcontainer'>
      <Sidebar collapsed={isCollapsed}>
  <Menu>
  <MenuItem 
onClick={toggleCollapse}
      icon={<i className='fa fa-bars aria-hidden="true"'></i>}> 
    
      </MenuItem>
      <div className='profileData m-5'>
        <img src= {pf} className=' rounded rounded-circle w-100'></img>
        <h1 className='h6 text-center p-2'>User Name</h1>      
      </div>
      <MenuItem 
      className='hovercolor'
      component={<Link to="/Home" />} 
      icon={<i className='fa fa-home aria-hidden="true"'></i>}> 
      Home 
      </MenuItem>
  
      <MenuItem 
      className='hovercolor'
      component={<Link to="/Home/UsersList" />} 
      icon={<i className='fa fa-user-group aria-hidden="true"'></i>}> 
      Users 
      </MenuItem>

      <MenuItem 
      className='hovercolor'
      component={<Link to="/Home/UserData" />} 
      icon={<i className='fa fa-user aria-hidden="true"'></i>}> 
      Add user 
      </MenuItem>

      <MenuItem 
      className='hovercolor'
      component={<Link to="/Home/Profile" />} 
      icon={<i className='fa fa-home aria-hidden="true"'></i>}> 
      Profile 
      </MenuItem>
    
  </Menu>
</Sidebar>
    </div>

  )
}
