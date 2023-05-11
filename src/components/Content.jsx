/* import Foto from "../assets/img/salat.jpg"; */
import React from "react";
import Preview from "./Preview";
import MenuBlock from "./MenuBlock";
import Slider from "./Slider/Slider";
import Kalendar from "./Kalendar/Kalendar";
import Deserts from "./PopularDeserts/Deserts";
import Reviews from "./Reviews/Reviews";
import Contacts from "./Contacts";

function Content(props) {
  return (
    <div className="content__box">
      <MenuBlock />
      <Preview />
      <Slider />
      <Kalendar />
      <Deserts />
      <Reviews />
      <Contacts />
    </div>
  );
}

export default Content;
