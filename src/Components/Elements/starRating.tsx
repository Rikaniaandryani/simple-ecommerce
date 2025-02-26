import React from "react";

interface StarRatingProps {
  rating?: number; // Make it optional to avoid undefined errors
}

const StarRating: React.FC<StarRatingProps> = ({ rating = 0 }) => {
  // Ensure rating is a number and is between 0 and 5
  const normalizedRating = Math.min(5, Math.max(0, rating || 0));

  const fullStars = Math.floor(normalizedRating);
  const halfStar = normalizedRating % 1 !== 0;
  const emptyStars = Math.max(0, 5 - fullStars - (halfStar ? 1 : 0));

  return (
    <div className="flex items-center">
      {/* Full Stars ⭐ */}
      {Array.from({ length: fullStars }).map((_, index) => (
        <svg key={`full-${index}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
          fill="currentColor" className="w-6 h-6 text-yellow-500">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd" />
        </svg>
      ))}

      {/* Half Star ⭐ */}
      {halfStar && (
        <svg key="half" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
          fill="currentColor" className="w-6 h-6 text-yellow-700">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.55 5.82 22 7 14.14l-5-4.87 6.91-1.01z" />
        </svg>
      )}

      {/* Empty Stars ⭐ */}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <svg key={`empty-${index}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="1.5"
          className="w-6 h-6 text-gray-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.55 5.82 22 7 14.14l-5-4.87 6.91-1.01z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
