import React from 'react';
import { FaStar } from 'react-icons/fa';

function UserRating({ userRating }) {
  const stars = [...Array(5)].map((_, index) => (
    <FaStar
      key={index}
      className={`text-yellow-500 ${index < userRating ? '' : 'text-gray-300'}`}
      size={20}
    />
  ));

  return (
    <div className="flex items-center">
      <span className="mr-2 font-semibold">Your Rating:</span>
      <div className="flex">{stars}</div>
      {userRating ? <span className="ml-2 text-sm text-gray-600">({userRating}/5)</span> : <span className="ml-2 text-sm text-gray-600">Not rated</span>}
    </div>
  );
}

export default UserRating;