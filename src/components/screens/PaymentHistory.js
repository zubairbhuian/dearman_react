import React from "react";

import Sidebar from "../Navbar/Sidebar";
import Topbar from "../Navbar/Topbar";

export default function PaymentHistory() {
  return (
    <div>
      <Topbar />
      <div className="main-body">
        {/* ====side bar==== */}
        <Sidebar />
        {/*==== body area ==== */}
        <div class="body-content">
          <div class="pp-header-area pt-3 pb-4">
            <h2>Payment history</h2>
          </div>
          <div class="Security-info-table payment-history-table">
            <div class="security-info-area">
              <div class="row item header">
                <div class="col">Date</div>
                <div class="col">Document ID</div>
                <div class="col">Document Type</div>
                <div class="col">Billed Amount</div>
              </div>
              <div class="row item">
                <div class="col">
                  <a href="#">Order Status</a>
                </div>
                <div class="col">E8900L09JPR</div>
                <div class="col">Invoice</div>
                <div class="col">$299.01</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
