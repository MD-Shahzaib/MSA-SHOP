import React from 'react';
// Components.
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from 'react-router-dom';

const ChangePassword = () => {
    return (
        <>
            <Navbar />
            <div className="container d-flex justify-content-space-center flex-column my-5 py-3 px-3 rounded border" style={{ maxWidth: '40rem' }}>
                <h2 className='text-center'>Change Password</h2><hr />
                <p className='text-center'>Set a new password</p>
                <input type="password" className="form-control mb-3" placeholder="New password" />
                <input type="password" className="form-control mb-3" placeholder="Confirm password" />
                <div className='mb-3 text-center'>
                    <button className="btn btn-primary">Apply</button>
                </div>
                <div className="d-flex justify-content-between align-items-center px-3">
                    <Link to='/login'>Back to Login</Link>
                    <Link to='/register'>Register</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ChangePassword;