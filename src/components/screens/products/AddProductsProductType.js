import React from "react";
import { Link } from "react-router-dom";
import TopAppbar from "../../appbar/TopAppbar";


export default function AddProductsProductType() {
  return (
    <>
      <TopAppbar />
      <div className="main-body">
        <div className="body-content">
          <div className="row row-cols-1 row-cols-xl-3">
            <div className="col user-roade-map">
              <div className="upload-order-tab-left">
                <ul className="timeline">
                  <li className="timeline-item active  mb-6 ">
                    <h6>Name</h6>
                  </li>
                  <li className="timeline-item active mb-6">
                    <h6>Product Type</h6>
                  </li>
                  <li className="timeline-item mb-6">
                    <h6>Compliance & Hazard</h6>
                  </li>
                  <li className="timeline-item mb-6">
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
                <h2>Product type</h2>
                <p className="py-4">
                  Define the product type, status and description. The
                  description may appear on Bills of Lading.
                </p>
                <form action="#">
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Product Type<span className="color-red">*</span>
                    </label>
                    <select
                      className="form-select h4"
                      aria-label="Default select example"
                    >
                      <option selected></option>
                      <option value="1">item 1</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Product Status<span className="color-red">*</span>
                    </label>
                    <select
                      className="form-select h4"
                      aria-label="Default select example"
                    >
                      <option selected></option>
                      <option value="1">item 1</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Product Description<span className="color-red">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder=""
                    />
                  </div>

                  <ul className="nav nav-pills mt-5">
                    <li className="nav-item">
                      <Link to="#" className="secound-btn mt-5 me-2 bg-tra">
                        Back
                      </Link>
                    </li>
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
  );
}
