import React from "react";

export default function ReviewCard({ nickName, date, rating, description }) {
  return (
    <div className="review-card">
      <div className="review-card__title">
        <span>{nickName}</span>
        <p>{date}</p>
      </div>
      <div className="review-card__description">
        <img src="https://i.ibb.co/KbRW6xw/rating.png" alt="stars" />
        <div className="review-card__description__scroll">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
