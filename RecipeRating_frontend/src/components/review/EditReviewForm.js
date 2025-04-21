import React, { useState, useEffect } from 'react';
import RatingForm from '../rating/RatingForm'; // Assuming this exists

function EditReviewForm({ review, onUpdate, onCancel }) {
  const [comment, setComment] = useState(review?.comment || '');
  const [rating, setRating] = useState(review?.rating || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (review) {
      setComment(review.comment || '');
      setRating(review.rating || null);
    }
  }, [review]);

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

    const updatedReviewData = { ...review, rating, comment };

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Review updated:', updatedReviewData);
      if (onUpdate) {
        onUpdate(updatedReviewData);
      }
    } catch (err) {
      setError('Failed to update review.');
      console.error('Update review error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Edit Your Review</h2>
      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline">{error}</span>
      </div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
          <RatingForm onSubmit={handleRatingSubmit} initialRating={rating} />
          {rating !== null && <p className="text-sm text-gray-600 mt-1">Your current rating: {rating} stars.</p>}
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
            className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading || rating === null}
          >
            {loading ? 'Updating...' : 'Update Review'}
          </button>
          <button
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-2 focus:outline-none focus:shadow-outline"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditReviewForm;