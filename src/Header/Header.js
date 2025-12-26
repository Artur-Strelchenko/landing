import "./header.css";

export const Header = () => {
  return (
    <div className="container-header">
      <img src="../img/logo.png" alt="asd" />

      <div className="header-nav">
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

      <div>
        <button className="header-button-yellow">Login</button>
        <button>Try Whitepace free</button>
      </div>
    </div>
  );
};
