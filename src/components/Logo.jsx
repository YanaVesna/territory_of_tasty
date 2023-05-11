import LogoImg from "../assets/img/Logo.svg";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <div className="header__presentation__svg">
        <div className="header__presentation__svg__img">
          <img width={31} height={30} src={LogoImg} alt="Logo" />
        </div>
        <div className="header__presentation__title">
          <p>TERRITIRY OF TESTE</p>
        </div>
      </div>
    </Link>
  );
}

export default Logo;
