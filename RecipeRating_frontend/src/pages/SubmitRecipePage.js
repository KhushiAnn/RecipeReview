import React from 'react';
import SubmitRecipe from '../components/recipe/SubmitRecipe'; // Assuming this exists
import { useNavigate } from 'react-router-dom';

function SubmitRecipePage() {
  const navigate = useNavigate();

  const handleRecipeSubmit = (recipeData) => {
    // In a real application, you would send this data to your backend API
    console.log('Recipe submitted successfully:', recipeData);
    // After successful submission, you might want to redirect the user
    navigate('/recipes');
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Submit Your Recipe</h1>
          <p className="text-gray-600">Share your culinary masterpiece with the community.</p>
        </header>
        <main>
          <SubmitRecipe onSubmit={handleRecipeSubmit} />
        </main>
      </div>
      <footer className="container mx-auto px-4 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Recipe Platform. All rights reserved.
      </footer>
    </div>
  );
}

export default SubmitRecipePage;