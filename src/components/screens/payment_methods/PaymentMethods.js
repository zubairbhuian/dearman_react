import React from "react";
import { FiPlus } from "react-icons/fi";
import { BsFillCheckCircleFill } from "react-icons/bs";

import Sidebar from "../../Navbar/Sidebar";
import Topbar from "../../Navbar/Topbar";
import VisaLogo from '../../assets/images/icons/visa-logo.png'
import { Link } from "react-router-dom";

export default function PaymentMethods() {
  return (
    <div>
      <Topbar />
      <div className="main-body">
        {/* ====side bar==== */}
        <Sidebar />
        {/*==== body area ==== */}
        <div class="body-content">
        <div class="pp-header-area pt-3 pb-4">
          <h2>Payment methods</h2>
        </div>
        <button class="secound-btn bg-tra" data-bs-toggle="offcanvas" data-bs-target="#offcan-payment-methods-form"><FiPlus/> Add payment method</button>
        <div class="Security-info-table payment-history-table payment-methods-tabel ps-business-sec-table">
          <div class="security-info-area">
            <div class="row item header">
              <div class="col">
                Name
              </div>
              <div class="col">
                Expiration Date
              </div>
              <div class="col">Status</div>
              <div class="col">Type</div>
            </div>
            <div class="row item">
              <div class="col">
              <Link data-bs-toggle="offcanvas" to="#offcan-payment-methods-visa">
                <img class="visa-logo" src={VisaLogo} alt=""/>
                4/2023</Link>
              </div>
              <div class="col">
              <BsFillCheckCircleFill className="bn-CircleFill" />Active
              </div>
              <div class="col">
                Invoice
              </div>
              <div class="col">Credit card</div>
            </div>

          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
