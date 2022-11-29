import React from "react";
import { Link } from "react-router-dom";

import Sidebar from "../../Navbar/Sidebar";
import Topbar from "../../Navbar/Topbar";
import { BsFillCameraFill } from "react-icons/bs";

export default function AddDriversIndentiflication() {
  return (
    <>
      <Topbar />
      <div className="main-body">
        <Sidebar />
        <div className="body-content">
          <h5>Add a driver</h5>
          <div className="row row-cols-1 row-cols-xl-3">
            <div className="col user-roade-map">
              <div className="upload-order-tab-left">
                <ul className="timeline">
                  <li className="timeline-item active  mb-6 ">
                    <h6>Name</h6>
                  </li>
                  <li className="timeline-item active mb-6">
                    <h6>Identification</h6>
                  </li>
                  <li className="timeline-item mb-6">
                    <h6>Finish</h6>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col user-form">
              <div className="user-form-area">
                <h2>Driver identification</h2>
                <p className="py-4">Input the driver's identification info.</p>
                <form action="#">
                  <h5 className="mb-3">Driver's License</h5>

                  <div className="uesr-item">
                    <div className="mb-3 side-by-side">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        DL number<span className="color-red">*</span>
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="number"
                        placeholder=""
                      />
                    </div>
                    <div className="mb-3 side-by-side">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        State
                      </label>
                      <select
                        className="form-select h4"
                        aria-label="Default select example"
                      >
                        <option selected></option>
                        <option value="1">item 1</option>
                      </select>
                    </div>
                  </div>
                  <div className="uesr-item">
                    <div className="mb-3 side-by-side">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        Expires<span className="color-red">*</span>
                      </label>
                      <select
                        className="form-select h4"
                        aria-label="Default select example"
                      >
                        <option selected></option>
                        <option value="1">item 1</option>
                      </select>
                    </div>
                  </div>
                  <div className="uesr-item">
                    <div className="mb-3 side-by-side">
                      <div className="Neon Neon-theme-dragdropbox">
                        <input
                          className="cus_file_one"
                          name="files[]"
                          id="filer_input2"
                          multiple="multiple"
                          type="file"
                        />

                        <div className="Neon-input-dragDrop">
                          <div className="Neon-input-inner">
                            <Link className="Neon-input-choose-btn blue form-control">
                              <BsFillCameraFill className="me-2" />
                              <BsFillCameraFill className="me-2" /> Front of
                              driver's license
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 side-by-side">
                      <div className="Neon Neon-theme-dragdropbox">
                        <input className="cus_file_one" type="file" />

                        <div className="Neon-input-dragDrop">
                          <div className="Neon-input-inner">
                            <Link className="Neon-input-choose-btn blue form-control">
                              <BsFillCameraFill className="me-2" />
                              Back of driver's license
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <hr />
                  </div>
                  <h5 className="mb-3">TWIC</h5>
                  <div className="uesr-item">
                    <div className="mb-3 side-by-side">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        TWIC number<span className="color-red">*</span>
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="number"
                        placeholder=""
                      />
                    </div>
                    <div className="mb-3 side-by-side">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        Expires
                      </label>
                      <select
                        className="form-select h4"
                        aria-label="Default select example"
                      >
                        <option selected></option>
                        <option value="1">item 1</option>
                      </select>
                    </div>
                  </div>
                  <div className="uesr-item">
                    <div className="mb-3 side-by-side">
                      <div className="Neon Neon-theme-dragdropbox">
                        <input
                          className="cus_file_one"
                          name="files[]"
                          id="filer_input2"
                          multiple="multiple"
                          type="file"
                        />
                        <div className="Neon-input-dragDrop">
                          <div className="Neon-input-inner">
                            <Link className="Neon-input-choose-btn blue form-control">
                              Front of TWIC
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 side-by-side">
                      <div className="Neon Neon-theme-dragdropbox">
                        <input
                          className="cus_file_one"
                          name="files[]"
                          id="filer_input2"
                          multiple="multiple"
                          type="file"
                        />

                        <div className="Neon-input-dragDrop">
                          <div className="Neon-input-inner">
                            <Link className="Neon-input-choose-btn blue form-control">
                              <BsFillCameraFill className="me-2" />
                              Back of TWIC
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="offcanvas-destinations-cta">
            <ul className="nav nav-pills mt-5">
              <li className="nav-item">
                <Link
                  data-bs-toggle="offcanvas"
                  to="#"
                  className="secound-btn mt-5 me-2 bg-tra"
                >
                  Back
                </Link>
              </li>
              <li className="nav-item">
                <Link data-bs-toggle="offcanvas" to="#" className="secound-btn">
                  Next
                </Link>
              </li>
            </ul>
            <Link
              to="destinations.html"
              className="secound-btn mt-5 me-2 bg-tra"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
