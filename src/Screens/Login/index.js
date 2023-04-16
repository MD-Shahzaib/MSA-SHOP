import React from 'react'
import './auth.css'
import { Link } from 'react-router-dom';
// Componenets.
import Navbar from '../Navbar'
import Footer from '../Footer'

const Login = () => {
    return (
        <>
            <Navbar />
            <div className="main-container">
                <div className="bg-color">
                    <div className='container'>
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Login</h3>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="email" placeholder="Email" />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="forgot-box mb-3">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="checkbox" />
                                    <label className="form-check-label" htmlFor="checkbox">Remember me</label>
                                </div>
                                <Link to="/forgotPassword" className='text-decoration-none'>Forgot password?</Link>
                            </div>
                            <button className="btn btn-primary">Login</button>
                            <div className='text-center mt-3'>Don't have an account? <Link to="/register" className='text-decoration-none'>Register</Link></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login;