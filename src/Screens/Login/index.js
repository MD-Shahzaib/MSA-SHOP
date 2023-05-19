import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../../globalStyle.css'
// Componenets.
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

const Login = () => {

    // Dynamic-Navigation.
    const navigate = useNavigate();

    // Grab Input Values.
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // User-Login-Function.
    const loginUser = async () => {
        /* const response = await fetch('http://localhost:4000/user/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { "Content-Type": "application/json" },
        }) */
        const path = "http://localhost:4000/user/login";
        const payload = {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" }
        };
        const response = await fetch(path, payload);
        const json = await response.json();
        console.log("json2===> ", json);
        if (json.message === "Invalid Password") {
            alert("Invalid Credentials");
            console.log(`json.message ==> (${json.message}) email ==> (${email}) password ==> (${password})`);
        } else {
            console.log(`json.message ==> (${json.message}) email ==> (${email}) password ==> (${password})`);
            return navigate("/");
        }
    };

    return (
        <>
            <Navbar />
            <div className="main-container">
                <div className="bg-color">
                    <div className='container'>
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Login</h3>
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
                            <div className="forgot-box mb-3">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="checkbox"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="checkbox"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <Link
                                    to="/forgotPassword"
                                    className='text-decoration-none'
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <button className="btn btn-primary" onClick={loginUser}>Login</button>
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