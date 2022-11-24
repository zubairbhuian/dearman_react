import React from 'react'
import { Link } from 'react-router-dom'
import { BiRightArrowAlt } from "react-icons/bi";

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
                            <Link className="nav-link h-underline" href="#">Edit Company Name</Link>
                        </div>
                        <div className="col">
                            <h6><b>Reference Code</b></h6>
                            <p>Flint Hills</p>
                            <Link className="nav-link h-underline" href="#">Edit Reference Code</Link>
                        </div>
                    </div>
                    <div className="mt-5"></div>
                    <Link to="/address" className="secound-btn">Confirm <BiRightArrowAlt/></Link>
                  </div>
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}
