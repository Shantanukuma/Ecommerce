import React from "react";
import { GrDeliver } from "react-icons/gr";
import  Rating from "../../../component/ratings/Rating"
import { DefaultContext } from "react-icons/lib";

const ProductCard = ({ productDetails }) => {
  console.log(productDetails);

  return (
    <div className="card shadow-sm bg-base-100 border-white/10 ">
      <figure>
        <img
          src={productDetails.image}
          alt="Shoes"
          className="aspect-video object-cover h-full w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <span className="line-clamp-1">{productDetails.productName}</span>
          {productDetails.new && (
            <div className="badge badge-secondary">NEW</div>
          )}
        </h2>

        <p className="line-clamp-2">{productDetails.productDescription}</p>

        <p>
          <strong>{productDetails.price}</strong> Rs
        </p>

        {productDetails.instock ? (
          <p className="text-green-500">
            {productDetails.instock} left only !!!
          </p>
        ) : (
          <p className="text-red-600">Out of stock</p>
        )}

        {productDetails.fastDeliver ? (
          <p className="text-blue-400 flex items-center gap-2">Fast delivery
          < GrDeliver className="mt-1.5"/> </p>
        ) : (
          <p className="text-blue-400">5 Days Delivery</p>
        )}
        <Rating defaultRating={productDetails.ratings} className={`w-4 h-4`}/>

        <div className="card-actions justify-between mt-6">
          <button className="btn btn-dash btn-info">Add to Cart</button>
          <button className="btn btn-dash btn-info">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
