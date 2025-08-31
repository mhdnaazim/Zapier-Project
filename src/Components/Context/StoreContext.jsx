import React, { Children, useContext } from "react";

// Create Context 
const StoreContext = CreateContext()

// Provider 
export const StoreProvider = ({Children}) => {
    return(
        <StoreContext.Provider value={{}}>
            {Children}
        </StoreContext.Provider>
    )
}

// Custom Hook 
export const useStore = () => useContext(StoreContext)