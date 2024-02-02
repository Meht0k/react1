import React from 'react';
import { Outlet, Link } from 'react-router-dom';    


function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg position-fixed w-100 top-0 z-3 bg-body-success">
                <div className="container">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link text-black  active" aria-current="page" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link text-black " to="/about">About</Link></li>
                            <li className="nav-item"><Link className="nav-link text-black " to="/service">Service</Link></li>
                            <li className="nav-item"><Link className="nav-link text-black " to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}

export default Navbar
