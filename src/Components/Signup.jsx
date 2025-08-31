import React from 'react'
import './Signup.css'
import logo from '../assets/zap.png'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();

    return (
        <div className="signup-page">
            <div className="signup-left">
                <div className="main-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="sigunp-left-bottom">
                    <p>Already Signed Up?</p>
                    <button onClick={() => navigate("/login")}>LOG IN</button>
                </div>
            </div>
            <div className="signup-right">
                <div className="signup-input-container">
                    <p>SIGN UP</p>
                    <h5>Let's get you all set up so you can start creating your <br /> first onboarding experience</h5>
                    <input type="text" placeholder='Username'/>
                    <input type="text" placeholder='Number' />
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <input type="password" placeholder='Confirm Password' />
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Signup
