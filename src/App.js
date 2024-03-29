

import React, { useState, useEffect } from "react";
import axios from "axios";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./components/styles.css"; 

import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import RecipeList from "./components/RecipeList";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (searchCriteria) => {
    
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
      );
      const meals  = response.data;
      console.log(meals)
      setRecipes(meals);
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
      <div className="row ">
        <div className="col">
      <SearchBar setRecipes={setRecipes} />
      </div>
      <div className="col">
      <Filters  />
      </div>
      </div>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
