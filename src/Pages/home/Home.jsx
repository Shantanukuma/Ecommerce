import React from "react";
import FilterBar from "./filterbar/FilterBar";
import Body from "./body/Body";

const Home = () => {
  return (
    <div className="flex">
      <FilterBar />
      <Body />
    </div>
  );
};

export default Home;
