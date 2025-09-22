import React, { useState } from 'react'
import './Nav.css'
import nlogo from '../assets/zap-new.png'
import cartIcon from '../assets/cart.png'
import favlogo from '../assets/favourites.png'
// import wishlist from '../assets/wishlist.png'
import search from '../assets/search icon.png'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useStore } from './Context/StoreContext'
import Cart from './Cart'
import Favourites from './Favourites'

const Nav = () => {
  const { cart, setQuery, fav } = useStore()
  const [input, setInput] = useState("")
  const [isOpen, setIsopen] = useState(false)
  const navigate = useNavigate()
  const LoggedUser = JSON.parse(localStorage.getItem("LoggedUser"))

  const closeCart = () => {
    setIsopen(false)
  }

  const cartSize = cart.length;

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
    if (!input.trim()) {
      toast.error("Please enter something to search")
      return;
    }
    setQuery(input);
    navigate("/products")
  }

  const handleFav = () => {
    if(fav.length > 0){
      navigate("/Favourites")
    }else(
      toast.error("No Items in Favourites")
    )
  }
  return (
    <>
      <div className="nav-container">
        <div className="nav-logo">
          <img src={nlogo} onClick={handleLogo} alt="logo" />
        </div>
        <div className="nav-links">
          <div className="search-input">
            <input
              type="text"
              placeholder='Search here...'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <img src={search} onClick={handleInput} alt="search" />
          </div>
          <ul>
            <li onClick={handleLogin}>LOGIN</li>
            <li onClick={handleRegister}>REGISTER</li>
            <li onClick={handleProfile}>PROFILE</li>
            <li onClick={() => navigate("/about")}>ABOUT US</li>
          </ul>
        </div>
        <div className="nav-cart">
          <img src={favlogo} onClick={handleFav}/>
          <img onClick={() => setIsopen(true)} src={cartIcon}/>
          {cart.length > 0 && (
            <div className="cart-total">
              <p>{cartSize}</p>
            </div>
          )}
        </div>
      </div>
      

      {isOpen && <Cart close={closeCart} />}
    </>
  )
}

export default Nav
