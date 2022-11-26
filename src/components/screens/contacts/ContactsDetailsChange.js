import React from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { BsX,BsCheck2 } from "react-icons/bs";

import Sidebar from "../../Navbar/Sidebar";
import Topbar from "../../Navbar/Topbar";


export default function ContactsDetailsChange() {
  return (
    <>
      <Topbar />
      <div className="main-body">
        <Sidebar />
        <div className="body-content">
        <div class="profile-card">
              <div class="pp-content">
                <h3>HF</h3>
              </div>
              <div class="text-content">
                <div class="d-flex justify-content-between">
                  <h3>Flint Hills Resources</h3>
                  <Link to="#" class="btn connected-btn"><BsCheck2/> Connected</Link>
                </div>
                <div class="del-sec-left">
                  <button class="btn"><BsX className="me-2"/>Delete a Terminal</button>
                </div>
              </div>
            </div>
          {/* tab */}
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          {/* Nav  */}
        <Nav variant="pills" className="flint-modal-tab-btn mb-5">
            <Nav.Item>
              <Nav.Link eventKey="first">Name & address</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Business info</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">IRS & BOL</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">Contact info</Nav.Link>
            </Nav.Item>
          </Nav>
          {/* Content */}
          <Tab.Content>
            <Tab.Pane eventKey="first">
            <div className="row mt-5">
                      <div className="col-lg-4 col-md-6">
                        <h6 className="h6">Supplier name</h6>
                        <p>Flint Hills Resources</p>
                        <Link className="nav-link ps-0" to="#">Manage customer name</Link>
                      </div>
                      <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
                        <h6 className="h6">Supplier name</h6>
                        <p>Flint Hills Resources</p>
                        <Link className="nav-link ps-0" to="#">Manage customer name</Link>
                      </div>
                      <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
                        <h6 className="h6">Supplier name</h6>
                        <p>Flint Hills Resources</p>
                        <Link className="nav-link ps-0" to="#">Manage customer name</Link>
                      </div>
                    </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <h6 className="fw-6">className of Business</h6>
                    <div className="business-tab-aria">
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <hr className="my-5"/>
                    <div className="row mt-5">
                      <div className="col-lg-4 col-md-6">
                        <h6 className="h6">Supplier name</h6>
                        <p>Flint Hills Resources</p>
                        <Link className="nav-link ps-0" to="#">Manage customer name</Link>
                      </div>
                      <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
                        <h6 className="h6">Supplier name</h6>
                        <p>Flint Hills Resources</p>
                        <Link className="nav-link ps-0" to="#">Manage customer name</Link>
                      </div>
                      <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
                        <h6 className="h6">Supplier name</h6>
                        <p>Flint Hills Resources</p>
                        <Link className="nav-link ps-0" to="#">Manage customer name</Link>
                      </div>
                    </div>
            </Tab.Pane>
            {/*  */}
            <Tab.Pane eventKey="third">
            <div className="row mt-5">
                      <div className="col-lg-4 col-md-6">
                        <h6 className="h6">Supplier name</h6>
                        <Link className="nav-link ps-0" to="#">Manage customer name</Link>
                      </div>
                      <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
                        <h6 className="h6">Supplier name</h6>
                        <Link className="nav-link ps-0" to="#">Manage customer name</Link>
                      </div>
                      <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
                        <h6 className="h6">Supplier name</h6>
                        <Link className="nav-link ps-0" to="#">Manage customer name</Link>
                      </div>
                    </div>
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
            <div className="row mt-5">
                      <div className="col-lg-4 col-md-6">
                        <h6 className="h6">Supplier name</h6>
                        <p>Flint Hills Resources</p>
                        <Link className="nav-link ps-0" to="#">Manage customer name</Link>
                      </div>
                      <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
                        <h6 className="h6">Supplier name</h6>
                        <p>Flint Hills Resources</p>
                        <Link className="nav-link ps-0" to="#">Manage customer name</Link>
                      </div>
                    </div>
            </Tab.Pane>
          </Tab.Content>
    </Tab.Container>
        </div>
      </div>
    </>
  )
}
