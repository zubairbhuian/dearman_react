import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

// import { IconName } from "react-icons/fa";



const Nav = styled.div`
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: left;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #eceef1;
  width: 180px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 64px;
  left: ${({ sidebar }) => (sidebar ? "-100%" : "0")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

 
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      
      <div className="side-appbar">
        <Nav className="toggle_icon">
              <NavIcon to="#">
                <FaIcons.FaBars  onClick={showSidebar} />
              </NavIcon>
            </Nav>
        <div className="side_navbar">
          <IconContext.Provider value={{ color: "#4D4D4D" }}>
            <SidebarNav className="" sidebar={sidebar}>
              <SidebarWrap>
                <NavIcon to="#">
                  <FaIcons.FaBars onClick={showSidebar} />
                </NavIcon>
                {SidebarData.map((item, index) => {
                  return <SubMenu item={item} key={index} />;
                })}
              </SidebarWrap>
            </SidebarNav>
          </IconContext.Provider>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
