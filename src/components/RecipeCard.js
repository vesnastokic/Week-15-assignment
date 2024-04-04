import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div>
      <h3>{recipe.name}</h3>
      <p>{recipe.description}</p>
      <p>Cooking Time: {recipe.cookingTime} minutes</p>
    </div>
  );
};

export default RecipeCard;
