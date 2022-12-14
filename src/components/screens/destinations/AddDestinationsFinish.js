import React from 'react'
import { Link } from 'react-router-dom';
import TopAppbar from '../../appbar/TopAppbar';

export default function AddDestinationsFinish() {
  return (
    <>
    <TopAppbar/>
    <div className="main-body">
      <div className="body-content">
      <div className="row row-cols-1 row-cols-xl-3">
        <div className="col user-roade-map">
          <div className="upload-order-tab-left">
            <ul className="timeline">
              <li className="timeline-item active  mb-6 ">
                <h6>Name</h6>
              </li>
              <li className="timeline-item active mb-6">
                <h6>Terminal Settings</h6>
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
              <p>Create a reference for the destination and assign terminals.</p>
              <div className="row row-cols-1 row-cols-sm-2 mt-5 mb-3">
                <div className="col mb-3">
                  <h6><b>Name</b></h6>
                  <p>Houston, TX</p>
                  <Link className="nav-link h-underline" to="customers.html">Edit</Link>
                </div>
                <div className="col mb-3">
                  <h6><b>Reference</b></h6>
                  <p>Houston</p>
                  <Link className="nav-link h-underline" to="customers.html">Edit </Link>
                </div>
                <div className="col mb-3">
                  <h6><b>Address</b></h6>
                  <p>2651 Kipling St. <br/>
                    Suite 5200 <br/>
                    Houston, TX 77098</p>
                  <Link className="nav-link h-underline" to="customers.html">Edit </Link>
                </div>
                <div className="col mb-3">
                  <h6><b>Terminal Settings</b></h6>
                  <p>Destination can be used at any terminal</p>
                  <Link className="nav-link h-underline" to="customers.html">Edit </Link>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className="offcanvas-destinations-cta">
        <ul className="nav nav-pills mt-5">
          <li className="nav-item">
            <Link to="#" className="secound-btn mt-5 me-2 bg-tra">
              Back
            </Link>
          </li>
          <li className="nav-item">
            <Link  to="#" className="secound-btn">
              Finish Adding
            </Link>
          </li>
        </ul>
        <Link to="#" className="secound-btn mt-5 me-2 bg-tra">Cancel</Link>
      </div>
      </div>
    </div>

    </>
  )
}
