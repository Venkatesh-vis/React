import { useContext } from "react"
import Navb from "../otherComponents/Navbar"
import { user } from "../navigations/nav";




const Emp = ()=> {

    const {empd}=useContext(user)
    console.log(empd);

    return(
        <>
        <Navb/>
        {

        }
        </>
    )
}

export default Emp