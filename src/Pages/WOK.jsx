import React from "react";

import Fillings from "../components/Fillings";
import Recomendations from "../components/Recomendations";

const WOK = (props) => {
  const bases = ["Udon", "Soba", "Funchose", "Rice"];
  const sauces = ["Teriyaki", "Tomato", "Cheesy", "Creamy"];

  const fillingsPrice = [
    {
      title: "Garnelentiger",
      price: 5,
    },
    {
      title: "Rindfleisch",
      price: 6,
    },
    {
      title: "Schweinefleisch",
      price: 3,
    },
    {
      title: "Küken",
      price: 4,
    },
    {
      title: "Lachs",
      price: 8,
    },
    {
      title: "Speck",
      price: 2.5,
    },
  ];

  const toppinkePrice = [
    {
      title: "Kirschtomaten",
      price: 2,
    },
    {
      title: "Käse",
      price: 3,
    },
    {
      title: "Bohnen",
      price: 3,
    },
    {
      title: "Mais",
      price: 1.5,
    },
    {
      title: "Sesam",
      price: 0.5,
    },
    {
      title: "Ananas",
      price: 3,
    },
    {
      title: "Champignons",
      price: 8,
    },
    {
      title: "Shiitake Pilze",
      price: 7,
    },
    {
      title: "Eier",
      price: 4,
    },
    {
      title: "Zwiebel",
      price: 1,
    },
    {
      title: "Bulgarischer Pfeffer",
      price: 2.5,
    },
  ];

  return (
    <div className="to-color-black">
      <div className="container">
        <div className="WOK">
          <h2>Sammeln Sie Ihre WOK</h2>
          <div className="WOK__collect">
            <div className="WOK__collect__images">
              <div className="WOK__collect__images__pfan">
                <img src="/foto/pfan.jpg" alt="pfan" />
              </div>
              <div className="WOK__collect__images__base">
                <span>Base</span>
                <div className="WOK__collect__images__base__bases">
                  {bases.map((obj, index) => {
                    return (
                      <div className="WOK__collect__images__base__bases__img">
                        <img
                          width={75}
                          height={75}
                          src={
                            process.env.PUBLIC_URL +
                            `/foto/base${index + 1}.jpg`
                          }
                          alt="food"
                        />
                        <p>{obj}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="WOK__collect__images__sauce">
                  <span>Soße</span>
                  <div className="WOK__collect__images__sauce__sauces">
                    {sauces.map((obj, index) => {
                      return (
                        <div className="WOK__collect__images__sauce__sauces__img">
                          <img
                            width={75}
                            height={75}
                            src={
                              process.env.PUBLIC_URL +
                              `/foto/sauce${index + 1}.jpg`
                            }
                            alt="food"
                          />
                          <p>{obj}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="WOK__collect__filling">
              <div className="WOK__collect__filling__left">
                <div className="WOK__collect__filling__left__list">
                  <span>Füllung:</span>
                  {fillingsPrice.map((obj) => (
                    <Fillings key={obj.title} {...obj} />
                  ))}
                </div>
                <div className="WOK__collect__filling__left__list">
                  <span>Toppinke:</span>
                  {toppinkePrice.map((obj) => (
                    <Fillings key={obj.title} {...obj} />
                  ))}
                </div>
              </div>

              <div className="WOK__collect__filling__right"></div>
            </div>
          </div>
          <div className="WOK__result"></div>
        </div>
        <h3>Empfohlen für Ihre Bestellung</h3>
        <Recomendations />
      </div>
    </div>
  );
};

export default WOK;
