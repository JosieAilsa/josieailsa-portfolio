import { useState } from "react";
import hamburger from "../../assets/images/icons/hamburger.svg";
import logo from "../../assets/images/icons/jnlogo-02.svg";
import NavDraw from "../NavDraw/NavDraw";
import "./Nav.scss";

const Nav = () => {
  const [drawIsOpen, setDrawIsOpen] = useState(false);

  const handleClick = () => {
    drawIsOpen ? setDrawIsOpen(false) : setDrawIsOpen(true);
  };

  return (
      <header>
        <nav className="navbar">
          <img src={logo} className="navbar__logo" alt="logo" />
          <ul className="navbar__links">
            <li className="navbar__link"><a href="#home">home</a></li>
            <li className="navbar__link"><a href="#projects">projects</a></li>
            <li className="navbar__link"><a href="#skills">skills</a></li>
            <li className="navbar__link"><a href="#contact">contact</a></li>
          </ul>
          <img
            onClick={handleClick}
            src={hamburger}
            className="navbar__hamburger"
            alt="nav-menu"
          />
        </nav>
        {drawIsOpen && <NavDraw />}
      </header>
  );
};

export default Nav;
