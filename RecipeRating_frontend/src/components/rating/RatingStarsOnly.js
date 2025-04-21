import React from 'react';
import { FaStar } from 'react-icons/fa';

function RatingStarsOnly({ rating }) {
  const roundedRating = Math.round(rating);
  const stars = [...Array(5)].map((_, index) => (
    <FaStar
      key={index}
      className={`text-yellow-500 ${index < roundedRating ? '' : 'text-gray-300'}`}
      size={20}
    />
  ));

  return <div className="flex">{stars}</div>;
}

export default RatingStarsOnly;