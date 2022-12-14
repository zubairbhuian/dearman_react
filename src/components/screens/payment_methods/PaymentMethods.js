import React from "react";
import { FiPlus } from "react-icons/fi";
import { BsFillCheckCircleFill } from "react-icons/bs";

import VisaLogo from "../../assets/images/icons/visa-logo.png";
import { Link } from "react-router-dom";
import PaymentForm from "./offcanvas/PaymentForm";
import PaymentDetails from "./offcanvas/PaymentDetails";
import TopAppbar from "../../appbar/TopAppbar";

export default function PaymentMethods() {
  const [formShow, setFormShow] = React.useState(false);
  const [cardShow, setCardShow] = React.useState(false);
  return (
    <>
      <div>
        <TopAppbar />
        <div className="main-body">
          <div class="body-content">
            <div class="pp-header-area pt-3 pb-4">
              <h2>Payment methods</h2>
            </div>
            <button
              class="secound-btn bg-tra"
              onClick={() => setFormShow(true)}
            >
              <FiPlus /> Add payment method
            </button>
            <div class="Security-info-table payment-history-table payment-methods-tabel ps-business-sec-table">
              <div class="security-info-area">
                <div class="row item header">
                  <div class="col">Name</div>
                  <div class="col">Expiration Date</div>
                  <div class="col">Status</div>
                  <div class="col">Type</div>
                </div>
                <div class="row item">
                  <div class="col">
                    <Link onClick={() => setCardShow(true)}>
                      <img class="visa-logo" src={VisaLogo} alt="" />
                      4/2023
                    </Link>
                  </div>
                  <div class="col">
                    <BsFillCheckCircleFill className="bn-CircleFill" />
                    Active
                  </div>
                  <div class="col">Invoice</div>
                  <div class="col">Credit card</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PaymentForm show={formShow} onHide={() => setFormShow(false)} />
      <PaymentDetails show={cardShow} onHide={() => setCardShow(false)} />
    </>
  );
}
