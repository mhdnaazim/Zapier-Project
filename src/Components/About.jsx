import React from "react";
import './About.css';
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const About = () => {
    const navigate = useNavigate()
    return (
        <>
            <Nav />
            <div className="about-us">
                <h2>
                    About <span className="highlight">Zapier</span>
                </h2>
                <p>
                    At <span className="highlight">Zapier</span>, we believe that the perfect pair of shoes
                    can elevate not just your style, but your confidence and lifestyle. 
                    Our mission is to bring you premium footwear that blends fashion and functionality.
                </p>
                <button onClick={() => navigate("/home")} className="cta-button">Shop Now</button>
            </div>
            <Footer/>
        </>
    );
};

export default About;
