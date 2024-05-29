import { useState } from "react"
import Navb from "../otherComponents/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { buyBookFunction } from "../../Redux/actions"
import { updateProfile } from "../../Redux/profile/action"


const About =()=>{
    // const[circles,setCircles]=useState([])

    // const Add = () => {
    //     setCircles(...circles,)
    // }

    const dispatch = useDispatch()

    const bookBuy = () => {
        dispatch(buyBookFunction())
    }

    const updateDetails = () => {
        dispatch(updateProfile({
           name:"venky",
            id:8688,
            mail:"venky@gmail.com",
            mobile:8745
        }))
    }


    const reduxState = useSelector((state)=> state)
    console.log(reduxState);

    return(

        
       

        <>
        <Navb/>
        {/* <Button onClick={Add}>Add Circle</Button> */}
        <button onClick={bookBuy}>Buy Book</button>
        <h1>Book count {reduxState.book.bookCount}</h1>
        <h3>{reduxState.profile.profile.name}</h3>
        <h3>{reduxState.profile.profile.id}</h3>
        <h3>{reduxState.profile.profile.mail}</h3>
        <h3>{reduxState.profile.profile.mobile}</h3>
        <button onClick={updateDetails}>update profile</button>
        </>
    )
}

export default About