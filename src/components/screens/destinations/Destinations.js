import React from 'react'
import Sidebar from '../../Navbar/Sidebar'
import Topbar from '../../Navbar/Topbar'
import { BsX, BsSearch } from "react-icons/bs";
import TableRow from "../../tables/TableRow";
import TableRowTitle from "../../tables/TableRowTitle";

export default function Destinations() {
  return (
    <>
      <Topbar />
      <div className="main-body">
        <Sidebar />
        <div className="body-content">
          <h1 className="header">Destinations</h1>
          <hr />
          <div className="del-sec">
          <div className="del-sec-left">
              <button className="btn">
                <BsFillDropletFill className="me-2" />
                Add a Destinations
              </button>
              <button className="btn">
                <BsX className="me-2" />
                Delete a Destinations
              </button>
            </div>
            <div className="del-sec-right">
              <label className="visually-hidden" for="autoSizingInputGroup">
                Username
              </label>
              <div className="input-group">
                <div className="input-group-text">
                  <BsSearch />
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
          <TableRowTitle name="name" reference="reference" address="address" />
          <TableRow
            name="Bluewing One"
            reference="Bluewing One"
            address="11700 Old Hwy 48, Brownsville, TX 78521"
          />
          <TableRow
            name="Bluewing One"
            reference="Bluewing One"
            address="11700 Old Hwy 48, Brownsville, TX 78521"
          />
        </div>
      </div>
    </>
  )
}
