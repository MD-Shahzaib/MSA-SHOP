import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../Login/auth.css'
// Componenets.
import Navbar from '../Navbar'
import Footer from '../Footer'

const Register = () => {

    // Dynamic-Navigation.
    const navigate = useNavigate();

    // Grab Input Values.
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    // User-Register-Function.
    const registerUser = async () => {
        if (fullname !== "" && email !== "" && password !== "" && phone !== "") {
            const response = await fetch('http://localhost:4000/user/addUser', {
                method: 'POST',
                body: JSON.stringify({ fullname, email, password, phone }),
                headers: { "Content-Type": "application/json" },
            })
            const json = await response.json()
            console.log("json===> ", json);
            navigate("/");
        } else {
            console.log("Please Fill the form");
        }
    }

    return (
        <>
            <Navbar />
            {/* Register Main Container */}
            <div className="main-container">
                {/* Register bg-color Container */}
                <div className="bg-color">
                    {/* Register Container */}
                    <div className='container'>
                        {/* Register Card */}
                        <div className="auth-card">
                            {/* Title */}
                            <h3 className='text-center mb-3'>Register</h3>
                            {/* Input-1 */}
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
                            {/* Input-2 */}
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
                            {/* Input-3 */}
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
                            {/* Input-4 */}
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
                            {/* Register Btn */}
                            <button className="btn btn-primary" onClick={registerUser}>Register</button>
                            {/* Login Link */}
                            <div className='text-center mt-3'>Already have an account?<Link to="/login" className='text-decoration-none'>Login</Link></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register;