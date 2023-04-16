import React from 'react';
// Components.
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from 'react-router-dom';

const Forgot = () => {
    return (
        <>
            <Navbar />
            <div className="container d-flex justify-content-space-center flex-column my-5 py-3 px-3 rounded border" style={{ maxWidth: '40rem' }}>
                <h2 className='text-center'>Forgot Password</h2><hr />
                <p className='text-center'>Enter your email address and we'll send a link to reset your password</p>
                <input type="email" className="form-control mb-3" placeholder="Enter your email" />
                <div className='mb-3 text-center'>
                    <button className="btn btn-primary text-decoration-none"><Link to='/changePassword' className="text-decoration-none text-white">Request Password</Link></button>
                </div>
                <div className="d-flex justify-content-between align-items-center px-3">
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Forgot;