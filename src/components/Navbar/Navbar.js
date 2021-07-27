import React from "react";
import logo from "../../Assets/Logo.svg";
import "./navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="Navbar">
        <div className="Navbar_container container">
          <div className="Navbar_menu">
            <ul className="Navbar_links">
              <Link className="link" to="/">
                <img src={logo} alt="Navbar logo" className="Navbar_logo" />
              </Link>
              <li className="Navbar_item">
                <Link className="link" to="#">
                  Features
                </Link>
              </li>
              <li className="Navbar_item">
                <Link className="link" to="/pricing">
                  Pricing
                </Link>
              </li>
            </ul>
            <div className="Navbar_cta">
              <button className="button-primary">Start Scheduling</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
