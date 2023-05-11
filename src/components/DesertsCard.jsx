import React from "react";

export default function DesertsCard({ image, title, description, price }) {
  const [desertCount, setDesertCount] = React.useState(0);

  const onClickAddButtonPlus = () => {
    setDesertCount(desertCount + 1);
  };
  const onClickAddButtonMinus = () => {
    setDesertCount(desertCount - 1);
  };

  return (
    <div className="deserts-card">
      <div className="deserts-card__description">
        <img src={image} alt="desert" />
        <b>{title}</b>
        <p>{description}</p>
      </div>
      <div className="deserts-card__price">
        <h2>{price}</h2>
        {/* <button className="deserts-card__price__button">в корзину</button> */}
        <div className="deserts-card__price__button">
          <div className="deserts-card__price__button__round">
            <button
              onClick={onClickAddButtonMinus}
              className="deserts-card__price__button__round__b"
            >
              <svg
                width="14"
                height="4"
                viewBox="0 0 10 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.04019 0.0399933H8.84019C9.37035 0.0399933 9.80019 0.469833 9.80019 0.999993C9.80019 1.53015 9.37035 1.95999 8.84019 1.95999H4.04019H1.1602C0.630035 1.95999 0.200195 1.53015 0.200195 0.999993C0.200195 0.469833 0.630035 0.0399933 1.1602 0.0399933H4.04019Z"
                  fill="#ffff"
                />
              </svg>
            </button>
          </div>

          <div className="deserts-card__price__button__round">
            <button
              onClick={onClickAddButtonPlus}
              className="deserts-card__price__button__round__b"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.84019 4.04001H5.96019V1.16001C5.96019 0.629852 5.53035 0.200012 5.00019 0.200012C4.47003 0.200012 4.04019 0.629852 4.04019 1.16001V4.04001H1.1602C0.630035 4.04001 0.200195 4.46985 0.200195 5.00001C0.200195 5.53017 0.630035 5.96001 1.1602 5.96001H4.04019V8.84001C4.04019 9.37017 4.47003 9.80001 5.00019 9.80001C5.53035 9.80001 5.96019 9.37017 5.96019 8.84001V5.96001H8.84019C9.37035 5.96001 9.80019 5.53017 9.80019 5.00001C9.80019 4.46985 9.37035 4.04001 8.84019 4.04001Z"
                  fill="#ffff"
                />
              </svg>
            </button>
          </div>
          {/* <span>Добавить</span> */}
          <div className="deserts-card__price__button__round">
            <i className="deserts-card__price__button__round__count">
              {desertCount <= 0 ? 0 : desertCount}
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}
