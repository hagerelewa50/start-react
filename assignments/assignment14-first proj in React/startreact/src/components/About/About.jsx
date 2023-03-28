import React from 'react'
import style from './about.module.css'

export default function About() {
  return (
    <>
    <section id={`${style.About}`}>
      <div className="container py-5">
      <div className="text-center">
                <h2 className='text-white'>ABOUT</h2>
            <div className="style-icon mt-3 ">
                  <i className="fa-solid fa-star fa-2x star position-relative text-white">
                    <div className="row-style bg-white"></div>
                    <div className="row-styletwo bg-white"></div>
                  </i>
                </div>
        </div>
      <div className="row w-75 justify-content-evenly  mx-auto text-white my-4">
        <div className="col-5">
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p> 
        </div>
        <div className="col-5">
          <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
        </div>

      </div>
      </div>

    </section>
    </>
  )
}
