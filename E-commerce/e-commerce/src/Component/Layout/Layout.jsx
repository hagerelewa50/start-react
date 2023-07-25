import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import  styles from './Layout.module.css'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Layout({userData,setuserData}) {
let navigate = useNavigate()
  function logOut(){
    localStorage.removeItem("userToken");
    setuserData(null);
    navigate("/login")
  }
  return (
    <>
      <Navbar userData={userData} logOut={logOut}/>  
      <Outlet/>
       <Footer/>
    </>
  )
}
