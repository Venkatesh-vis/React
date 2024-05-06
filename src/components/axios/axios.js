import axios from "axios";
import { Component } from "react";
import Prod from "../card/card";
import Button from "react-bootstrap/Button";

class Productt extends Component {
  constructor() {
    super();
    this.state = {
      prods: [],
      dummyprods:[]
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const dta = await axios("https://fakestoreapi.com/products/category/jewelery");
    this.setState({
      prods: dta.data,
    });
  };


  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            gap: "20px",
            margin: "20px 0 20px 0",
            justifyContent: "center",
          }}
        >
          <Button variant="dark">All</Button>
          <Button variant="primary">Electronics</Button>
          <Button variant="secondary">Jewelery</Button>
          <Button variant="success">Men's clothing</Button>
          <Button variant="info">Women's clothing</Button>
        </div>
        <div id="par">
          {this.state.prods.map((eachitem) => {
            return (
              <>
                <Prod item={eachitem} />
              </>
            );
          })}
        </div>
      </>
    );
  }
}
export default Productt;
