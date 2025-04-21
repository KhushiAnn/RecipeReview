import React from 'react';
import RecipeList from '../components/recipe/RecipeList'; // Assuming this exists

function HomePage() {
  // Dummy recipe data for demonstration
  const featuredRecipes = [
    { id: 1, name: 'Delicious Pasta', description: 'A classic Italian pasta dish.', imageUrl: 'https://via.placeholder.com/300x200/FFC107/000000?Text=Pasta', cuisine: 'Italian' },
    { id: 2, name: 'Spicy Curry', description: 'An aromatic and flavorful curry.', imageUrl: 'https://via.placeholder.com/300x200/4CAF50/FFFFFF?Text=Curry', cuisine: 'Indian' },
    { id: 3, name: 'Chocolate Cake', description: 'A rich and decadent chocolate cake.', imageUrl: 'https://via.placeholder.com/300x200/9C27B0/FFFFFF?Text=Cake', cuisine: 'Dessert' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <header className="container mx-auto px-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to the Recipe Platform!</h1>
        <p className="text-gray-600">Discover and share your favorite recipes with our community.</p>
      </header>

      <main className="container mx-auto px-4">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Featured Recipes</h2>
          <RecipeList recipes={featuredRecipes} />
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-700 leading-relaxed">
            This platform is designed to be a central hub for all things recipes. Whether you're a seasoned chef or just starting out, you can find, save, and share your culinary creations. We believe in the power of food to bring people together.
          </p>
        </section>

        {/* Add more sections as needed */}
      </main>

      <footer className="container mx-auto px-4 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Recipe Platform. All rights reserved.
      </footer>
    </div>
  );
}

export default HomePage;