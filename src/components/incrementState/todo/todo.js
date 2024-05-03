import { Component } from "react";
import Button from "react-bootstrap/Button";


class Todo extends Component {
  constructor() {
    super();
    this.state = {
      items: ["Apple", "Banana"]
    }
}
    addingItems=()=>{
        const itms=[...this.state.items,"grapes"]
        this.setState({
            items:itms
        })
    }

    empty=()=>{
        const itms=[]
        this.setState({
            items:itms
        })
    }

    selectedDelete=(index)=>{
        const res =this.state.items.filter((v,i)=>{
            return i!==index
        })
        this.setState({
            items:res
        })
    }

    selectedUpdate=(index)=>{
        const newfruit=prompt("enter updated fruit")
        const upd=this.state.items.map((fruit,i)=>{
            if(index===i){
                return newfruit
            }
            else{
                return fruit
            }
        })
        this.setState({
            items:upd
        })
    }
  
  render() {
    return (
      <>
        <h1>Fruits</h1>
        <Button onClick={this.addingItems} variant="success">Add Items</Button>
        <Button onClick={this.empty} variant="danger">Clear Items</Button>
        {this.state.items.map((items,index) => {
          return (
            <>
              <h4>{index+1}.{items}</h4>
              <Button onClick={()=>this.selectedDelete(index)} variant="danger">Delete</Button>
              <Button onClick={()=>this.selectedUpdate(index)} variant="warning">Update</Button>
            </>
          );
        })}
      </>
    );
  }
}
export default Todo;
