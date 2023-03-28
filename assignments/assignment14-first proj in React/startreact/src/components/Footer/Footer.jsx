import React from 'react'
import './footer.css'


export default function Footer() {
  return (
  <>
  <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            2215 John Daniel Drive
                            <br/>
                            Clark, MO 65243
                        </p>
                    </div>
                  <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                      <div className="icons-footer d-flex justify-content-center align-items-center">
                        <div className="icon-footer">
                         <i className="fab fa-fw fa-facebook-f fa-xl"></i>
                        </div>
                        <div className="icon-footer">
                         <i className="fab fa-fw fa-twitter fa-xl"></i></div>
                        <div className="icon-footer">
                         <i className="fab fa-fw fa-linkedin-in fa-xl"></i> </div>
                        <div className="icon-footer">
                         <i className="fab fa-fw fa-dribbble fa-xl"></i> </div>
                      </div>
                        
                        
                  </div>
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">About Freelancer</h4>
                        <p className="lead mb-0">
                            Freelance is a free to use, MIT licensed Bootstrap theme created by Route
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        <div className="copyright py-4 text-center text-white">
            <div className="container"><small>Copyright © Your Website 2021</small></div>
        </div>
  </>
  )
}
