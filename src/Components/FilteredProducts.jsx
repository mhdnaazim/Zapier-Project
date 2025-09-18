import React from "react";
import './FilteredProducts.css'
import Nav from "./Nav";
import { useStore } from "./Context/StoreContext";

const FilteredProducts = () => {

    const { query, searchedProducts } = useStore()

    return (
        <>
            <Nav />
            <div className="filtered-listing">
                {query && searchedProducts.length > 0 ? (
                    <div className="filtered">
                        {searchedProducts.map((item) => {
                            return(
                            <div className="filtered-card" key={item.id}>
                                <img src={item.img} />
                                <h4>₹{item.price}</h4>
                                <p>{item.title} | {item.brand}</p>
                                <button>Add to Cart</button>
                            </div>
                        )})}
                    </div>
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </>
    )
}

export default FilteredProducts