import { createContext, useContext } from "react";

const itemContext = createContext(null)
export const ItemContextProvider = itemContext.Provider
export const useItemContext = () => useContext(itemContext)