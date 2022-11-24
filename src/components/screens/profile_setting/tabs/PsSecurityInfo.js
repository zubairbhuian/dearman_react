import React from "react";
import { Link } from "react-router-dom";
import { BsTelephone,BsEye,BsEnvelope } from "react-icons/bs";

export default function PsSecurityInfo() {
  return (
    <div>
      <div className="Security-info-sec-main mt-3">
        <h3 className=" mb-4">Security info</h3>
        <div className="row row-cols-2 Security-info-sec">
          <div className="col">
            <h6>Username</h6>
            <p className="mt-1">Flint Hills</p>
            <Link to="#" className="link">
              Change
            </Link>
          </div>
          <div className="col">
            <h6>Password</h6>
            <div className="securuty-pass">
              *********
              <span>
                <BsEye className="icon-13"/>
              </span>
            </div>
            <Link to="#" className="link">
              Change
            </Link>
          </div>
        </div>
      </div>
      <div className="Security-info-table">
        <div className="security-info-area">
          <div className="row item">
            <div className="col">
              <BsTelephone/>
              Phone
            </div>
            <div className="col-6 pe-5">
              <div className="d-flex">
                <p className="mb-0">+1 2813308004</p>
                <div className="ms-auto">
                  <Link to="#">Enable two-factor authenitcatin</Link>
                </div>
              </div>
            </div>

            <div className="col">
              <Link to="#">Change</Link>
            </div>
            <div className="col">
              <Link to="#">Delete</Link>
            </div>
          </div>
          <div className="row item">
            <div className="col">
              <BsEnvelope/>
              Email
            </div>
            <div className="col-6">mikejones@bluewingmidstream.com</div>
            <div className="col">
              <Link to="#">Change</Link>
            </div>
            <div className="col">
              <Link to="#">Delete</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
