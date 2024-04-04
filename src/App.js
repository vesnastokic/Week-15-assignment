import React, { useState, useEffect } from "react";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./components/styles.css";

import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import RecipeList from "./components/RecipeList";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const fetchRecipes = async (searchCriteria = "", cookingTime = "") => {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchCriteria}&cookingTime=${cookingTime}`;
    console.log("API URL:", apiUrl);
    
    try {
      const response = await axios.get(apiUrl);
      console.log("API Response Data:", response.data);
      const meals = response.data.meals;
      if (meals !== null) {
        console.log("Fetched Recipes:", meals);
        setRecipes(meals);
        setFilteredRecipes(meals);
      } else {
        console.log("No recipes found.");
        setRecipes([]);
        setFilteredRecipes([]);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };
  
  
  
  
  
  
  

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="container">
      <h1 className="header">My Recipe Finder</h1>
      <div className="row">
        <div className="col">
          <SearchBar setRecipes={setRecipes} />
        </div>
        <div className="col">
          <Filters recipes={recipes} setFilteredRecipes={setFilteredRecipes} />
        </div>
      </div>
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
};

export default App;
