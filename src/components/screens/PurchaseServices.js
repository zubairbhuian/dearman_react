import React from "react";
import { Link } from "react-router-dom";
import TopAppbar from "../appbar/TopAppbar";

export default function PurchaseServices() {
  return (
    <div>
      <TopAppbar />
      <div className="main-body">
        <div class="body-content">
          <div class="pp-header-area pt-3 pb-4">
            <h2>Purchase services</h2>
          </div>

          <div class="purchase-services-body mt-3">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
              <div class="col px-3 mb-3">
                <h5>Order Status</h5>
                <p>
                  A real-time status service that allows users to track each
                  order they are associated with at the terminal. LYNX status
                  gives users transparency into terminal operations and replaces
                  the need for calls and emails for status updates. Enjoy access
                  to the same level of data terminal operators have when it
                  comes to order status.
                </p>
                <h6 class="my-3">From $200/month</h6>
                <button class="secound-btn border-radious mb-3">Select</button>
                <div>
                  <Link class="link" to="#">
                    Buy licenses for other entities
                  </Link>
                </div>
              </div>
              <div class="col  px-3 mb-3">
                <div class="d-flex justify-content-between align-items-cente">
                  <h5 class="mb-0">Carrier Insights</h5>
                  <button class="btn btn-purple">Coming soon</button>
                </div>

                <p class="my-3">
                  Measure the performance of the carriers your business
                  interacts with. Unlock in-depth business intelligence
                  reporting, KPIs, and our trailer database.
                </p>
                <button class=" secound-btn border-radious mb-3" disabled>
                  Select
                </button>
              </div>
              <div class="col  px-3 mb-3">
                <div class="d-flex justify-content-between align-items-cente">
                  <h5 class="mb-0">Error Insights</h5>
                  <button class="btn btn-purple">Coming soon</button>
                </div>
                <p class="my-3">
                  Understand why orders did not close. Error insights logs
                  orders that were scheduled but did not load and provides the
                  reason. Save time spent tracking down the root of an issue and
                  get the answers you are looking for directly from LYNX.{" "}
                </p>
                <button class=" secound-btn border-radious mb-3" disabled>
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
