import Logo from "./Logo";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__presentation">
        <Logo />
        <div className="header__presentation__buttons">
          <Link to="/WOK" className="header__presentation__buttons__links">
            Pizza
          </Link>
          <Link to="#" className="header__presentation__buttons__links">
            Roll
          </Link>
          <Link to="#" className="header__presentation__buttons__links">
            Bisness-lanch
          </Link>
          <Link to="#" className="header__presentation__buttons__links">
            Snacks
          </Link>
          <Link to="/deserts" className="header__presentation__buttons__links">
            Desserts
          </Link>
          <Link to="#" className="header__presentation__buttons__links">
            Drinks
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
