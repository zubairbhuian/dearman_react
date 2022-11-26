import React from 'react'
import { Link } from 'react-router-dom';

import Sidebar from "../../Navbar/Sidebar";
import Topbar from "../../Navbar/Topbar";

export default function AddSuppliersAddress() {
  return (
    <>
    <Topbar/>
    <div className="main-body">
      <Sidebar/>
      <div className="body-content">
      <div className="row row-cols-1 row-cols-xl-3">
      <div className="col user-roade-map">
        <div className="upload-order-tab-left">
          <ul className="timeline">
            <li className="timeline-item   mb-6 ">
              <h6>Name</h6>
            </li>
            <li className="timeline-item mb-6 active">
              <h6>Address</h6>
            </li>
            <li className="timeline-item mb-6">
              <h6>Optional Settings</h6>
            </li>
            <li className="timeline-item mb-6">
              <h6>Finish</h6>
            </li>
          </ul>
        </div>
      </div>
      <div className="col user-form">
        <div className="user-form-area">
          <h2>Select entity</h2>
          <p className="py-4">Select the entity you plan to do business with.</p>
          <h5 className="py-4">Customers</h5>
          <div className="customar-info">
            <div className="item">
              <div className="card">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                <div className="card-body">
                  <div className="info">
                    <p>Name</p>
                    <span>Oil Company, Inc.</span>
                  </div>
                  <div className="info">
                    <p>Address</p>
                    <span>1700 Oil Company Drive Suite 2000 <br/>Houston, tx 77098</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2"/>
                <div className="card-body">
                  <div className="info">
                    <p>Name</p>
                    <span>Oil Company, Inc.</span>
                  </div>
                  <div className="info">
                    <p>Address</p>
                    <span>1700 Oil Company Drive Suite 2000 <br/>Houston, tx 77098</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="address-btn">
              <Link to="#">The entity I need is not listed</Link>
            </div>
          </div>
          <div action="#">
            <ul className="nav nav-pills mt-5">
              <li className="nav-item">
                <Link to="#" className="secound-btn mt-5 me-2 bg-tra">
                  Back
                </Link>
              </li>
              <li className="nav-item">
                <Link className="secound-btn">
                  Next
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
      </div>
    </div>

    </>
  )
}
