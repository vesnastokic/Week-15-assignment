import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const SearchBar = ({ setRecipes }) => {
  // Corrected prop name from setRecipies to setRecipes
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    try {
      console.log("Search Query:", searchQuery);
      // Make GET request to TheMealDB API
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );

      console.log("API Response:", response.data); // Log the API response data

      // Extract recipes data from response
      const { meals } = response.data;

      // Passing the list of recipes to the parent component
      setRecipes(meals);
    } catch (error) {
      console.error("Error searching for recipes:", error);
      // Handle error
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for recipes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
