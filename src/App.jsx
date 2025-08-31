import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Components/SignUp";
import Login from "./Components/Login";
import Home from "./Components/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App