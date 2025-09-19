import React from "react";
import './Landing.css'
import './AdidasListing.css'
import adidas from '../assets/adidas_logo.jpeg'
import nike from '../assets/Nike_logo.jpeg'
import puma from '../assets/puma_logo.jpeg'
import nb from '../assets/NB_logo.jpeg'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import nike5 from '../assets/nike (5).png'
import nb5 from '../assets/nb5.avif'
import nb16 from '../assets/nb16.avif'
import puma14 from '../assets/sc (1).avif'
// import wishlist from '../assets/wishlist.png';
import fav from '../assets/favourites.png';


import { useStore } from "./Context/StoreContext";

const Landing = () => {

    const topSellers = [
        { id: "21", title: "Nike Vomero 18", img: nike5, price: "12 295.00", brand: "Nike" },
        { id: "53", title: "1000", img: nb5, price: "18 999.00", brand: "New Balance" },
        { id: "46", title: "Scuderia Ferrari HP Speedcat", img: puma14, price: "10 999.00", brand: "Puma" },
        { id: "64", title: "1000", img: nb16, price: "18 999.00", brand: "New Balance" }

    ]

    const { cart, increaseQuantity, decreaseQuantity, addToCart } = useStore()
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
                            {topSellers.map((item) => {
                            const inCart = cart.find(cartItem => cartItem.id === item.id);
                                return (
                                    <div className="adidas-card">
                                        <img src={item.img} />
                                        <h4>{item.price}</h4>
                                        <p>{item.title} | {item.brand}</p>
                                        <div className="adidas-card-bottom">
                                            {inCart ? (
                                                <div className="quantity-btns">
                                                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                                    <h6>{inCart.quantity}</h6>
                                                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                                                </div>
                                            ) : (
                                                <button
                                                    className="atc-btn"
                                                    onClick={() => {
                                                        addToCart(item);
                                                        toast.success("Item Added Successfully!");
                                                    }}
                                                >
                                                    Add to Cart
                                                </button>
                                            )}

                                            <div className="card-bottom-icons">
                                                <img src={fav} alt="favourites" />
                                                {/* <img src={wishlist} alt="wishlist" /> */}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Landing