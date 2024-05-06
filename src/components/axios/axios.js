import axios from "axios";
import { Component } from "react";
import Prod from "../card/card";

class Productt extends Component {
  constructor() {
    super();
    this.state = {
      prods: [],
    };
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const dta = await axios("https://fakestoreapi.com/products");
    this.setState({
        prods:dta.data
    })
    
  };

  render() {
    return (
      <div id="par">
        {this.state.prods.map((eachitem) => {
          return <>
          <Prod item={eachitem}/>
          </>;
        })}
      </div>
    );
  }
}
export default Productt;
