import React from "react";
import './AdidasListing.css'
import { newbalance } from "../Products";

const NbListing = () => {
    console.log(newbalance,"pp");
    
    return (
            <>
                <div className="adidas-home">
                    <div className="adidas-listing-container">
                        <div className="adidas-listing-head">
                            <p>NEW BALANCE</p>
                        </div>
                        <div className="adidas-listing">
                            {newbalance.map((item, index) => (
                                <div key={index} className="adidas-card">
                                    <img src={item.img} alt={item.title} />
                                    <h4>₹{item.price}</h4>
                                    <p>{item.title}</p>
                                    <button>Add to Cart</button>
                                </div>
                            ))}
                        </div>
    
                    </div>
                </div>
            </>
        )
}

export default NbListing