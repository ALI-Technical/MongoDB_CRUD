import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login'
import Signup from '../Components/Signup'

const routes = () => {
  return (
    <>
      <Routes>
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </>
  )
}

export default routes
