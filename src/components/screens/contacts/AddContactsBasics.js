import React from 'react'
import { Link } from 'react-router-dom';

import Sidebar from "../../Navbar/Sidebar";
import Topbar from "../../Navbar/Topbar";

export default function AddContactsBasics() {
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
                <li className="timeline-item mb-6">
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
                <h3>Setup Credit for</h3>
                <select className="form-select me-2 form-select-lg h3 fw-5 " aria-label="Default select example">
                  <option selected>Luxemborg</option>
                  <option value="1">IFC Fuels</option>
                  <option value="2">PetroNational</option>
                </select>
              </div>
              <form action="#">

                <div className="row row-cols-1 row-cols-sm-2 mt-5">
                  <div className="col mb-3">
                    <label for="exampleFormControlInput1" className="form-label">First Name</label>
                    <input type="text" id="name" className="form-control"  value=""/>
                  </div>
                  <div className="col mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Last Name</label>
                    <input type="text" id="name" className="form-control" value=""/>
                  </div>

                </div>
                <div className="row">
                  <div className="col-lg-12 mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="text" id="email" className="form-control" value=""/>
                  </div>

                  <div className="col-lg-12 mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Phone</label>
                    <input type="text" id="phone" className="form-control" value=""/>
                  </div>

                </div>
                <ul className="nav nav-pills mt-5">
                  <li className="nav-item">
                    <Link to="#" className="secound-btn">
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
