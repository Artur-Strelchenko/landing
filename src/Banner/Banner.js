import "./banner.css";

const bannerResponse = [
  {
    id: 1,
    title: "Get More Done with whitepace",
    subtitle:
      "Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks",
    imgRight: "../img/nature.jpg",
    bgBanner: "../img/bg-banner.png",
    buttonTitle: {
      login: { title: "Try Whitepace free", link: "/" },
      picture: "/img/Icon.png",
      showBanner: true,
    },
  },
];
export const Banner = () => {
  return (
    <div className="bannerSection">
      {bannerResponse.map((item) => {
        // if (!item.showBanner) return null;
        if (!item.buttonTitle.showBanner) return null;
        return (
          <div
            key={item.id}
            className="container-banner"
            style={{ backgroundImage: `url(${item.bgBanner})` }}
          >
            <div className="bannerLeft">
              <h1 className="bannerTitle">{item.title}</h1>
              <p className="bannerSubtitle">{item.subtitle}</p>
              <button className="bannerButton">
                {item.buttonTitle.login.title}
                {item.buttonTitle.picture && (
                  <img
                    src={item.buttonTitle.picture}
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
        );
      })}
    </div>
  );
};
