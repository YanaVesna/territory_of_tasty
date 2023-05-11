import React from "react";
import leftArrow from "../../assets/img/Icon33.png";
import rightArrow from "../../assets/img/Icon22.png";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt="food" />
    </button>
  );
}
