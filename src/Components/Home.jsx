import React from "react";
import './Home.css'
import Nav from "./Nav";
import Banner from "./Banner";
import Landing from "./Landing";
import Footer from "./Footer";

const Home = () => {
    return(
        <>
        <Nav/>
        <Banner/>
        <Landing/>
        <Footer/>
        </>
    )
}

export default Home