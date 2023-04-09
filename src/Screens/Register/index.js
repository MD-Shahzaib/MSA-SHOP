import React from 'react'
import '../Login/auth.css'
import { Link } from 'react-router-dom';
// Componenets.
import Navbar from '../Navbar'
import Footer from '../Footer'

const Register = () => {
    return (
        <>
            <Navbar />
            <div className="main-container">
                <div className="bg-color">
                    <div className='container'>
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Register</h3>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="name" placeholder="name" />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" id="number" placeholder="number" />
                                <label htmlFor="number">Phone</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="email" placeholder="Email" />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                                <label htmlFor="password">Password</label>
                            </div>
                            <button className="btn btn-primary">Register</button>
                            <div className='text-center mt-3'>Already have an account? <Link to="/login" className='text-decoration-none'>Login</Link></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register;