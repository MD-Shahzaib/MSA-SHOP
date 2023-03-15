import React from 'react'
import { Link } from 'react-scroll'
import { setTheme } from '../../Store/actions/themeAction'
import { useDispatch } from 'react-redux'

const Navbar = () => {

    const dispatch = useDispatch()

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">MSA-SHOP</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='home' className="nav-link" spy={true} offset={-70}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='about' className="nav-link" spy={true} offset={-70}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='services' className="nav-link" spy={true} offset={-70}>Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='contact' className="nav-link" spy={true} offset={-70}>Contact</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <button className="btn btn-primary mx-1" onClick={() => dispatch(setTheme('dark'))}>DARK THEME</button>
                        <button className="btn btn-primary mx-1" onClick={() => dispatch(setTheme('light'))}>LIGHT THEME</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;