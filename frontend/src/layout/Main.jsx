import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/general/Navbar'
import Footer from '../components/general/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Main = () => {
  return (
 <>
    <Navbar />
    <Outlet />
    <Footer />
    <ToastContainer />
 </>
  )
}

export default Main