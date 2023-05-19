import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Components.
import Logo from "../Images/Logo2.png"
// ICONS.
import { FaShoppingCart } from 'react-icons/fa';
import { MdAccountCircle } from 'react-icons/md';

const Navbar = () => {

    // temporary-set-user.
    const [user, setUser] = useState(false)

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} className="Logo" alt="Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="input-group me-2">
                            <input type="text" className="form-control" placeholder="Search any Query" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
                        </div>
                        {/* temporay set user if true (auth) else (home) */}
                        {user ?
                            <>
                                <Link to='/login'><button className="btn btn-primary me-2">Login</button></Link>
                                <Link to='/register'><button className="btn btn-primary me-2">Register</button></Link>
                            </>
                            :
                            <>
                                <Link to='/cart'><button className="btn btn-primary me-2"><FaShoppingCart /></button></Link>
                                <Link to='/profile'><button className="btn btn-primary me-2"><MdAccountCircle /></button></Link>
                            </>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;