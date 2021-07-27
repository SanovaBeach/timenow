import React from "react";
import logo from "../../Assets/Logo.svg";
import "./navbar.scss";
const Navbar = () => {
  return (
    <>
      <nav className="Navbar">
        <div className="Navbar_container container">
          <div className="Navbar_menu">
            <ul className="Navbar_links">
              <img src={logo} alt="Navbar logo" className="Navbar_logo" />
              <li className="Navbar_item">Features</li>
              <li className="Navbar_item">Pricing</li>
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
