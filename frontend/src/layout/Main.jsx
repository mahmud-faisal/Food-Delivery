import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/general/Navbar'
import Footer from '../components/general/Footer'

const Main = () => {
  return (
 <>
    <Navbar />
    <Outlet />
    <Footer />
 </>
  )
}

export default Main