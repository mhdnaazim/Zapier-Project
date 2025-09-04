import React, { createContext, useContext, useEffect, useState } from "react";

// Create Context 
const StoreContext = createContext()

// Provider 
export const StoreProvider = ({ children }) => {
    const data = JSON.parse(localStorage.getItem("user")) || [];
    const [user, setUser] = useState(data)

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user))
    }, [user])

    return (
        <StoreContext.Provider value={{ user, setUser }}>
            {children}
        </StoreContext.Provider>
    )
}

// Custom Hook 
export const useStore = () => useContext(StoreContext)  