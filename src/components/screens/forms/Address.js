import React from "react";
import { Link } from "react-router-dom";

export default function Address() {
  return (
    <>
      <main className="userFormMain">
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-lg-4">
            <div className="col user-roade-map">
              <div className="upload-order-tab-left">
                <ul className="timeline">
                  <li className="timeline-item  mb-6 ">
                    <h5>Confirm Name</h5>
                  </li>

                  <li className="timeline-item active mb-6">
                    <h5>Address</h5>
                  </li>

                  <li className="timeline-item mb-6">
                    <h5>Username & Password</h5>
                  </li>
                  <li className="timeline-item mb-6">
                    <h5>Business Info</h5>
                  </li>
                  <li className="timeline-item mb-6">
                    <h5>Finish</h5>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col user-form">
              <div className="user-form-area">
                <h1>Enter Address Information.</h1>
                <p className="mb-5">
                  This address will appear on Bills of Lading.
                </p>

                <div>
                  <form action="#">
                    <div className="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        Address line 1 *
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder=""
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        Address line 2 (Optional)
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder=""
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        City *
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder=""
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        State *
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        Postal Code *
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder=""
                      />
                    </div>

                    <div className="mb-5"></div>
                    <Link
                      to="/confirmName"
                      className="secound-btn mt-5 me-2 bg-tra"
                    >
                      back
                    </Link>
                    <Link
                      to="/usernameandpassword"
                      className="secound-btn mt-5  "
                    >
                      Next
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
