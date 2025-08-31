import React from 'react'
import './Login.css'
import whitelogo from '../assets/zapierWhite.png'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="login-page">
            <div className="login-left">
                <div className="login-main-logo">
                    <img src={whitelogo} alt="logo" />
                </div>
                <div className="login-inputs">
                    <p>LOGIN</p>
                    <h6>Login to your account so you can continue to <br /> your onboarding experience</h6>

                    <input type="text" placeholder='Email' />
                    <input type="password" placeholder='Password' />

                    <div className="forgot-section">
                        <p>Forgot Email</p>
                        <p>Forgot Password</p>
                    </div>

                    <button>Login</button>
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
