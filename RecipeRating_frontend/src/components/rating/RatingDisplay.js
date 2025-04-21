import React from 'react';
import { FaStar } from 'react-icons/fa';

function RatingDisplay({ averageRating }) {
  const roundedRating = Math.round(averageRating);
  const stars = [...Array(5)].map((_, index) => (
    <FaStar
      key={index}
      className={`text-yellow-500 ${index < roundedRating ? '' : 'text-gray-300'}`}
      size={20}
    />
  ));

  return (
    <div className="flex items-center">
      <span className="mr-2 font-semibold">{averageRating ? averageRating.toFixed(1) : 'No ratings yet'}</span>
      <div className="flex">{stars}</div>
    </div>
  );
}

export default RatingDisplay;