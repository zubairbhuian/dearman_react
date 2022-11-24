import React from "react";
import Logo from "../assets/images/logo.png";
import BgImg from "../assets/images/login_bg.jpg";
import { NavLink } from "react-router-dom";

export default function LoginPass() {
  return (
    <div className="login-page">
      <img className="login-page-bg" src={BgImg} alt="" />
      <nav className="navbar">
        <div className="container-fluid">
          <NavLink className="py-2 px-4" to="login.html">
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>
      </nav>
      <div className="main-body">
        <div className="center">
          <div className="login-area">
            <h3 className="mb-5 pb-3">Log in</h3>
            <h6>Username</h6>
            <p>
              oilisgood@oilcompany.com
              <NavLink className="link ps-3" to="/login">
                Change email
              </NavLink>
            </p>
            <form action="#">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Paaword
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Paaword"
                />
              </div>
              <div className="my-5 me-2">
                <NavLink className="secound-btn radious" to="#">
                  Next
                </NavLink>
              </div>
            </form>
            <p>
              Don't have an account yet?
              <NavLink className="link ps-3" to="#">
                Sign up for free.
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
