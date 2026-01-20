import { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const headerResponse = {
  headerLogo: { link: "/", picture: "../img/logo.png" },
  headerButtons: {
    login: { title: "Login", link: "/" },
    trial: { title: "Try Whitepace free", link: "/" },
  },
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
      messageCount: 123,
      id: 5,
    },
  ],
  headerLoginButton: { text: "Login" },
  headerTryWhitepacefreeButton: {
    text: "Try Whitepace free",
    picture: "../img/Icon.png",
  },
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
                <span className="link-text-container">
                  {item.title}{" "}
                  {item.messageCount > 0 && (
                    <span className="message-number">{item.messageCount}</span>
                  )}
                </span>
                <img src={item.picture} alt="vector" className="icon-arrow" />
              </Link>
            );
          })}
        </div>

        <div className="header-actions">
          <button className="header-button-yellow">
            {headerResponse.headerLoginButton.text}
          </button>
          <button className="header-button-blue">
            {headerResponse.headerTryWhitepacefreeButton.text}
            <img
              src={headerResponse.headerTryWhitepacefreeButton.picture}
              alt="arrow"
            />
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
          <a href={headerResponse.headerLogo.link}>
            <img src={headerResponse.headerLogo.picture} alt="logo" />
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
            {headerResponse.headerLink.map((item) => {
              if (!item.showLink) return null;

              return (
                <Link to={item.link} className="link">
                  <span className="link-text-container">
                    {item.title}{" "}
                    {item.messageCount > 0 && (
                      <span className="message-number">
                        {item.messageCount}
                      </span>
                    )}
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="mobile-menu-actions">
            <a
              href={headerResponse.headerButtons.login.link}
              className="header-button-yellow"
            >
              {headerResponse.headerButtons.login.title}
            </a>
            <a
              href={headerResponse.headerButtons.trial.link}
              className="header-button-blue"
            >
              {headerResponse.headerButtons.trial.title}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};
