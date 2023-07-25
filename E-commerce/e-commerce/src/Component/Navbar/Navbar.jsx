import React from 'react'
import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/freshcart-logo.svg'
import { cartContext } from '../../Context/cartContextProvider'
import  styles from './Navbar.module.css'

export default function Navbar({userData ,logOut}) {
  const {numOfCartItems} = useContext(cartContext);
return <>
   <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid px-5">
    <Link className="navbar-brand" to="/" ><img src={logo} alt="logo" className='w-100'/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
     {userData!== null?<ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <NavLink className={({isActive})=>isActive?"nav-link active":'nav-link'} aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=>isActive?"nav-link active":'nav-link'} to="Brands">Brands</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=>isActive?"nav-link active":'nav-link'} to="Cart">Cart</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=>isActive?"nav-link active":'nav-link'} to="allOrders">allOrders</NavLink>
        </li>
      </ul>:null}


        
      
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
       <li className='d-flex align-items-center'>
       <i className=" me-3 fa-brands fa-facebook"></i>
       <i className=" me-3 fa-brands fa-twitter"></i>
       <i className="me-3 fa-brands fa-youtube"></i>
       <i className=" me-3 fa-brands fa-instagram"></i>
       <i className=" me-3 fa-brands fa-tiktok"></i>

       </li>

       {userData === null?<><li className="nav-item">
          <NavLink className={({isActive})=>isActive?"nav-link active":'nav-link'} to="Login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=>isActive?"nav-link active":'nav-link'} to="Register">Register</NavLink>
        </li>
       </>:<> 
       <li className="nav-item">
        <div className="nav-link active "> <div  className="position-relative mt-2 me-1">
       <i className="fa-solid fa-cart-shopping"></i>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {numOfCartItems}
    <span className="visually-hidden">unread messages</span>
  </span>
</div></div>
        </li>

        <li className="nav-item">
          <span className="nav-link cursor-pointer" onClick={logOut}>Logout</span>
        </li>
       </>
     }
      </ul>

    </div>
  </div>
</nav>
   </>

    }
