import Sidebar from "../../Navbar/Sidebar";
import Topbar from "../../Navbar/Topbar";

import React from 'react'
import { Link } from "react-router-dom";

export default function AddTrailersName() {
  return (
    <>
    <Topbar/>
    <div className="main-body">
      <Sidebar/>
      <div className="body-content">
      <h5>Add a trailer</h5>
        <div className="row row-cols-1 row-cols-xl-3">
          <div className="col user-roade-map">
            <div className="upload-order-tab-left">
              <ul className="timeline">
                <li className="timeline-item active  mb-6 ">
                  <h6>Name</h6>
                </li>
                <li className="timeline-item mb-6">
                  <h6>Capacity</h6>
                </li>
                <li className="timeline-item mb-6">
                  <h6>Inspection</h6>
                </li>
                <li className="timeline-item mb-6">
                  <h6>Finish</h6>
                </li>
              </ul>
            </div>
          </div>
          <div className="col user-form">
            <div className="user-form-area">
              <h2>Assign trailer name</h2>
              <p className="py-4">To get started, enter the driver's name, contact information, and select the carrier they
                belong to.</p>
              <form action="#">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Trailer <span
                      className="color-red">*</span></label>
                  <input type="text" className="form-control" id="text" placeholder=""/>
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Carrier</label>
                  <select className="form-select h4" aria-label="Default select example">
                    <option selected></option>
                    <option value="1">item 1</option>
                  </select>
                </div>

              </form>
            </div>
          </div>

        </div>
        <div className="offcanvas-destinations-cta">
          <ul className="nav nav-pills mt-5">
            <li className="nav-item">
              <Link  to="#" className="secound-btn">
                Next
              </Link>
            </li>
          </ul>
          <Link to="" className="secound-btn mt-5 me-2 bg-tra">Cancel</Link>
        </div>
      </div>
    </div>
    </>
  )
}
