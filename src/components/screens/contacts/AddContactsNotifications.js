import React from 'react'
import { Link } from 'react-router-dom';

import Sidebar from "../../Navbar/Sidebar";
import Topbar from "../../Navbar/Topbar";

export default function AddContactsNotifications() {
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
                  <h6>Basics</h6>
                </li>
                <li className="timeline-item active mb-6">
                  <h6>Notifications</h6>
                </li>
                <li className="timeline-item mb-6">
                  <h6>Finish</h6>
                </li>
              </ul>
            </div>
          </div>
          <div className="col user-form">
            <div className="user-form-area">
              <div className="user-form-area-big">
                <h3>Setup Notifications</h3>
                <p className="mt-5">Choose notifications you would like this contact to receive. </p>
              </div>
              <hr className="mb-3"/>
              <form action="#">
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" />
                  <label className="form-check-label" for="flexCheckDefault">
                    Bills of Lading
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" />
                  <label className="form-check-label" for="flexCheckChecked">
                    Scheduled Order Confirmation
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                  <label className="form-check-label" for="flexCheckChecked">
                    Order Check-in
                  </label>
                </div>
              </form>
              <hr className="mb-3"/>
              <ul className="nav nav-pills mt-5">
                <li className="nav-item">
                  <Link  to="#" className="secound-btn mt-5 me-2 bg-tra">
                    back
                  </Link>
                </li>
                <li className="nav-item">
                  <Link  to="#" className="secound-btn">
                    next
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
