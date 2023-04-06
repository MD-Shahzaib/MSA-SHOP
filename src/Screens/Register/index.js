import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <>
            <div className="main-container">
                <div className="bg-color d-flex justify-content-center align-items-center">
                    <div className='container d-flex justify-content-center align-items-center'>
                        <div className="d-flex justify-content-center flex-column bg-white rounded py-5 px-5 w-50">
                            <h3 className='text-center mb-3'>Register</h3>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="name" placeholder="name" />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="tel" className="form-control" id="tel" placeholder="tel" />
                                <label htmlFor="tel">Phone</label>
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
        </>
    )
}

export default Register;