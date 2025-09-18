import React, { useEffect, useState } from "react";
import './Cart.css';
import { useStore } from "./Context/StoreContext";
import { toast } from "react-toastify";

const Cart = ({ onClose }) => {
    const { cart, increaseQuantity, decreaseQuantity } = useStore();
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => setAnimate(true), 10);
    }, []);

    const handleClose = () => {
        setAnimate(false);
        setTimeout(() => {
            if (onClose) onClose(); 
        }, 350);
    };

    const subTotal = cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);

    return (
        <>
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
                        {cart.length === 0 || cart.every(item => item.quantity === 0) ? (
                            <div className="cart-empty">
                                <p>Your cart is empty!</p>
                            </div>
                        ) : (
                            cart.map((item) =>
                                item.quantity > 0 && (
                                    <div className="cart-product-card" key={item.id}>
                                        <div className="cart-product-top">
                                            <div className="cart-product-top-left">
                                                <img src={item.image} alt={item.name} />
                                            </div>
                                            <div className="cart-product-top-right">
                                                <p>{item.name}</p>
                                                <p>${item.price}</p>
                                            </div>
                                        </div>
                                        <div className="cart-product-bottom">
                                            <div className="cart-product-bottom-left">
                                                <p>In Stock! Ships in 2-5 days</p>
                                            </div>
                                            <div className="cart-product-bottom-right">
                                                <div className="counter">
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
                            <p>${subTotal}</p>
                        </div>
                        <div className="cart-foot-mid">
                            {cart.length > 0 ? (
                                <button onClick={() => {
                                    toast.success("Proceeding to checkout...");
                                }}>
                                    Checkout Now
                                </button>
                            ) : (
                                <button onClick={() => {
                                    toast.error("No items in Cart");
                                }}>
                                    Checkout Now
                                </button>
                            )}
                        </div>
                        <div className="cart-foot-bottom">
                            <p>Shipping and Discounts are all available at checkout</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
