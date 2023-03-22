import React from 'react'
import './navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src={require("../../Images/Logo2.png")} className="Logo" alt="Logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary me-2" type="submit">Search</button>
                        <button className="btn btn-primary me-2" type="submit">Profile</button>
                        <button className="btn btn-primary me-2" type="submit">Cart</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;