import React from 'react'
import { Link } from 'react-router-dom';
import TopAppbar from '../../appbar/TopAppbar';


export default function AddDestinationsName() {
  return (
    <>
    <TopAppbar/>
    <div className="main-body">
      <div className="body-content">
      <h5>Add a destination</h5>
      <div className="row row-cols-1 row-cols-xl-3">
        <div className="col user-roade-map">
          <div className="upload-order-tab-left">
            <ul className="timeline">
              <li className="timeline-item active  mb-6 ">
                <h6>Name</h6>
              </li>
              <li className="timeline-item mb-6">
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
            <h2>Set up the basics</h2>
            <p className="py-4">To get started, give the destination a name and define it's address.</p>
            <form action="#">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Name<span className="color-red">*</span></label>
                <input type="name" id="name" className="form-control" placeholder=""/>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Address line 1<span
                    className="color-red">*</span></label>
                <input type="address" className="form-control" id="exampleFormControlInput1" placeholder=""/>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Address line 1(Optional)<span
                    className="color-red">*</span></label>
                <input type="address" className="form-control" id="exampleFormControlInput1" placeholder=""/>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">City <span className="color-red">*</span></label>
                <input type="address" className="form-control" id="exampleFormControlInput1" placeholder=""/>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Customer *</label>
                <select className="form-select h4" aria-label="Default select example">
                  <option selected></option>
                  <option value="1">item 1</option>
                </select>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Zip<span className="color-red">*</span></label>
                <input type="zip" className="form-control" id="exampleFormControlInput1" placeholder=""/>
              </div>


            </form>

          </div>
        </div>

      </div>
      <div className="offcanvas-destinations-cta">
        <ul className="nav nav-pills mt-5">
          <li className="nav-item">
            <Link to="#" className="secound-btn"
              data-bs-dismiss="modal">
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
