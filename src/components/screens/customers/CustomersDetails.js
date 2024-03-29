import React from "react";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { BsX } from "react-icons/bs";

import { Link } from "react-router-dom";
import TopAppbar from "../../appbar/TopAppbar";

export default function CustomersDetails() {
  return (
    <>
      <TopAppbar />
      <div className="main-body">
        <div className="body-content">
          <div className="profile-card">
            <div className="pp-content">
              <h3>HF</h3>
            </div>
            <div className="text-content">
              <h3>Flint Hills Resources</h3>
              <div className="del-sec-left">
                <button className="btn">
                  <BsX className="me-2" />
                  Delete a Terminal
                </button>
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
