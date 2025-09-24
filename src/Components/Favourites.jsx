import React from "react";
import './Favourites.css';
import favIcon from "../assets/favourites.png";
import favBlack from "../assets/fav_black.png";
import Nav from "./Nav";
import { useStore } from "./Context/StoreContext";
import { toast } from "react-toastify";

const Favourites = () => {
    const { fav, toggleFav, addToCart, cart, increaseQuantity, decreaseQuantity } = useStore();

    return (
        <>
            <Nav />
            <div className="fav-main">
                <p>FAVOURITES</p>
                <div className="fav-container">

                    {fav.length > 0 ? (
                        fav.map((item) => {
                            const inCart = cart.find(cartItem => cartItem.id === item.id);

                            return (
                                <div key={item.id} className="adidas-card">
                                    <img className="card-image" src={item.img} alt={item.title} />
                                    <h4>₹{item.price}</h4>
                                    <p>{item.title}</p>
                                    <div className="fav-card-bottom">

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
                                            }}> Add to Cart </button>
                                        )}

                                        <img
                                            src={fav.some(fitem => fitem.id === item.id) ? favBlack : favIcon}
                                            alt="fav icon"
                                            onClick={() => toggleFav(item)}
                                        />
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <h5>Add items to Favourites</h5>
                    )}

                </div>
            </div>
        </>
    );
};

export default Favourites;
