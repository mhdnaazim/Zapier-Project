import React, { useState, useEffect } from "react";
import './Profile.css';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const Profile = () => {
    const navigate = useNavigate()
    const [profile, setProfile] = useState(null);
    const [edit, setEdit] = useState(false)
    const [formData, setFormData] = useState({
        username: "",
        number: "",
        email: "",
        password: "",
    })

    useEffect(() => {
        const storedUser = localStorage.getItem("LoggedUser");
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            setProfile(userData);
            setFormData(userData)
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSave = () => {
        localStorage.setItem("LoggedUser", JSON.stringify(formData))
        setProfile(formData)
        setEdit(false)
    }

    const handleDelete = () => {
        if (window.confirm("Are you sure you want delete your Account?")) {
            const users = JSON.parse(localStorage.getItem("users")) || [];
            const LoggedUser = JSON.parse(localStorage.getItem("LoggedUser"))

            const updatedUsers = users.filter(
                (user) => user.email !== LoggedUser.email
            )

            localStorage.setItem("users", JSON.stringify(updatedUsers))

            localStorage.removeItem("LoggedUser")


            setProfile(null)
            setFormData({
                username: "",
                number: "",
                email: "",
                password: "",
            })
        }
        toast.success("Account Deleted Successfully")
    }

    const handleLogout = () => {
        if (window.confirm("Are you sure")) {
            localStorage.removeItem("LoggedUser")
            setProfile(null)
            setFormData({
                username: "",
                number: "",
                email: "",
                password: "",
            })
        }
        navigate("/login")
    }

    if (!profile) {
        return <h2>No user data found. Please login.</h2>
    }

    return (
        <div className="profile-container">
            <div className="profile-page">
                <div className="profile-heads">
                    <h1>Hey, {profile.username}</h1>
                    <button className="logout-btn" onClick={handleLogout}>Logout</button>
                    <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>


                </div>

                {edit ? (
                    <div className="edit-profile">
                        <label>
                            <strong>Username:</strong>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </label>

                        <label>
                            <strong>Number:</strong>
                            <input
                                type="text"
                                name="number"
                                value={formData.number}
                                onChange={handleChange}
                            />
                        </label>

                        <label>
                            <strong>Email:</strong>
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </label>

                        <label>
                            <strong>Password:</strong>
                            <input
                                type="text"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </label>
                        <div className="btns">
                            <button onClick={handleSave}>Save Changes</button>
                            <button onClick={() => setEdit(false)}>Cancel</button>
                        </div>
                    </div>
                ) : (
                    <div className="profile-details">
                        <p> <strong>Username:</strong> {profile.username} </p>
                        <p> <strong>Number:</strong> {profile.number} </p>
                        <p> <strong>Email:</strong> {profile.email} </p>
                        <p> <strong>Password: </strong> {profile.password} </p>
                        <div className="btns">
                            <button className="edit-btn" onClick={() => setEdit(true)}>Edit Profile</button>
                            <button className="dlt-btn" onClick={handleDelete}>Delete Account</button>
                        </div>
                    </div>
                )}


            </div>
        </div>
    );
};

export default Profile;
