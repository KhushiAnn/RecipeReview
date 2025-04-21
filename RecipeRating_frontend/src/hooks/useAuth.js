import { useState, useEffect, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate checking for an authentication token in local storage or via an API call
    const token = localStorage.getItem('authToken');
    if (token) {
      // In a real app, you'd verify the token with your backend
      setUser({ id: 1, username: 'exampleUser' }); // Dummy user data
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    setLoading(true);
    // Simulate API call to login
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (credentials.email === 'test@example.com' && credentials.password === 'password') {
          localStorage.setItem('authToken', 'dummyToken');
          setUser({ id: 1, username: 'exampleUser' });
          setIsAuthenticated(true);
          resolve();
          navigate('/'); // Redirect after login
        } else {
          setIsAuthenticated(false);
          reject(new Error('Invalid credentials.'));
        }
        setLoading(false);
      }, 1500);
    });
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
    setIsAuthenticated(false);
    navigate('/login'); // Redirect after logout
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};