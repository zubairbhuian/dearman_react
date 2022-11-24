import React from "react";
import Sidebar from "../../Navbar/Sidebar";
import Topbar from "../../Navbar/Topbar";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import PsAddress from "./tabs/PsAddress";
import PsOvervew from "./tabs/PsOvervew";
import PsSecurityInfo from "./tabs/PsSecurityInfo";
import PsBusinessInfo from "./tabs/PsBusinessInfo";



export default function ProfileSetting() {
  return (
    <div>
      <Topbar />
      <div className="main-body">
        {/* ====side bar==== */}
        <Sidebar />
        {/*==== body area ==== */}
        <div className="body-content">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          {/* Nav  */}
        <Nav variant="pills" className="flint-modal-tab-btn mb-5">
            <Nav.Item>
              <Nav.Link eventKey="first">Overvew</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Security Info</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Address</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">Business info</Nav.Link>
            </Nav.Item>
          </Nav>
          {/* Content */}
          <Tab.Content>
            <Tab.Pane eventKey="first">
            <PsOvervew/>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
             <PsSecurityInfo/>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
            <PsAddress/>
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
             <PsBusinessInfo/>
            </Tab.Pane>
          </Tab.Content>
    </Tab.Container>
        </div>
        
      </div>
    </div>
  );
}
