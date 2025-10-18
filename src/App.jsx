import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { StoreProvider } from "./Components/Context/StoreContext";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Adidas from "./Components/Adidas";
import Nike from "./Components/Nike";
import Puma from "./Components/Puma";
import NewBalance from "./Components/NewBalance";
import FilteredProducts from "./Components/FilteredProducts";
import Cart from "./Components/Cart";
import Favourites from "./Components/Favourites";
import About from "./Components/About";
import Profile from "./Components/Profile";
import Signup from "./Components/Signup";
import Pagination from "./Components/Pagination";

const App = () => {
  return (
    <>
      <StoreProvider>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/adidas" element={<Adidas />} />
            <Route path="/nike" element={<Nike />} />
            <Route path="/puma" element={<Puma />} />
            <Route path="/nb" element={<NewBalance />} />
            <Route path="/products" element={<FilteredProducts/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/favourites" element={<Favourites/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/pagination" element={<Pagination/>} />
            

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

