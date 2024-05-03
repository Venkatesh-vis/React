import { Component } from "react";

class Increment extends Component {
  state = {
    item: "Samsung",
    img: "https://images.samsung.com/is/image/samsung/p6pim/in/2202/gallery/in-galaxy-a53-5g-a536-416923-sm-a536elbgins-thumb-531436248?$344_344_PNG$",
    itemcount: 0,
  };

  // state={
  //   products:[{},{}]
  // }
  Inccount = ()=>{
    this.setState({
        itemcount:this.state.itemcount+1
    })
  }
  Reset = ()=>{
    this.setState({
        itemcount:0
    })
  }
  Del = ()=>{
    this.setState({
        itemcount:this.state.itemcount-1
    })
  }
  render() {
    return (
      <div>
        <img src={this.state.img} alt="samsung" height={400} width={400} />
        <p>{this.state.item}</p>
        {this.state.itemcount > 0 && (
          <>
            <p>No. of items added:<b> {this.state.itemcount}</b></p>
            <button onClick={this.Del}>Delete</button>
          </>
         )} 
        <button onClick={this.Inccount}>Add to Cart</button>
       {this.state.itemcount>0 && (
        <>
        <button onClick={this.Reset}>Reset Cart</button>

        </>
       )
       }
      </div>
    );
  }
}
export default Increment;
