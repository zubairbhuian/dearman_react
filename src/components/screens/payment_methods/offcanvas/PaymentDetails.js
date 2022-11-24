import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

export default function PaymentDetails(props) {
  return (
    <Offcanvas {...props} placement='end' className="offcan-payment-methods-area">
    <Offcanvas.Header closeButton>
      <Offcanvas.Title></Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        <h3>Visa ****0909</h3>
    <div class="row row-cols-1 row-cols-md-2">
        <div class="col mb-4">
          <h5>Name on card</h5>
          <p>Joe Black</p>
        </div>
        <div class="col mb-4">
          <h5>Expiration date</h5>
          <p>4/2023</p>
        </div>
        <div class="col mb-4">
          <h5>Billing address</h5>
          <p>1000 Main St. <br/>Suite 8028 <br/>Houston, tx 77056 <br/>US</p>
          <div><Link class="link h-underline" to="#">Edit</Link></div>
          <div><Link class="link h-underline" to="#">Delete</Link></div>
        </div>
        <div class="col mb-4">
          <h5>Expiration date</h5>
          <p>0.00</p>
        </div>
        <div class="col-12 mb-4">
          <h5>Items paid by Visa ****0909</h5>
          <p>LYNX Truck - Position Holder<br/>Carrier Insights<br/>Error Insights </p>
          <div><Link class="link h-underline" to="#">Replace payment method for all items</Link></div>
        </div>

      </div>
    </Offcanvas.Body>
  </Offcanvas>
  )
}
