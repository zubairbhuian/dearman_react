import React from "react";
import { Link } from "react-router-dom";
import TopAppbar from "../../appbar/TopAppbar";

export default function AddSuppliersName() {
  return (
    <>
      <TopAppbar />
      <div className="main-body">
        <div className="body-content">
          <div class="row row-cols-1 row-cols-xl-3">
            <div class="col user-roade-map">
              <div class="upload-order-tab-left">
                <ul class="timeline">
                  <li class="timeline-item active  mb-6 ">
                    <h6>Name</h6>
                  </li>
                  <li class="timeline-item mb-6">
                    <h6>Address</h6>
                  </li>
                  <li class="timeline-item mb-6">
                    <h6>Optional Settings</h6>
                  </li>
                  <li class="timeline-item mb-6">
                    <h6>Finish</h6>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col user-form">
              <div class="user-form-area">
                <h2>Add Customer Name</h2>
                <p class="py-4">
                  To get started, enter the customer's name and assign a
                  reference code.
                </p>
                <form action="#">
                  <div class="uesr-item">
                    <div class="mb-3 side-by-side">
                      <label for="exampleFormControlInput1" class="form-label">
                        Customer Name <span class="color-red">*</span>
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder=""
                      />
                    </div>
                    <div class="mb-3 side-by-side">
                      <label for="exampleFormControlInput1" class="form-label">
                        Customer Email <span class="color-red">*</span>
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Customer Reference <span class="color-red">*</span>
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder=""
                    />
                  </div>
                  <ul class="nav nav-pills mt-5">
                    <li class="nav-item">
                      <Link to="/add_suppliers_address" class="secound-btn">Next </Link>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
