import React from "react";

const RecipeDetails = ({ recipe }) => {
  if (!recipe) {
    return <div>Loading...</div>;
  }

  const { strMeal, strCategory, strArea, strInstructions, strMealThumb } = recipe;

  return (
    <div>
      <h2>{strMeal}</h2>
      <img src={strMealThumb} alt={strMeal} />
      <p>Category: {strCategory}</p>
      <p>Area: {strArea}</p>
      <h3>Instructions:</h3>
      <p>{strInstructions}</p>
      {/* I can can add more details like ingredients, measurements If I have time. */}
    </div>
  );
};

export default RecipeDetails;
