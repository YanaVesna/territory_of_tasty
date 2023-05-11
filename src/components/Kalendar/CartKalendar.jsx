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
      <span>{time}</span>
      <span className="Alegrea18">{title}</span>
      <span>{description}</span>
    </div>
  );
}
