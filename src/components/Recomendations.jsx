import React from "react";

import RecomendationsList from "./RecomendationsList.json";
import DesertsCard from "../components/DesertsCard";

function Recomendations() {
  return (
    <div className="Recomendations">
      {RecomendationsList.map((obj) => (
        <DesertsCard key={obj.title} {...obj} />
      ))}
    </div>
  );
}

export default Recomendations;
