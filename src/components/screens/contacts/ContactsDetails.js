import React from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { BsX } from "react-icons/bs";

import Sidebar from "../../Navbar/Sidebar";
import Topbar from "../../Navbar/Topbar";
import { Link } from "react-router-dom";

export default function ContactsDetails() {
  return (
    <>
      <Topbar />
      <div className="main-body">
        <Sidebar />
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
                <Nav.Link eventKey="first">Overvew</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Notification preferences</Nav.Link>
              </Nav.Item>
            </Nav>
            {/* Content */}
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="row mt-5">
                  <div className="col-lg-4 col-md-6">
                    <h6 className="h6">name & Address</h6>
                    <p>Flint Hills Resources</p>
                    <Link className="nav-link ps-0" to="#">
                      Manage customer name
                    </Link>
                  </div>
                  <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
                    <h6 className="h6">Supplier name</h6>
                    <p>Flint Hills Resources</p>
                    <Link className="nav-link ps-0" to="#">
                      Manage customer name
                    </Link>
                  </div>
                  <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
                    <h6 className="h6">Customer address</h6>
                    <p>
                      2651 Kipling St. <br />
                      Suite 5200 <br />
                      Houston, TX 77098{" "}
                    </p>
                    <Link className="nav-link ps-0" to="#">
                      Manage customer name
                    </Link>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <h6 className="fw-6">className of Business</h6>
                <div className="business-tab-aria">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <hr />
                <form action="#">
                  <div class="form-check mb-2">
                    <p class="mb-4 ">Email notifications</p>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                      data-bs-toggle="modal" data-bs-dismiss="offcanvas" href="#email-notifications-popup"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      Bills of Lading
                    </label>
                  </div>
                  <div class="form-check mb-2">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                      data-bs-toggle="modal" data-bs-dismiss="offcanvas" href="#email-notifications-popup"/>
                    <label class="form-check-label" for="flexCheckChecked">
                      Scheduled Order Confirmation
                    </label>
                  </div>
                  <div class="form-check mb-2">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                      data-bs-toggle="modal" data-bs-dismiss="offcanvas" href="#email-notifications-popup"/>
                    <label class="form-check-label" for="flexCheckChecked">
                      Order Check-in
                    </label>
                  </div>
                </form>
                <hr class="mb-3"/>
                <div class="con-change-btn">
                  <Link to="#" class="secound-btn">Save Change</Link>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </>
  );
}
