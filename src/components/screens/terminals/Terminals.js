import React from "react";
import Sidebar from "../../Navbar/Sidebar";
import Topbar from "../../Navbar/Topbar";
import { BsX , BsSearch} from "react-icons/bs";


export default function Terminals() {
  return (
    <>
      <Topbar />
      <div className="main-body">
        <Sidebar />
        <div className="body-content">
          <h1 className="header">Terminals</h1>
          <hr />
          <div className="del-sec">
            <div className="del-sec-left">
              <button className="btn">
              <BsX className="me-2"/>
                Delete a Terminal
              </button>
            </div>
            <div className="del-sec-right">
              <label className="visually-hidden" for="autoSizingInputGroup">
                Username
              </label>
              <div className="input-group">
                <div className="input-group-text">
                  <BsSearch/>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="autoSizingInputGroup"
                  placeholder="Search for a terminal"
                />
              </div>
            </div>
          </div>
          <div className="check-sec title-check mt-4">
            <div className="row">
              <div className="col-12">
                <div className="col-item">
                  <div className="co">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                  </div>
                  <div className="item d-flex">
                    <div className="col">Name</div>
                    <div className="col ">Reference</div>
                    <div className="col hide-mob">Address</div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
          <div className="check-sec">
            <div className="row">
              <div className="col-12">
                <div className="col-item">
                  <div className="co">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                  </div>
                  <div className="item d-flex">
                    <div className="col fw-bold">Bluewing One</div>
                    <div className="col ">Bluewing One</div>
                    <div className="col hide-mob">
                      11700 Old Hwy 48, Brownsville, TX 78521
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
