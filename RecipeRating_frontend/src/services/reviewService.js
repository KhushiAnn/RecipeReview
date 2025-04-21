import axios from 'axios';

const BASE_URL = '/api/reviews'; // Adjust as needed

const reviewService = {
  getReviewsByRecipeId: async (recipeId) => {
    try {
      const response = await axios.get(`${BASE_URL}/${recipeId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching reviews for recipe ID ${recipeId}:`, error);
      throw error;
    }
  },

  createReview: async (reviewData) => {
    try {
      const response = await axios.post(BASE_URL, reviewData);
      return response.data;
    } catch (error) {
      console.error('Error creating review:', error);
      throw error;
    }
  },

  updateReview: async (id, reviewData) => {
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, reviewData);
      return response.data;
    } catch (error) {
      console.error(`Error updating review with ID ${id}:`, error);
      throw error;
    }
  },

  deleteReview: async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
      console.error(`Error deleting review with ID ${id}:`, error);
      throw error;
    }
  },
};

export default reviewService;