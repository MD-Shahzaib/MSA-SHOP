import React from 'react'
import './login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className="main-container">
                <div className="bg-color d-flex justify-content-center align-items-center">
                    <div className='container d-flex justify-content-center align-items-center'>
                        <div className="d-flex justify-content-center flex-column bg-white rounded py-5 px-5 w-50">
                            <h3 className='text-center mb-3'>Login</h3>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="email" placeholder="Email" />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="d-flex justify-content-between flex-wrap mb-3">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="checkbox" />
                                    <label className="form-check-label" htmlFor="checkbox">Remember me</label>
                                </div>
                                <Link to="/forgot" className='text-decoration-none'>Forgot password?</Link>
                            </div>
                            <button className="btn btn-primary">Login</button>
                            <div className='text-center mt-3'>Don't have an account? <Link to="/register" className='text-decoration-none'>Register</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;