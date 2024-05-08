import { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

class Carr extends Component {
  state = {
    imgs: [
      "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    ],
  };

  add = () => {
    this.setState({
      imgs: [
        ...this.state.imgs,
        "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      ],
    });
  };
  render() {
     
    return (
      <>
        <>
        <Carousel data-bs-theme="dark">
      {this.state.imgs.map((imgz)=>{
        return(
            <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgz}
          alt="First slide"
          height={550}
        />
      </Carousel.Item>
        )
      })}
    </Carousel>
        </>
        <div style={{textAlign:"center", marginTop:"50px"}}>
        <button onClick={this.add}>Add image</button>
        </div>
      </>
    );
  }
}

export default Carr;
