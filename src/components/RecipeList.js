import React, { useState, useEffect } from "react";
import axios from "axios";
import './styles.css'; 

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // Make GET request to TheMealDB API to fetch random recipes
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );

        // Extract recipes data from response
        const { meals } = response.data;

        // Update recipes state with fetched data
        setRecipes(meals || []);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        // Handle error
      }
    };

    // Fetch recipes when component mounts
    fetchRecipes();
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div className="recipe-container">
      <div className="column">
        <h2>Recipes</h2>
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>
              <h3>{recipe.strMeal}</h3>
              <p>{recipe.strCategory}</p>
              {/* Add more details about the recipe if you want to change */}
            </li>
          ))}
        </ul>
      </div>
      <div className="column">
        {/* Add content for the second column */}
      </div>
    </div>
  );
};

export default RecipeList;
