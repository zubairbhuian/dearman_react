import React from 'react'
import { Link } from 'react-router-dom';
import TopAppbar from '../../appbar/TopAppbar';

export default function AddSuppliersFinish() {
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
                <h6><b>Customer name</b></h6>
                <p>PetroNational</p>
                <Link className="nav-link h-underline" to="#">Edit</Link>
              </div>
              <div className="col mb-3">
                <h6><b>Reference</b></h6>
                <p>PN</p>
                <Link className="nav-link h-underline" to="#">Edit </Link>
              </div>
              <div className="col mb-3">
                <h6><b>Address</b></h6>
                <p>2651 Kipling St. <br/>
                  Suite 5200 <br/>
                  Houston, TX 77098</p>
                <Link className="nav-link h-underline" to="#">Edit </Link>
              </div>
              <div className="col mb-3">
                <h6><b>Optional settings</b></h6>
                <p>className of business:</p>
                <p>Short name:</p>
                <p>Consignee:</p>
                <p>External acct num:</p>
                <p>EIN:</p>
                <p>IRS control code:</p>
                <p>IRS 637 number:</p>
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
