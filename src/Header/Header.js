import "./header.css";

export const Header = () => {
  return (
    <div className="container-header">
      <img src="../img/logo.png" alt="asd" />

      <div className="header-nav">
        <a href="/" className="link">
          Products
          <img src="../img/Vector.png" alt= "asd" />
        </a>
        <a href="/" className="link">
          Solutions
          <img src="../img/Vector.png" alt= "asd" />
        </a>
        <a href="/" className="link">
          Resources
          <img src="../img/Vector.png" alt= "asd" />
        </a>
        <a href="/" className="link">
          Pricing
          <img src="../img/Vector.png" alt= "asd" />
        </a>
      </div>

      <div className="header-actions">
        <button className="header-button-yellow">Login</button> 
        <button className="header-button-blue">
          Try Whitepace free
          <img src="../img/Icon.png" alt="asd"/>
          </button>
      </div>
    </div>
  );
};
