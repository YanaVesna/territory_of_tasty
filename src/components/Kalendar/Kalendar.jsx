import React, { useState } from "react";
import Calendar from "react-calendar";
/* import "react-calendar/dist/Calendar.css"; */
import competition from "./Competition.json";
import Link from "../../assets/img/link.png";
import CartKalendar from "./CartKalendar";
import Greenline from "../Greenline";

export default function Kalendar(props) {
  const [value, onChange] = useState(new Date());
  let [state, setState] = useState(false);

  return (
    <div className="kalendar">
      <Greenline title="Events calendar" />
      <div className="kalendar__competition">
        <Calendar
          value={value}
          onChange={onChange}
          onClickDay={() => {
            let newDate = value.toLocaleDateString();
          }}
        />
        <div className="kalendar__competition__block">
          <div className="kalendar__competition__block__cart">
            {competition.map((obj) => (
              <CartKalendar key={obj.id} {...obj} />
            ))}
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
