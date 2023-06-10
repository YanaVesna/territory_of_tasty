import React from "react";

export default function CartKalendar({
  id,
  date,
  time,
  title,
  description,
  image,
}) {
  return (
    <div className="kalendar__competition__block__cart__box">
      <img src={image} alt="event" />
      <div className="kalendar__competition__block__cart__box__text">
        <div className="kalendar__competition__block__cart__box__text__span1">
          {time}
        </div>
        <div className="Alegrea18">
          <b>{title}</b>
        </div>
        <div className="kalendar__competition__block__cart__box__text__span2">
          {description}
        </div>
      </div>
    </div>
  );
}
