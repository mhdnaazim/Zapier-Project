import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Components/SignUp";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { ToastContainer } from "react-toastify";
import { StoreProvider } from "./Components/Context/StoreContext";
import Profile from "./Components/Profile";

const App = () => {
  return (
    <>
      <StoreProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={1800}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          draggable
          pauseOnHover={false}
          theme="light"
          />
      </BrowserRouter>
      </StoreProvider>
    </>
  )
}

export default App

