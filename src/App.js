import "./App.css";
import Mynav from "./components/incrementState/Navbar/Navbar";
// import Todo from "./components/incrementState/todo/todo";
import Product from "./components/incrementState/Prod/Prod";




function App() {
  return (
    <div>
      <Mynav/>
     <Product/>     
     {/* <Todo/> */}
    </div>
  );
}

export default App;