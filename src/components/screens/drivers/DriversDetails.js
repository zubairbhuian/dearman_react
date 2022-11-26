import React from "react";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { BsX,BsReverseLayoutSidebarInsetReverse, BsReverseLayoutTextSidebarReverse} from "react-icons/bs";


import Sidebar from "../../Navbar/Sidebar";
import Topbar from "../../Navbar/Topbar";
import { Link } from "react-router-dom";

export default function DriversDetails() {
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
                <h3>Flint Hills Resources</h3>
                <div class="del-sec-left">

                  <button class="btn">
                  <BsReverseLayoutTextSidebarReverse className="me-2"/>
                    Proof of CDL</button>

                  <button class="btn">
                  <BsReverseLayoutSidebarInsetReverse className="me-2"/>
                    Proof of TWIC</button>

                  <button class="btn">
                    <BsX className="me-2"/>
                    Delete a Driver</button>
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
              <Nav.Link eventKey="second">Security Info</Nav.Link>
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
          </Tab.Content>
    </Tab.Container>
        </div>
      </div>
    </>
  );
}
