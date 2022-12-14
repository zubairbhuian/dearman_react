import React from 'react'

import { BsX,BsTruck, BsSearch } from "react-icons/bs";
import TableRow from "../../tables/TableRow";
import TableRowTitle from "../../tables/TableRowTitle";
import TopAppbar from '../../appbar/TopAppbar';

export default function Entities() {
  return (
    <>
    <TopAppbar />
    <div className="main-body">
      <div className="body-content">
        <h1 className="header">Terminals</h1>
        <hr />
        <div className="del-sec">
        <div className="del-sec-left">
              <button className="btn">
                <BsTruck className="me-2" />
                Add a Entities
              </button>
              <button className="btn">
                <BsX className="me-2" />
                Delete a Entities
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
