import React from 'react'
import { Link } from 'react-router-dom';

import Sidebar from "../../Navbar/Sidebar";
import Topbar from "../../Navbar/Topbar";

export default function AddDestinationsTerminalSetting() {
  return (
    <>
    <Topbar/>
    <div className="main-body">
      <Sidebar/>
      <div className="body-content">
      <h5>Add a destination</h5>
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
              <li className="timeline-item mb-6">
                <h6>Finish</h6>
              </li>
            </ul>
          </div>
        </div>
        <div className="col user-form">
          <div className="user-form-area">
            <h2>Terminal settings</h2>
            <p className="py-4">Create a reference for the destination and assign terminals.</p>
            <form action="#">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Destination Reference<span
                    className="color-red">*</span></label>
                <input type="name" id="name" className="form-control"placeholder=""/>
              </div>
              <div className="offcan-t-assignment">
                <p className="form-label">Terminal assignment<span className="color-red">*</span></p>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                  <label className="form-check-label" for="exampleRadios1">
                    Destination can be used at any terminal
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                  <label className="form-check-label" for="exampleRadios1">
                    Destination can be used at selected terminals
                  </label>
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Select Terminal(s)</label>
                  <select className="form-select h4" aria-label="Default select example">
                    <option selected></option>
                    <option value="1">item 1</option>
                  </select>
                </div>
              </div>

            </form>

          </div>
        </div>

      </div>
      <div className="offcanvas-destinations-cta">
        <ul className="nav nav-pills mt-5">
          <li className="nav-item">
            <Link  to="#" className="secound-btn mt-5 me-2 bg-tra">
              Back
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#offcanvas-review-finish" className="secound-btn">
              Next
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
