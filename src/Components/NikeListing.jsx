import React, { useState } from "react";
import './AdidasListing.css'
import { nike } from "../Products";
import { useStore } from "./Context/StoreContext";
import { toast } from "react-toastify";
import favIcon from "../assets/favourites.png";
import favBlack from "../assets/fav_black.png";

const NikeListing = () => {
    const { cart, addToCart, increaseQuantity, decreaseQuantity, fav, toggleFav } = useStore();

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerpage = 8

    const totalPages = Math.ceil(nike.length / itemsPerpage)

    const startIndex = (currentPage - 1) * itemsPerpage
    const endIndex = startIndex + itemsPerpage
    const currentData = nike.slice(startIndex, endIndex)

    const gotoPage = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <>
            <div className="adidas-home">
                <div className="adidas-listing-container">
                    <div className="adidas-listing-head">
                        <p>ADIDAS ORIGINALS</p>
                    </div>
                    <div className="adidas-listing">
                        {currentData.map((item) => {
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
                                            <img
                                                src={fav.some(fitem => fitem.id === item.id) ? favBlack : favIcon}
                                                onClick={() => toggleFav(item)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="pagination-buttons">
                        {currentPage > 1 && (
                            <button onClick={() => gotoPage(currentPage - 1)}>
                                Prev
                            </button>
                        )}

                        {currentPage < totalPages && (
                            <button onClick={() => gotoPage(currentPage + 1)}>
                                Next
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default NikeListing