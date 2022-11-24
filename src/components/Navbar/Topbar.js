import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import UserMenu from "./UserMenu";

function Topbar() {
  return (
    <Navbar className="header" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src="./assets/images/logo.png" alt="" />{" "}
          <span>LYNX Console</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarText"
          className="top_nav-toggle"
          type="button"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav  me-auto ms-auto ">
            <Nav.Link className="nav-item pe-5" href="/home">
              Insights
            </Nav.Link>
            <Nav.Link className="nav-item pe-5" href="/submit_order">
              Submit Orders
            </Nav.Link>
            <Nav.Link className="nav-item pe-5" href="/order_status">
              Order Status
            </Nav.Link>
            <Nav.Link className="nav-item pe-5" href="/order-management">
              Order Management <span className="notifi"> 3 New</span>
            </Nav.Link>
          </Nav>

          
          <UserMenu/>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;
