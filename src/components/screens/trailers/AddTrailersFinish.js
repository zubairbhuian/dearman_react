import React from 'react'
import { Link } from 'react-router-dom';

import Sidebar from "../../Navbar/Sidebar";
import Topbar from "../../Navbar/Topbar";

export default function AddTrailersFinish() {
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
                  <h6>Capacity</h6>
                </li>
                <li className="timeline-item active mb-6">
                  <h6>Inspection</h6>
                </li>
                <li className="timeline-item active mb-6">
                  <h6>Finish</h6>
                </li>
              </ul>
            </div>
          </div>
          <div className="col user-form">
            <div className="user-form-area">
              <h2>Enter address information</h2>
              <p>This address will appear on Bills of Ladings.</p>
              <div className="row row-cols-1 row-cols-sm-2 mt-5 mb-3">
                <div className="col mb-3">
                  <h6><b>Trailer Name</b></h6>
                  <p>T-14</p>
                  <Link  className="nav-link h-underline" to="#">Manage Trailer Name</Link>
                </div>
                <div className="col mb-3">
                  <h6><b>Carrier</b></h6>
                  <p>Trareysa</p>
                  <Link  className="nav-link h-underline" to="#">Manage Carrier </Link>
                </div>
                <div className="col mb-3">
                  <h6><b>Trailer Capacity</b></h6>
                  <p>8,500 USG</p>
                  <Link  className="nav-link h-underline" to="#">Manage Trailer Capacity</Link>
                </div>
                <div className="col mb-3">
                  <h6><b>V - External Visual Inspection</b></h6>
                  <p>06/20/2022</p>
                  <Link  className="nav-link h-underline" to="#">Manage Date</Link>
                </div>
                <div className="col mb-3">
                  <h6><b>I - Internal Visual Inspection</b></h6>
                  <p>06/20/2022</p>
                  <Link  className="nav-link h-underline" to="#">Manage Date</Link>
                </div>
                <div className="col mb-3">
                  <h6><b>P - Pressure Test</b></h6>
                  <p>06/20/2022</p>
                  <Link  className="nav-link h-underline" to="#">Manage Date</Link>
                </div>
                <div className="col mb-3">
                  <h6><b>L - Lining Test</b></h6>
                  <p>06/20/2022</p>
                  <Link  className="nav-link h-underline" to="#">Manage Date</Link>
                </div>
                <div className="col mb-3">
                  <h6><b>K-EPA27</b></h6>
                  <p>06/20/2022</p>
                  <Link  className="nav-link h-underline" to="#">Manage Date</Link>
                </div>
                <div className="col mb-3">
                  <h6><b>K - Leakage Test</b></h6>
                  <p>06/20/2022</p>
                  <Link  className="nav-link h-underline" to="#">Manage Date</Link>
                </div>
                <div className="col mb-3">
                  <h6><b>UC - Upper Coupler</b></h6>
                  <p>06/20/2022</p>
                  <Link  className="nav-link h-underline" to="#">Manage Date</Link>
                </div>

              </div>
              <ul className="nav nav-pills mt-5">
                <li className="nav-item">
                  <Link  to="#" className="secound-btn mt-5 me-2 bg-tra">
                    back
                  </Link>
                </li>
                <li className="nav-item">
                  <Link  to="#" className="secound-btn">
                    Finish
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
