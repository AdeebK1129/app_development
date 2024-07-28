import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbars = () => {
    return(
        <>
            <nav className='navbar'>
                <div className="logo">
                    <Link to="/">QCC</Link>
                </div>
                <div className='btngroup'>
                    <button><Link className="nav-link" to="/">Home</Link></button>
                    <button><Link className="nav-link" to="/about">About Us</Link></button>
                    <button><Link className="nav-link" to="/contact">Contact Us</Link></button>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default Navbars;
