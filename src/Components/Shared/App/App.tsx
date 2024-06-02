import { Children, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LogIn from '../../LogIn/LogIn'
import UserData from '../../UserData/UserData'
import UsersList from '../../UsersList/UsersList'
import MasterLayout from '../MasterLayout/MasterLayout'
import AuthLayout from '../AuthLayout/AuthLayout'
import './App.css'
import NotFound from '../NotFound/NotFound'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from '../../Profile/Profile'
import Home from '../../Home/Home'
function App() {
  

  const routes = createBrowserRouter([
    {
      path: '',
      errorElement: <NotFound/>,
      element: <AuthLayout />,
      children:[
        {index: true, element: <LogIn />},
        {path: 'LogIn', element: <LogIn />}
      ]
    },
    {
      path: 'home',
      errorElement: <NotFound/>,
      element: <MasterLayout />,
      children:[
        {index: true, element:<Home />},
        {path:'UsersList', element:<UsersList/>},
        {path:'UserData', element:<UserData/>},

        {path: 'UserData/:isEdit', element: <UserData/>},
        {path:'Profile', element:<Profile/>},
      ]
    }
 
  ])

  return (
  <>
  <RouterProvider router={routes}></RouterProvider>
  <ToastContainer />
  </>
  )
}

export default App
