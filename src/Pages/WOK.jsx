import React from "react";

import Fillings from "../components/Fillings";
import Recomendations from "../components/Recomendations";

const WOK = (props) => {
  const bases = ["Udon", "Soba", "Funchose", "Rice"];
  const sauces = ["Teriyaki", "Tomato", "Cheesy", "Creamy"];

  const fillingsPrice = [
    {
      title: "Shrimp tiger",
      price: 5,
    },
    {
      title: "Beef",
      price: 6,
    },
    {
      title: "Pork",
      price: 3,
    },
    {
      title: "Chick",
      price: 4,
    },
    {
      title: "Salmon",
      price: 8,
    },
    {
      title: "Bacon",
      price: 2.5,
    },
  ];

  const toppinkePrice = [
    {
      title: "Cherry tomatoes",
      price: 2,
    },
    {
      title: "Cheese",
      price: 3,
    },
    {
      title: "Beans",
      price: 3,
    },
    {
      title: "Corn",
      price: 1.5,
    },
    {
      title: "Sesame",
      price: 0.5,
    },
    {
      title: "Pineapples",
      price: 3,
    },
    {
      title: "Champignon mushrooms",
      price: 8,
    },
    {
      title: "Shiitake mushrooms",
      price: 7,
    },
    {
      title: "Eggs",
      price: 4,
    },
    {
      title: "Onion",
      price: 1,
    },
    {
      title: "Bulgarian pepper",
      price: 2.5,
    },
  ];

  return (
    <div className="to-color-black">
      <div className="container">
        <div className="WOK">
          <h2>Collect your WOK</h2>
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
                  <span>Sauce</span>
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
                  <span>Filling:</span>
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
        <h3>Recommended for your order</h3>
        <Recomendations />
      </div>
    </div>
  );
};

export default WOK;
