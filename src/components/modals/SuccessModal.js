import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

export default function SuccessModal(props) {
  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <div className="success-supplier-added-introo">
      <h2>Success! Supplier added.</h2>
      <p className="py-4">You successfully added a supplier!</p>
      <ul className="nav nav-pills mt-5">
        <li className="nav-item">
          <Link to={props.url} className="secound-btn mt-5 me-2 bg-tra">
            Add another Supplier
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#"className="secound-btn" onClick={props.onHide} >
            Close
          </Link>
        </li>
      </ul>
    </div>
    </Modal.Body>
    <Modal.Footer>
    </Modal.Footer>
  </Modal>

  )
}
