import React from "react";
import logo from "../../images/logo-icon-5 2.svg";
import { Nav } from "./NavBar.style";

// const navItems = [
//   { title: "Why Cuporger", link: "/whycuporger" },
//   { title: "About Us", link: "/aboutus" },
//   { title: "Pricing", link: "/pricing" },
// ];
export const NavBar = () => {
  return (
    <Nav>
      <ul>
        <div className="nav-items">
          <img src={logo} alt="logo" />
          <li>Why Cuporger</li>
          <li>About Us</li>
          <li>Pricing</li>
        </div>
        <div className="nav-items2">
          <li>Sign In</li>
          <li>Sign Up</li>
        </div>
      </ul>
    </Nav>
  );
};
