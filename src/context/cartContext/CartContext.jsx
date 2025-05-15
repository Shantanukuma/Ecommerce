import { createContext, useContext, useState } from "react";
import {faker} from "@faker-js/faker"
import React from "react";
const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const products = [...Array(20)].map( (product) => ({
        id:faker.string.uuid(),
        productName: faker.commerce.productName(),
        productDescription: faker.commerce.productDescription(),
        price: faker.commerce.price({min: 100, max: 5000}),
        image: faker.image.urlPicsumPhotos({
            width: 300,
            height: 300
        }),
        instock: faker.helpers.arrayElement([0, 5, 10, 15, 30]),
        fastDeliver: faker.datatype.boolean(),
        new: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
        

    }));
    const state = {
        products
    }
   


  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
};

const useCartContext = () => {
    return useContext(CartContext)
}

export {useCartContext, CartContextProvider};

