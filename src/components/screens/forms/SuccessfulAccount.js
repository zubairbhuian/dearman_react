import React from "react";
import { Link } from "react-router-dom";

export default function SuccessfulAccount() {
  return (
    <div class="userFormMain">
      <div class="container-fluid">
        <div class="col user-form">
          <div class="user-form-area successful-account-area">
            <h1>Successful! Account Created.</h1>
            <p class="py-4 f-16">
              Your account has been created. You are almost ready to begin
              managing and tracking orders. Add your suppliers, customers, and
              products to begin.
            </p>
            <div class="row row-cols-1 row-cols-sm-2 mt-5 mb-3">
              <div class="col">
                <h6>
                  <b>Username</b>
                </h6>
                <p>FlintHills</p>
                <Link class="nav-link h-underline" to="/customers">
                  Edit
                </Link>
              </div>
              <div class="col">
                <h6>
                  <b>Password</b>
                </h6>
                <p>ConorSmells</p>
                <Link class="nav-link h-underline" to="/customers">
                  Edit
                </Link>
              </div>
            </div>
            <div class="mt-5"></div>
            <div class="text-align-end">
              <button
                class="secound-btn "
                data-bs-toggle="offcanvas"
                href="#sa-offcanvas"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
