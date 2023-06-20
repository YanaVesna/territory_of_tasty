import React from "react";

import Greenline from "../Greenline";

import DesertsCard from "../DesertsCard";
import DesertsList from "./DesertsList.json";

export default function Deserts() {
  return (
    <div className="deserts">
      <div className="container">
        <div className="deserts__best-cookes">
          <div className="deserts__best-cookes__cooks">
            <Greenline title="Die besten Köche dieses Monats" />
            <div className="deserts__best-cookes__cooks__img">
              <div className="deserts__best-cookes__cooks__img__foto">
                <img src="https://i.ibb.co/gW0vVrQ/Portret1.png" alt="cookes" />
                <div className="deserts__best-cookes__cooks__img__foto__title">
                  <span>Carsten Bodecker</span>
                  <p>Kühlhausleiter</p>
                </div>
              </div>
              <div className="deserts__best-cookes__cooks__img__foto">
                <img src="https://i.ibb.co/XFCx3dK/Portret2.png" alt="cookes" />
                <div className="deserts__best-cookes__cooks__img__foto__title">
                  <span>Carsten Bodecker</span>
                  <p>Kühlhausleiter</p>
                </div>
              </div>
              <div className="deserts__best-cookes__cooks__img__foto">
                <img src="https://i.ibb.co/6nBcndg/Portret3.png" alt="cookes" />
                <div className="deserts__best-cookes__cooks__img__foto__title">
                  <div className="Alegrea18">Carsten Bodecker</div>
                  <p>Kühlhausleiter</p>
                </div>
              </div>
            </div>
          </div>
          <Greenline title="Beliebte Desserts" />
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
