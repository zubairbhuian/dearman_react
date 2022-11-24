import React from 'react'
import { Link } from 'react-router-dom'
import { BsPerson,BsFillLockFill,BsChevronRight } from "react-icons/bs";

export default function PsOvervew() {
  return (
    <div className="row row-cols-1 row-cols-lg-2">
    <div className="col mb-2">
        <div className="container overvew-tab-left pro-set-con-left">
            <div className="d-flex justify-content-center">
                <BsPerson className='icon-80' />
            </div>
            <div className="d-flex justify-content-center">
                <h3>Flint Hills Resources</h3>
            </div>
            <div className="d-flex justify-content-center mb-3 low-opasity">
                <h6>Account Type - Position Holder</h6>
            </div>
            <div className="d-flex justify-content-start">
                <p><b>Name</b> - Flint Hills Resources </p>
            </div>
            <div className="d-flex justify-content-start">
                <p><b>Reference</b> - Flint Hills</p>
            </div>
        </div>

    </div>
    <div className="col container overvew-tab-right mb-2">
        <div className="row ">
            <div className="col-md-6 ">
                <div className="item mb-2">
                    <div className="d-flex justify-content-center">
                        <h4 className="fw-3">Security info</h4>
                    </div>
                    <div className="d-flex justify-content-center">
                        <BsFillLockFill className='icon-32' />
                    </div>
                    <p className="mt-1 low-opasity">Update username and password and manage
                        verification methods</p>
                    <Link className="link" to="#">UPDSTE INFO <BsChevronRight className='icon-13' /></Link>
                </div>
            </div>
            <div className="col-md-6">
                <div className="item mb-2">
                    <div className="d-flex justify-content-center">
                        <h4 className="fw-3">Security info</h4>
                    </div>
                    <div className="d-flex justify-content-center">
                    <BsFillLockFill className='icon-32' />
                    </div>
                    <p className="mt-1 low-opasity">Update username and password and manage
                        verification methods</p>
                    <Link className="link" to="#">UPDSTE INFO <BsChevronRight className='icon-13' /></Link>
                </div>

            </div>

            <div className="col-md-6 ">
                <div className="item">
                    <div className="d-flex justify-content-center">
                        <h4 className="fw-3">Security info</h4>
                    </div>
                    <div className="d-flex justify-content-center">
                    <BsFillLockFill className='icon-32' />
                    </div>
                    <p className="mt-1 low-opasity">Update username and password and manage
                        verification methods</p>
                    <Link className="link" to="#">UPDSTE INFO <BsChevronRight className='icon-13' /></Link>
                </div>

            </div>
        </div>
    </div>
</div>
  )
}
