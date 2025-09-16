import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { StoreProvider } from "./Components/Context/StoreContext";
import Signup from "./Components/SignUp";
import Login from "./Components/Login";
import Home from "./Components/Home";
import ProfileSection from "./Components/ProfileSection";
import Adidas from "./Components/Adidas";
import Nike from "./Components/Nike";

const App = () => {
  return (
    <>
      <StoreProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/profile" element={<ProfileSection/>} />
          <Route path="/adidas" element={<Adidas/>} />
          <Route path="/nike" element={<Nike/>} />
        </Routes>
        <ToastContainer
          position="bottom-left"
          autoClose={1700}
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

