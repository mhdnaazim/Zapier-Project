import React, { useState } from 'react'
import './Login.css'
import whitelogo from '../assets/zapierWhite.png'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const validUser = users.find(
            (u) => u.email === formData.email && u.password === formData.password
        )

        if (validUser) {
            toast.success("Login Successful");
            navigate("/home");
        } else {
            toast.error("Invalid Email or Password");
        }
    }



    return (
        <div className="login-page">
            <div className="login-left">
                <div className="login-main-logo">
                    <img src={whitelogo} alt="logo" />
                </div>
                <div className="login-inputs">
                    <p>LOGIN</p>
                    <h6>Login to your account so you can continue to <br /> your onboarding experience</h6>

                    <input
                        type="text"
                        placeholder='Email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        placeholder='Password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <div className="forgot-section">
                        <p>Forgot Email</p>
                        <p>Forgot Password</p>
                    </div>

                    <button onClick={handleLogin}>Login</button>
                </div>
            </div>

            <div className="login-right">
                <div className="login-right-bottom">
                    <p>Don't have an Account yet?</p>
                    <button onClick={() => navigate("/")}>SIGN UP</button>
                </div>
            </div>
        </div>
    )
}

export default Login
