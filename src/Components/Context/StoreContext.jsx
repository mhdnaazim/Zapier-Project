import React, { createContext, useContext, useEffect, useState } from "react";
import { adidas, newbalance, nike, puma } from "../../Products";

// Create Context 
const StoreContext = createContext()

// Provider 
export const StoreProvider = ({ children }) => {
    const data = JSON.parse(localStorage.getItem("user")) || [];
    const [user, setUser] = useState(data)
    const [query, setQuery] = useState("")

    const CartProducts = JSON.parse(localStorage.getItem("cart")) || []
    const [cart, setCart] = useState(CartProducts)

    // ✅ Fixed addToCart
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

    // ✅ Fixed increaseQuantity
    const increaseQuantity = (id) => {
        setCart(prevCart =>
            prevCart.map(citem =>
                citem.id === id
                    ? { ...citem, quantity: citem.quantity + 1 }
                    : citem
            )
        )
    }

    // ✅ Fixed decreaseQuantity
    const decreaseQuantity = (id) => {
        setCart(prevCart =>
            prevCart
                .map(citem =>
                    citem.id === id
                        ? { ...citem, quantity: citem.quantity - 1 }
                        : citem
                )
                .filter(citem => citem.quantity > 0) // remove if quantity hits 0
        )
    }

    const clearCart = () => {
        setCart([])
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [user, cart])

    const wrappedProducts = [...adidas, ...nike, ...newbalance, ...puma]

    const searchedProducts = wrappedProducts.filter((p) =>
        (p.title).toLowerCase().includes(query.toLowerCase()) ||
        (p.brand).toLowerCase().includes(query.toLowerCase())
    )

    return (
        <StoreContext.Provider value={{
            user,
            setUser,
            wrappedProducts,
            searchedProducts,
            query,
            setQuery,
            cart,
            addToCart,
            increaseQuantity,
            decreaseQuantity,
            clearCart
        }}>
            {children}
        </StoreContext.Provider>
    )
}

// Custom Hook 
export const useStore = () => useContext(StoreContext)
