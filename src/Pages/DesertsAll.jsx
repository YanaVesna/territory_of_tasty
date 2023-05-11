import React from "react";
import Deserts from "./Deserts.json";
import DesertsCard from "../components/DesertsCard";
import Greenline from "../components/Greenline";
import MenuBlock from "../components/MenuBlock";

const DesertsAll = () => {
  return (
    <div className="to-color-black">
      <MenuBlock />
      <div className="container">
        <div className="deserts-all">
          <div className="deserts-all__menu">
            <Greenline title="Лучшие повара этого месяца" />
          </div>
          <div className="deserts-all__in">
            {Deserts.map((obj) => (
              <DesertsCard key={obj.title} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DesertsAll;
