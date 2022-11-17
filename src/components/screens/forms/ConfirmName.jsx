import React from 'react'

export default function ConfirmName() {
  return (
    <>
        <div className="userFormMain">
        <div className="container-fluid">
            <div className="row row-cols-1 row-cols-lg-4">
                <div className="col user-roade-map">
                    <div className="upload-order-tab-left">
                        <ul className="timeline">
                            <li className="timeline-item active mb-6 ">
                                <h5>Confirm Name</h5>
                            </li>
    
                            <li className="timeline-item mb-6">
                                <h5>Address</h5>
                                
                            </li>
    
                            <li className="timeline-item mb-6">
                                <h5>Username & Password</h5>
    
                            </li>
                            <li className="timeline-item mb-6">
                                <h5>Business Info</h5>
    
                            </li>
                            <li className="timeline-item mb-6">
                                <h5>Finish</h5>
    
                            </li>
    
                        </ul>
                    </div>
                </div>
          
                <div className="col user-form">
    
                  <div className="user-form-area">
                    <h1>Welcome to LYNX Truck.</h1>
                    <p>To get started, confirm your company name and enter some general information about your company.</p>
                    <div className="row row-cols-1 row-cols-sm-2 mt-5 mb-3">
                        <div className="col">
                            <h6><b>Company Name</b></h6>
                            <p>Flint Hills Resources</p>
                            <a className="nav-link h-underline" href="#">Edit Company Name</a>
                        </div>
                        <div className="col">
                            <h6><b>Reference Code</b></h6>
                            <p>Flint Hills</p>
                            <a className="nav-link h-underline" href="#">Edit Reference Code</a>
                        </div>
                    </div>
                    <div className="mt-5"></div>
                    <a href="address.html" className="secound-btn">
                        Confirm <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short ms-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                          </svg>           
                    </a>
                  </div>
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}
