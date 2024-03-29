import React from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { BsFileEarmark, BsEye } from "react-icons/bs";

import { Link } from "react-router-dom";
import TopAppbar from "../../appbar/TopAppbar";

export default function TrailersDetails() {
  return (
    <>
      <TopAppbar />
      <div className="main-body">
        <div className="body-content">
          <div class="profile-card">
            <div class="text-content">
              <h3>Trareysa T-14</h3>
              <div class="del-sec-left">
                <button class="btn">
                  <BsFileEarmark className="me-2" />
                  Proof of capacity
                </button>
                <button class="btn">
                  <BsEye className="me-2" />
                  Proof of inspection
                </button>
              </div>
            </div>
          </div>

          {/* tab */}
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            {/* Nav  */}
            <Nav variant="pills" className="flint-modal-tab-btn mb-5">
              <Nav.Item>
                <Nav.Link eventKey="first">Trailer</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Inspection</Nav.Link>
              </Nav.Item>
            </Nav>
            {/* Content */}
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="row mt-5">
                  <div className="col-lg-4 col-md-6">
                    <h6 className="h6">Supplier name</h6>
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
                    <h6 className="h6">Supplier name</h6>
                    <p>Flint Hills Resources</p>
                    <Link className="nav-link ps-0" to="#">
                      Manage customer name
                    </Link>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="row mt-5">
                  <div className="col-lg-4 col-md-6">
                    <h6 className="h6">Supplier name</h6>
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
                    <h6 className="h6">Supplier name</h6>
                    <p>Flint Hills Resources</p>
                    <Link className="nav-link ps-0" to="#">
                      Manage customer name
                    </Link>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </>
  );
}
