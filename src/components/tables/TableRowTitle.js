import React from 'react'

export default function TableRowTitle(props) {
    const {name,reference,address}=props;
  return (
    <div className="check-sec title-check mt-4">
    <div className="row">
      <div className="col-12">
        <div className="col-item">
          <div className="col">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
            />
          </div>
          <div className="item d-flex">
            <div className="col">{name}</div>
            <div className="col ">{reference}</div>
            <div className="col hide-mob">{address}</div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>
  )
}
