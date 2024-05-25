import { createContext, useContext, useEffect, useState } from "react";
import Navb from "../otherComponents/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { user } from "../navigations/nav";


export const CartProd = createContext()

//component starts here
const EachProd = () => {
  const { id } = useParams();

  const {addcarthandler}=useContext(user)



  // console.log(id);

  const [eachprod, setEachprod] = useState({});
  const[cart,updatecart]=useState([])

  const { title, description, price, brand, category, thumbnail } = eachprod;

  useEffect(() => {
    fetchProd();
  }, [id]);

  const fetchProd = async () => {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    setEachprod(res.data);
  };
  // console.log(eachprod);


 

 

  return (
    
     
      <CartProd.Provider value={{cart}}>
      <>
      <Navb />
        {Object.keys(eachprod).length > 0 ? (
          <Card className="text-center">
            <Card.Body>
              <Card.Img
                variant="top"
                src={thumbnail}
                height={550}
                width={250}
              />

              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Text><b>Brand: </b>{brand}</Card.Text>
              <Card.Text><b>Category: </b>{category}</Card.Text>
              <Card.Text><b>Price: </b>${price}</Card.Text>
              <Button onClick={()=>addcarthandler(eachprod)} variant="outline-success">Add to Cart</Button>
            </Card.Body>
          </Card>
        ) : (
          <Spinner
            style={{
              height: "70px",
              width: "70px",
              margin: "250px 0px 0px 700px",
            }}
            animation="grow"
            variant="success"
          />
        )}
      </>
      </CartProd.Provider>
  
  );
};

export default EachProd;
