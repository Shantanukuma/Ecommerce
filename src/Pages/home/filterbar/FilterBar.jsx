import React, { useState } from "react";
import Rating from "../../../component/ratings/Rating";

const FilterBar = () => {
  const [filters, setFilters] = useState({
    price: 5000,
    ratings: 4,
  });
  const handleInputChange = (event) => {
    // console.log(event.target);
    
    const {name, value} = event.target;
    console.log(name, value);

    setFilters((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  return (
    <div className=" min-h-screen w-full max-w-[20rem] border-r border-r-white/20 p-6 ">
      {/* Radio ascending and decending */}
      <div>
        <div className="form-control m-3">
          <label className="label cursor-pointer flex items-center">
            <span className="label-text mr-20">Ascending</span>
            <input
              type="radio"
              name="radio-10"
              defaultChecked
              className="radio  checked:bg-blue-500 "
            />
          </label>
        </div>

        <div className="form-control m-3">
          <label className="label cursor-pointer flex items-center">
            <span className="label-text mr-17">Descending</span>
            <input
              type="radio"
              name="radio-10"
              defaultChecked
              className="radio checked:bg-blue-500 "
            />
          </label>
        </div>
      </div>

      <div className="h-[1px] w-full bg-white/20 my-6"></div>
      {/* Check box out of stock and first delivery only */}

      <div>
        <div className="form-control m-3">
          <label className="label cursor-pointer flex items-center">
            <span className="label-text mr-20">Include Out Of Stock</span>
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-info"
            />
          </label>
        </div>

        <div className="form-control m-3">
          <label className="label cursor-pointer flex items-center">
            <span className="label-text mr-26">first delivery only</span>
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-info"
            />
          </label>
        </div>
      </div>
      {/* Ratings */}
      <div className="m-4">
        <Rating
          defaultRating={filters.ratings}
          isEditable={true}
          onRatingChange={(rating) =>
            setFilters((prev) => ({
              ...prev,
              ratings: rating,
            }))
          }
        />
      </div>

      {/* price range */}
      <div className="flex flex-col gap-3">
        <p>Price: <strong>{filters.price} </strong>Rs</p>
        <input
          type="range"
          min={0}
          max={5000}
          name="price"
          value={filters.price}
          className="range range-primary"
          onChange={handleInputChange}
        />
      </div>
      {/* Button */}
      <div className=" m-3">
        <button className="btn btn-neutral w-full ">Clear Filters</button>
      </div>
    </div>
  );
};

export default FilterBar;
