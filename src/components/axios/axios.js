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

  // elec=()=>{
  //   this.setState({
  //     prods:this.state.dummy
  //   })
  //   const res = this.state.prods.filter((eachitem)=>{
  //     return eachitem.category==="electronics"
  //   })
  //   this.setState({
  //     prods:res
  //   })
  // }

  // jewel=()=>{
  //   this.setState({
  //     prods:this.state.dummy
  //   })
  //   const res= this.state.prods.filter((eachitem)=>{
  //     return eachitem.category==="jewelery"
  //   })
  //   this.setState({
  //     prods:res
  //   })
  // }

  // men=()=>{
  //   this.setState({
  //     prods:this.state.dummy
  //   })
  //   const res= this.state.prods.filter((eachitem)=>{
  //     return eachitem.category==="men's clothing"
  //   })
  //   this.setState({
  //     prods:res
  //   })
  // }

  // women=()=>{
  //   this.setState({
  //     prods:this.state.dummy
  //   })
  //   const res= this.state.prods.filter((eachitem)=>{
  //     return eachitem.category==="women's clothing"
  //   })
  //   this.setState({
  //     prods:res
  //   })
  // }

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
              <Button onClick={()=>this.category("electronics")} variant="secondary">
                Jewelery
              </Button>
              <Button onClick={()=>this.category("electronics")} variant="success">
                Men's clothing
              </Button>
              <Button onClick={()=>this.category("electronics")} variant="info">
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
