import React, { useState } from 'react'
import '../Login/auth.css'
import { Link } from 'react-router-dom';
// Componenets.
import Navbar from '../Navbar'
import Footer from '../Footer'

const Register = () => {

    // Grab Input Values.
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    // Register Function.
    const registerUser = () => {
        if (fullname && email && password && phone !== "") {
            console.log(`fullname = ${fullname}, email = ${email}, password = ${password}, phone = ${phone}`);
            return fetch("http://localhost:4000/user/addUser", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullname, email, password, phone })
            })
        }
        alert("Please Fill the form");
        // All set but have a cores issue --> fix later. 
    }

    return (
        <>
            <Navbar />
            <div className="main-container">
                <div className="bg-color">
                    <div className='container'>
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Register</h3>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Fullname"
                                    placeholder="Fullname"
                                    value={fullname}
                                    onChange={(e) => { setFullname(e.target.value) }}
                                />
                                <label htmlFor="name">Fullname</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="number"
                                    placeholder="number"
                                    value={phone}
                                    onChange={(e) => { setPhone(e.target.value) }}
                                />
                                <label htmlFor="number">Phone</label>
                            </div>
                            <button className="btn btn-primary" onClick={registerUser}>Register</button>
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