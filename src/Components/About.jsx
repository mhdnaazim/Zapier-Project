import React from "react";
import './About.css'

const About = () => {
    return(
        <>
       <div className="about-us">
    <h2>About <span className="highlight">Zapier</span></h2>
    <p>
        At <span className="highlight">Zapier</span>, we believe that the perfect pair of shoes
        can elevate not just your style, but your confidence and lifestyle. 
        Our mission is to bring you premium footwear that blends fashion and functionality.
    </p>
    <a href="/shop" className="cta-button">Shop Now</a>
</div>
        </>
    )
}

export default About