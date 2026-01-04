import { BrowserRouter } from "react-router-dom";
import { Banner } from "./Banner/Banner";
import { Header } from "./Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Banner />
      </div>
    </BrowserRouter>
  );
}

export default App;
