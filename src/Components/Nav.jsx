import React from 'react'
import './Nav.css'
import nlogo from '../assets/zap-new.png'
import cart from '../assets/cart.png'

const Nav = () => {
  return (
    <>
      <div className="nav-container">
        <div className="nav-logo">
          <img src={nlogo} />
        </div>
        <div className="nav-links">
          <ul>
            <li>LOGIN</li>
            <li>REGISTER</li>
            <li>PROFILE</li>
            <li>ABOUT US</li>
          </ul>
        </div>
        <div className="nav-cart">
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
