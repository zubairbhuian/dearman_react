import React from 'react'
import { Link } from 'react-router-dom';
import TopAppbar from '../../appbar/TopAppbar';


export default function AddSuppliersOptionalSettings() {
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
            <li className="timeline-item mb-6">
              <h6>Finish</h6>
            </li>
          </ul>
        </div>
      </div>
      <div className="col user-form">
        <div className="user-form-area">
          <h2>Optional Settings</h2>
          <p className="py-4">Entering more information may enable automations.</p>
          <h5 className="py-4">Customers</h5>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Customer *</label>
                  <select className="form-select h4" aria-label="Default select example">
                    <option selected></option>
                    <option value="1">item 1</option>
                  </select>
            </div>
            <div className="uesr-item">
              <div className="mb-3 side-by-side">
                <label for="exampleFormControlInput1" className="form-label">Short name</label>
                <input type="name" className="form-control" id="exampleFormControlInput1" placeholder=""/>
              </div>
              <div className="mb-3 side-by-side">
                <label for="exampleFormControlInput1" className="form-label">Consignee</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder=""/>
              </div>
            </div>
            <div className="uesr-item">
              <div className="mb-3 side-by-side">
                <label for="exampleFormControlInput1" className="form-label">External acct. num.</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" placeholder=""/>
              </div>
              <div className="mb-3 side-by-side">
                <label for="exampleFormControlInput1" className="form-label">EIN</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" placeholder=""/>
              </div>
            </div>
            <div className="uesr-item">
              <div className="mb-3 side-by-side">
                <label for="exampleFormControlInput1" className="form-label">IRS control code</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" placeholder=""/>
              </div>
              <div className="mb-3 side-by-side">
                <label for="exampleFormControlInput1" className="form-label">IRS 637 number </label>
                <input type="number" className="form-control" id="exampleFormControlInput1" placeholder=""/>
              </div>
            </div>

            <div action="#">
              <ul className="nav nav-pills mt-5">
                <li className="nav-item">
                  <Link  to="#"
                    className="secound-btn mt-5 me-2 bg-tra">
                    Back
                  </Link>
                </li>
                <li className="nav-item">
                  <Link  to="#" className="secound-btn">
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
