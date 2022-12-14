import React from 'react'
import { Link } from 'react-router-dom';
import TopAppbar from '../../appbar/TopAppbar';


export default function AddProductFinish() {
  return (
    <>
    <TopAppbar/>
    <div className="main-body">
      <div className="body-content">
      <div className="row row-cols-1 row-cols-xl-3">
          <div className="col user-roade-map">
            <div className="upload-order-tab-left">
              <ul className="timeline">
                <li className="timeline-item active mb-6 ">
                  <h6>Name</h6>
                </li>
                <li className="timeline-item active mb-6">
                  <h6>Address</h6>
                </li>
                <li className="timeline-item active mb-6">
                  <h6>Optional Settings</h6>
                </li>
                <li className="timeline-item active mb-6">
                  <h6>Finish</h6>
                </li>
              </ul>
            </div>
          </div>
          <div className="col user-form">
            <div className="user-form-area">
              <h1 className="mb-5">Review and finish</h1>
                <p>Review all of the info before you finish creating the customer.</p>
                <div className="row row-cols-1 row-cols-sm-2 mt-5 mb-3">
                  <div className="col mb-3">
                    <h6><b>Product</b></h6>
                    <p>ULSD</p>
                    <Link className="nav-link h-underline" to="#">Edit</Link>
                  </div>
                  <div className="col mb-3">
                    <h6><b>Reference</b></h6>
                    <p>ULSD</p>
                    <Link className="nav-link h-underline" to="#">Edit </Link>
                  </div>
                  <div className="col mb-3">
                    <h6><b>Report Name</b></h6>
                    <p>ULSD</p>
                    <Link className="nav-link h-underline" to="#">Edit </Link>
                  </div>
                  <div className="col mb-3">
                    <h6><b>BOL Name</b></h6>
                    <p>ULSD</p>
                    <Link className="nav-link h-underline" to="#">Edit </Link>
                  </div>
                  <div className="col mb-3">
                    <h6><b>Product Type</b></h6>
                    <p>ULSD</p>
                    <Link className="nav-link h-underline" to="#">Edit </Link>
                  </div>
                  <div className="col mb-3">
                    <h6><b>Product Status</b></h6>
                    <p>Available</p>
                    <Link className="nav-link h-underline" to="#">Edit </Link>
                  </div>
                  <div className="col mb-3">
                    <h6><b>Product Description</b></h6>
                    <p>ULSD</p>
                    <Link className="nav-link h-underline" to="#">Edit </Link>
                  </div>
                  <div className="col mb-3">
                    <h6><b>IRS Code</b></h6>
                    <p>Diesel Fuel Undyed: #2 Low Sulphur</p>
                    <Link className="nav-link h-underline" to="#">Edit </Link>
                  </div>
                  <div className="col mb-3">
                    <h6><b>EPA Message</b></h6>
                    <p>Export Only</p>
                    <Link className="nav-link h-underline" to="#">Edit </Link>
                  </div>
                  <div className="col mb-3">
                    <h6><b>API Table</b></h6>
                    <p>6B</p>
                    <Link className="nav-link h-underline" to="#">Edit </Link>
                  </div>
                  <div className="col mb-3">
                    <h6><b>PetroEx Code</b></h6>
                    <p>VEX</p>
                    <Link className="nav-link h-underline" to="#">Edit </Link>
                  </div>
                  <div className="col mb-3">
                    <h6><b>PetroEx className</b></h6>
                    <p>V</p>
                    <Link className="nav-link h-underline" to="#">Edit </Link>
                  </div>
                  <div className="col mb-3">
                    <h6><b>PetroEx Alt Code</b></h6>
                    <p>None</p>
                    <Link className="nav-link h-underline" to="#">Edit </Link>
                  </div>
                </div>
                <div className="mb-5"></div>
                <Link  to="#" className="secound-btn mt-5 me-2 bg-tra">
                  back
                </Link>
                <Link  to="#" className="secound-btn mt-5  ">
                  Finish
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
