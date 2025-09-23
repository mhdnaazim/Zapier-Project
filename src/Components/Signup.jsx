import React, { useState } from 'react'
import './Signup.css'
import logo from '../assets/zap.png'
import { useNavigate } from 'react-router-dom';
import { useStore } from './Context/StoreContext';
import { toast } from 'react-toastify';

const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        number: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleSignup = () => {
        const { username, number, email , password, confirmPassword } = formData;
        const lowerEmail = email.toLocaleLowerCase()


        if (!username || !number || !email || !password || !confirmPassword) {
            toast.error("Please fill all fields");
            return;
        }

        //Email Format 
        const emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email address");
            return;
        }

        if (password.length < 8) {
            toast.error("Password must be at least 8 characters long")
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];


        const userExists = existingUsers.some(
            (users) => users.email === lowerEmail || users.number === number
        )

        if (userExists) {
            toast.error("User already exists")
            return;
        }


        const newUser = { username, email: lowerEmail, number, password }
        existingUsers.push(newUser);

        localStorage.setItem("users", JSON.stringify(existingUsers))

        toast.success("Signup Successfull");
        navigate("/login");
    };


    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "number") {
            // allow only digits, max 10
            if (/^\d{0,10}$/.test(value)) {
                setFormData((prev) => ({
                    ...prev,
                    [name]: value,
                }));
            }
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

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
                    <input type="text" placeholder='Username' name='username' value={formData.username} onChange={handleChange} />
                    <input type="text" placeholder='Number' name='number' value={formData.number} onChange={handleChange} />
                    <input type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange} />
                    <input type="password" minLength="8" placeholder='Password' name='password' value={formData.password} onChange={handleChange} />
                    <input type="password" placeholder='Confirm Password' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} />
                    <button onClick={handleSignup}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Signup
