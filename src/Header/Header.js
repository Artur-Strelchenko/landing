import { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const headerResponse = {
  headerLogo: { link: "/", picture: "../img/logo.png" },
  headerLink: [
    {
      title: "Products",
      link: "/products",
      picture: "../img/Vector.png",
      showLink: true,
      id: 1,
    },
    {
      title: "Solutions",
      link: "/solutions",
      picture: "../img/Vector.png",
      showLink: true,
      id: 2,
    },
    {
      title: "Resources",
      link: "/resources",
      picture: "../img/Vector.png",
      showLink: true,
      id: 3,
    },
    {
      title: "Pricing",
      link: "/pricing",
      picture: "../img/Vector.png",
      showLink: true,
      id: 4,
    },
    {
      title: "Message",
      link: "message",
      picture: "../img/Vector.png",
      showLink: true,
      messageCount: 200,
      id: 5,
    },
  ],
};

export const Header = () => {
  const [openBurgerMenu, setBurgerMenu] = useState(false);

  return (
    <>
      <div className="container-header">
        <a href={headerResponse.headerLogo.link}>
          <img src={headerResponse.headerLogo.picture} alt="logo" />
        </a>

        <div className="header-nav">
          {headerResponse.headerLink.map((item) => {
            if (!item.showLink) return null;

            return (
              <Link to={item.link} key={item.id} className="link">
                {item.title} {item.messageCount && `|${item.messageCount}|`}
                <img src={item.picture} alt="vector" className="icon-arrow" />
              </Link>
            );
          })}
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
        <div className="mobile-logo">
          <a href="/">
            <img src="../img/logo.png" alt="logo" />
          </a>
        </div>

        <div
          className="close-burger-menu"
          onClick={() => {
            setBurgerMenu(false);
          }}
        >
          <img src="../img/humen.png" alt="X" className="close-icon" />
        </div>

        <nav className="burger-open-menu">
          <div className="link-burger">
            <a href="/" className="link">
              Products
            </a>
            <a href="/" className="link">
              Solutions
            </a>
            <a href="/" className="link">
              Resources
            </a>
            <a href="/" className="link">
              Pricing
            </a>
          </div>
          <div className="mobile-menu-actions">
            <button className="header-button-yellow">Login</button>
            <button className="header-button-blue">Try Whitepace free</button>
          </div>
        </nav>
      </div>
    </>
  );
};
