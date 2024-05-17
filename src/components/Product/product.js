import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
// import { EachProduct } from "./eachProduct";

const Prod = () => {
  const [items, setItems] = useState([]);
  const [id, setId]=useState(0)
  const [item, setItem] = useState({});

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    fetchitem();
  }, [id]);

  const fetchitem = async () => {
    const itm = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setItem(itm.data);
   
    console.log("component did update")
  };

  const fetchdata = async () => {
    const dta = await axios.get(`https://fakestoreapi.com/products`);
    setItems(dta.data);
    console.log("component did mount")
  };

// console.log(item)
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {
        items.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <Button variant="warning" onClick={()=>setId(item.id)}>
                {item.id}
              </Button>
            </React.Fragment>
          );
        })
        }
      </div>

{/* <EachProduct ids={id}/> */}
      <p>{item.title}</p>
    </>
  );
};

export default Prod;
