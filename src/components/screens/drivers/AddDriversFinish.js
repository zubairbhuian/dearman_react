import React from 'react'
import TopAppbar from '../../appbar/TopAppbar';


export default function AddDriversFinish() {
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
                <li className="timeline-item active  mb-6">
                  <h6>Identification</h6>
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
                  <h6><b>Driver's name and contact info</b></h6>
                  <p>Display name:</p>
                  <p>Phone number:</p>
                  <a className="nav-link h-underline" to="#offcanvas-driver-name" >Edit</a>
                </div>
                <div className="col"></div>
                <div className="col mb-3">
                  <h6><b>Identification</b></h6>
                  <p>DL number:</p>
                  <p>DL State:</p>
                  <p>DL expiration:</p>
                  <p>TWIC number:</p>
                  <p>TWIC expiration:</p>
                  <a className="nav-link h-underline" to="#" >Edit </a>
                </div>

              </div>
              <ul className="nav nav-pills mt-5">
                <li className="nav-item">
                  <a  to="#" className="secound-btn mt-5 me-2 bg-tra">
                    back
                  </a>
                </li>
                <li className="nav-item">
                  <a  to="#" className="secound-btn">
                    Finish
                  </a>
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
