import React from 'react';

function DetailedRatingBreakdown({ ratingCounts }) {
  const totalRatings = Object.values(ratingCounts).reduce((sum, count) => sum + count, 0);

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Rating Breakdown</h3>
      <ul>
        {[5, 4, 3, 2, 1].map((star) => (
          <li key={star} className="flex items-center text-sm text-gray-700">
            <span className="w-8">{star} Star</span>
            <div className="bg-gray-200 rounded-full h-4 flex-grow mx-2">
              <div
                className="bg-yellow-500 rounded-full h-4"
                style={{ width: `${totalRatings > 0 ? (ratingCounts[star] / totalRatings) * 100 : 0}%` }}
              ></div>
            </div>
            <span>{ratingCounts[star] || 0}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Example usage:
// const ratingCounts = { 5: 10, 4: 5, 3: 2, 2: 1, 1: 0 };
// <DetailedRatingBreakdown ratingCounts={ratingCounts} />

export default DetailedRatingBreakdown;