import React from 'react'
import Logo from '../assets/images/logo.png'
import BgImg from '../assets/images/login_bg.jpg'

export default function Login() {
  return (
    <div className="login-page">
        <img className='login-page-bg' src={BgImg} alt="" />
    <nav className="navbar">
      <div className="container-fluid">
        <a className="py-2 px-4" href="login.html"
          ><img src={Logo} alt="logo"
        /></a>
      </div>
    </nav>
    <div className="main-body">
  
      <div className="center">
        <div className="login-area">
          <h3 className="mb-5 pb-3">Log in</h3>
          
          <form action="#">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label"
                >Username</label
              >
              <input
                type="text"
                className="form-control"
                placeholder="Username or email address"
              />
            </div>
            <div className="my-5 me-2">
              <a className="secound-btn radious" href="login-pass.html">Next</a>
            </div>
          </form>

          <p>
            Don't have an account yet?
            <a className="link ps-2" href="lynx-for-free.html"
              >Sign up for free.</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}
