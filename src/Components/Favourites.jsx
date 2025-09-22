import React from "react";
import './Favourites.css';
import favIcon from "../assets/favourites.png";
import favBlack from "../assets/fav_black.png";
import Nav from "./Nav";
import { useStore } from "./Context/StoreContext";

const Favourites = () => {
    const { fav, toggleFav, handleAddingProduct } = useStore();
    return (
        <>
            <Nav />
            <div className="fav-main">
                <p>FAVOURITES</p>
                <div className="fav-container">

                    {fav.length > 0 ? (
                        fav.map((item) => (
                            <div key={item.id} className="adidas-card">
                                <img className="card-image" src={item.img} alt={item.title} />
                                <h4>₹{item.price}</h4>
                                <p>{item.title}</p>
                                <div className="fav-card-bottom">
                                    <button onClick={handleAddingProduct} className="fav-atc-btn">Add to Cart</button>
                                    <img
                                        src={fav.some(fitem => fitem.id === item.id) ? favBlack : favIcon}
                                        alt="fav icon"
                                        onClick={() => toggleFav(item)}
                                    />
                                </div>
                            </div>
                        ))
                    ) : (
                        <h5>Add items to Favourites</h5>
                    )}

                </div>
            </div>
        </>
    );
};

export default Favourites;
