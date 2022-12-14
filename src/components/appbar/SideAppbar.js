
import React,{useState} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

export default function SideAppbar(props) {
  const [show,setShow]=useState(false);
  return (
    <>

    <Offcanvas {...props}   backdrop= {false}  scroll= {true} className="sideappbar-offcanvas" >
    <Offcanvas.Header closeButton>

    </Offcanvas.Header>
    <Offcanvas.Body>
    <div className="side-appbar toggle_hide">
          <div className="navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="terminals.html">Terminals</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="suppliers.html">Suppliers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="customers.html">Customers</Link>
              </li>
              {/* <!-- Sub Menu --> */}
              <li className="nav-item dropdown side-dropdown">
                <Link className="nav-link dropdown-toggle" to="#" onClick={()=>setShow(!show)}>
                  Carriers
                </Link>
                <ul className={show?"dropdown-menu show":"dropdown-menu"} >
                  <li><Link className="dropdown-item" to="drivers.html">Drivers</Link></li>
                  <li><Link className="dropdown-item" to="entities.html">Entities </Link></li>
                  <li><Link className="dropdown-item" to="trailers.html">Trailers</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="products.html">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="destinations.html">Destinations</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="contacts.html">Contacts</Link>
              </li>
            </ul>
          </div>
        </div>
    </Offcanvas.Body>
  </Offcanvas>
</>
  )
}
