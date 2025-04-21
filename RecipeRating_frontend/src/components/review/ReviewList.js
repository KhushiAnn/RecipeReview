import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import RatingStarsOnly from '../rating/RatingStarsOnly'; // Assuming this exists

function ReviewList({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return <div className="py-4 text-gray-600">No reviews yet.</div>;
  }

  return (
    <ul className="space-y-4 py-4">
      {reviews.map((review) => (
        <li key={review.id} className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center mb-2">
            <span className="font-semibold text-gray-800 mr-2">{review.userDisplayName || 'Anonymous'}</span>
            {review.rating && <RatingStarsOnly rating={review.rating} />}
          </div>
          <p className="text-gray-700 mb-2">{review.comment}</p>
          <div className="text-sm text-gray-500">
            Reviewed {formatDistanceToNow(new Date(review.createdAt), { addSuffix: true })}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ReviewList;