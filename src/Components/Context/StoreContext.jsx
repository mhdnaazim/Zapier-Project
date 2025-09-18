import React, { createContext, useContext, useEffect, useState } from "react";
import { adidas, newbalance, nike, puma } from "../../Products";

// Create Context 
const StoreContext = createContext()

// Provider 
export const StoreProvider = ({ children }) => {
    const data = JSON.parse(localStorage.getItem("user")) || [];
    const [user, setUser] = useState(data)
    const [query, setQuery] = useState("")


    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user))
    }, [user])

    const wrappedProducts = [...adidas, ...nike, ...newbalance, ...puma]

    const searchedProducts = wrappedProducts.filter((p) =>
        (p.title).toLowerCase().includes(query.toLowerCase()) ||
        (p.brand).toLowerCase().includes(query.toLowerCase())
    ) 

    return (
        <StoreContext.Provider value={{ user, setUser, wrappedProducts, searchedProducts,  query, setQuery }}>
            {children}
        </StoreContext.Provider>
    )
}

// Custom Hook 
export const useStore = () => useContext(StoreContext)