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
            Rollen
          </Link>
          <Link to="#" className="header__presentation__buttons__links">
            Unternehmensgründung
          </Link>
          <Link to="#" className="header__presentation__buttons__links">
            Snacks
          </Link>
          <Link to="/deserts" className="header__presentation__buttons__links">
            Nachspeisen
          </Link>
          <Link to="#" className="header__presentation__buttons__links">
            Getränke
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
