import React, { useState } from "react";

const Filters = ({ recipes, setFilteredRecipes }) => {
  const [cookingTime, setCookingTime] = useState("");

  const handleCookingTimeChange = (e) => {
    setCookingTime(e.target.value);
    applyFilters(e.target.value);
  };

  const applyFilters = (cookingTime) => {
    let filteredRecipes = [...recipes];
    if (cookingTime) {
      filteredRecipes = filteredRecipes.filter(recipe => recipe.cookingTime === cookingTime);
    }
    setFilteredRecipes(filteredRecipes);
  };

  return (
    <div>
      <h2>Filters</h2>
      <label>
        Cooking Time:
        <select value={cookingTime} onChange={handleCookingTimeChange}>
          <option value="">Any</option>
          <option value="15">Up to 15 minutes</option>
          <option value="30">Up to 30 minutes</option>
          <option value="45">Up to 45 minutes</option>
          {/* I can add more options */}
        </select>
      </label>
    </div>
  );
};

export default Filters;
