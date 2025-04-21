import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecipeDetails from '../components/recipe/RecipeDetails'; // Assuming this exists
import ReviewList from '../components/review/ReviewList'; // Assuming this exists
import ReviewForm from '../components/review/ReviewForm'; // Assuming this exists
import AdaptationSuggestion from '../components/recipe/AdaptationSuggestion'; // Assuming this exists

function RecipeDetailPage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Simulate fetching recipe and reviews based on ID
    setTimeout(() => {
      const dummyRecipe = {
        id: parseInt(id),
        name: `Detailed Recipe ${id}`,
        description: `This is the detailed description for recipe ${id}. It includes all the necessary information and steps to make this dish.`,
        imageUrl: `https://via.placeholder.com/600x400/${Math.floor(Math.random() * 16777215).toString(16)}/FFFFFF?Text=Recipe${id}`,
        cuisine: 'Example Cuisine',
        ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
        instructions: ['Step 1', 'Step 2', 'Step 3'],
      };
      const dummyReviews = [
        { id: 101, recipeId: parseInt(id), userDisplayName: 'User A', rating: 4, comment: 'Great recipe!', createdAt: new Date() },
        { id: 102, recipeId: parseInt(id), userDisplayName: 'User B', rating: 5, comment: 'Loved it!', createdAt: new Date() },
      ];
      setRecipe(dummyRecipe);
      setReviews(dummyReviews);
      setLoading(false);
    }, 1000);
  }, [id]);

  const handleReviewSubmit = (newReview) => {
    // In a real app, you'd send this to the backend and update state
    console.log('New review submitted:', newReview);
    setReviews([...reviews, { ...newReview, id: Date.now(), userDisplayName: 'You', createdAt: new Date() }]);
  };

  const handleAdaptationSubmit = (adaptation) => {
    // In a real app, you'd send this to the backend
    console.log('Adaptation suggested:', adaptation);
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading recipe details...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen text-red-500">Error loading recipe: {error}</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <RecipeDetails recipe={recipe} />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Reviews</h2>
          <ReviewList reviews={reviews} />
          <ReviewForm recipeId={recipe.id} onSubmit={handleReviewSubmit} />
        </section>

        <section className="mt-8">
          <AdaptationSuggestion recipeId={recipe.id} onSubmit={handleAdaptationSubmit} />
        </section>
      </div>
      <footer className="container mx-auto px-4 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Recipe Platform. All rights reserved.
      </footer>
    </div>
  );
}

export default RecipeDetailPage;