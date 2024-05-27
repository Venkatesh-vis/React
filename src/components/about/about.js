import { useState } from "react"
import Navb from "../otherComponents/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { buyBookFunction } from "../../Redux/actions"


const About =()=>{
    // const[circles,setCircles]=useState([])

    // const Add = () => {
    //     setCircles(...circles,)
    // }

    const dispatch = useDispatch()

    const bookBuy = () => {
        dispatch(buyBookFunction())
    }


    const reduxState = useSelector((state)=> state)
    console.log(reduxState);

    return(

        
       

        <>
        <Navb/>
        {/* <Button onClick={Add}>Add Circle</Button> */}
        <button onClick={bookBuy}>Buy Book</button>
        <h1>Book count {reduxState.bookCount}</h1>
        
        </>
    )
}

export default About