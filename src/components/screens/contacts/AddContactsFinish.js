import React from 'react'
import { Link } from 'react-router-dom';
import TopAppbar from '../../appbar/TopAppbar';


export default function AddContactsFinish() {
  return (
    <>
    <TopAppbar/>
    <div className="main-body">
      <div className="body-content">
      <div class="row row-cols-1 row-cols-xl-3">
          <div class="col user-roade-map">
            <div class="upload-order-tab-left">
              <ul class="timeline">
                <li class="timeline-item active  mb-6 ">
                  <h6>Basics</h6>
                </li>
                <li class="timeline-item active mb-6">
                  <h6>Notifications</h6>
                </li>
                <li class="timeline-item active mb-6">
                  <h6>Finish</h6>
                </li>
              </ul>
            </div>
          </div>
          <div class="col user-form">
            <div class="user-form-area">
              <h2>Review and Finish</h2>
              <p>To get started, fill out each field. Once a customer's credit is setup the system with
                automatically
                adjust Credit Balance and Available Credit. Lynx uses USD for all currency-related
                fields.</p>
              <div class="row row-cols-1 row-cols-sm-2 mt-5 mb-3">
                <div class="col mb-3">
                  <h6><b>Contact Group</b></h6>
                  <p>Bluewing Midstream</p>
                  <Link class="nav-link h-underline" to="#">Edit</Link>
                </div>
                <div class="col mb-3">
                  <h6><b>Name</b></h6>
                  <p>Will Reid</p>
                  <Link class="nav-link h-underline" to="#">Edit </Link>
                </div>
                <div class="col mb-3">
                  <h6><b>Contact information</b></h6>
                  <p>Emai: wreid@adcd.com</p>
                  <p>Phone: (111) 111-1111</p>
                  <Link class="nav-link h-underline" to="#">Edit </Link>
                </div>
                <div class="col mb-3">
                  <h6><b>Notifications</b></h6>
                  <p>Bills of Lading, Scheduled Order Confirmation, Order Checck-in</p>
                  <Link class="nav-link h-underline" to="#">Edit </Link>
                </div>
              </div>
              <ul class="nav nav-pills mt-5">
                <li class="nav-item">
                  <Link data-bs-toggle="offcanvas" to="#" class="secound-btn mt-5 me-2 bg-tra">
                    back
                  </Link>
                </li>
                <li class="nav-item">
                  <Link data-bs-toggle="offcanvas" to="#" class="secound-btn">
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
