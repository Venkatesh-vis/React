import axios from "axios";
import { useEffect, useState } from "react";
import Cardd from "./card";
import Navb from "../Navbar";

const Prods = () => {
  const [items, updateItems] = useState([]);

  useEffect(() => {
    data();
  }, []);

  const data = async () => {
    const dta = await axios.get("https://dummyjson.com/products");
    updateItems(dta.data.products);
  };
  console.log(items);

  return (
    <>
      <Navb />
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {items.map((eachProduct) => {
          return (
            <>
              <Cardd item={eachProduct} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Prods;
