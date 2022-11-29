import React from 'react'
import { Link } from 'react-router-dom';

import Sidebar from "../../Navbar/Sidebar";
import Topbar from "../../Navbar/Topbar";

export default function AddProductOptionalSettings() {
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
                <li className="timeline-item active  mb-6 ">
                  <h6>Name</h6>
                </li>
                <li className="timeline-item active mb-6">
                  <h6>Product Type</h6>
                </li>
                <li className="timeline-item active mb-6">
                  <h6>Compliance & Hazard</h6>
                </li>
                <li className="timeline-item active mb-6">
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
              <h2>Product type</h2>
              <p className="py-4">Define the product type, status and description. The description may appear on Bills of
                Lading.</p>
              <form action="#">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">PetroEx Code<span
                      className="color-red">*</span></label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder=""/>
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">PetroEx className<span
                      className="color-red">*</span></label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder=""/>
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">PetroEx Alt Code<span
                      className="color-red">*</span></label>
                  <select className="form-select h4" aria-label="Default select example">
                    <option selected></option>
                    <option value="1">item 1</option>
                  </select>
                </div>

                <ul className="nav nav-pills mt-5">
                  <li className="nav-item">
                    <Link  to="#offcanvas-compliance-and-hazard"
                      className="secound-btn mt-5 me-2 bg-tra">
                      Back
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link  to="#offcanvas-review-finish" className="secound-btn"
                      >
                      Next
                    </Link>
                  </li>
                </ul>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}
