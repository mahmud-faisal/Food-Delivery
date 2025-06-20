import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/general/Sidebar'
import Header from '../components/general/Header'

const Main = () => {
  return (
    <>
    <Header />
    <hr />
    <div className="flex">
    <Sidebar />
    <div className="w-8/10">
    <Outlet /></div>
    </div>
    </>
  )
}

export default Main