import Time from "../assets/img/ic_watch_later.png";
import Adress from "../assets/img/ic_near_me.png";
import Telefon from "../assets/img/ic_call.png";
import Img1 from "../assets/img/img1.png";
import Img2 from "../assets/img/img2.png";
import Img3 from "../assets/img/img3.png";
import Lanch from "../assets/img/lanch.png";
import ButtonOrder from "./Buttons/ButtonOrder";

function Preview() {
  return (
    <div className="preview">
      <div className="container">
        <div className="preview__title">
          <h1>
            Lieferung von frischen und warmen Speisen innerhalb von 40 Minuten
          </h1>
        </div>
        <div className="TimeAdressTelefon">
          <div className="TimeAdressTelefon__about">
            <img src={Time} alt="time" />
            <p>Lieferung von 10:00 bis 19:00 Uhr</p>
            <span>Arbeitszeit</span>
          </div>
          <div className="TimeAdressTelefon__about">
            <img src={Adress} alt="adress" />
            <p>st. Gorki, 126</p>
            <span>nächstgelegenes Café</span>
          </div>
          <div className="TimeAdressTelefon__about">
            <img src={Telefon} alt="time" />
            <p>+49 15-100-20-20</p>
            <span>telefonisch bestellen</span>
          </div>
        </div>
        <div className="preview__order">
          <div className="preview__order__title">
            <h2>Geschäftsessen</h2>
            <p>Bestellung vor 15:00 Uhr</p>
          </div>
          <div className="preview__order__box">
            <div className="preview__order__text">
              <div className="preview__order__description">
                <b>Zuerst:</b>
                <p>Sup-Lapsa, Borsch, Soljanka, süße Creme-Sup mit Gribami</p>
                <div className="preview__order__description__linie"></div>
              </div>

              <div className="preview__order__description">
                <b>zum zweiten</b>
                <p>
                  Schweinekotelett, Auberginennudeln, Lachssteak, Thai-Hähnchen,
                  Ofenkartoffeln, Risotto
                </p>
                <div className="preview__order__description__linie"></div>
              </div>
              <div className="preview__order__description">
                <b>Salata:</b>
                <p>Funcosa, Caesar, Frühling, Ananas</p>
                <div className="preview__order__description__linie"></div>
              </div>
              <div className="preview__order__description">
                <b>Getränke:</b>
                <p>
                  Kaffee, Kaffee, alkoholfreie Getränke, gemischtes Obst und
                  Gemüse
                </p>
                <div className="preview__order__description__linie"></div>
              </div>
            </div>
            <div className="preview__order__img">
              <img src={Lanch} alt="lanch" />
            </div>
          </div>
          <div className="preview__order__button">
            <ButtonOrder />
          </div>
        </div>
        <div className="preview__korporative">
          <div className="preview__korporative__img">
            <img src="https://i.ibb.co/QdS0TPt/img1.png" alt="cake" />
            <h3>Familienurlaub</h3>
          </div>
          <div className="preview__korporative__img">
            <img src="https://i.ibb.co/FV0sg8X/img2.png" alt="cake" />
            <h3>Gastronomie</h3>
          </div>
          <div className="preview__korporative__img">
            <img src="https://i.ibb.co/W6JFt64/img3.png" alt="cake" />
            <h3>Firmenessen</h3>
          </div>
        </div>
        {/* <div className="preview__food">
        <img width={1440} height={554} src={Food} alt="food" />
      </div> */}
      </div>
      {/* <img width={1440} height={554} src={Food} alt="food" /> */}
    </div>
  );
}

export default Preview;
