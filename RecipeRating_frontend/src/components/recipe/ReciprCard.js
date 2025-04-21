import React from 'react';
import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/recipes/${recipe.id}`} className="block hover:opacity-90 transition-opacity duration-200">
        <img
          src={recipe.imageUrl || 'https://via.placeholder.com/300x200'}
          alt={recipe.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{recipe.name}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{recipe.description}</p>
          {recipe.cuisine && <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mt-2">{recipe.cuisine}</span>}
        </div>
      </Link>
    </div>
  );
}

export default RecipeCard;