import React from 'react'
import { Link } from 'react-router-dom'


import Sidebar from '../Navbar/Sidebar'
import Topbar from '../Navbar/Topbar'
import Logo from '../assets/images/icons/lynx.png'


export default function ProductsLicenses() {
  return (
    <div>
        <Topbar/>
        <div className="main-body">
            {/* ====side bar==== */}
            <Sidebar/>
            {/*==== body area ==== */}
            <div class="body-content">
                <div class="pp-header-area pt-3 pb-4">
                    <h2>Your products and licenses</h2>
                    <div class="pp-header-text">
                        <p>These are products owned by your organization that were bought from Dearman. Select a product to manage product and billing setting or assign licenses.</p>
                    </div>
                </div>
                <div class="products-licenses-body mt-4">
                    <h5 class="mb-2">Dearman products (4)</h5>
                    <div class="Security-info-table hover-able">
                        <div class="security-info-area">
                            <div class="row item header">
                                <div class="col">
                                    Product name
                                </div>
                                <div class="col">
                                    Available licenses
                                </div>
                                <div class="col">Assigned licenses</div>
                                <div class="col">Account type</div>
                            </div>
                            <Link to="#"><div class="row item">
                                <div class="col">
                                    <img class="lynx-img" src={Logo} alt="lynx"/>
                                    <b>Order Status</b>
                                </div>
                                <div class="col">0</div>
                                <div class="col">
                                    <div class="d-flex">
                                        <div class="dearman-product-progress">
                                            <div class="progress">
                                                <div class="progress-bar w-100" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        
                                        <span class="ms-3">1/1</span>
                                    </div>
                                </div>
                                <div class="col">Position Holder</div>
                            </div></Link>
                            <Link to="#">
                                <div class="row item">
                                    <div class="col">
                                        <img class="lynx-img" src={Logo} alt="lynx"/>
                                        <b>Order Status (for other entities)</b>
                                    </div>
                                    <div class="col">99</div>
                                    <div class="col">
                                        <div class="d-flex">
                                            <div class="dearman-product-progress">
                                                <div class="progress">
                                                    <div class="progress-bar bg-purple w-100" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            
                                            <span class="ms-3">1/100</span>
                                        </div>
                                    </div>
                                    <div class="col">Connecting parties</div>
                                </div>
                            </Link>
                          <Link to="#">
                            <div class="row item">
                                <div class="col">
                                    <img class="lynx-img" src={Logo} alt="lynx"/>
                                    <b>Carrier Insights</b>
                                </div>
                                <div class="col">0</div>
                                <div class="col">
                                    <div class="d-flex">
                                        <div class="dearman-product-progress">
                                            <div class="progress">
                                                <div class="progress-bar w-100 " role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        
                                        <span class="ms-3">1/1</span>
                                    </div>
                                </div>
                                <div class="col">Position Holder</div>
                            </div>
                          </Link>
                            <Link to="#">
                                <div class="row item">
                                    <div class="col">
                                        <img class="lynx-img" src={Logo} alt="lynx"/>
                                        <b>Order Status</b>
                                    </div>
                                    <div class="col">0</div>
                                    <div class="col">
                                        <div class="d-flex">
                                            <div class="dearman-product-progress">
                                                <div class="progress">
                                                    <div class="progress-bar w-100" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            
                                            <span class="ms-3">1/1</span>
                                        </div>
                                    </div>
                                    <div class="col">Error Insights</div>
                                </div>
                            </Link>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
