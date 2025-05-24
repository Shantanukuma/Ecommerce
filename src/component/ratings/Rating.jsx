import React, { useEffect, useState } from "react";

const Rating = ({defaultRating = 1, isEditable, onRatingChange = ()=> {}, className}) => {

    const [selectedRating, setSelectedRating] = useState(defaultRating);

    useEffect( () => {
        onRatingChange(selectedRating)
    }, [selectedRating])
  return (
    <div className={`rating ${!isEditable && "pointer-events-none"}`}>
        {[1, 2, 3, 4, 5].map( (value) => {
            return(
                <>
                    {value <= selectedRating ? (
                        <input defaultChecked type="radio"  onClick={() => setSelectedRating(value)} className={`mask mask-star-2 bg-orange-400 ${className}`}/>
                    ) : (
                        <input defaultChecked type="radio" onClick={() => setSelectedRating(value)} className={`mask mask-star-2 ${className}`} />
                    )}
                </>
            );

        })}
    </div>
  );
};

export default Rating;
