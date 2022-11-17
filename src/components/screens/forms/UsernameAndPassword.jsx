import React from "react";

export default function UsernameAndPassword() {
  return (
    <>
      <main class="userFormMain">
        <div class="container-fluid">
          <div class="row row-cols-1 row-cols-lg-4">
            <div class="col user-roade-map">
              <div class="upload-order-tab-left">
                <ul class="timeline">
                  <li class="timeline-item  mb-6 ">
                    <h5>Confirm Name</h5>
                  </li>

                  <li class="timeline-item mb-6">
                    <h5>Address</h5>
                  </li>

                  <li class="timeline-item active mb-6">
                    <h5>Username & Password</h5>
                  </li>
                  <li class="timeline-item mb-6">
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
                <h1>Welcome to LYNX Truck.</h1>
                <p class="mb-5">
                  Choose a username and password. Passwords must [insert
                  password parameters]
                </p>

                <div>
                  <form action="#">
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        Username
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
                        Password
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
                        Confirm Password
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder=""
                      />
                    </div>

                    <div class="mb-5"></div>
                    <a href="address.html" class="secound-btn mt-5 me-2 bg-tra">
                      back
                    </a>
                    <a href="businessinfo.html" class="secound-btn mt-5  ">
                      Next
                    </a>
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
