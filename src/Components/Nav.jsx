import React from 'react'
import './Nav.css'
import nlogo from '../assets/zap-new.png'
import cart from '../assets/cart.png'
import fav from '../assets/favourites.png'
import wishlist from '../assets/wishlist.png'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Nav = () => {

  const navigate = useNavigate()
  const LoggedUser = JSON.parse(localStorage.getItem("LoggedUser"))

  const handleLogin = () => {
    if(LoggedUser){
      toast.error("Already Logged")
    }else{
      navigate("/login")
    }
  }

  const handleRegister = () => {
    if(LoggedUser){
      toast.error("Already Logged")
    }else{
      navigate("/")
    }
  }

  const handleProfile = () => {
    if(!LoggedUser){
      toast("Please Login")
    }else{
      navigate("/profile")
    }
  }

  return (
    <>
      <div className="nav-container">
        <div className="nav-logo">
          <img src={nlogo} onClick={() => window.location.reload()} />
        </div>
        <div className="nav-links">
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
