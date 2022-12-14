import React from 'react'
import { BsCloudUpload } from "react-icons/bs";
import TopAppbar from '../../appbar/TopAppbar';


export default function AddTrailersCapacity() {
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
              <h2>Capacity</h2>
              <p className="py-4">Please enter the trailer's capacity in United States Gallons (USG).</p>
              <form action="#">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Capacity<span
                      className="color-red">*</span></label>
                  <select className="form-select h4" aria-label="Default select example">
                    <option selected></option>
                    <option value="1">item 1</option>
                  </select>
                </div>

                <h5>Verification</h5>
                <p>Upload documentation that supports the capacity entered above. We recommend submitting the trailer's
                  strapping table. This information will be reviewed and verified so terminals can load trailers to
                  their full, scheduled amounts.</p>
                <div className="uesr-item">
                  <div className="mb-3 side-by-side">
                    <div className="Neon Neon-theme-dragdropbox">
                      <input className='cus_file_one' name="files[]" id="filer_input2" multiple="multiple" type="file" />
                      <div className="Neon-input-dragDrop">
                        <div className="Neon-input-inner">
                          <a className="Neon-input-choose-btn blue form-control"><BsCloudUpload className='me-2'/> Upload proof of capacity</a></div>
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
              <a data-bs-toggle="offcanvas" href="#offcanvas-assign-name" className="secound-btn mt-5 me-2 bg-tra"
                data-bs-dismiss="modal">
                Back
              </a>
            </li>
            <li className="nav-item">
              <a data-bs-toggle="offcanvas" href="#offcanvas-inspection" className="secound-btn" data-bs-dismiss="modal">
                Next
              </a>
            </li>
          </ul>
          <a href="" className="secound-btn mt-5 me-2 bg-tra">Cancel</a>
        </div>
      </div>
    </div>
    </>
  )
}
