import React, { useState } from 'react'
import './Nav.css'
import nlogo from '../assets/zap-new.png'
import cart from '../assets/cart.png'
import fav from '../assets/favourites.png'
import wishlist from '../assets/wishlist.png'
import search from '../assets/search icon.png'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useStore } from './Context/StoreContext'

const Nav = () => {

  const { query, setQuery } = useStore()
  const [input, setInput] = useState("")
  const navigate = useNavigate()
  const LoggedUser = JSON.parse(localStorage.getItem("LoggedUser"))

  const handleLogin = () => {
    if (LoggedUser) {
      toast.error("Already Logged")
    } else {
      navigate("/login")
    }
  }

  const handleLogo = () => {
    if (location.pathname === "/home") {
      window.location.reload();
    } else {
      navigate("/home")
    }
  }

  const handleRegister = () => {
    if (LoggedUser) {
      toast.error("Already Logged")
    } else {
      navigate("/")
    }
  }

  const handleProfile = () => {
    if (!LoggedUser) {
      toast("Please Login")
    } else {
      navigate("/profile")
    }
  }

  const handleInput = (e) => {
    e.preventDefault()
    setQuery(input)
    if (!input.trim()) {
      toast.error("Please enter something to search")
      return;
    }
    setQuery(input);
    navigate("/products")
  }

  return (
    <>
      <div className="nav-container">
        <div className="nav-logo">
          <img src={nlogo} onClick={handleLogo} />
        </div>
        <div className="nav-links">
          <div className="search-input">
            <input type="text" placeholder='Search here...' value={input} onChange={(e) => setInput(e.target.value)} />
            <img src={search} onClick={(e) => handleInput(e)} />
          </div>
          <ul>
            <li onClick={handleLogin}>LOGIN</li>
            <li onClick={handleRegister}>REGISTER</li>
            <li onClick={handleProfile}>PROFILE</li>
            <li>ABOUT US</li>
          </ul>
        </div>
        <div className="nav-cart">
          <img src={fav} />
          <img src={wishlist} />
          <img src={cart} />
          <div className="cart-total">
            <p>1</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
