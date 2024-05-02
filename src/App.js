import "./App.css";

import Mynav from "./components/Navbar/navbar";
import Data from "./components/dta/data";
import Foot from "./components/footer/footer";
import Car from "./components/Carousel/carousel";

function App() {
  return (
    <div>
      <Mynav />
      <Car/>
      

      <Data></Data>
      <Foot/>
    </div>
  );
}

export default App;
