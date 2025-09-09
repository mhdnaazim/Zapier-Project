import React from 'react'
import './Nav.css'
import nlogo from '../assets/zap-new.png'
import cart from '../assets/cart.png'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {

  return (
    <>
      <div className="nav-container">
        <div className="nav-logo">
          <img src={nlogo} onClick={() => window.location.reload()} />
        </div>
        <div className="nav-links">
          <ul>
            <Link to="/login"> <li>LOGIN</li> </Link>
            <Link to="/"> <li>REGISTER</li> </Link>
            <Link to="/profile"> <li>PROFILE</li> </Link>
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
