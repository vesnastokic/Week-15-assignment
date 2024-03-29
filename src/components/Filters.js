import React, { useState } from "react";

const Filter = () => {
  const [cookingTime, setCookingTime] = useState("");

  const handleCookingTimeChange = (e) => {
    // Update state with selected cooking time
    setCookingTime(e.target.value);
  };

  const applyFilters = () => {
    //TODO Write your code for filtering in here. 
  };

  return (
    <div>
      <label>Cooking Time:</label>
      <select value={cookingTime} onChange={handleCookingTimeChange}>
        <option value="">Any</option>
        <option value="30">Less than 30 minutes</option>
        <option value="60">Less than 1 hour</option>
        <option value="90">Less than 1.5 hours</option>
        {/*To add more options if I want */}
      </select>
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default Filter;
