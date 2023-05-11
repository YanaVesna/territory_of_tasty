import React from "react";
import Rating from "../../assets/img/rating.png";

export default function ReviewCard({ nickName, date, rating, description }) {
  return (
    <div className="review-card">
      <div className="review-card__title">
        <span>{nickName}</span>
        <p>{date}</p>
      </div>
      <div className="review-card__description">
        <img src={Rating} alt="stars" />
        <div className="review-card__description__scroll">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
