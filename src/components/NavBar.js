import React from "react";
import logo from "../images/logo-icon-5 1.png";
import customer from "../images/customer 1.png";
import contact from "../images/contact.png";
import setting from "../images/setting.png";
import onoff from "../images/onoff.png";

import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="logo" />

      <div className="nav-items">
        <div>
          <img src={customer} alt="customer" />
          <p>Customer</p>
        </div>
        <div>
          <img src={contact} alt="customer" />
          <p>Contact Us</p>
        </div>
        <div>
          <img src={setting} alt="customer" />
          <p>Setting</p>
        </div>
      </div>
      <div className="logout">
        <img src={onoff} alt="customer" />
        <p>Logout</p>
      </div>
    </nav>
  );
}
