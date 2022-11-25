import React from "react";
import { BsHouse } from "react-icons/bs";
import Accordion from "react-bootstrap/Accordion";

export default function PsAddress() {
  return (
    <div className="ps-address-sec-area">
      <h3 className="mb-5 mt-3">Address</h3>
      <p>Make sure your businesses address is up to date.</p>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <BsHouse className="me-2 icon-22" />
            This address will be displayed on Bills of Lading (BOLS).
          </Accordion.Header>
          <Accordion.Body>
            <div className="accordion-body">
              <p className="py-2">
                This address will be displayed on Bills of Lading (BOLS).
              </p>
              <button className="secound-btn mb-2">Change address</button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
