import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import RatingStarsOnly from '../rating/RatingStarsOnly'; // Assuming this exists

function ReviewItem({ review }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center mb-2">
        <span className="font-semibold text-gray-800 mr-2">{review.userDisplayName || 'Anonymous'}</span>
        {review.rating && <RatingStarsOnly rating={review.rating} />}
      </div>
      <p className="text-gray-700 mb-2">{review.comment}</p>
      <div className="text-sm text-gray-500">
        Reviewed {formatDistanceToNow(new Date(review.createdAt), { addSuffix: true })}
      </div>
    </div>
  );
}

export default ReviewItem;