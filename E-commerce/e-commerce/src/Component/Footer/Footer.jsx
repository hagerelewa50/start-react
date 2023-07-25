import React from 'react'
import { Link } from 'react-router-dom'
import  styles from './Footer.module.css'

export default function Footer() {
  return <>
  {/* Footer */}
<footer class="text-center text-lg-start bg-light text-muted mt-3 ">
  {/* Section: Social media */}
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* Left */}
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    {/* Left */}

    {/* Right */}
    <div>
      <Link to="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </Link>
      <Link to="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </Link>
      <Link to="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </Link>
      <Link to="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </Link>
      <Link to="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </Link>
      <Link to="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </Link>
    </div>
    {/* Right */}
  </section>
  {/* Section: Social media */}

  {/* Section: Links  */}
  <section class="">
    <div class="container text-center text-md-start mt-5">
      {/* Grid row */}
      <div class="row mt-3">
        {/* Grid column */}
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* Content */}
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Company name
          </h6>
          <p>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        {/* Grid column */}

        {/* Grid column */}
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <Link to="#!" class="text-reset">Clothes</Link>
          </p>
          <p>
            <Link to="#!" class="text-reset">Shoes</Link>
          </p>
          <p>
            <Link to="#!" class="text-reset">Devices</Link>
          </p>
         
        </div>
        {/* Grid column 
       Grid column */}
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <Link to="#!" class="text-reset">Pricing</Link>
          </p>
          <p>
            <Link to="#!" class="text-reset">Settings</Link>
          </p>
          <p>
            <Link to="#!" class="text-reset">Orders</Link>
          </p>
          <p>
            <Link to="#!" class="text-reset">Help</Link>
          </p>
        </div>
        {/* Grid column 
       Grid column */}
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* Links */}
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> New York  US</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
  </section>
  {/* Section: Links  */}

  {/* Copyright */}
  <div class="text-center p-4" style ={{"backgroundColor": "rgba(0, 0, 0, 0.05)"}}>
    © 2021 Copyright:
    <Link class="text-reset fw-bold" to="https://mdbootstrap.com/">E-Commerce.com</Link>
  </div>
  {/* Copyright */}
</footer>
{/* Footer */}
  </>
}
