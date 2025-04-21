import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Simulate fetching user data
    setTimeout(() => {
      const dummyUser = {
        id: 123,
        displayName: 'AwesomeCook',
        username: 'awesomecook123',
        bio: 'Passionate home cook sharing my favorite recipes.',
        joinedAt: new Date('2024-01-15'),
        recipes: [
          { id: 10, name: 'My Famous Brownies' },
          { id: 11, name: 'Lemon Herb Chicken' },
        ],
      };
      setUser(dummyUser);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading profile...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen text-red-500">Error loading profile: {error}</div>;
  }

  if (!user) {
    return <div className="flex justify-center items-center min-h-screen text-gray-600">User not found.</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Your Profile</h1>
        </header>
        <main className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Display Name</h2>
            <p className="text-gray-700">{user.displayName}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Username</h2>
            <p className="text-gray-700">{user.username}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Bio</h2>
            <p className="text-gray-700">{user.bio || 'No bio provided.'}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Joined On</h2>
            <p className="text-gray-700">{user.joinedAt.toLocaleDateString()}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Your Recipes</h2>
            {user.recipes.length > 0 ? (
              <ul className="list-disc list-inside text-gray-700">
                {user.recipes.map(recipe => (
                  <li key={recipe.id}><Link to={`/recipes/${recipe.id}`} className="text-blue-500 hover:underline">{recipe.name}</Link></li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">You haven't submitted any recipes yet.</p>
            )}
          </div>
        </main>
      </div>
      <footer className="container mx-auto px-4 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Recipe Platform. All rights reserved.
      </footer>
    </div>
  );
}

export default ProfilePage;