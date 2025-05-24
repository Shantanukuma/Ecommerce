import React from "react";
import ProductCard from "./ProductCard";
import { useCartContext } from "../../../context/cartContext/CartContext";

const Body = () => {
  const { products } = useCartContext();
  console.log(products);

  return (
    <div className="grid grid-cols-3 gap-[1rem] p-3">
      {products.map((productDetails) => (
        <ProductCard key ={productDetails.id}   productDetails = {productDetails}/>
      ))}
    </div>
  );
};

export default Body;
