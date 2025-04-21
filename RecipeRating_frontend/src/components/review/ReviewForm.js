import React, { useState } from 'react';
import RatingForm from '../rating/RatingForm'; // Assuming this exists

function ReviewForm({ recipeId, onSubmit }) {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRatingSubmit = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    if (rating === null) {
      setError('Please provide a rating.');
      setLoading(false);
      return;
    }

    const reviewData = { recipeId, rating, comment };

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Review submitted:', reviewData);
      if (onSubmit) {
        onSubmit(reviewData);
        setComment('');
        setRating(null);
      }
    } catch (err) {
      setError('Failed to submit review.');
      console.error('Review error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Submit a Review</h2>
      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline">{error}</span>
      </div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
          <RatingForm onSubmit={handleRatingSubmit} />
          {rating !== null && <p className="text-sm text-gray-600 mt-1">You rated this recipe {rating} stars.</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-gray-700 text-sm font-bold mb-2">Your Review</label>
          <textarea
            id="comment"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="4"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading || rating === null}
          >
            {loading ? 'Submitting...' : 'Submit Review'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;