import React,{ useState } from 'react'

import './navbar.css'
import {  Link,NavLink } from 'react-router-dom'

export default function Navbar() {


  const[Navbar,setNavbar]=useState(false)
  const changeWidthNavbar = ()=>{
    if(window.scrollY >= 80){
      setNavbar(true)
    }else{
      setNavbar(false)

    }
  }
  window.addEventListener("scroll",changeWidthNavbar)



  return (
    <>
    <nav className={`${Navbar? 'navbar active':'navbar'} navbar-expand-lg w-100 position-sticky fixed-top `}>
    <div className="container d-flex justify-content-between">
    <div className='col-8'>
    <Link className="navbar-brand text-white fw-bolder" to="#">START REACT</Link>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link text-white ms-3" aria-current="page" to="Home">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white ms-3" to="Portofolio">PORTOFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white ms-3" to="About">ABOUT</NavLink>
        </li>  
       
        <li className="nav-item">
          <NavLink className="nav-link text-white ms-3" to="Contact">CONTACT</NavLink>
        </li> 
      </ul>
    </div>
  </div>
</nav>   
    </>
  )
}
