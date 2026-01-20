import { BrowserRouter } from "react-router-dom";
import { Banner } from "./Banner/Banner";
import { Header } from "./Header/Header";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="wrapper">
          <Banner />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
