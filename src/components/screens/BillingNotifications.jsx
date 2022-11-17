import React from "react";
import { FiPlus  } from "react-icons/fi";
import { BsFillCheckCircleFill } from "react-icons/bs";


export default function BillingNotifications() {
  return (
    <>
      <div className="body-content">
        <div className="pp-header-area pt-3 pb-4">
          <h2>Billing notifications</h2>
          <p>
            We will send billing notifications to the contacts listed below. The
            billing notifications will include an Invoice PDF.
          </p>
        </div>
        <button
          className="secound-btn bg-tra"
          data-bs-toggle="offcanvas"
          data-bs-target="#"
        >
            {/* add icon  */}
            <FiPlus  className=" me-1"/>
          Add a billing contact
        </button>
        <div className="Security-info-table payment-history-table payment-methods-tabel ps-business-sec-table">
          <div className="security-info-area">
            <div className="row item header">
              <div className="col">Name</div>
              <div className="col">Email Notifications</div>
              <div className="col">Email</div>
            </div>
            <div className="row item">
              <div className="col">
                <a className="fw-6" data-bs-toggle="offcanvas" href="#">
                  John Davidson
                </a>
              </div>
              <div className="col">
               <BsFillCheckCircleFill className="bn-CircleFill"/>
                Notifications being sent
              </div>
              <div className="col">jdavidson@dearmansystems.com</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}




