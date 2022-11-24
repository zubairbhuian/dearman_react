import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

export default function PaymentForm(props) {
console.log(props)
  return (
    <Offcanvas {...props} placement='end' className="offcan-payment-methods-area">
    <Offcanvas.Header closeButton>
      <Offcanvas.Title></Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        <h3>Add a payment method</h3>
      <form action="#">
        <div class="row row-cols-1 ">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Card number *</label>
            <input type="text" class="form-control "/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Security code *</label>
            <input type="text" class="form-control "/>
          </div>
          <div class="col-6 mb-3">
            <label for="exampleFormControlInput1" class="form-label">Expiration month *</label>
            <select class="form-select" aria-label="Default select example">
              <option selected></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <div class="col-6 mb-3">
            <label for="exampleFormControlInput1" class="form-label">Expiration year *</label>
            <select class="form-select" aria-label="Default select example">
              <option selected></option>
              <option value="1">21</option>
              <option value="2">22</option>
              <option value="3">23</option>
              <option value="4">24</option>
              <option value="5">25</option>
              <option value="6">26</option>
              <option value="7">27</option>
              <option value="8">28</option>
              <option value="9">29</option>
              <option value="10">30</option>
              <option value="11">31</option>
              <option value="12">31</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Name on card *</label>
            <input type="text" class="form-control "/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Address line 1 *</label>
            <input type="text" class="form-control "/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Address line 2 (Optional) *</label>
            <input type="text" class="form-control "/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">City *</label>
            <input type="text" class="form-control "/>
          </div>
          <div class="col mb-3">
            <label for="exampleFormControlInput1" class="form-label">State *</label>
            <select class="form-select" aria-label="Default select example">
              <option selected></option>
              <option value="1">Alabama</option>
              <option value="2">Alaska</option>
              <option value="3">Arizona</option>
              <option value="4">Arkansas</option>
              <option value="5">California</option>
              <option value="6">Colorado</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Zip *</label>
            <input type="text" class="form-control "/>
          </div>

        </div>
        <ul class="nav nav-pills mt-5">
          <li class="nav-item">
            <Link to="#"
              class="secound-btn mt-5 me-2 a">
              Save
            </Link>
          </li>
          <li class="nav-item" >
            <Link to="#"
              class="secound-btn bg-tra" onClick={props.onHide}>
              Cencel
            </Link>
          </li>
        </ul>
      </form>
    </Offcanvas.Body>
  </Offcanvas>
  )
}
