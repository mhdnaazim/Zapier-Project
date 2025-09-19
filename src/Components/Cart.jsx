import React, { useEffect, useRef, useState } from "react";
import "./Cart.css";
import { useStore } from "./Context/StoreContext";
import { toast } from "react-toastify";
import fav from '../assets/favourites.png'

const Cart = ({ close }) => {
    const { cart, decreaseQuantity, increaseQuantity, clearCart } = useStore();
    const [animate, setAnimate] = useState(false);

    // Trigger slide-in after mount
    useEffect(() => {
        setTimeout(() => setAnimate(true), 10);
    }, []);

    // Handle close with animation
    const handleClose = () => {
        setAnimate(false);
        setTimeout(() => close(), 350); // wait for animation before unmount
    };

    // Subtotal calculation
    const subTotal = cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);


    return (
        <div className="cart-main-container" onClick={handleClose}>
            <div
                className={`cart-container ${animate ? "slide-in" : ""}`}
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
                <div className="cart-top">
                    <div className="cart-head">
                        <p>Cart</p>
                    </div>
                    <div className="cart-close">
                        <div className="close-btn" onClick={handleClose}>
                            <p>✕</p>
                        </div>
                    </div>
                </div>

                {/* Cart Items */}
                <div className="cart-list">
                    {cart.length === 0 || cart.every((item) => item.quantity === 0) ? (
                        <div className="cart-empty">
                            <p>Your cart is empty!</p>
                        </div>
                    ) : (
                        cart.map(
                            (item) =>
                                item.quantity > 0 && (
                                    <div className="cart-product-card" key={item.id}>
                                        <div className="cart-product-left">
                                            <img src={item.img} />
                                        </div>
                                        <div className="cart-product-right">
                                            <div className="cart-product-right-top">
                                                <p>₹{item.price}</p>
                                                <h4>{item.title} | {item.brand}</h4>
                                                <h5>Delivery: Free</h5>
                                            </div>
                                            <div className="cart-product-right-bottom">
                                                <img src={fav} />
                                                <div className="cart-counter">
                                                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                                    <p>{item.quantity}</p>
                                                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                        )
                    )}
                </div>

                <div className="cart-foot">
                    <div className="cart-foot-top">
                        <h5>Sub-Total</h5>
                        <p>₹{subTotal}</p>
                    </div>
                    <div className="cart-foot-mid">
                        {cart.length > 0 ? (
                            <button
                                onClick={clearCart}
                            >
                                <span>Checkout Now</span>
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    toast.error("No items in Cart");
                                }}
                            >
                                <span>Checkout Now</span>

                            </button>
                        )}
                    </div>
                    <div className="cart-foot-bottom">
                        <p>Shipping and Discounts are all available at checkout</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
