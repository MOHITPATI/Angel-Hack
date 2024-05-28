import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/header.css";
import logo from "../../img/logo.png"; // Ensure you have a logo image in the assets directory

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Company Logo" className="logo" />
      <nav className="navbar">
        <Link to="/" className="nav-link">
          Home{" "}
        </Link>{" "}
        <Link to="/login" className="nav-link">
          Login{" "}
        </Link>{" "}
        <Link to="/signup" className="nav-link">
          Sign Up{" "}
        </Link>{" "}
        <Link to="/about" className="nav-link">
          About Us{" "}
        </Link>{" "}
      </nav>{" "}
    </header>
  );
};

export default Header;
