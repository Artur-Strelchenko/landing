import "./workerTogether.css";
const workerResponse = {
  title: "Project",
  titleAccent: "Management",
  subTitle:
    "With whitepace, share your notes with your coImages, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a notelleagues and collaborate on them.You can also publish a note to the internet and share the URL with others.",
  img: "СКАЧАЙ КАРТИНКУ",
  buttonTitle: {
    login: { title: "Try it now", link: "/" },
    picture: "/img/Icon.png",
  },
};
export const WorkerTogether = () => {
  return (
    <div className="projectSection">
      <div className="container-worker">
        <div className="workerLeft">
          <h1 className="workerTitle">
            {workerResponse.title}{" "}
            <span>
              {workerResponse.titleAccent}
              <div className="underline">
                <img src={"../img/line.png"} alt="_____" />
              </div>
            </span>
          </h1>

          <p className="workerSubtitle">{workerResponse.subTitle}</p>

          <button className="bannerButton">
            {workerResponse.buttonTitle.login.title}
            {workerResponse.buttonTitle.picture && (
              <img
                src={workerResponse.buttonTitle.picture}
                alt="arrow"
                className="buttonIcon"
              />
            )}
          </button>
        </div>

        <div className="workerImgRight">
          <img src="../img/project.png" alt="project" />
        </div>
      </div>
    </div>
  );
};
