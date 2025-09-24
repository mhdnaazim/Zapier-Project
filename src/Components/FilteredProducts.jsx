import React from "react";
import './FilteredProducts.css'
import Nav from "./Nav";
import { useStore } from "./Context/StoreContext";
import { toast } from "react-toastify";
import favIcon from "../assets/favourites.png";
import favBlack from "../assets/fav_black.png";

const FilteredProducts = () => {

    const { query, searchedProducts, cart, increaseQuantity, decreaseQuantity, fav, toggleFav, addToCart } = useStore()

    return (
        <>
            <Nav />
            <div className="filtered-listing">
                <h1>SEARCH RESULTS</h1>
                {query && searchedProducts.length > 0 ? (
                    <div className="filtered">
                        {searchedProducts.map((item) => {
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
                                            <button className="atc-btn" onClick={() => {
                                                addToCart(item);
                                                toast.success("Item Added Successfully!");
                                            }}> Add to Cart </button>)}

                                        <div className="card-bottom-icons">
                                            <img
                                                src={fav.some(fitem => fitem.id === item.id) ? favBlack : favIcon}
                                                onClick={() => toggleFav(item)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <h5>No products found.</h5>
                )}
            </div>
        </>
    )
}

export default FilteredProducts