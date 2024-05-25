import { useContext } from "react";
import { user } from "../navigations/nav";
import Navb from "../otherComponents/Navbar";

const Cart = ()=> {

const{data}=useContext(user)
console.log(data);
   

    return(
        <>
        <Navb/>
        <h1>cart</h1>
        {
            data.map(details=>{
                return(
                    <>
                    
                    </>
                )
            })
        }

        </>
      
    )
}
export default Cart