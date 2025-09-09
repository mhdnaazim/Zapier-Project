import React, { useState, useEffect } from "react";
import './Profile.css';


const Profile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setProfile(JSON.parse(storedUser));
        }
    }, []);

    if (!profile) {
        return <h2>No user data found. Please login.</h2>;
    }

    return (
        <div className="profile-page">
            <h1>Hello, {profile.username}</h1>
            <div className="profile-details">
                <p> <strong>Username:</strong> {profile.username} </p>
                <p> <strong>Number:</strong> {profile.number} </p>
                <p> <strong>Email:</strong> {profile.email} </p>
                <p> <strong>Password: </strong> {profile.password} </p>
            </div>
        </div>
    );
};

export default Profile;
