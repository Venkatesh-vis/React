import axios from "axios";
import { Component } from "react";
import Prod from "../card/card";
import Button from "react-bootstrap/Button";

class Productt extends Component {
  constructor() {
    super();
    this.state = {
      pages: [],
      item:null
    };
  }

  data=async()   =>{
  const dta = await axios.get("https://fakestoreapi.com/products")
  this.setState({
    pages:dta.data
  })
  }

  componentDidMount(){
    this.data()
  }

  content=(id)=>{
    const xyz =this.state.pages.map((no)=>{
      if(id===no.id){
        return no
      }
      else{
        return no
      }
    })
    this.setState({
      item:xyz
    })
  }

 
   render() {
    return (
    <>
    <div>
      <h1>{this.item.title}</h1>
    </div>
      
     <>
     <div style={{
      display:"flex",
      justifyContent:"center",
      gap:"20px"
     }}>
      {
        this.state.pages.map((items)=>{
          return(
            <>
             <Button onClick={()=>this.content(items.id)} variant="success">{items.id}</Button>
            </>
          )
        })
      }
     </div>
     </>
     </>
    );
  }
}
export default Productt;
