import React from "react";
import Logo from "../../assets/argentBankLogo.webp";
import { NavLink } from "react-router-dom";
import "../Header/header.scss";

function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">
          <img src={Logo} alt="ArgentBank logo" />
        </NavLink>
        <NavLink to="/Login">
          <i className="fa fa-user-circle"></i>
          <p>Sign In</p>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
