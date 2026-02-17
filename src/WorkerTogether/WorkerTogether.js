import "./workerTogether.css";
const workerResponse = {
  title: "Work together",
  subTitle:
    "With whitepace, share your notes with your colleagues and collaborate on them.You can also publish a note to the internet and share the URL with others.",
  img: "СКАЧАЙ КАРТИНКУ",
  buttonTitle: {
    login: { title: "Try it now", link: "/" },
    picture: "/img/Icon.png",
  },
};
export const WorkerTogether = () => {
  return (
    <div className="worker">
      ;<h1>{workerResponse.title}</h1>
      <p>{workerResponse.subTitle}</p>
      {/* Тут має бути решта верстки, схожа на Banner */}
    </div>
  );
};
