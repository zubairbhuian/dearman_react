import React from "react";
import { Link } from "react-router-dom";

export default function TableRow(props) {
    const {name,reference,address, linlTo}=props;
  return (
    <Link to={linlTo}>
        <div className="check-sec">
      <div className="row">
        <div className="col-12">
          <div className="col-item">
            <div className="co">
              <input className="form-check-input" type="checkbox" value="" />
            </div>
            <div className="item d-flex">
              <div className="col fw-bold">{name}</div>
              <div className="col ">{reference}</div>
              <div className="col hide-mob">{address}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}
