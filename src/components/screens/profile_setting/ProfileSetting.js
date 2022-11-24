import React from "react";
import Sidebar from "../../Navbar/Sidebar";
import Topbar from "../../Navbar/Topbar";



export default function ProfileSetting() {
  return (
    <div>
      <Topbar />
      <div className="main-body">
        {/* ====side bar==== */}
        <Sidebar />
        {/*==== body area ==== */}
      </div>
    </div>
  );
}
