import React from 'react'

import { BsCloudUpload } from "react-icons/bs";
import { Link } from 'react-router-dom';
import TopAppbar from '../../appbar/TopAppbar';

export default function AddTrailersInspection() {
  return (
    <>
    <TopAppbar/>
    <div className="main-body">
      <div className="body-content">
      <h5>Add a driver</h5>
        <div className="row row-cols-1 row-cols-xl-3">
          <div className="col user-roade-map">
            <div className="upload-order-tab-left">
              <ul className="timeline">
                <li className="timeline-item active  mb-6 ">
                  <h6>Name</h6>
                </li>
                <li className="timeline-item active mb-6">
                  <h6>Capacity</h6>
                </li>
                <li className="timeline-item active mb-6">
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
              <h2>Inspection</h2>
              <p className="py-4">Please enter the trailer's <b>49 CFR 180.407</b> inspection dates</p>
              <form action="#">
                <div className="uesr-item">
                  <div className="mb-3 side-by-side">
                    <label for="exampleFormControlInput1" className="form-label">V - External Visual Inspection<span
                        className="color-red">*</span></label>
                    <input type="date" className="form-control" id="date" placeholder="Select Date" value="Tue 1/4"/>
                  </div>
                  <div className="mb-3 side-by-side">
                    <label for="exampleFormControlInput1" className="form-label">I - Internal Visual Inspection <span
                        className="color-red">*</span></label>
                    <input type="date" className="form-control" id="date" placeholder="Select Date" value="Tue 1/4"/>
                  </div>
                </div>
                <div className="uesr-item">
                  <div className="mb-3 side-by-side">
                    <label for="exampleFormControlInput1" className="form-label">P - Pressure Test<span
                        className="color-red">*</span></label>
                    <input type="date" className="form-control" id="date" placeholder="Select Date" value="Tue 1/4"/>
                  </div>
                  <div className="mb-3 side-by-side">
                    <label for="exampleFormControlInput1" className="form-label">T - Thickness Test<span
                        className="color-red">*</span></label>
                    <input type="date" className="form-control" id="date" placeholder="Select Date" value="Tue 1/4"/>
                  </div>
                </div>
                <div className="uesr-item">
                  <div className="mb-3 side-by-side">
                    <label for="exampleFormControlInput1" className="form-label">K-EPA27<span
                        className="color-red">*</span></label>
                    <input type="date" className="form-control" id="date" placeholder="Select Date" value="Tue 1/4"/>
                  </div>
                  <div className="mb-3 side-by-side">
                    <label for="exampleFormControlInput1" className="form-label">K - Leakage Test<span
                        className="color-red">*</span></label>
                    <input type="date" className="form-control" id="date" placeholder="Select Date" value="Tue 1/4"/>
                  </div>
                </div>
                <div className="uesr-item">
                  <div className="mb-3 side-by-side">
                    <label for="exampleFormControlInput1" className="form-label">UC - Upper Coupler<span
                        className="color-red">*</span></label>
                    <input type="date" className="form-control" id="date" placeholder="Select Date" value="Tue 1/4"/>
                  </div>
                </div>

                <h5>Verification</h5>
                <p>Upload proof of cargo tank test/inspection (49 CFR 180.407). This information will be reviewed and
                  verified so terminals can be sure the trailers they are loading are safe.</p>
                <div className="uesr-item">
                  <div className="mb-3 side-by-side">
                    <div className="Neon Neon-theme-dragdropbox">
                      <input className='cus_file_one' name="files[]" id="filer_input2"  multiple="multiple" type="file"/>
                      <div className="Neon-input-dragDrop">
                        <div className="Neon-input-inner">
                          <Link className="Neon-input-choose-btn blue form-control"><BsCloudUpload classNameName="me-2"/>Upload proof of inspection</Link></div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="offcanvas-destinations-cta">
          <ul className="nav nav-pills mt-5">
            <li className="nav-item">
              <Link to="#" className="secound-btn mt-5 me-2 bg-tra"
                >
                Back
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="secound-btn">Next</Link>
            </li>
          </ul>
          <Link to="#" className="secound-btn mt-5 me-2 bg-tra">Cancel</Link>
        </div>
      </div>
      </div>
    </>
  )
}
