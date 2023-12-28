import React from "react";

const StarRating = ({ rating }) => {
  let stars = [];
  let fullStars = Math.round(rating);

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      // Estrella llena
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="#FFD700"
        >
          <path d="M12 2L14.68 8.45L22 9.24L17 14.26L18.36 22L12 18.35L5.64 22L7 14.26L2 9.24L9.32 8.45L12 2M12 5.56V18.35L5.64 22L7 14.26L2 9.24L9.32 8.45L12 2" />
        </svg>
      );
    }
  }

  return <div className="hotel--star-rating">{stars}</div>;
};

export default StarRating;
