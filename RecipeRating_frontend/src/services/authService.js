import axios from 'axios';

const BASE_URL = '/api/auth'; // Adjust as needed

const authService = {
  login: async (credentials) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, credentials);
      return response.data; // Typically includes a token and user info
    } catch (error) {
      console.error('Login failed:', error.response?.data?.message || error.message);
      throw error;
    }
  },

  register: async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, userData);
      return response.data;
    } catch (error) {
      console.error('Registration failed:', error.response?.data?.message || error.message);
      throw error;
    }
  },

  logout: async () => {
    try {
      await axios.post(`${BASE_URL}/logout`);
      // Optionally clear local storage or state here
    } catch (error) {
      console.error('Logout failed:', error.response?.data?.message || error.message);
      throw error;
    }
  },

  getCurrentUser: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/me`); // Endpoint to get current user info
      return response.data;
    } catch (error) {
      // Handle cases where the user is not authenticated
      console.error('Failed to get current user:', error.response?.data?.message || error.message);
      return null;
    }
  },
};

export default authService;