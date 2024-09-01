import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [activePage, setActivePage] = useState('/');

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" className={activePage === '/' ? 'active' : ''} onClick={() => setActivePage('/')}>
          <img src={logo} alt="Logo" />
          <span>Chinatowns of NYC</span>
        </Link>
      </div>
      <div>
        <Link 
          to="/" 
          className={activePage === '/' ? 'active' : ''} 
          onClick={() => setActivePage('/')}
        >
          Home
        </Link>
        <Link 
          to="/flushing" 
          className={activePage === '/flushing' ? 'active' : ''} 
          onClick={() => setActivePage('/flushing')}
        >
          Flushing Chinatown
        </Link>
        <Link 
          to="/brooklyn" 
          className={activePage === '/brooklyn' ? 'active' : ''} 
          onClick={() => setActivePage('/brooklyn')}
        >
          Brooklyn Chinatown
        </Link>
        <Link 
          to="/manhattan" 
          className={activePage === '/manhattan' ? 'active' : ''} 
          onClick={() => setActivePage('/manhattan')}
        >
          Manhattan Chinatown
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
