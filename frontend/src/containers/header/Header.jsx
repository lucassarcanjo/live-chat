import { Button } from "../../components/button";
import Logo from "../../assets/logo.svg";
import "./Header.scss";

const Header = () => (
  <header className="header">
    <div className="header__logo">
      <img src={Logo} alt="Logo" />
    </div>
    <Button label="Messages" className="header__button" />
    <Button
      label="Participants"
      className="header__button"
      variant="secondary"
    />
  </header>
);

export default Header;
