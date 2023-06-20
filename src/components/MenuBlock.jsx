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
              <img src="https://i.ibb.co/9cxp3m8/menu-link.png" alt="menu" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://i.ibb.co/nDjXpxj/herz.png" alt="Herz" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://i.ibb.co/19tyDqw/basket.png" alt="Basket" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuBlock;
