import React from 'react'
import style from './contact.module.css'


export default function Contact() {
  return (
    <>
    <section>
      <div className="container p-5">
      <div className="text-center">
                <h2>CONTACT ME</h2>
            <div className="style-icon mt-2">
                  <i className="fa-solid fa-star fa-2x star position-relative ">
                    <div className="row-style"></div>
                    <div className="row-styletwo"></div>
                  </i>
                </div>
         </div>
         <div className="row py-5 my-3">
                    <div className="col-lg-8 mx-auto my-2">
                    <input className={`${style.inputContact} form-control form-control-lg py-4`} type="text" placeholder="Name" aria-label=".form-control-lg example"/>     
                    </div>
                    <div className="col-lg-8 mx-auto my-2">
                    <input className={`${style.inputContact} form-control form-control-lg py-4`} type="email" placeholder="Email" aria-label=".form-control-lg example"/>     
                    </div>
                    <div className="col-lg-8 mx-auto my-2">
                    <input className={`${style.inputContact} form-control form-control-lg py-4`} type="tel" placeholder="Phone Number" aria-label=".form-control-lg example"/>     
                    </div>
                    <div className="col-lg-8 mx-auto my-2">
                      <textarea rows="4" className={`${style.inputContact} form-control form-control-lg py-4`} placeholder='Message'></textarea>
                    </div>
                    <div className='col-lg-8 mx-auto my-3'>
                    <button className={`${style.btnContact} btn btn-primary py-3 px-4 `} id="sendMessageButton" type="submit">Send</button>
                    </div>
                </div>
      </div>

    </section>
    </>
  )
}
