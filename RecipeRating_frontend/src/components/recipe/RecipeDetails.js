import React from 'react';
import { Link } from 'react-router-dom';

function RecipeDetails({ recipe }) {
  if (!recipe) {
    return <div className="text-gray-600 py-4">Loading recipe details...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
      <img
        src={recipe.imageUrl || 'https://via.placeholder.com/600x400'}
        alt={recipe.name}
        className="w-full h-auto object-cover mb-4 rounded-md"
      />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{recipe.name}</h2>
      {recipe.cuisine && <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-3">{recipe.cuisine}</span>}
      <p className="text-gray-700 mb-4">{recipe.description}</p>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">Ingredients</h3>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">Instructions</h3>
      <ol className="list-decimal list-inside text-gray-700 mb-4">
        {recipe.instructions && recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>

      <div className="mt-6">
        <Link to="/recipes" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Back to Recipes
        </Link>
        {/* Add other actions like edit, delete if applicable */}
      </div>
    </div>
  );
}

export default RecipeDetails;