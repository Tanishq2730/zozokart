import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { showToast } from './components/ToastifyNotification'

const PrivateRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated)

  if (typeof isAuthenticated === 'undefined') {
    return null // or a loader, or a default route
  }
  if(isAuthenticated){
    return <Outlet />
  }else{
    showToast('error','Please login')
    return <Navigate to="/sign-in" />
  }
}

export default PrivateRoute