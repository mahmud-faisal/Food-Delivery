import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/general/Navbar'
import Footer from '../components/general/Footer'
<<<<<<< HEAD

=======
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
>>>>>>> feffc19 (Feat)
const Main = () => {
  return (
 <>
    <Navbar />
    <Outlet />
    <Footer />
<<<<<<< HEAD
=======
    <ToastContainer />
>>>>>>> feffc19 (Feat)
 </>
  )
}

export default Main