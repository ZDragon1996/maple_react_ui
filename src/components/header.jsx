import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};
  changeCusor = (event) => {
    this.props.onNewCursor(event.target.outerText);
  };
  render() {
    return (
      <div>
        <header className="p-3 bg-dark text-white">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <Link
                to="/"
                className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
              >
                <img
                  src="/assets/images/maple-cursor.png"
                  className={this.props.onMouseCursor("bi me-2 noselect")}
                  width="45"
                  height="45"
                  role="img"
                />
              </Link>

              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <Link
                    to="/"
                    className={this.props.onMouseCursor(
                      "nav-link px-2 text-white noselect"
                    )}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/api"
                    className={this.props.onMouseCursor(
                      "nav-link px-2 text-white noselect"
                    )}
                  >
                    API
                  </Link>
                </li>
                <li>
                  <Link
                    to="/file"
                    className={this.props.onMouseCursor(
                      "nav-link px-2 text-white noselect"
                    )}
                  >
                    File
                  </Link>
                </li>
                <li>
                  <Link
                    to="/image"
                    className={this.props.onMouseCursor(
                      "nav-link px-2 text-white noselect"
                    )}
                  >
                    Image
                  </Link>
                </li>
                <li>
                  <Link
                    to="/universe"
                    className={this.props.onMouseCursor(
                      "nav-link px-2 text-white noselect"
                    )}
                  >
                    Universe
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Contact"
                    className={this.props.onMouseCursor(
                      "nav-link px-2 text-white noselect"
                    )}
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              <div className="text-end">
                <Link to="/login">
                  <button
                    type="button"
                    className={this.props.onMouseCursor(
                      "btn btn-outline-light me-2"
                    )}
                  >
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button
                    type="button"
                    className={this.props.onMouseCursor("btn btn-info me-3")}
                  >
                    Sign-up
                  </button>
                </Link>
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuCursorButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Mouse Cursor
                </button>
                <ul
                  id="dropdown0"
                  className="dropdown-menu dropdown-menu-dark dropdown-menu-macos mx-0 border-0 shadow"
                  style={{ right: "auto", left: "auto" }}
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <button
                      id="cursorDropdown"
                      value="Default Cursor"
                      className={this.props.onMouseCursor("dropdown-item")}
                      onClick={this.changeCusor}
                    >
                      <img
                        src="/assets/images/default-cursor.svg"
                        style={{ width: "20px", height: "20px" }}
                      />
                      Default Cursor
                    </button>
                  </li>
                  <li>
                    <button
                      className={this.props.onMouseCursor("dropdown-item")}
                      onClick={this.changeCusor}
                    >
                      <img
                        src="/assets/images/blue-cursor.svg"
                        style={{ width: "20px", height: "20px" }}
                      />
                      Blue Cursor
                    </button>
                  </li>
                  <li>
                    <button
                      className={this.props.onMouseCursor("dropdown-item")}
                      href="#"
                      onClick={this.changeCusor}
                    >
                      <img
                        src="/assets/images/maple-cursor.png"
                        style={{ width: "20px", height: "20px" }}
                      />
                      Maple Cursor
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
