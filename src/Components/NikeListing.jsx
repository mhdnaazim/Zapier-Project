import React from "react";
import './AdidasListing.css'
import { nike } from "../Products";

// import wishlist from '../assets/wishlist.png'
import fav from '../assets/favourites.png'
import { useStore } from "./Context/StoreContext";
import { toast } from "react-toastify";

const NikeListing = () => {
        const { cart, addToCart, increaseQuantity, decreaseQuantity } = useStore();
    
    return (
        <>
                    <div className="adidas-home">
                        <div className="adidas-listing-container">
                            <div className="adidas-listing-head">
                                <p>ADIDAS ORIGINALS</p>
                            </div>
                            <div className="adidas-listing">
                                {nike.map((item) => {
                                    const inCart = cart.find(cartItem => cartItem.id === item.id);
        
                                    return (
                                        <div key={item.id} className="adidas-card">
                                            <img className="card-image" src={item.img} alt={item.title} />
                                            <h4>₹{item.price}</h4>
                                            <p>{item.title}</p>
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
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </>
    )
}

export default NikeListing