import React from "react";
import './AdidasListing.css'
import { puma } from "../Products";

const PumaListing = () => {
    return (
        <>
            <div className="adidas-home">
                <div className="adidas-listing-container">
                    <div className="adidas-listing-head">
                        <p>PUMA</p>
                    </div>
                    <div className="adidas-listing">
                        {puma.map((item, index) => (
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

export default PumaListing