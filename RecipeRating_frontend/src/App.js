import React, { createContext, useContext } from 'react'; // Import createContext and useContext
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RecipeListPage from './pages/RecipeListPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import SubmitRecipePage from './pages/SubmitRecipePage';
import ProfilePage from './pages/ProfilePage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { AuthProvider, useAuth, AuthContext } from './hooks/useAuth'; // Import AuthContext as well
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="bg-gray-100 min-h-screen font-sans">
          <header className="bg-white shadow-md py-4">
            <div className="container mx-auto px-4 flex items-center justify-between">
              <Link to="/" className="text-2xl font-bold text-gray-800">
                RecipeRater
              </Link>
              <nav>
                <ul className="flex space-x-4">
                  <li>
                    <Link to="/recipes" className="text-gray-700 hover:text-blue-500">
                      Recipes
                    </Link>
                  </li>
                  <li>
                    <Link to="/submit-recipe" className="text-gray-700 hover:text-green-500">
                      Submit Recipe
                    </Link>
                  </li>
                  <AuthStatus />
                </ul>
              </nav>
            </div>
          </header>

          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/recipes" element={<RecipeListPage />} />
              <Route path="/recipes/:id" element={<RecipeDetailPage />} />
              <Route path="/submit-recipe" element={<PrivateRoute><SubmitRecipePage /></PrivateRoute>} />
              <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>

          <footer className="bg-gray-200 py-4 text-center text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} RecipeRater. All rights reserved.
          </footer>
        </div>
      </AuthProvider>
    </Router>
  );
}

function AuthStatus() {
  const { isAuthenticated, user, logout } = useAuth(); // Using the imported useAuth
  return (
    <>
      {isAuthenticated ? (
        <>
          <li>
            <Link to="/profile" className="text-gray-700 hover:text-purple-500">
              {user?.username || 'Profile'}
            </Link>
          </li>
          <li>
            <button onClick={logout} className="text-red-500 hover:text-red-700 focus:outline-none">
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login" className="text-gray-700 hover:text-blue-500">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="text-gray-700 hover:text-green-500">
              Register
            </Link>
          </li>
        </>
      )}
    </>
  );
}

// REMOVE THESE LINES - They are duplicates from hooks/useAuth.js
// export const useAuth = () => {
//   return useContext(AuthContext);
// };

export default App;