import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
// import Portofolio from '../Portofolio/Portofolio'
// import Home from '../Home/Home'
// import About from '../About/About'
// import Contact from '../Contact/Contact'


export default function Layout() {
  return (
    <div>
    <Navbar/>
    <Outlet></Outlet>
    <Footer/>
    </div>
  )
}
