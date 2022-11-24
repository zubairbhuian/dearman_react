import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";
import { BsGear,BsLink45Deg,BsDroplet,BsHouse,BsFileEarmarkRuled ,BsBookmark} from "react-icons/bs";

export default function () {
  return (
    <>
      <div className="ps-business-info-area">
        <h3 className="mb-5 mt-3">Address</h3>
        <p>Make sure your businesses address is up to date.</p>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header><BsGear className='icon-22 me-2'/> className of business: Petroleum</Accordion.Header>
        <Accordion.Body>
        <p className="py-2">
                  This address will be displayed on Bills of Lading (BOLS).
                </p>
                <button className="secound-btn mb-2">Change address</button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        <div className="Security-info-table ps-business-sec-table">
          <div className="security-info-area">
            <div className="row item">
              <div className="col">
                <BsLink45Deg/>
                External acct number
              </div>
              <div className="col">12345678910</div>
              <div className="col">
                <Link to="#">Change</Link>
              </div>
              <div className="col">
                <Link to="#">Delete</Link>
              </div>
            </div>
            <div className="row item">
              <div className="col">
                <BsDroplet/>
                EPA Comp ID
              </div>
              <div className="col">12345678910</div>
              <div className="col">
                <Link to="#">Change</Link>
              </div>
              <div className="col">
                <Link to="#">Delete</Link>
              </div>
            </div>
            <div className="row item">
              <div className="col">
                <BsHouse/>
                FEIN number
              </div>
              <div className="col">12-3456789</div>
              <div className="col">
                <Link to="#">Change</Link>
              </div>
              <div className="col">
                <Link to="#">Delete</Link>
              </div>
            </div>
            <div className="row item">
              <div className="col">
                <BsFileEarmarkRuled />
                IRS control code
              </div>
              <div className="col">12345678910</div>
              <div className="col">
                <Link to="#">Change</Link>
              </div>
              <div className="col">
                <Link to="#">Delete</Link>
              </div>
            </div>
            <div className="row item">
              <div className="col">
                <BsBookmark />
                IRS 637 number
              </div>
              <div className="col">12345678910</div>
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
    </>
  );
}
