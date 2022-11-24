import React from "react";
import { BsChevronDown } from "react-icons/bs";
// import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";

class UserMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      subOpen: false,
    };
    this._menuToggle = this._menuToggle.bind(this);
    this._dropToggle = this._dropToggle.bind(this);
  }

  _menuToggle(e) {
    e.stopPropagation();
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  _dropToggle(e) {
    e.stopPropagation();
    this.setState({
      subOpen: !this.state.subOpen,
    });
  }
  render() {
    let menuStatus = this.state.isOpen ? "isopen" : "";
    let dropToggle = this.state.isOpen ? "subOpen" : "";

    // onClick={this._menuToggle}

    // <div id="trailer-data" className={menuStatus}></div>

    return (
      <>
        <div className="user-menu">
          <div className="top-user" onClick={this._menuToggle}>
            <div className="circuler-avater">
              <span>FH</span>
            </div>
            <div className="user-info-list">
              <p>Flint Hill</p>
              <i>
                <BsChevronDown />
              </i>
            </div>
          </div>
          <div id="top-user-info-list" className={menuStatus}>
            <Nav className="navbar-nav  me-auto ms-auto ">
              <Nav.Link className="nav-item pe-5" href="/home">
                Insights
              </Nav.Link>

              <div
                className="nav-item pe-5 user-drop-sub-toggleer"
                onClick={this._menuToggle}
              >
                Insights
                <ul className={dropToggle}>
                  <Nav.Link className="nav-item pe-5">Insights</Nav.Link>
                </ul>
              </div>
              {/* <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
            </Nav>
          </div>
        </div>
      </>
    );
  }
}

export default UserMenu;
