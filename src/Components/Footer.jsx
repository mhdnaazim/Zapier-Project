import React from "react";
import './Footer.css'
import footlogo from '../assets/zapierWhite.png'
import insta from '../assets/instagram.png'
import fb from '../assets/facebook-app-symbol.png'
import yt from '../assets/youtube (1).png'


import nblogo from '../assets/company-new-balance-logo-png-20.png'
import adidasfoot from '../assets/adidas_logo.jpeg'
import nikefoot from '../assets/Nike_logo.jpeg'
import nbfoot from '../assets/Reebok.jpeg'
import pumafoot from '../assets/puma_logo.jpeg'

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-top-links">
                        <div className="footer-top-logos">
                            <img className="foot-brand-logo" src={adidasfoot} />
                            <img className="foot-brand-logo" src={nikefoot} />
                            <img className="foot-brand-logo" src={nbfoot} />
                            <img className="foot-brand-logo" src={pumafoot} />
                            <img className="nb-foot" src={nblogo}/>
                        </div>
                    </div>
                    <div className="footer-top-links">
                        <ul>
                            <li>FAQs</li>
                            <li>Shipping & Delivery</li>
                            <li>Payments</li>
                            <li>Size Guide</li>
                            <li>Student Discount</li>
                        </ul>
                    </div>
                    <div className="footer-top-links">
                        <ul>
                            <li>Order Status</li>
                            <li>Returns & Refunds</li>
                            <li>Contact Us</li>
                            <li>Find a Store</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-left">
                        <img src={footlogo} />
                    </div>
                    <div className="footer-bottom-mid">
                        <p>Privacy Policy</p>
                        <h5>|</h5>
                        <p>Terms and Conditions</p>
                    </div>
                    <div className="footer-bottom-right">
                        <p>Follow us on</p>
                        <img src={insta} />
                        <img src={fb} />
                        <img src={yt} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer