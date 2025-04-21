import axios from 'axios';

const BASE_URL = '/api/recipes'; // Adjust as needed for your backend

const recipeService = {
  getAllRecipes: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching all recipes:', error);
      throw error;
    }
  },

  getRecipeById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching recipe with ID ${id}:`, error);
      throw error;
    }
  },

  createRecipe: async (recipeData) => {
    try {
      const response = await axios.post(BASE_URL, recipeData);
      return response.data;
    } catch (error) {
      console.error('Error creating recipe:', error);
      throw error;
    }
  },

  updateRecipe: async (id, recipeData) => {
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, recipeData);
      return response.data;
    } catch (error) {
      console.error(`Error updating recipe with ID ${id}:`, error);
      throw error;
    }
  },

  deleteRecipe: async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
      console.error(`Error deleting recipe with ID ${id}:`, error);
      throw error;
    }
  },
};

export default recipeService;