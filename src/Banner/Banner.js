import "./banner.css";

export const Banner = (props) => {
  const bannerResponse = props.data;
  const isNoColor = props.withoutColor;
  if (!bannerResponse) return null;

  return (
    <div className={`bannerSection ${isNoColor ? "no-color" : ""}`}>
      <div className="container-banner">
        {!isNoColor && (
          <div className="wrapperImg">
            <div
              style={{ backgroundImage: `url(${bannerResponse?.bgBanner})` }}
              className="wrapperPicture"
            />
          </div>
        )}
        {/* ФОН ДЛЯ КАРТИНОК  */}
        <div className="bannerLeft">
          <h1 className="bannerTitle">{bannerResponse.title}</h1>
          <p className="bannerSubtitle">{bannerResponse.subtitle}</p>
          <button className="bannerButton">
            {bannerResponse.buttonTitle.login.title}
            {bannerResponse.buttonTitle.picture && (
              <img
                src={bannerResponse.buttonTitle.picture}
                alt="arrow"
                className="buttonIcon"
              />
            )}
          </button>
        </div>
        <div className="bannerRight">
          <div className="imageBanner">
            <img src={"../img/nature.jpg"} alt="nature" />
          </div>
        </div>
      </div>
    </div>
  );
};
