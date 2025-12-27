import "./header.css";

export const Header = () => {
  return (
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
        <div className="burger-menu">=</div>
      </div>
    </div>
  );
};
