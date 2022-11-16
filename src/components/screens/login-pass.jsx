import React from "react";
import Logo from "../assets/images/logo.png";
import BgImg from "../assets/images/login_bg.jpg";

export default function LoginPass() {
  return (
    <div className="login-page">
      <img className="login-page-bg" src={BgImg} alt="" />
      <nav className="navbar">
        <div className="container-fluid">
          <a className="py-2 px-4" href="login.html">
            <img src={Logo} alt="logo" />
          </a>
        </div>
      </nav>
      <div className="main-body">
        <div className="center">
          <div className="login-area">
            <h3 className="mb-5 pb-3">Log in</h3>
            <h6>Username</h6>
            <p>
              oilisgood@oilcompany.com
              <a className="link ps-3" href="login.html">
                Change email
              </a>
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
                <a className="secound-btn radious" href="index.html">
                  Next
                </a>
              </div>
            </form>

            <p>
              Don't have an account yet?
              <a className="link ps-3" href="lynx-for-free.html">
                Sign up for free.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
