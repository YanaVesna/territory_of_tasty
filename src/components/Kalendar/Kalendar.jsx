import React, { useState } from "react";
import Calendar from "react-calendar";
/* import "react-calendar/dist/Calendar.css"; */
import competition from "./Competition.json";
import Link from "../../assets/img/link.png";
import CartKalendar from "./CartKalendar";
import Greenline from "../Greenline";

export default function Kalendar(props) {
  const [value, onChange] = useState(new Date());

  function newArray(i) {
    return competition.filter((el) => el.date === i.toLocaleDateString());
  }

  return (
    <div className="kalendar">
      <Greenline title="Events calendar" />
      <div className="kalendar__competition">
        <Calendar
          value={value}
          onChange={onChange}
          /* onClickDay={value.toLocaleDateString()} */
        />

        <div className="kalendar__competition__block">
          <div className="kalendar__competition__block__cart">
            {newArray(value).length !== 0 ? (
              newArray(value).map((obj) => (
                <CartKalendar key={obj.id} {...obj} />
              ))
            ) : (
              <div className="kalendar__competition__block__cart__empty">
                <p>
                  К сожалению, в эту дату ничего не запланировано. Выберайте
                  зеленые даты
                </p>
              </div>
            )}
          </div>
          <div className="kalendar__competition__block__link">
            <a href="@">
              <em>Все ближайшие события</em>
            </a>
            <img src={Link} alt="the next competitions" />
          </div>
        </div>
      </div>
    </div>
  );
}
