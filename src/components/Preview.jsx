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
          <h1>Доставка свежей и горячей еды в течение 40 минут</h1>
        </div>
        <div className="TimeAdressTelefon">
          <div className="TimeAdressTelefon__about">
            <img src={Time} alt="time" />
            <p>Доставка с 10:00 до 19:00</p>
            <span>Время работы</span>
          </div>
          <div className="TimeAdressTelefon__about">
            <img src={Adress} alt="adress" />
            <p>ул. Горького, 126</p>
            <span>ближайшее кафе</span>
          </div>
          <div className="TimeAdressTelefon__about">
            <img src={Telefon} alt="time" />
            <p>8-800-100-20-20</p>
            <span>заказ по телефону</span>
          </div>
        </div>
        <div className="preview__order">
          <div className="preview__order__title">
            <h2>Business-lunch</h2>
            <p>order before 15:00</p>
          </div>
          <div className="preview__order__box">
            <div className="preview__order__text">
              <div className="preview__order__description">
                <b>For first:</b>
                <p>Cуп-лапша, борщ, солянка, сырный крем-суп с грибами</p>
                <div className="preview__order__description__linie"></div>
              </div>

              <div className="preview__order__description">
                <b>For second:</b>
                <p>
                  Свиная отбивная, паста с баклажанами, стйек из семги, курица
                  по-тайски, запечёный картофель, ризотто
                </p>
                <div className="preview__order__description__linie"></div>
              </div>
              <div className="preview__order__description">
                <b>Salats:</b>
                <p>Фунцоза, цезарь, весенний, ананасовый</p>
                <div className="preview__order__description__linie"></div>
              </div>
              <div className="preview__order__description">
                <b>Drinks:</b>
                <p>
                  Кофе, чай фруктовый, морс клюквенный, компот яблочно-вишневый
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
            <img src={Img1} alt="cake" />
            <h3>
              Family
              <br />
              holidays
            </h3>
          </div>
          <div className="preview__korporative__img">
            <img src={Img2} alt="cake" />
            <h3>Catering</h3>
          </div>
          <div className="preview__korporative__img">
            <img src={Img3} alt="cake" />
            <h3>
              Corporate
              <br />
              lunches
            </h3>
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
