import React from 'react'
import './home.css'
import avatar from '../../images/avataaars.svg'

export default function Home() {
  return (
    <>
    <section id='home'>
        <div className="container text-white p-5">
            <div className=" text-center mt-5">
                <div className="image-home">
                <img src={avatar} alt="ImageHome logo" className='col-3'/>
                </div>
                <h1 className='mt-3 fw-bolder'>START REACT</h1>
                <div className="style-icon mt-4">
                  <i class="fa-solid fa-star fa-2x star position-relative text-white ">
                    <div className="row-style bg-white"></div>
                    <div className="row-styletwo bg-white"></div>
                  </i>
                </div>
                <p className='para-home mt-5'>Graphic Artist - Web Designer - Illustrator </p>
            </div> 
        </div>
    </section>
    </>
  )
}
