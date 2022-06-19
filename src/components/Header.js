import logo from "../images/Logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="Место" />
    </header>
  );
};

export default Header;
