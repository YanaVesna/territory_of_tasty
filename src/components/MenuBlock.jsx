import Menu_link from "../assets/img/menu_link.png";
import Herz from "../assets/img/herz.png";
import Basket from "../assets/img/basket.png";

function MenuBlock() {
  return (
    <div className="menu__box">
      <div className="buttons">
        <ul>
          <li>
            <a href="#">
              <img src={Menu_link} alt="menu" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Herz} alt="Herz" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Basket} alt="Basket" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuBlock;
