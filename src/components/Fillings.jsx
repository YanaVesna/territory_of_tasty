import React from "react";

function Fillings({ title, price }) {
  return (
    <ul>
      <li>
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.48877"
            y="0.5"
            width="14.9091"
            height="15"
            stroke="white"
          />
        </svg>
        <div className="WOK__collect__filling__left__list__right">
          <p>{title}</p>
          <span>{price}$</span>
        </div>
      </li>
    </ul>
  );
}

export default Fillings;
