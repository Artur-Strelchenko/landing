import { useState } from "react";
import "./header.css";

export const Header = () => {
  const [openBurgerMenu, setBurgerMenu] = useState(false);

  return (
    <>
      <div className="container-header">
        <a href="/">
          <img src="../img/logo.png" alt="logo" />
        </a>

        <div className="header-nav">
          <a href="/" className="link">
            Products
            <img src="../img/Vector.png" alt="vector" className="icon-arrow" />
          </a>
          <a href="/" className="link">
            Solutions
            <img src="../img/Vector.png" alt="vector" className="icon-arrow" />
          </a>
          <a href="/" className="link">
            Resources
            <img src="../img/Vector.png" alt="vector" className="icon-arrow" />
          </a>
          <a href="/" className="link">
            Pricing
            <img src="../img/Vector.png" alt="vector" className="icon-arrow" />
          </a>
        </div>

        <div className="header-actions">
          <button className="header-button-yellow">Login</button>
          <button className="header-button-blue">
            Try Whitepace free
            <img src="../img/Icon.png" alt="arrow" />
          </button>
        </div>
        <div
          className="burger-menu"
          onClick={() => {
            setBurgerMenu(true);
          }}
        >
          <img src="../img/Hum-menu.png" alt="=" />
        </div>
      </div>
      <div
        className={`burger-menu-mobile ${
          openBurgerMenu ? "burger-open" : "burger-close"
        }`}
      >
        <div
          className="close-burger-menu"
          onClick={() => {
            setBurgerMenu(false);
          }}
        >
          X{/* МОЖЕШЬ ДОБАВИТЬ КАРТИНКУ */}
        </div>
        <div>{/* ПЕРЕНЕСИ КОНТЕНТ ИЗ КОМПА (КНОПКИ И СЫЛКИ) */}</div>
      </div>
    </>
  );
};
