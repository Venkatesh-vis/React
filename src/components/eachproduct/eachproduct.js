import { useEffect, useState } from "react"
import Navb from "../otherComponents/Navbar"
import { useParams } from "react-router-dom"
import axios from "axios"



const EachProd = ()=> {

    const {id}=useParams()

    console.log(id);

    const[eachprod,setEachprod]= useState({})

    useEffect(()=>{
        fetchProd()
    },[id])

    const fetchProd = async ()=> {
        const res = await axios.get(`https://dummyjson.com/products/${id}`)
        setEachprod(res.data)
        
    }
    console.log(eachprod);

    return(
        <>
        <Navb/>
        <>
        {
            (Object.keys(eachprod).length>0) ?

            <h1>{eachprod.title}</h1>
            :
            <h5>loading...</h5>
        }
        </>

        </>
    )
}

export default EachProd