import { createContext, useContext, useState } from "react";
import {faker} from "@faker-js/faker"
import React from "react";
const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const products = [...Array(20)].map( (product) => ({
        id:faker.string.uuid()
    }))
    const state = {
        products
    }
   


  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
};

const useCartContext = () => {
    return useContext(CartContext)
}

export {useCartContext, CartContextProvider};

