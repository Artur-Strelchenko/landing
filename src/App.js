import { BrowserRouter } from "react-router-dom";
import { Banner } from "./Banner/Banner";
import { Header } from "./Header/Header";
import "./index.css";

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

const bannerResponseProjectManagement = {
  id: 2,
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

const bannerResponseProjectWorkerTogether = {
  id: 3,
  title: "Work together",
  subtitle: `With whitepace, share your notes with your colleagues and collaborate on them.
You can also publish a note to the internet and share the URL with others.
`,
  imgRight: "../img/nature.jpg",
  bgBanner: "../img/bg-banner.png",
  buttonTitle: {
    login: { title: "Try it now", link: "/" },
    picture: "/img/Icon.png",
  },
};

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <BrowserRouter>
          <Header />
          <Banner data={bannerResponse} withoutPictureLine={false} />
          <Banner data={bannerResponseProjectManagement} withoutColor={true} />
          <Banner
            data={bannerResponseProjectWorkerTogether}
            reverseRow={true}
            withoutColor={true}
          />
          {/* СОЗДАЙ ТУТ ЕЩЕ БАНЕРА ПО АЛАЛОГИИ СВЕРХУ */}
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

{
  /* <Banner
            data={bannerResponse2}
            withoutColor={true}
            // data={bannerResponse2}
            // прочитай как праивльно применить пропсу что бы убрать цвет в втором банере, так как по дизайну его нету
            // withoutColor={true}
          /> */
}
{
  /* <WorkerTogether data={workerResponseData} withoutColor={true} /> */
}

// const workerResponseData = {
//   title: "Work",
//   titleAccent: "together",
//   subTitle:
//     "With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.",
//   img: "../img/nature.jpg",
//   buttonTitle: {
//     login: { title: "Try it now", link: "/" },
//     picture: "/img/Icon.png",
//   },
// };
