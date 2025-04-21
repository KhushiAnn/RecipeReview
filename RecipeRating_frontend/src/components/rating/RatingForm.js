import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function RatingForm({ onSubmit }) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const handleSubmit = () => {
    if (rating !== null && onSubmit) {
      onSubmit(rating);
      // Optionally reset the rating after submission
      setRating(null);
    } else if (rating === null) {
      alert('Please select a rating before submitting.');
    }
  };

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <label key={starValue}>
            <input
              type="radio"
              name="rating"
              value={starValue}
              className="hidden"
              onClick={() => setRating(starValue)}
            />
            <FaStar
              className={`cursor-pointer transition-colors duration-200 ${
                starValue <= (hover || rating) ? 'text-yellow-500' : 'text-gray-300'
              }`}
              size={30}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 focus:outline-none focus:shadow-outline"
        onClick={handleSubmit}
        disabled={rating === null}
      >
        Submit Rating
      </button>
    </div>
  );
}

export default RatingForm;