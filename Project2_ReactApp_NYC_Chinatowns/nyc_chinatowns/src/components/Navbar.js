import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
          <span>Chinatowns of NYC</span>
        </Link>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/flushing">Flushing Chinatown</Link>
        <Link to="/brooklyn">Brooklyn Chinatown</Link>
        <Link to="/manhattan">Manhattan Chinatown</Link>
      </div>
    </div>
  );
}

export default Navbar;
