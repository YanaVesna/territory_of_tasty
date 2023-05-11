import React from "react";

import Greenline from "../Greenline";
import Portret1 from "../../assets/img/Portret1.png";
import Portret2 from "../../assets/img/Portret2.png";
import Portret3 from "../../assets/img/Portret3.png";
import DesertsCard from "../DesertsCard";
import DesertsList from "./DesertsList.json";

export default function Deserts() {
  return (
    <div className="deserts">
      <div className="container">
        <div className="deserts__best-cookes">
          <div className="deserts__best-cookes__cooks">
            <Greenline title="The best chefs of this month" />
            <div className="deserts__best-cookes__cooks__img">
              <div className="deserts__best-cookes__cooks__img__foto">
                <img src={Portret1} alt="cookes" />
                <div className="deserts__best-cookes__cooks__img__foto__title">
                  <span>Григорий Ковалёв</span>
                  <p>Шеф холодного цеха</p>
                </div>
              </div>
              <div className="deserts__best-cookes__cooks__img__foto">
                <img src={Portret2} alt="cookes" />
                <div className="deserts__best-cookes__cooks__img__foto__title">
                  <span>Григорий Ковалёв</span>
                  <p>Шеф холодного цеха</p>
                </div>
              </div>
              <div className="deserts__best-cookes__cooks__img__foto">
                <img src={Portret3} alt="cookes" />
                <div className="deserts__best-cookes__cooks__img__foto__title">
                  <div className="Alegrea18">Григорий Ковалёв</div>
                  <p>Шеф холодного цеха</p>
                </div>
              </div>
            </div>
          </div>
          <Greenline title="Popular deserts" />
          <div className="deserts__best-cookes__desertlist">
            {DesertsList.map((obj) => (
              <DesertsCard key={obj.title} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
