 import React, { createContext,useContext,useReducer, useState } from  "react";
 export const stateContext = createContext();
 export function StateProvider({ reducer, initialState, children }) {
    return (
        <>
            <stateContext.Provider value={useReducer(reducer, initialState)}>
                {children}
            </stateContext.Provider>
        </>
    );
}
 
 export const useStateValue = () => useContext(stateContext);