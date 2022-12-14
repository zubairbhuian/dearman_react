import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png"
import { BsTextParagraph } from "react-icons/bs";
import SideAppbar from "./SideAppbar";


export default function TopAppbar() {
  const [navShow, setNavShow] = React.useState(true);
  const [subNavShow, setSubNavShow] = React.useState(true);
  const [sidebarShow, setSidebarShow] = React.useState(true);
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container fluid>
      <Navbar.Brand to="#">
        <img src={Logo} alt="logo" />
      </Navbar.Brand>
      <div class="side-appbar-icon ">
          <BsTextParagraph/>
        </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link to="#">Insights</Nav.Link>
          <Nav.Link to="#">Submit Orders</Nav.Link>
          <Nav.Link to="#">Order Status</Nav.Link>
          <Nav.Link to="#">Order Management</Nav.Link>
        </Nav>
        <ul className="navbar-nav me-6">
            <li className="nav-item hide-lg">
              <div className="circuler-avater">
                <span>FH</span>
              </div>
            </li>

            <li className="nav-item dropdown navbarDropdown-btn position-relative" >
              <Link className="nav-link dropdown-toggle user_id" onClick={()=>setNavShow(!navShow)} >
                Flint Hill
              </Link>
              {/* <!-- ?cus-nav-right-side top_user_nav --> */}
              <div className={navShow?"cus-nav-right-side top_user_nav":"cus-nav-right-side top_user_nav show"}>
                <div className="side-appbar d-block">
                  <div className="navbar">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="profile_setting.html">Profile Settings</Link>
                      </li>
                      {/* <!--!+++++++++++++++ Sub Menu +++++++++++++++++++++--> */}
                      <li className="nav-item dropdown side-dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" onClick={()=>setSubNavShow(!subNavShow)}>
                          Billing
                        </Link>
                        <ul className={subNavShow?"dropdown-menu  cus-nav-right-dropdown-menu":"dropdown-menu  cus-nav-right-dropdown-menu show"} aria-labelledby="navbarDropdownMenuLink">
                          <li><Link className="dropdown-item" to="purchase-services.html">Purchase services</Link></li>
                          <li><Link className="dropdown-item" to="products-licenses.html">Your products and licenses</Link></li>
                          <li><Link className="dropdown-item" to="payment-history.html">Payment history</Link></li>
                          <li><Link className="dropdown-item" to="payment-methods.html">Payment methods</Link></li>
                          <li><Link className="dropdown-item" to="billing-notifications.html">Billing notificatin</Link></li>

                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="login-pass.html">Log out</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

          </ul>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <SideAppbar show={sidebarShow} onHide={()=>setSidebarShow(false)}/>
  </>
  );
}
