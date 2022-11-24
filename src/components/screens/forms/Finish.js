import React from "react";
import { Link } from "react-router-dom";

export default function Finish() {
  return (
    <>
      <main class="userFormMain">
        <div class="container-fluid">
          <div class="row row-cols-1 row-cols-lg-4">
            <div class="col user-roade-map">
              <div class="upload-order-tab-left">
                <ul class="timeline">
                  <li class="timeline-item mb-6 ">
                    <h5>Confirm Name</h5>
                  </li>

                  <li class="timeline-item mb-6">
                    <h5>Address</h5>
                  </li>

                  <li class="timeline-item mb-6">
                    <h5>Username & Password</h5>
                  </li>
                  <li class="timeline-item mb-6">
                    <h5>Business Info</h5>
                  </li>
                  <li class="timeline-item active mb-6">
                    <h5>Finish</h5>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col user-form">
              <div class="user-form-area">
                <h1 class="mb-5">Welcome to LYNX Truck.</h1>
                <p>
                  To get started, confirm your company name and enter some
                  general information about your company.
                </p>
                <div class="row row-cols-1 row-cols-sm-2 mt-5 mb-3">
                  <div class="col mb-3">
                    <h6>
                      <b>Username</b>
                    </h6>
                    <p>FlintHills</p>
                    <Link class="nav-link h-underline" to="//customers">
                      Edit
                    </Link>
                  </div>
                  <div class="col mb-3">
                    <h6>
                      <b>Password</b>
                    </h6>
                    <p>ConorSmells</p>
                    <Link class="nav-link h-underline" to="/customers">
                      Edit{" "}
                    </Link>
                  </div>
                  <div class="col mb-3">
                    <h6>
                      <b>Company Name</b>
                    </h6>
                    <p>Flint Hills Resources</p>
                    <Link class="nav-link h-underline" to="/customers">
                      Edit{" "}
                    </Link>
                  </div>
                  <div class="col mb-3">
                    <h6>
                      <b>Reference Code</b>
                    </h6>
                    <p>Flint Hills</p>
                    <Link class="nav-link h-underline" to="/customers">
                      Edit{" "}
                    </Link>
                  </div>
                  <div class="col mb-3">
                    <h6>
                      <b>Customer Address</b>
                    </h6>
                    <p>
                      2651 Kipling St. <br /> Suite 5200 <br /> Houston, TX
                      77098
                    </p>
                    <Link class="nav-link h-underline" to="/customers">
                      Edit{" "}
                    </Link>
                  </div>
                  <div class="col mb-3">
                    <h6>
                      <b>Class of Business</b>
                    </h6>
                    <p></p>
                    <Link class="nav-link h-underline" to="/customers">
                      Edit{" "}
                    </Link>
                  </div>
                  <div class="col mb-3">
                    <h6>
                      <b>External Acct Number</b>
                    </h6>
                    <p>146546646489</p>
                    <Link
                      class="nav-link h-underline disabled"
                      to="/customers"
                    >
                      Cannot Edit{" "}
                    </Link>
                  </div>
                  <div class="col mb-3">
                    <h6>
                      <b>EPA Comp ID</b>
                    </h6>
                    <p></p>
                    <Link class="nav-link h-underline" to="/customers">
                      Edit{" "}
                    </Link>
                  </div>
                  <div class="col mb-3">
                    <h6>
                      <b>FEIN Number</b>
                    </h6>
                    <p>99-9999999</p>
                    <Link class="nav-link h-underline" to="/customers">
                      Edit{" "}
                    </Link>
                  </div>
                  <div class="col mb-3">
                    <h6>
                      <b>IRS Control Code</b>
                    </h6>
                    <p></p>
                    <Link class="nav-link h-underline" to="/customers">
                      Edit{" "}
                    </Link>
                  </div>
                  <div class="col mb-3">
                    <h6>
                      <b>IRS 637 Number</b>
                    </h6>
                    <p></p>
                    <Link class="nav-link h-underline" to="/customers">
                      Edit{" "}
                    </Link>
                  </div>
                </div>

                <div class="mb-5"></div>
                <Link
                  to="/businessinfo"
                  class="secound-btn mt-5 me-2 bg-tra"
                >
                  back
                </Link>
                <Link to="/successfulaccount" class="secound-btn mt-5  ">
                  Finish
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
