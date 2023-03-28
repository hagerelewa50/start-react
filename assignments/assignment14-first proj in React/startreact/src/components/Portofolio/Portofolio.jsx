import React from 'react'
import style  from './portofolio.module.css'
import port1 from '../../images/cabin.png'
import port2 from '../../images/cake.png'
import port3 from '../../images/circus.png'
import port4 from '../../images/game.png'
import port5 from '../../images/safe.png'
import port6 from '../../images/submarine.png'


export default function Portofolio() {
  return (
    <>
    <section id='Portofolio'>
        <div className="container py-5 ">
            <div className={`${style.headPortofolio} text-center`}>
                <h2>PORTOFOLIO</h2>
            <div className="style-icon mt-2">
                  <i className="fa-solid fa-star fa-2x star position-relative ">
                    <div className="row-style"></div>
                    <div className="row-styletwo"></div>
                  </i>
                </div>
            </div>
            <div className="row py-5 g-5">
                <div className="col-lg-4 col-md-6" data-bs-toggle="modal" data-bs-target="#image1">
                    <div className="item position-relative">
                        <img src={port1} alt="cabin" className='w-100 rounded-3'/>
                        <div className={`${style.overlay} position-absolute end-0 start-0 top-0 bottom-0 rounded-3 d-flex justify-content-center align-items-center`}>
                           <i className="fa-solid fa-plus fa-5x text-white"></i>
                        </div>
                    </div>


                </div>
                <div className="col-lg-4 col-md-6" data-bs-toggle="modal" data-bs-target="#image2">
                    <div className="item position-relative">
                        <img src={port2} alt="cake" className='w-100 rounded-3'/>
                        <div className={`${style.overlay} position-absolute end-0 start-0 top-0 bottom-0 rounded-3 d-flex justify-content-center align-items-center`}>
                           <i className="fa-solid fa-plus fa-5x text-white"></i>
                        </div>
                    </div>


                </div>
                <div className="col-lg-4 col-md-6" data-bs-toggle="modal" data-bs-target="#image3">
                    <div className="item position-relative">
                        <img src={port3} alt="circus" className='w-100 rounded-3'/>
                        <div className={`${style.overlay} position-absolute end-0 start-0 top-0 bottom-0 rounded-3 d-flex justify-content-center align-items-center`}>
                           <i className="fa-solid fa-plus fa-5x text-white"></i>
                        </div>
                    </div>


                </div>
                <div className="col-lg-4 col-md-6" data-bs-toggle="modal" data-bs-target="#image4">
                    <div className="item position-relative">
                        <img src={port4} alt="game" className='w-100 rounded-3'/>
                        <div className={`${style.overlay} position-absolute end-0 start-0 top-0 bottom-0 rounded-3 d-flex justify-content-center align-items-center`}>
                           <i className="fa-solid fa-plus fa-5x text-white"></i>
                        </div>
                    </div>


                </div>
                <div className="col-lg-4 col-md-6" data-bs-toggle="modal" data-bs-target="#image5">
                    <div className="item position-relative">
                        <img src={port5} alt="safe" className='w-100 rounded-3'/>
                        <div className={`${style.overlay} position-absolute end-0 start-0 top-0 bottom-0 rounded-3 d-flex justify-content-center align-items-center`}>
                           <i className="fa-solid fa-plus fa-5x text-white"></i>
                        </div>
                    </div>


                </div>
                <div className="col-lg-4 col-md-6" data-bs-toggle="modal" data-bs-target="#image6">
                    <div className="item position-relative">
                        <img src={port6} alt="submarine" className='w-100 rounded-3'/>
                        <div className={`${style.overlay} position-absolute end-0 start-0 top-0 bottom-0 rounded-3 d-flex justify-content-center align-items-center`}>
                           <i className="fa-solid fa-plus fa-5x text-white"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<div className="modal fade" id="image1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl ">
    <div className="modal-content position-relative">
    <div className={`${style.btnClose}`} data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark fa-3x"></i></div>
      <div className={`${style.modalBorder} modal-header d-block text-center`}>
        <h1 className={`${style.moadalTitle} modal-title`} id="exampleModalLabel">LOG CABIN</h1>
        <div className="style-icon">
                  <i className="fa-solid fa-star fa-2x star position-relative ">
                    <div className="row-style"></div>
                    <div className="row-styletwo"></div>
                  </i>
        </div>
      </div>
      <div className="modal-body  w-75 mx-auto text-center">
      <img src={port1} alt="cabin" className='w-100 rounded-3'/>
      <p className='my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      </div>
      <div className={`${style.modalBorder}modal-footer d-flex justify-content-center align-items-center mb-5`}>
        <button type="button" className={`${style.btnModal} btn btn-info text-white`} data-bs-dismiss="modal"><i class="fa-solid fa-xmark fa-lg"></i> Close Window</button>
      </div>
    </div>
  </div>
</div>



<div className="modal fade" id="image2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl ">
    <div className="modal-content position-relative">
    <div className={`${style.btnClose}`} data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark fa-3x"></i></div>
      <div className={`${style.modalBorder} modal-header d-block text-center`}>
        <h1 className={`${style.moadalTitle} modal-title`} id="exampleModalLabel">TASTY CAKE</h1>
        <div className="style-icon">
                  <i className="fa-solid fa-star fa-2x star position-relative ">
                    <div className="row-style"></div>
                    <div className="row-styletwo"></div>
                  </i>
        </div>
      </div>
      <div className="modal-body  w-75 mx-auto text-center">
      <img src={port2} alt="cabin" className='w-100 rounded-3'/>
      <p className='my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      </div>
      <div className={`${style.modalBorder}modal-footer d-flex justify-content-center align-items-center mb-5`}>
        <button type="button" className={`${style.btnModal} btn btn-info text-white`} data-bs-dismiss="modal"><i class="fa-solid fa-xmark fa-lg"></i> Close Window</button>
      </div>
    </div>
  </div>
</div>



<div className="modal fade" id="image3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl ">
    <div className="modal-content position-relative">
    <div className={`${style.btnClose}`} data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark fa-3x"></i></div>
      <div className={`${style.modalBorder} modal-header d-block text-center`}>
        <h1 className={`${style.moadalTitle} modal-title`} id="exampleModalLabel">CIRCUS TENT</h1>
        <div className="style-icon">
                  <i className="fa-solid fa-star fa-2x star position-relative ">
                    <div className="row-style"></div>
                    <div className="row-styletwo"></div>
                  </i>
        </div>
      </div>
      <div className="modal-body  w-75 mx-auto text-center">
      <img src={port3} alt="cabin" className='w-100 rounded-3'/>
      <p className='my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      </div>
      <div className={`${style.modalBorder}modal-footer d-flex justify-content-center align-items-center mb-5`}>
        <button type="button" className={`${style.btnModal} btn btn-info text-white`} data-bs-dismiss="modal"><i class="fa-solid fa-xmark fa-lg"></i> Close Window</button>
      </div>
    </div>
  </div>
</div>


<div className="modal fade" id="image4" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl ">
    <div className="modal-content position-relative">
    <div className={`${style.btnClose}`} data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark fa-3x"></i></div>
      <div className={`${style.modalBorder} modal-header d-block text-center`}>
        <h1 className={`${style.moadalTitle} modal-title`} id="exampleModalLabel">CONTROLLER</h1>
        <div className="style-icon">
                  <i className="fa-solid fa-star fa-2x star position-relative ">
                    <div className="row-style"></div>
                    <div className="row-styletwo"></div>
                  </i>
        </div>
      </div>
      <div className="modal-body  w-75 mx-auto text-center">
      <img src={port4} alt="cabin" className='w-100 rounded-3'/>
      <p className='my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      </div>
      <div className={`${style.modalBorder}modal-footer d-flex justify-content-center align-items-center mb-5`}>
        <button type="button" className={`${style.btnModal} btn btn-info text-white`} data-bs-dismiss="modal"><i class="fa-solid fa-xmark fa-lg"></i> Close Window</button>
      </div>
    </div>
  </div>
</div>


<div className="modal fade" id="image5" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl ">
    <div className="modal-content position-relative">
    <div className={`${style.btnClose}`} data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark fa-3x"></i></div>
      <div className={`${style.modalBorder} modal-header d-block text-center`}>
        <h1 className={`${style.moadalTitle} modal-title`} id="exampleModalLabel">LOCKED SAFE</h1>
        <div className="style-icon">
                  <i className="fa-solid fa-star fa-2x star position-relative ">
                    <div className="row-style"></div>
                    <div className="row-styletwo"></div>
                  </i>
        </div>
      </div>
      <div className="modal-body  w-75 mx-auto text-center">
      <img src={port5} alt="cabin" className='w-100 rounded-3'/>
      <p className='my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      </div>
      <div className={`${style.modalBorder}modal-footer d-flex justify-content-center align-items-center mb-5`}>
        <button type="button" className={`${style.btnModal} btn btn-info text-white`} data-bs-dismiss="modal"><i class="fa-solid fa-xmark fa-lg"></i> Close Window</button>
      </div>
    </div>
  </div>
</div>


<div className="modal fade" id="image6" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl ">
    <div className="modal-content position-relative">
    <div className={`${style.btnClose}`} data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark fa-3x"></i></div>
      <div className={`${style.modalBorder} modal-header d-block text-center`}>
        <h1 className={`${style.moadalTitle} modal-title`} id="exampleModalLabel">SUBMARINE</h1>
        <div className="style-icon">
                  <i className="fa-solid fa-star fa-2x star position-relative ">
                    <div className="row-style"></div>
                    <div className="row-styletwo"></div>
                  </i>
        </div>
      </div>
      <div className="modal-body  w-75 mx-auto text-center">
      <img src={port6} alt="cabin" className='w-100 rounded-3'/>
      <p className='my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      </div>
      <div className={`${style.modalBorder}modal-footer d-flex justify-content-center align-items-center mb-5`}>
        <button type="button" className={`${style.btnModal} btn btn-info text-white`} data-bs-dismiss="modal"><i class="fa-solid fa-xmark fa-lg"></i> Close Window</button>
      </div>
    </div>
  </div>
</div>


    </section>
    </>
  )
}
