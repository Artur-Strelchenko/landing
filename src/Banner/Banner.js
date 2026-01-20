import "./banner.css";
const bannerResponse = {
  title: "Get More Done with whitepace",
  subtitle:
    "Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks",
  imgRight: "../img/nature.jpg",
  bgBanner: "../img/bg-banner.png",
};
export const Banner = () => {
  console.log(bannerResponse);
  return <div className="container-banner">Banner</div>;
};
