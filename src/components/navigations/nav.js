import { BrowserRouter, Route, Routes } from "react-router-dom";
import Prods from "../home/home";
import About from "../about/about";
import Contact from "../Contact/contact";
import EachProd from "../eachproduct/eachproduct";
import Cart from "../Cart/cart";
import { createContext, useState } from "react";
import WrongPath from "../otherComponents/wrongpath";
import Emp from "../employees/employee";

export const user = createContext();

const Navs = () => {
  const [data, setData] = useState([]);

  const [empd, setemp] = useState([]);

  const addcarthandler = (eachproduct) => {
    setData([...data, eachproduct]);
  };

  const userHandler = (eachuser) => {
    setemp([...empd, eachuser]);
  };

  

  return (
    <>
      <user.Provider
        value={{
          data,
          addcarthandler,
          empd,
          userHandler,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Prods} />
            <Route path="/About" Component={About} />
            <Route path="/Contact" Component={Contact} />
            <Route path="/:Product/:id" Component={EachProd} />
            <Route path="/Cart" Component={Cart} />
            <Route path="/Employee" Component={Emp} />

            <Route path="*" Component={WrongPath} />
          </Routes>
        </BrowserRouter>
      </user.Provider>
    </>
  );
};
export default Navs;
