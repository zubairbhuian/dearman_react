import React from "react";

export default function BusinessInfo() {
  return (
    <>
      <div class="userFormMain">
        <div class="container-fluid">
          <div class="row row-cols-1 row-cols-lg-4">
            <div class="col user-roade-map">
              <div class="upload-order-tab-left">
                <ul class="timeline">
                  <li class="timeline-item  mb-6 ">
                    <h5>Confirm Name</h5>
                  </li>

                  <li class="timeline-item  mb-6">
                    <h5>Address</h5>
                  </li>

                  <li class="timeline-item mb-6">
                    <h5>Username & Password</h5>
                  </li>
                  <li class="timeline-item active mb-6">
                    <h5>Business Info</h5>
                  </li>
                  <li class="timeline-item mb-6">
                    <h5>Finish</h5>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col user-form">
              <div class="user-form-area">
                <h1>Enter Address Information.</h1>
                <p class="mb-5">
                  Entering more information will enable automations.
                </p>

                <div>
                  <form action="#">
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        Class of Business
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        External Acct Number
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder=""
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        EPA Comp ID
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder=""
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        FEIN Number *
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder=""
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        IRS Control Code
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder=""
                      />
                    </div>

                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        IRS 637 Number
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder=""
                      />
                    </div>

                    <div class="mb-5"></div>
                    <a
                      href="usernameandpassword.html"
                      class="secound-btn mt-5 me-2 bg-tra"
                    >
                      back
                    </a>
                    <a href="finish.html" class="secound-btn mt-5  ">
                      Next
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
