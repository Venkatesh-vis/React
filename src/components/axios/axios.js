import axios from "axios";
import { Component } from "react";
import Prod from "../card/card";
import Button from "react-bootstrap/Button";
import Spin from "../spinner/spinner";

class Productt extends Component {
  constructor() {
    super();
    this.state = {
      prods: [],
      dummy:[]
    };
  }

  all = async () => {
    const dta = await axios("https://fakestoreapi.com/products");
    this.setState({
      prods: dta.data,
      dummy:dta.data
    });
  };

  category=(cate)=>{
    const res=this.state.dummy.filter((item)=>{
      return item.category===cate
    })
    this.setState({
      prods:res
    })
  }

  componentDidMount() {
    this.all()
  }

  render() {
    return (
      <>
        {this.state.prods.length > 0 ? (
          <>
            <div
              style={{
                display: "flex",
                gap: "20px",
                margin: "20px 0 20px 0",
                justifyContent: "center",
              }}
            >
              <Button onClick={this.all} variant="dark">
                All
              </Button>
              <Button onClick={()=>this.category("electronics")} variant="primary">
                Electronics
              </Button>
              <Button onClick={()=>this.category("jewelery")} variant="secondary">
                Jewelery
              </Button>
              <Button onClick={()=>this.category("men's clothing")} variant="success">
                Men's clothing
              </Button>
              <Button onClick={()=>this.category("women's clothing")} variant="info">
                Women's clothing
              </Button>
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
        ) : (
          <Spin />
        )}
      </>
    );
  }
}
export default Productt;
