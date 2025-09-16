import React from "react";
import './AdidasListing.css'
import { adidas } from "../Products";

const AdidasListing = () => {
    return (
        <>
            <div className="adidas-home">
                <div className="adidas-listing-container">
                    <div className="adidas-listing-head">
                        <p>ADIDAS ORIGINALS</p>
                    </div>
                    <div className="adidas-listing">
                        {adidas.map((item, index) => (
                            <div key={index} className="adidas-card">
                                <img src={item.img} alt={item.name} />
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

export default AdidasListing