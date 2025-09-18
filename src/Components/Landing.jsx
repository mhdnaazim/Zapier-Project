import React from "react";
import './Landing.css'
import './AdidasListing.css'
import adidas from '../assets/adidas_logo.jpeg'
import nike from '../assets/Nike_logo.jpeg'
import puma from '../assets/puma_logo.jpeg'
import nb from '../assets/NB_logo.jpeg'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import test from '../assets/sl-72-rs-shoes.avif'

import { useStore } from "./Context/StoreContext";

const Landing = () => {

    const navigate = useNavigate()

    const LoggedUser = localStorage.getItem("LoggedUser");


    const handleSection = (brand) => {
        if (!LoggedUser) {
            toast.error("Login First")
            return;
        } else { navigate(`/${brand}`) }
    }

    return (
        <>
            <div className="landing-container">
                <div className="landing-sections-container">
                    <div className="sections" onClick={() => handleSection("adidas")}>
                        <img src={adidas} />
                    </div>
                    <div className="sections" onClick={() => handleSection("nike")}>
                        <img src={nike} />
                    </div>
                    <div className="sections" onClick={() => handleSection("puma")}>
                        <img src={puma} />
                    </div>
                    <div className="sections" onClick={() => handleSection("nb")}>
                        <img src={nb} />
                    </div>
                </div>

                <div className="best-sellers-container">
                    <div className="best-sellers">
                        <div className="sellers-head">
                            <p>TOP SELLERS</p>
                        </div>
                        <div className="sellers">
                            <div className="adidas-card">
                                <img src={test} />
                                <h4>₹11 999.00</h4>
                                <p>Superstar - Puma</p>
                                <button>Add to Cart</button>
                            </div>
                            <div className="adidas-card">
                                <img src={test} />
                                <h4>₹11 999.00</h4>
                                <p>Superstar - Nike</p>
                                <button>Add to Cart</button>
                            </div>

                            <div className="adidas-card">
                                <img src={test} />
                                <h4>₹11 999.00</h4>
                                <p>Superstar - Adidas</p>
                                <button>Add to Cart</button>
                            </div>

                            <div className="adidas-card">
                                <img src={test} />
                                <h4>₹11 999.00</h4>
                                <p>Superstar - New Balance</p>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Landing