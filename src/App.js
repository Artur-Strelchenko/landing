import { BrowserRouter } from "react-router-dom";
import { Banner } from "./Banner/Banner";
import { Header } from "./Header/Header";
import "./index.css";
import { WorkerTogether } from "./WorkerTogether/WorkerTogether";

const bannerResponse = {
  id: 1,
  title: "Get More Done with whitepace",
  subtitle:
    "Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks",
  imgRight: "../img/nature.jpg",
  bgBanner: "../img/bg-banner.png",
  buttonTitle: {
    login: { title: "Try Whitepace free", link: "/" },
    picture: "/img/Icon.png",
  },
};

const bannerResponse2 = {
  id: 1,
  title: "Project Management",
  subtitle:
    "Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.",
  imgRight: "../img/nature.jpg",
  bgBanner: "../img/bg-banner.png",
  buttonTitle: {
    login: { title: "Get Started", link: "/" },
    picture: "/img/Icon.png",
  },
};

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <BrowserRouter>
          <Header />
          <Banner data={bannerResponse} />
          <Banner
          // data={bannerResponse2}
          // прочитай как праивльно применить пропсу что бы убрать цвет в втором банере, так как по дизайну его нету
          // withoutColor={true}
          />
          <WorkerTogether />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
