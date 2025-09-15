import React from "react";
import './Landing.css'
import adidas from '../assets/adidas_logo.jpeg'
import nike from '../assets/Nike_logo.jpeg'
import puma from '../assets/puma_logo.jpeg'
import nb from '../assets/NB_logo.jpeg'
import { useNavigate } from "react-router-dom";

const Landing = () => {

    const navigate = useNavigate()

    return(
        <>
        <div className="landing-container">
            <div className="landing-sections-container">
                <div className="sections">
                    <img src={adidas}/>
                </div>
                <div className="sections">
                    <img src={nike}/>
                </div>
                <div className="sections">
                    <img src={puma}/>
                </div>
                <div className="sections">
                    <img src={nb}/>
                </div>
            </div>

            <div className="best-sellers-container">
                <div className="best-sellers">
                    <div className="sellers-head">
                        <p>TOP SELLERS</p>
                    </div>
                    <div className="sellers">
                        <div className="sellers-card"></div>
                        <div className="sellers-card"></div>
                        <div className="sellers-card"></div>
                        <div className="sellers-card"></div>
                    </div>
                </div>
            </div>
        </div>


        </>
    )
}

export default Landing