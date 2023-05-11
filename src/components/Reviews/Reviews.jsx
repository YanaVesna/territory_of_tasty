import React from "react";

import Greenline from "../Greenline";
import ReviewCard from "./ReviewCard";
import ReviewList from "./ReviewsList.json";

export default function Reviews({ title }) {
  return (
    <div className="Reviews">
      <div className="container">
        <Greenline title="Review" />
        <div className="Reviews__box">
          {ReviewList.map((obj) => (
            <ReviewCard key={obj.nickName} {...obj} />
          ))}
        </div>
      </div>
    </div>
  );
}
