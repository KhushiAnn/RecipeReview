import React from 'react';

function DeleteReviewButton({ reviewId, onDelete }) {
  const handleClick = () => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      if (onDelete) {
        onDelete(reviewId);
      }
    }
  };

  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
      onClick={handleClick}
    >
      Delete Review
    </button>
  );
}

export default DeleteReviewButton;