import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={require("../../Images/Logo2.png")} className="Logo" alt="Logo" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-primary me-2">Search</button>
                    <Link to='/profile'>
                        <button className="btn btn-primary me-2">Profile</button>
                    </Link>
                    <Link to='/cart'>
                        <button className="btn btn-primary me-2">Cart</button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;