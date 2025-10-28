import React, { createContext, useContext, useEffect, useState } from "react";
import { adidas, newbalance, nike, puma } from "../../Products";
import { toast } from "react-toastify";

// Create Context 
const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const data = JSON.parse(localStorage.getItem("user")) || null;
    const [user, setUser] = useState(data);
    const [query, setQuery] = useState("");

    const favourites = JSON.parse(localStorage.getItem("fav")) || [];
    const [fav, setFav] = useState(favourites);

    const toggleFav = (favItem) => {
        const exists = fav.find((fitem) => fitem.id === favItem.id);
        if (exists) {
            setFav(prevFav => prevFav.filter(fitem => fitem.id !== favItem.id));
        } else {
            setFav(prevFav => [...prevFav, favItem]);
        }
    };

    const CartProducts = JSON.parse(localStorage.getItem("cart")) || [];
    const [cart, setCart] = useState(CartProducts);

    const addToCart = (item) => {
        const existingItem = cart.find(citem => citem.id === item.id);
        if (existingItem) {
            setCart(prevCart =>
                prevCart.map(citem =>
                    citem.id === item.id
                        ? { ...citem, quantity: citem.quantity + 1 }
                        : citem
                )
            );
        } else {
            setCart(prevCart => [...prevCart, { ...item, quantity: 1 }]);
        }
    };

    const increaseQuantity = (id) => {
        setCart(prevCart =>
            prevCart.map(citem =>
                citem.id === id
                    ? {
                        ...citem, quantity: citem.quantity < 5 ? (
                            citem.quantity + 1
                        ) : (
                            5
                        )
                    }
                    : citem
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCart(prevCart =>
            prevCart
                .map(citem =>
                    citem.id === id
                        ? { ...citem, quantity: citem.quantity - 1 }
                        : citem
                )
                .filter(citem => citem.quantity > 0)
        );
    };

    const clearCart = () => setCart([]);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("fav", JSON.stringify(fav));
    }, [user, cart, fav]);

    const wrappedProducts = [...adidas, ...nike, ...newbalance, ...puma];

    const searchedProducts = wrappedProducts.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.brand.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <StoreContext.Provider value={{
            user,
            wrappedProducts,
            searchedProducts,
            query,
            cart,
            fav,
            setUser,
            setQuery,
            addToCart,
            increaseQuantity,
            decreaseQuantity,
            clearCart,
            toggleFav,
        }}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStore = () => useContext(StoreContext);
