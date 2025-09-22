import React, { useState, useEffect } from "react";
import "./Profile.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    number: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("LoggedUser");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setProfile(userData);
      setFormData(userData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    localStorage.setItem("LoggedUser", JSON.stringify(formData));
    setProfile(formData);
    setEdit(false);
    toast.success("Profile Updated");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const updatedUsers = users.filter((user) => user.email !== profile?.email);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      localStorage.removeItem("LoggedUser");
      toast.info("Account Deleted");
      navigate("/login");
    }
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("LoggedUser");
      navigate("/login");
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-page">
        <div className="profile-heads">
          <h1>Hey, {profile?.username}</h1>
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
              <button className="save-change-btn" onClick={handleSave}>
                Save Changes
              </button>
              <button className="cancel-btn" onClick={() => setEdit(false)}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="profile-details">
            <p>
              <strong>Username:</strong> {profile?.username}
            </p>
            <p>
              <strong>Number:</strong> {profile?.number}
            </p>
            <p>
              <strong>Email:</strong> {profile?.email}
            </p>
            <p>
              <strong>Password:</strong> {profile?.password}
            </p>

            <div className="btns">
              <button className="edit-btn" onClick={() => setEdit(true)}>
                Edit Profile
              </button>
              <button className="dlt-btn" onClick={handleDelete}>
                Delete Account
              </button>
            </div>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>

  );
};

export default Profile;
