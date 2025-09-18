import React from "react";
import './AdidasListing.css'
import { nike } from "../Products";

import wishlist from '../assets/wishlist.png'
import fav from '../assets/favourites.png'

const NikeListing = () => {
    return (
        <>
            <div className="adidas-home">
                <div className="adidas-listing-container">
                    <div className="adidas-listing-head">
                        <p>NIKE</p>
                    </div>
                    <div className="adidas-listing">
                        {nike.map((item, index) => (
                            <div key={index} className="adidas-card">
                                <img className="card-image" src={item.img} alt={item.name} />
                                <h4>₹{item.price}</h4>
                                <p>{item.title}</p>
                                <div className="card-bottom">
                                    <button>Add to Cart</button>
                                    <div className="card-bottom-icons">
                                        <img src={fav} />
                                        <img src={wishlist} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default NikeListing