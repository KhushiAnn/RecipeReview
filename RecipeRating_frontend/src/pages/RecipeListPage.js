import React, { useState, useEffect } from 'react';
import RecipeList from '../components/recipe/RecipeList'; // Assuming this exists
import { Link } from 'react-router-dom';
import recipeService from '../services/recipeService'; 

function RecipeListPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await recipeService.getAllRecipes();
        setRecipes(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading recipes...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen text-red-500">Error loading recipes: {error}</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <header className="container mx-auto px-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">All Recipes</h1>
        <Link to="/submit-recipe" className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Submit New Recipe
        </Link>
      </header>

      <main className="container mx-auto px-4">
        <RecipeList recipes={recipes} />
      </main>

      <footer className="container mx-auto px-4 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Recipe Platform. All rights reserved.
      </footer>
    </div>
  );
}

export default RecipeListPage;